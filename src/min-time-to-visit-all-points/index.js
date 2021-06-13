/**
 * @param {number[][]} points
 * @return {number}
 */
let minTimeToVisitAllPoints = function (points) {
  if (!points.length) return 0;
  let time = 0;

  for (let i = 0; i < points.length - 1; i++) {
    const curr = points[i];
    const nextPoint = points[i + 1];

    let diff1 = Math.abs(curr[0] - nextPoint[0]);
    let diff2 = Math.abs(curr[1] - nextPoint[1]);

    time += Math.max(diff1, diff2);
  }

  return time;
};

module.exports = { minTimeToVisitAllPoints };
