/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  let arr = [0, 1];
  for (let i = 2; i <= N; i++) {
    arr.push(arr[i-2] + arr[i-1]);
  }
  return arr[N];    
};

console.log(fib(4))