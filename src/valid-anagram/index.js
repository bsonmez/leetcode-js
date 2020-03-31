/* eslint-disable no-return-assign */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const map = {};
  s.toLowerCase().split('').map((c) => map[c] = map[c] ? map[c] + 1 : 1);
  t.toLowerCase().split('').map((c) => map[c] = map[c] ? map[c] - 1 : -1);
  return Object.keys(map).every((k) => map[k] === 0);
};

module.exports = { isAnagram };
