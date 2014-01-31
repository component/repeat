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
  var out = '';

  for (n |= 0; n > 0; n >>>= 1, str += str) {
    if (n & 1) out += str;
  }

  return out;
}
