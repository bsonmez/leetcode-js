/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length < 2) {
    return 0; // No profit can be made
  }

  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];
    minPrice = Math.min(minPrice, currentPrice);
    maxProfit = Math.max(maxProfit, currentPrice - minPrice);
  }

  return maxProfit;
};

module.exports = { maxProfit };
