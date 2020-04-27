/* eslint-disable no-continue */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

function helper(list, templist, candidates, start, target) {
  for (let i = start; i < candidates.length; i++) {
    if (candidates[i] > target) {
      continue;
    }
    if (candidates[i] < target) {
      templist.push(candidates[i]);
      helper(list, templist, candidates, i, target - candidates[i]);
      templist.pop();
    } else if (candidates[i] === target) {
      templist.push(candidates[i]);
      list.push([...templist]);
      templist.pop();
    }
  }
}

let combinationSum = function (candidates, target) {
  let res = [];
  helper(res, [], candidates, 0, target);
  return res;
};

module.exports = { combinationSum };
