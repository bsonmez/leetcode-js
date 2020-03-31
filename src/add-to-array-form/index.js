/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
const addToArrayForm = function (A, K) {
  A.reverse();

  let carry = 0;

  for (const [i, num] of A.entries()) {
    const total = num + K + carry;
    A[i] = total % 10;

    carry = Math.floor(total / 10);

    K = 0;
  }

  while (carry > 0) {
    A.push(carry % 10);
    carry = Math.floor(carry / 10);
  }

  return A.reverse();
};

module.exports = { addToArrayForm };
