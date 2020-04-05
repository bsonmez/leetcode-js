/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function (numRows) {
  // i,j = i-1,j-1 + i-1,j
  const solution = [];
  for (let i = 0; i < numRows; i++) {
    solution[i] = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        solution[i][j] = 1;
      } else {
        solution[i][j] = solution[i - 1][j - 1] + solution[i - 1][j];
      }
    }
  }
  return solution;
};

module.exports = { generate };
