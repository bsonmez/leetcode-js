/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */


let createTargetArray = function (nums, index) {
  let target = [];

  for (let n of nums) {
    let idx = index.shift();
    target.splice(idx, 0, n);
  }

  return target;
};

module.exports = { createTargetArray };
