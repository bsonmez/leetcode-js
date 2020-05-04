/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
let repeatedStringMatch = function (A, B) {
  const count = Math.ceil(B.length / A.length);

  if (A.repeat(count).includes(B)) return count;
  if (A.repeat(count + 1).includes(B)) return count + 1;

  return -1;
};


module.exports = { repeatedStringMatch };
