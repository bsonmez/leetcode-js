/* eslint-disable radix */
/* eslint-disable eqeqeq */


/**
 * @param {number[]} arr
 * @return {number}
 */
const findLucky = function (arr) {
  const map = {};
  let lucky = -1;
  if (arr && arr.length) {
    for (const n of arr) {
      if (map[n] == null) map[n] = 0;
      map[n] += 1;
    }

    for (const [key, value] of Object.entries(map)) {
      if (parseInt(key) == parseInt(value) && parseInt(key) > lucky) { lucky = parseInt(key); }
    }
  }

  return lucky;
};

module.exports = { findLucky };
