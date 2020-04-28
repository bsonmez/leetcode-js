/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

const generate = (n, k, start, result, current) => {
  if (current.length === k) {
    result.push([...current]);
  }

  for (let i = start; i <= n; i++) {
    current.push(i);
    generate(n, k, i + 1, result, current);
    current.pop();
  }
};

const combine = (n, k) => {
  const result = [];
  generate(n, k, 1, result, []);
  return result;
};


module.exports = { combine };
