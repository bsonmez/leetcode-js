/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  const n = Number(String(Math.abs(x)).split('').reverse().join(''));
  return n === x;
};

module.exports = { isPalindrome };
