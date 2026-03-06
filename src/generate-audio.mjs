/**
 * VSL Audio Generator
 *
 * Generates TTS audio for all slides using node-edge-tts.
 *
 * IMPORTANT: node-edge-tts escapes XML, so <break> SSML tags do NOT work natively.
 * Instead we: split text on <break> tags → TTS each speech segment → generate
 * true silence with ffmpeg → concatenate per slide.
 *
 * Usage: node src/generate-audio.mjs [project-dir]
 *   Default project-dir: projects/wealth-series
 *
 * Expects a slides-text.mjs in the project directory exporting a SLIDES array.
 */

import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import { normalizeForTTS } from './normalize-text.mjs';
import { generateSilence } from './utils/silence.mjs';
import defaults from '../config/defaults.json' with { type: 'json' };

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const require = createRequire('/tmp/');
const { EdgeTTS } = require('node-edge-tts');

// ─── Config ───
const FFMPEG = path.resolve('node_modules/ffmpeg-static/ffmpeg');
const FFMPEG_FALLBACK = '/tmp/node_modules/ffmpeg-static/ffmpeg';
const ffmpegPath = fs.existsSync(FFMPEG) ? FFMPEG : FFMPEG_FALLBACK;

const VOICE = defaults.voice;
const RATE = defaults.rate;
const PITCH = defaults.pitch;

// ─── Resolve project ───
const projectArg = process.argv[2] || 'projects/wealth-series';
const PROJECT_DIR = path.resolve(ROOT, projectArg);
const AUDIO_DIR = path.join(PROJECT_DIR, 'audio');
const TMP_DIR = path.join(AUDIO_DIR, '_tmp');

fs.mkdirSync(AUDIO_DIR, { recursive: true });
fs.mkdirSync(TMP_DIR, { recursive: true });

// ─── Load slides ───
const slidesPath = path.join(PROJECT_DIR, 'slides-text.mjs');
const { SLIDES } = await import(slidesPath);

// ─── Utility: concatenate MP3 files with ffmpeg ───
function concatFiles(files, outPath) {
  const listPath = outPath + '.list';
  const listContent = files.map(f => `file '${f}'`).join('\n');
  fs.writeFileSync(listPath, listContent);
  execFileSync(ffmpegPath, [
    '-y', '-f', 'concat', '-safe', '0', '-i', listPath,
    '-c', 'copy', outPath
  ], { stdio: 'pipe' });
  fs.unlinkSync(listPath);
}

// ─── Parse text into speech segments and silence breaks ───
function parseBreaks(text) {
  const parts = [];
  const regex = /<break time="(\d+)ms"\/>/g;
  let lastIdx = 0;
  let m;
  while ((m = regex.exec(text)) !== null) {
    const before = text.slice(lastIdx, m.index).trim();
    if (before) parts.push({ type: 'speech', text: before });
    parts.push({ type: 'silence', ms: parseInt(m[1]) });
    lastIdx = m.index + m[0].length;
  }
  const after = text.slice(lastIdx).trim();
  if (after) parts.push({ type: 'speech', text: after });
  return parts;
}

// ─── Generate one TTS speech segment ───
async function ttsSegment(text, outPath) {
  const tts = new EdgeTTS({
    voice: VOICE, lang: 'en-US',
    rate: RATE, pitch: PITCH,
    saveSubtitles: true, timeout: defaults.ttsTimeout
  });
  await tts.ttsPromise(text, outPath);
}

