/**
 * Number-to-Words Converter
 * Converts numeric values to English word representations for TTS.
 */

const ONES = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
  'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const TENS = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

function intToWords(n) {
  if (n === 0) return 'zero';
  if (n < 0) return 'negative ' + intToWords(-n);

  let result = '';

  if (n >= 1_000_000_000) {
    result += intToWords(Math.floor(n / 1_000_000_000)) + ' billion ';
    n %= 1_000_000_000;
  }
  if (n >= 1_000_000) {
    result += intToWords(Math.floor(n / 1_000_000)) + ' million ';
    n %= 1_000_000;
  }
  if (n >= 1000) {
    result += intToWords(Math.floor(n / 1000)) + ' thousand ';
    n %= 1000;
  }
  if (n >= 100) {
    result += ONES[Math.floor(n / 100)] + ' hundred ';
    n %= 100;
    if (n > 0) result += 'and ';
  }
  if (n >= 20) {
    result += TENS[Math.floor(n / 10)];
    if (n % 10 > 0) result += '-' + ONES[n % 10];
    result += ' ';
  } else if (n > 0) {
    result += ONES[n] + ' ';
  }

  return result.trim();
}

/**
 * Convert a year like 1995 to "nineteen ninety-five"
 */
export function yearToWords(y) {
  const n = parseInt(y);
  if (isNaN(n)) return y;
  if (n >= 2000 && n <= 2009) return 'two thousand' + (n > 2000 ? ' ' + ONES[n - 2000] : '');
  if (n >= 2010 && n <= 2099) return 'twenty ' + intToWords(n - 2000);
  if (n >= 1000 && n <= 1999) {
    const hi = Math.floor(n / 100);
    const lo = n % 100;
    if (lo === 0) return intToWords(hi) + ' hundred';
    return intToWords(hi) + ' ' + intToWords(lo);
  }
  return intToWords(n);
}

/**
 * Convert a decimal number like 69.69 to "sixty-nine point six nine"
 */
export function decimalToWords(numStr) {
  const parts = numStr.split('.');
  const intPart = intToWords(parseInt(parts[0]));
  if (parts.length === 1) return intPart;

  // Read decimal digits individually: 69 → "six nine"
  const decDigits = parts[1].split('').map(d => ONES[parseInt(d)] || d).join(' ');
  return intPart + ' point ' + decDigits;
}

/**
 * Convert an integer to words
 */
export function numberToWords(n) {
  return intToWords(typeof n === 'string' ? parseInt(n) : n);
}

/**
 * Convert ordinal: 1st → first, 2nd → second, etc.
 */
export function ordinalToWords(s) {
  const ordinals = {
    '1st': 'first', '2nd': 'second', '3rd': 'third', '4th': 'fourth',
    '5th': 'fifth', '6th': 'sixth', '7th': 'seventh', '8th': 'eighth',
    '9th': 'ninth', '10th': 'tenth', '11th': 'eleventh', '12th': 'twelfth',
    '13th': 'thirteenth', '20th': 'twentieth', '21st': 'twenty-first',
    '30th': 'thirtieth', '50th': 'fiftieth', '100th': 'one hundredth',
  };
  return ordinals[s.toLowerCase()] || s;
}

export default { numberToWords, decimalToWords, yearToWords, ordinalToWords };
