/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
  return grid.reduce(
    (counts, row) =>
      row.reduce(
        (count, element) => (element < 0 ? (count += 1) : count),
        counts
      ),
    0
  );
};

module.exports = { countNegatives };
