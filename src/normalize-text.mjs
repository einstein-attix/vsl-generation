/**
 * Text Normalization for TTS
 *
 * Single source of truth for all text cleaning before sending to TTS engine.
 * Converts digits→words, symbols→words, strips SSML tags, handles abbreviations.
 *
 * Usage:
 *   import { normalizeForTTS } from './normalize-text.mjs';
 *   const clean = normalizeForTTS("The AI analyzes 86 securities across 15 sectors.");
 *   // → "The AI analyzes eighty-six securities across fifteen sectors."
 */

import { numberToWords, decimalToWords, yearToWords, ordinalToWords } from './utils/number-to-words.mjs';

/**
 * Normalize text for TTS consumption.
 * All numbers become words. All symbols become speakable text.
 * SSML break tags are preserved (they are handled separately by the audio pipeline).
 */
export function normalizeForTTS(text) {
  let t = text;

  // ─── Preserve SSML break tags by replacing with placeholders ───
  const breaks = [];
  t = t.replace(/<break time="(\d+)ms"\/>/g, (match) => {
    breaks.push(match);
    return `__BREAK_${breaks.length - 1}__`;
  });

  // ─── Symbol replacements (order matters) ───

  // S&P → S and P (before general & replacement)
  t = t.replace(/S&P/g, 'S and P');

  // & → and
  t = t.replace(/&/g, 'and');

  // + before numbers: +52.8% → plus 52.8%
  t = t.replace(/\+(\d)/g, 'plus $1');

  // Percentage: handle before number conversion
  // "52.8%" → "52.8 percent"
  t = t.replace(/([\d.]+)%/g, '$1 percent');

  // Currency: $25,000 → 25000 (commas removed, then number conversion handles it)
  // $25K → twenty-five thousand dollars
  t = t.replace(/\$(\d[\d,]*(?:\.\d+)?)\s*[Kk]\b/g, (_, n) => {
    const val = parseFloat(n.replace(/,/g, '')) * 1000;
    return numberToWords(val) + ' dollars';
  });
  t = t.replace(/\$(\d[\d,]*(?:\.\d+)?)\s*[Mm]\b/g, (_, n) => {
    const val = parseFloat(n.replace(/,/g, '')) * 1_000_000;
    return numberToWords(val) + ' dollars';
  });
  t = t.replace(/\$(\d[\d,]*(?:\.\d+)?)/g, (_, n) => {
    const clean = n.replace(/,/g, '');
    if (clean.includes('.')) return decimalToWords(clean) + ' dollars';
    return numberToWords(parseInt(clean)) + ' dollars';
  });

  // Ordinals: 1st, 2nd, 3rd, etc.
  t = t.replace(/\b(\d+(?:st|nd|rd|th))\b/gi, (m) => ordinalToWords(m));

  // Years: 4-digit numbers that look like years (1900-2099)
  t = t.replace(/\b(19\d{2}|20\d{2})\b/g, (m) => yearToWords(m));

  // Decimal numbers: 69.69 → sixty-nine point six nine
  t = t.replace(/\b(\d+\.\d+)\b/g, (m) => decimalToWords(m));

  // Comma-separated large numbers: 500,000 → 500000 then convert
  t = t.replace(/\b(\d{1,3}(?:,\d{3})+)\b/g, (m) => {
    return numberToWords(parseInt(m.replace(/,/g, '')));
  });

  // Plain integers
  t = t.replace(/\b(\d+)\b/g, (m) => numberToWords(parseInt(m)));

  // ─── Abbreviation handling ───
  // These abbreviations are read correctly as letters by TTS — leave as-is:
  // RSI, CCI, RIA, ETF, SEC, AI, PDF, SSML, CTA

  // ─── Clean up ───

  // Restore break tags
  t = t.replace(/__BREAK_(\d+)__/g, (_, idx) => breaks[parseInt(idx)]);

  // Fix double spaces
  t = t.replace(/\s{2,}/g, ' ').trim();

  return t;
}

export default normalizeForTTS;
