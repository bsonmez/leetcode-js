/**
 * @param {string} s
 * @return {number}
 */
let romanToInt = function (s) {
  if (!s || !s.length) return 0;

  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    const curr = map[s[i]];
    const next = map[s[i + 1]];

    if (next > curr) {
      sum = sum + next - curr;
      i++;
    } else {
      sum += curr;
    }
  }

  return sum;
};

module.exports = { romanToInt };
