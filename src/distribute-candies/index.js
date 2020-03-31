/**
 * @param {number[]} candies
 * @return {number}
 */
const distributeCandies = function (candies) {
  return Math.min(new Set(candies).size, candies.length / 2);
};

module.exports = { distributeCandies };
