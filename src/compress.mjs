/**
 * Video Compression — Two-pass H.264 for size-constrained delivery (e.g., Telegram 16MB limit)
 *
 * Usage: node src/compress.mjs <input.mp4> <output.mp4> [maxSizeMB]
 */

import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const FFMPEG_LOCAL = path.resolve('node_modules/ffmpeg-static/ffmpeg');
const FFMPEG_TMP = '/tmp/node_modules/ffmpeg-static/ffmpeg';
const FFMPEG = fs.existsSync(FFMPEG_LOCAL) ? FFMPEG_LOCAL : FFMPEG_TMP;

const input = process.argv[2];
const output = process.argv[3];
const maxSizeMB = parseFloat(process.argv[4] || '15');

if (!input || !output) {
  console.error('Usage: node src/compress.mjs <input.mp4> <output.mp4> [maxSizeMB]');
  process.exit(1);
}

// Get duration by probing (ffmpeg exits 1 when no output specified — catch it)
let durationSec = 1200;
try {
  execFileSync(FFMPEG, ['-i', input], { encoding: 'utf8', stdio: 'pipe' });
} catch (e) {
  const m = e.stderr?.match(/Duration: (\d+):(\d+):([\d.]+)/);
  if (m) durationSec = parseInt(m[1]) * 3600 + parseInt(m[2]) * 60 + parseFloat(m[3]);
}

const targetBits = maxSizeMB * 8 * 1024 * 1024;
const audioBitrate = 48000;
const videoBitrate = Math.floor((targetBits / durationSec - audioBitrate) * 0.9);

console.log(`Duration: ${(durationSec / 60).toFixed(1)} min`);
console.log(`Target: ${maxSizeMB}MB, Video bitrate: ${(videoBitrate / 1000).toFixed(0)}kbps`);

// Pass 1
console.log('Pass 1...');
execFileSync(FFMPEG, [
  '-y', '-i', input,
  '-c:v', 'libx264', '-b:v', String(videoBitrate), '-preset', 'veryslow', '-pix_fmt', 'yuv420p',
  '-c:a', 'aac', '-b:a', '48k', '-ar', '24000', '-ac', '1',
  '-pass', '1', '-passlogfile', '/tmp/ffmpeg2pass', '-f', 'mp4', '/dev/null'
], { stdio: 'inherit', timeout: 600000 });

// Pass 2
console.log('Pass 2...');
execFileSync(FFMPEG, [
  '-y', '-i', input,
  '-c:v', 'libx264', '-b:v', String(videoBitrate), '-preset', 'veryslow', '-pix_fmt', 'yuv420p',
  '-c:a', 'aac', '-b:a', '48k', '-ar', '24000', '-ac', '1',
  '-pass', '2', '-passlogfile', '/tmp/ffmpeg2pass', '-movflags', '+faststart', output
], { stdio: 'inherit', timeout: 600000 });

const size = fs.statSync(output).size;
console.log(`\nOutput: ${output}`);
console.log(`Size: ${(size / 1024 / 1024).toFixed(1)} MB (limit: ${maxSizeMB} MB)`);
if (size > maxSizeMB * 1024 * 1024) console.warn('WARNING: Output exceeds size limit!');
