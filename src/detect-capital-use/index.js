/**
 * @param {string} word
 * @return {boolean}
 */
const detectCapitalUse = function (word) {
  return word === word.toLocaleUpperCase() || word === word[0] + word.substr(1).toLocaleLowerCase();
};

module.exports = { detectCapitalUse };
