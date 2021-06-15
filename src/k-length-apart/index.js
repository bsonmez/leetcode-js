/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function (nums, k) {
  let stack = [];

  nums.map((i, idx) => {
    if (i != 0) stack.push(idx);
  });

  for (let i = 1; i < stack.length; i++) {
    if (stack[i] - stack[i - 1] <= k) return false;
  }

  return true;
};

module.exports = { kLengthApart };
