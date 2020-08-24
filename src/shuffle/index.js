/* eslint-disable no-unused-vars */
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
let shuffle = function (nums, n) {
  let arr = [];

  for (let i = 0; i < nums.length / 2; i++) {
    arr.push(nums[i], nums[nums.length / 2 + i]);
  }

  return arr;
};

module.exports = { shuffle };
