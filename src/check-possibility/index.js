/* eslint-disable no-param-reassign */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const checkPossibility = function (nums) {
  let count = 0;
  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i] < nums[i - 1]) {
      if (i - 2 >= 0 && nums[i] < nums[i - 2]) {
        nums[i] = nums[i - 1];
      }
      count += 1;
    }
    if (count > 1) {
      return false;
    }
  }
  return true;
};

module.exports = { checkPossibility };
