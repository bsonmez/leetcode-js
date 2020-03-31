/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function (nums, k) {
  if (k < 0 || nums.length === 1) return nums;

  for (let i = 0; i < k; i++) {
    const last = nums[nums.length - 1];
    nums.pop();
    nums.unshift(last);
  }

  return nums;
};

module.exports = { rotate };
