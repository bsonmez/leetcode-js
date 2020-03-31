/**
 * @param {number[]} nums
 * @return {number}
 */
const arrayPairSum = function (nums) {
  nums.sort((a, b) => { return a - b; });
  const pairs = [];

  for (let i = 0; i < nums.length; i += 2) {
    pairs.push(Math.min(nums[i], nums[i + 1]));
  }
  return pairs.reduce((a, b) => a + b, 0);
};

module.exports = { arrayPairSum };