// ─── Generate audio for one slide ───
async function generateSlide(slideNum, text, silenceSec) {
  const outFile = path.join(AUDIO_DIR, `slide-${String(slideNum).padStart(2, '0')}.mp3`);

  if (text === null) {
    generateSilence(silenceSec * 1000, outFile, ffmpegPath);
    console.log(`  [OK] slide ${slideNum}: silence (${silenceSec}s)`);
    return outFile;
  }

  // Normalize text: numbers→words, symbols→words
  const normalized = normalizeForTTS(text);

  const parts = parseBreaks(normalized);

  if (parts.length === 1 && parts[0].type === 'speech') {
    await ttsSegment(parts[0].text, outFile);
    const size = fs.statSync(outFile).size;
    console.log(`  [OK] slide ${slideNum}: ${(size/1024).toFixed(1)}KB (1 segment)`);
    return outFile;
  }

  // Multiple segments — generate each, then concat
  const segFiles = [];
  let segIdx = 0;

  for (const part of parts) {
    const segFile = path.join(TMP_DIR, `s${slideNum}_seg${segIdx}.mp3`);
    if (part.type === 'speech') {
      await ttsSegment(part.text, segFile);
    } else {
      generateSilence(part.ms, segFile, ffmpegPath);
    }
    segFiles.push(segFile);
    segIdx++;
  }

  concatFiles(segFiles, outFile);

  // Clean up temp files
  for (const f of segFiles) {
    if (fs.existsSync(f)) fs.unlinkSync(f);
    const jsonF = f + '.json';
    if (fs.existsSync(jsonF)) fs.unlinkSync(jsonF);
  }

  const size = fs.statSync(outFile).size;
  console.log(`  [OK] slide ${slideNum}: ${(size/1024).toFixed(1)}KB (${segFiles.length} segments)`);
  return outFile;
}

// ─── Main ───
async function main() {
  console.log('═══════════════════════════════════════════');
  console.log('  TradeAlgo VSL — Audio Generator');
  console.log(`  Voice: ${VOICE} | Rate: ${RATE} | Pitch: ${PITCH}`);
  console.log(`  Project: ${PROJECT_DIR}`);
  console.log(`  Slides: ${SLIDES.length}`);
  console.log(`  Text normalization: ON`);
  console.log('═══════════════════════════════════════════\n');

  // Clear old files
  for (const f of fs.readdirSync(AUDIO_DIR)) {
    if (f.startsWith('slide-') || f === 'voiceover-complete.mp3' || f === 'manifest.json') {
      fs.unlinkSync(path.join(AUDIO_DIR, f));
    }
  }

  const results = [];
  let failures = 0;

  for (const [slideNum, text, silenceSec] of SLIDES) {
    process.stdout.write(`Slide ${String(slideNum).padStart(2)}/${SLIDES.length}: `);

    try {
      const file = await generateSlide(slideNum, text, silenceSec);
      results.push({ slideNum, file, ok: true });
    } catch (err) {
      console.error(`  [FAIL] ${err.message}`);
      await new Promise(r => setTimeout(r, 2000));
      try {
        process.stdout.write(`  [RETRY] slide ${slideNum}: `);
        const file = await generateSlide(slideNum, text, silenceSec);
        results.push({ slideNum, file, ok: true });
      } catch (err2) {
        console.error(`  [FAIL x2] slide ${slideNum}: ${err2.message}`);
        results.push({ slideNum, file: null, ok: false });
        failures++;
      }
    }

    await new Promise(r => setTimeout(r, defaults.rateLimitMs));
  }

  // ─── Concatenate all slide MP3s ───
  console.log('\nConcatenating audio...\n');

  results.sort((a, b) => a.slideNum - b.slideNum);
  const outputPath = path.join(AUDIO_DIR, 'voiceover-complete.mp3');
  const validFiles = results.filter(r => r.ok && r.file).map(r => r.file);

  concatFiles(validFiles, outputPath);

  const totalSize = fs.statSync(outputPath).size;
  console.log(`Complete voiceover: ${outputPath}`);
  console.log(`Total size: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Slides OK: ${results.filter(r => r.ok).length}/${SLIDES.length}`);
  if (failures > 0) console.log(`Failures: ${failures}`);

  // Write manifest
  const manifest = results.map(r => {
    const size = r.file && fs.existsSync(r.file) ? fs.statSync(r.file).size : 0;
    const durationMs = Math.round(size / 6); // 48kbps = 6000 bytes/sec
    return { slide: r.slideNum, file: r.file ? path.basename(r.file) : null, size, durationMs, ok: r.ok };
  });
  fs.writeFileSync(path.join(AUDIO_DIR, 'manifest.json'), JSON.stringify(manifest, null, 2));

  const totalMs = manifest.reduce((s, m) => s + m.durationMs, 0);
  console.log(`Estimated duration: ${(totalMs / 60000).toFixed(1)} minutes`);

  // Clean up
  fs.rmSync(TMP_DIR, { recursive: true, force: true });
}

main().catch(err => {
  console.error('FATAL:', err);
  process.exit(1);
});
