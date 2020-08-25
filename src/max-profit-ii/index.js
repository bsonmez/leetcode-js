/**
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = function (prices) {
  let profit = 0;
  let initial = prices[0] * -1;

  for (let i = 0; i < prices.length; i++) {
    profit = Math.max(profit, initial + prices[i]);
    initial = Math.max(initial, profit - prices[i]);
  }
  return profit;
};

module.exports = { maxProfit };
