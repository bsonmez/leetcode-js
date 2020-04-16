/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

let gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) {
    return '';
  } if (str1 === str2) {
    return str1;
  } if (str1.length > str2.length) {
    return gcdOfStrings(str1.slice(str2.length), str2);
  }
  return gcdOfStrings(str2.slice(str1.length), str1);
};

module.exports = { gcdOfStrings };
