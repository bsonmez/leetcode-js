
/**
 * @param {number} n
 * @return {number}
 */

const countPrimes = function (n) {
  const flags = [];
  let count = 0;

  for (let i = 2; i < n; i += 1) {
    if (flags[i] === undefined) {
      flags[i] = 1;
      count += 1;
      let j = 2;
      while (i * j < n) {
        flags[i * j] = 0;
        j += 1;
      }
    }
  }
  return count;
};


module.exports = { countPrimes };
