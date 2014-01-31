/**
 * Expose `repeat`
 */

module.exports = repeat;

/**
 * Repeat `str` string `n` times.
 *
 * @param {String} str
 * @param {Number} n
 * @return {String}
 * @api public
 */

function repeat(str, n) {
  n = Number(n);
  var out = '';

  while (true) {
    if (n & 1) out += str;
    n >>>= 1;
    if (n <= 0) break;
    str += str;
  }

  return out;
}
