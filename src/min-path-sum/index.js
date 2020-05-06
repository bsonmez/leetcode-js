/**
 * @param {number[][]} grid
 * @return {number}
 */
let minPathSum = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (row === 0 && col === 0) continue;
      if (row !== 0 && col !== 0) {
        grid[row][col] += Math.min(grid[row - 1][col], grid[row][col - 1]);
      } else if (row === 0) {
        grid[row][col] += grid[row][col - 1];
      } else if (col === 0) {
        grid[row][col] += grid[row - 1][col];
      }
    }
  }


  return grid[rows - 1][cols - 1];
};


module.exports = { minPathSum };
