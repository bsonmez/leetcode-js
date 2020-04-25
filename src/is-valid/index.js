/**
 * @param {string} s
 * @return {boolean}
 */

let isValid = function (s) {
  if (s.length % 2 !== 0) return false;
  let temp = [];
  const map = {
    ')': '(',
    '}': '{',
    ']': '[',

  };

  for (let i = 0; i <= s.length; i += 1) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      temp.push(s[i]);
    } else {
      if (temp[temp.length - 1] === map[s[i]]) {
        temp.pop();
      } else return false;
    }
  }

  return !temp.length;
};

module.exports = { isValid };
