/**
 * @param {number} n
 * @return {string[]}
 */

let generateParenthesis = function (n) {
  const res = [];

  let generate = (left, right, s) => {
    if (left > right) return;
    if (left === 0 && right === 0) res.push(s);
    if (left > 0) generate(left - 1, right, `${s}(`);
    if (right > 0) generate(left, right - 1, `${s})`);
  };

  generate(n, n, '');
  return res;
};

module.exports = { generateParenthesis };
