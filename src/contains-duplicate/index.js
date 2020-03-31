/* eslint-disable no-return-assign */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
  const map = {};
  nums.map((c) => map[c] = map[c] ? map[c] + 1 : 1);
  return !Object.values(map).every((value) => value < 2);
};

module.exports = { containsDuplicate };
