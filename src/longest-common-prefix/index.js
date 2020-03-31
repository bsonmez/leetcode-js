/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  if (strs.length < 1) { return ''; }

  let prefix = strs[0];

  for (let i = 0; i < strs.length; i += 1) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (!prefix.length) return '';
    }
  }
  return prefix;
};

module.exports = { longestCommonPrefix };
