/* eslint-disable no-param-reassign */
/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  const len = nums.length;
  let index = 0;
  let counter = 1;

  for (let i = 1; i < len; i++) {
    if (nums[i] === nums[index]) {
      counter++;
    } else {
      counter = 1;
    }
    if (counter <= 2) {
      index++;
    }


    nums[index] = nums[i];
  }

  return index + 1;
};

module.exports = { removeDuplicates };
