/**
 * @param {number} rowIndex
 * @return {number[]}
 */
let getRow = function (rowIndex) {
  // i,j = i-1,j-1 + i-1,j
  const solution = [1];
  for (let i = 1; i <= rowIndex; i++) {
    for (let j = i; j > 0; j--) {
      if (i === j) {
        solution[j] = 1;
      } else {
        solution[j] = solution[j - 1] + solution[j];
      }
    }
  }
  return solution;
};


module.exports = { getRow };
