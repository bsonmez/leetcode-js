/**
 * @param {string} S
 * @return {string}
 */
const removeDuplicates = function (S) {
  const res = [];
  for (let i = 0; i < S.length; i += 1) {
    if (S[i] !== res[res.length - 1]) {
      res.push(S[i]);
    } else { res.pop(); }
  }
  return res.join('');
};

module.exports = { removeDuplicates };
