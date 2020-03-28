/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  return word == word.toLocaleUpperCase() || word == word[0] + word.substr(1).toLocaleLowerCase()
};

console.log(detectCapitalUse('HEY'))
console.log(detectCapitalUse('Turkey'))
console.log(detectCapitalUse('FalSe'))
