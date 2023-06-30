/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (s.trim().length === 0) {
    return true;
  }
  const string = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedString = string.split("").reverse().join("");

  return string === reversedString;
};

module.exports = { isPalindrome };
