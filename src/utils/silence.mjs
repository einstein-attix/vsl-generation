/**
 * Silence Generation Utility
 * Generates true-silence MP3 files using ffmpeg.
 */

import { execFileSync } from 'node:child_process';

/**
 * Generate a silent MP3 file of the given duration.
 * @param {number} durationMs - Duration in milliseconds
 * @param {string} outPath - Output file path
 * @param {string} ffmpegPath - Path to ffmpeg binary
 */
export function generateSilence(durationMs, outPath, ffmpegPath) {
  const sec = (durationMs / 1000).toFixed(3);
  execFileSync(ffmpegPath, [
    '-y', '-f', 'lavfi', '-i', 'anullsrc=r=24000:cl=mono',
    '-t', sec, '-c:a', 'libmp3lame', '-b:a', '48k', outPath
  ], { stdio: 'pipe' });
}

export default generateSilence;
