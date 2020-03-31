/**
 * @param {number} N
 * @return {number}
 */
const fib = function (N) {
  const arr = [0, 1];
  for (let i = 2; i <= N; i += 1) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[N];
};

module.exports = { fib };
