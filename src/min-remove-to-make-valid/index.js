/* eslint-disable no-param-reassign */
/**
 * @param {string} s
 * @return {string}
 */
let minRemoveToMakeValid = function (s) {
  s = s.split("");
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else if (s[i] === ")") {
      if (stack.length) stack.pop();
      else s[i] = "";
    }
  }

  for (let i of stack) {
    s[i] = "";
  }

  return s.join("");
};

module.exports = { minRemoveToMakeValid };
