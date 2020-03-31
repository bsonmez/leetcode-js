/* eslint-disable no-param-reassign */
/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  if (!nums.length) return 0;
  let i = 0;
  for (let j = 0; j < nums.length; j += 1) {
    if (nums[j] !== nums[i]) {
      i += 1;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};

module.exports = { removeDuplicates };
