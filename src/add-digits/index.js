/**
 * @param {number} num
 * @return {number}
 */
const addDigits = function (num) {
  if (num === 0) return 0;
  return (num % 9 === 0) ? 9 : num % 9;
};

module.exports = { addDigits };
