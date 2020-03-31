/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
  const limit = 2147483648;
  const sign = Math.sign(x);
  const n = Number(String(Math.abs(x)).split('').reverse().join(''));
  return n > limit ? 0 : n * sign;
};

module.exports = { reverse };
