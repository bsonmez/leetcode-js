/**
 * @param {number[]} nums
 * @return {number[]}
 */
let runningSum = function (nums) {
  let a = 0;
  let res = [];
  for (let x = 0; x < nums.length; x++) {
    a += nums[x];
    res.push(a);
  }
  return res;
};

module.exports = { runningSum };
