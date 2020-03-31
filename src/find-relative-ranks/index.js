/**
 * @param {number[]} nums
 * @return {string[]}
 */
const findRelativeRanks = function (nums) {
  const ranks = nums.slice(0).sort((a, b) => b - a);

  return nums.map((num) => {
    if (num === ranks[0]) return 'Gold Medal';
    if (num === ranks[1]) return 'Silver Medal';
    if (num === ranks[2]) return 'Bronze Medal';
    return (ranks.indexOf(num) + 1).toString();
  });
};

module.exports = { findRelativeRanks };
