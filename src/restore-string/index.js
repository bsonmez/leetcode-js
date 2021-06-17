/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  let map = {};

  for (let i = 0; i < indices.length; i++) {
    map[indices[i]] = s[i];
  }

  return Object.values(map).join("");
};

let res = restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]);

module.exports = { restoreString };
