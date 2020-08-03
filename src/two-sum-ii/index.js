/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = function (nums, target) {
  let hash = {};
  let res = [];
  // eslint-disable-next-line no-return-assign
  nums.forEach((n, i) => hash[n] = i);

  for (let i = 0; i < nums.length; i += 1) {
    let diff = target - nums[i];

    if (hash[diff] && i !== hash[diff] && hash[diff] > i) {
      res.push(i + 1);
      res.push(hash[diff] + 1);
    }
  }

  return res;
};

module.exports = { twoSum };
