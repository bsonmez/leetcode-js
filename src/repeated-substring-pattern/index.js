/**
 * @param {string} s
 * @return {boolean}
 */
let repeatedSubstringPattern = function (s) {
  return s.repeat(2).slice(1, -1).includes(s);
};


module.exports = { repeatedSubstringPattern };
