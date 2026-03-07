/**
 * VSL Video Generator
 *
 * Takes an HTML slide deck + per-slide audio files and produces a final MP4.
 *
 * Process:
 * 1. Launch Chromium via puppeteer-core
 * 2. For each slide: navigate, wait for animations, screenshot at 1920x1080
 * 3. Use ffmpeg to combine screenshots (timed per manifest) + complete audio → MP4
 *
 * Usage: node src/generate-video.mjs [project-dir]
 *   Default project-dir: projects/wealth-series
 */

import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import defaults from '../config/defaults.json' with { type: 'json' };

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const require = createRequire('/tmp/');
const puppeteer = require('puppeteer-core');

// ─── Config ───
const FFMPEG = path.resolve('node_modules/ffmpeg-static/ffmpeg');
const FFMPEG_FALLBACK = '/tmp/node_modules/ffmpeg-static/ffmpeg';
const ffmpegPath = fs.existsSync(FFMPEG) ? FFMPEG : FFMPEG_FALLBACK;

const projectArg = process.argv[2] || 'projects/wealth-series';
const PROJECT_DIR = path.resolve(ROOT, projectArg);
const AUDIO_DIR = path.join(PROJECT_DIR, 'audio');
const FRAMES_DIR = path.join(PROJECT_DIR, 'frames');
const SLIDES_HTML = path.join(PROJECT_DIR, 'slides.html');
const OUTPUT_MP4 = path.join(PROJECT_DIR, 'video', 'wealth-series-vsl-hd.mp4');

// Read manifest
const manifest = JSON.parse(fs.readFileSync(path.join(AUDIO_DIR, 'manifest.json'), 'utf8'));

fs.mkdirSync(FRAMES_DIR, { recursive: true });
fs.mkdirSync(path.join(PROJECT_DIR, 'video'), { recursive: true });

async function captureSlides() {
  console.log('═══════════════════════════════════════════');
  console.log('  Phase 1: Capturing slide screenshots');
  console.log('═══════════════════════════════════════════\n');

  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/chromium',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu', '--window-size=1920,1080'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: defaults.resolution.width, height: defaults.resolution.height, deviceScaleFactor: 2 });

  await page.goto(`file://${SLIDES_HTML}`, { waitUntil: 'networkidle0', timeout: 30000 });
  await new Promise(r => setTimeout(r, 2000));

  for (let i = 0; i < manifest.length; i++) {
    const slide = manifest[i];
    const slideNum = slide.slide;
    const framePath = path.join(FRAMES_DIR, `slide-${String(slideNum).padStart(2, '0')}.png`);

    await page.evaluate((idx) => window._goTo(idx), slideNum - 1);

    const waitTime = slideNum <= 5 ? 1500 :
                     slideNum === 30 ? 3000 :
                     slideNum === 23 || slideNum === 22 || slideNum === 47 ? 2000 :
                     defaults.slideAnimationWaitMs;
    await new Promise(r => setTimeout(r, waitTime));

    await page.screenshot({ path: framePath, type: 'png', fullPage: false });
    const size = fs.statSync(framePath).size;
    console.log(`  [OK] Slide ${String(slideNum).padStart(2)}/${manifest.length} → ${(size/1024).toFixed(0)}KB`);
  }

  await browser.close();
  console.log(`\nAll ${manifest.length} slides captured.\n`);
}

function buildVideo() {
  console.log('═══════════════════════════════════════════');
  console.log('  Phase 2: Building video with ffmpeg');
  console.log('═══════════════════════════════════════════\n');

  const concatLines = [];
  for (const slide of manifest) {
    const framePath = path.join(FRAMES_DIR, `slide-${String(slide.slide).padStart(2, '0')}.png`);
    const durationSec = (slide.durationMs / 1000).toFixed(3);
    concatLines.push(`file '${framePath}'`);
    concatLines.push(`duration ${durationSec}`);
  }
  const lastFrame = path.join(FRAMES_DIR, `slide-${String(manifest[manifest.length-1].slide).padStart(2, '0')}.png`);
  concatLines.push(`file '${lastFrame}'`);

  const concatFile = path.join(FRAMES_DIR, 'concat.txt');
  fs.writeFileSync(concatFile, concatLines.join('\n'));

  const audioFile = path.join(AUDIO_DIR, 'voiceover-complete.mp3');
  const { width, height } = defaults.resolution;

  const args = [
    '-y',
    '-f', 'concat', '-safe', '0', '-i', concatFile,
    '-i', audioFile,
    '-vf', `scale=${width}:${height}:flags=lanczos`,
    '-c:v', 'libx264',
    '-preset', defaults.videoPreset,
    '-crf', String(defaults.videoCrf),
    '-pix_fmt', 'yuv420p',
    '-c:a', 'aac',
    '-b:a', '128k',
    '-ar', '44100',
    '-shortest',
    '-movflags', '+faststart',
    OUTPUT_MP4,
  ];

  console.log(`  Running ffmpeg...\n`);

  try {
    execFileSync(ffmpegPath, args, { stdio: 'inherit', timeout: 600000 });
    console.log(`\n  Video saved: ${OUTPUT_MP4}`);
    const size = fs.statSync(OUTPUT_MP4).size;
    console.log(`  Size: ${(size / 1024 / 1024).toFixed(1)} MB`);
  } catch (err) {
    console.error('ffmpeg failed:', err.message);
    process.exit(1);
  }
}

async function main() {
  console.log('═══════════════════════════════════════════');
  console.log('  TradeAlgo VSL — Video Generator');
  console.log(`  Project: ${PROJECT_DIR}`);
  console.log('═══════════════════════════════════════════\n');

  await captureSlides();
  buildVideo();

  const totalSec = manifest.reduce((s, m) => s + m.durationMs, 0) / 1000;
  console.log('\n═══════════════════════════════════════════');
  console.log('  COMPLETE');
  console.log(`  Output: ${OUTPUT_MP4}`);
  console.log(`  Slides: ${manifest.length}`);
  console.log(`  Duration: ${(totalSec / 60).toFixed(1)} minutes`);
  console.log('═══════════════════════════════════════════');
}

main().catch(err => {
  console.error('FATAL:', err);
  process.exit(1);
});
