/* eslint-disable operator-assignment */
/* eslint-disable no-param-reassign */
/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortedSquares = function (A) {
  const len = A.length;
  const arr = Array(len);
  let begin = 0;
  let end = len - 1;

  for (let i = end; i >= 0; i -= 1) {
    const sq1 = A[begin] ** 2;
    const sq2 = A[end] ** 2;

    if (sq1 > sq2) {
      arr[i] = sq1;
      begin += 1;
    } else {
      arr[i] = sq2;
      end -= 1;
    }
  }

  return arr;
};

module.exports = { sortedSquares };
