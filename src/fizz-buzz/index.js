/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = function (n) {
  const arr = [];
  for (let i = 1; i <= n; i += 1) {
    if (i % 5 === 0 && i % 3 === 0) { arr.push('FizzBuzz'); } else if (i % 3 === 0) { arr.push('Fizz'); } else if (i % 5 === 0) { arr.push('Buzz'); } else {
      arr.push(i.toString());
    }
  }
  return arr;
};

module.exports = { fizzBuzz };
