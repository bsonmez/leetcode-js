/* eslint-disable no-param-reassign */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i -= 1) {
    digits[i] = (digits[i] + 1) % 10;
    if (digits[i]) return digits;
  }
  digits.unshift(1);
  return digits;
};

module.exports = { plusOne };
