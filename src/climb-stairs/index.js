/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
  const arr = [1, 2];
  for (let i = 2; i < n; i += 1) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n - 1];
};

module.exports = { climbStairs };
