/**
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = function (words) {
  const firstRow = /^[qwertyuiop]*$/i;
  const secondRow = /^[asdfghjkl]*$/i;
  const thirdRow = /^[zxcvbnm]*$/i;

  return words.filter((w) => {
    if (firstRow.test(w) || secondRow.test(w) || thirdRow.test(w)) return true;
    return false;
  });
};

module.exports = { findWords };
