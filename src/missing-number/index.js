/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function (nums) {
  const len = nums.length;
  const sum = (len * (len + 1)) / 2;
  const sum2 = nums.reduce((a, c) => a + c);
  return sum - sum2;
};

module.exports = { missingNumber };
