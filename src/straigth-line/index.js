/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  // Extract the x and y coordinates of the first point (coordinates[0])
  const x0 = coordinates[0][0];
  const y0 = coordinates[0][1];

  // Extract the x and y coordinates of the second point (coordinates[1])
  const x1 = coordinates[1][0];
  const y1 = coordinates[1][1];

  // Calculate the differences in x and y coordinates between the first two points
  const deltaX = x1 - x0;
  const deltaY = y1 - y0;

  // Iterate over the remaining coordinates starting from the third point
  for (let i = 2; i < coordinates.length; i++) {
    const x = coordinates[i][0];
    const y = coordinates[i][1];

    // Calculate the differences between the products of deltaX and (y - y1)
    // and deltaY and (x - x1). If they are not equal, the points are not on the same line.
    if (deltaX * (y - y1) !== deltaY * (x - x1)) {
      return false;
    }
  }

  // If the loop completes without returning false, all coordinates are on the same line.
  return true;
};

module.exports = { checkStraightLine };
