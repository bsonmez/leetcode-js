/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = function (n) {
  if (n < 1) return false;
  if (n === 3 || n === 1) return true;
  return n % 3 === 0 ? isPowerOfThree(n / 3) : false;
};

module.exports = { isPowerOfThree };
