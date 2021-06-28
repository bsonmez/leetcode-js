/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function (nums, target) {
  const len = nums.length;
  if (target === 0 || !len) return 0;

  let left = 0;
  let right = nums.length;
  let idx = -1;
  while (left < right) {
    idx = Math.trunc((left + right) / 2);
    if (target === nums[idx]) return idx;
    if (nums[idx] > target) right = idx;
    else left = idx + 1;
  }
  return left;
};

module.exports = { searchInsert };
