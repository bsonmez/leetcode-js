/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

let luckyNumbers = function (matrix) {
  let max = [];
  let lucky = [];

  for (let i = 0; i < matrix[0].length; i += 1) {
    let col = [];
    for (let j = 0; j < matrix.length; j += 1) {
      col.push(matrix[j][i]);
    }
    max.push(Math.max(...col));
  }

  for (let row of matrix) {
    let min = Math.min(...row);
    if (max.includes(min)) lucky.push(min);
  }

  return lucky;
};

/* Alternative Solution */

let getMinRowValue = (row) => {
  return Math.min(...row);
};

let getMaxColValue = (arr, col) => {
  return arr.reduce((max, current) => Math.max(max, current[col]), -Infinity);
};

let luckyNumbersAlternative = function (matrix) {
  let minOfRows = matrix.map((row) => {
    return getMinRowValue(row);
  });

  let maxOfCols = matrix[0].map((col, i) => {
    return getMaxColValue(matrix, i);
  });

  let results = minOfRows.filter((n) => maxOfCols.includes(n));
  return results.length ? results : [];
};


module.exports = { luckyNumbers, luckyNumbersAlternative };
