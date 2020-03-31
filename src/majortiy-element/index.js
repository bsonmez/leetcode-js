/* eslint-disable no-restricted-syntax */
/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
  const map = {};
  if (nums && nums.length) {
    for (const n of nums) {
      const majority = nums.length / 2;
      if (map[n] == null) map[n] = 0;
      map[n] += 1;
      if (map[n] > majority) return n;
    }
  }
  return null;
};

module.exports = { majorityElement };
