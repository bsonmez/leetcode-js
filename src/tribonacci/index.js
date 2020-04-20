/**
 * @param {number} n
 * @return {number}
 */

let tribonacci = function (n) {
  if (n === 0) { return 0; }
  if (n === 1 || n === 2) { return 1; }

  let sum = 0;
  let t0 = 0;
  let t1 = 1;
  let t2 = 1;

  for (let i = 3; i <= n; i++) {
    sum = t0 + t1 + t2;
    [t0, t1, t2] = [t1, t2, sum];
  }

  return sum;
};

module.exports = { tribonacci };
