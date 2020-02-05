/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let arr = [1, 2];
  for (let i = 2; i < n; i++) {
    arr.push(arr[i-2] + arr[i-1]);
  }
  return arr[n-1];    
};

console.log(climbStairs(3))