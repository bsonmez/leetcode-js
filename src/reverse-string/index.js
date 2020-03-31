/* eslint-disable no-param-reassign */
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    const temp = s[left];
    s[left++] = s[right];
    s[right--] = temp;
  }

  return s;
};

module.exports = { reverseString };
