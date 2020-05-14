/* eslint-disable no-unused-expressions */
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
let backspaceCompare = function (S, T) {
  const process = (word) => {
    let res = [];
    for (let letter of word.split('')) {
      letter === '#' ? res.pop() : res.push(letter);
    }
    return res.join('');
  };

  return process(S) === process(T);
};

module.exports = { backspaceCompare };
