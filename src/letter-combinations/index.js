/**
 * @param {string} digits
 * @return {string[]}
 */
let letterCombinations = function (digits) {
  if (digits.length === 0) return [];
  let temp = [];
  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };

  function generate(i, s) {
    if (i === digits.length) {
      temp.push(s);
      return;
    }

    for (let c of map[digits[i]]) {
      generate(i + 1, s + c);
    }
  }

  generate(0, '');
  return temp;
};

module.exports = { letterCombinations };
