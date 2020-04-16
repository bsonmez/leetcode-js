/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */


let buddyStrings = function (A, B) {
  if (!A || !B || A.length !== B.length) { return false; }

  if (A === B) {
    const setA = new Set(A.split(''));
    return setA.size < A.length;
  }

  const index = [];
  for (let i = 0; i < A.length; i++) {
    if (A[i] !== B[i]) {
      index.push(i);
    }
  }

  // only 2 swaps allowed
  if (index.length !== 2) { return false; }

  // Should be two indicates only , so just check if the opposite indices are same.
  return A[index[0]] === B[index[1]]
    && A[index[1]] === B[index[0]];
};

module.exports = { buddyStrings };
