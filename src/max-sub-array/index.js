/**
 * @param {number[]} nums
 * @return {number}
 */


let maxSubArray = function (nums) {
  if (nums.length === 1) return nums[0];

  let current = 0;
  let max = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < nums.length; i++) {
    current = Math.max(nums[i], current + nums[i]);
    max = Math.max(current, max);
  }
  return max;
};

module.exports = { maxSubArray };
