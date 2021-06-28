/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var combinationSum2 = function (candidates, target) {
  var res = []; // [][]
  var prefix = [];

  candidates.sort((a, b) => a - b);

  function search(idx, target) {
    if (target === 0 && idx === candidates.length) {
      return res.push(prefix.slice());
    }

    if (target < 0 || idx === candidates.length) {
      return;
    }

    // include number at idx
    prefix.push(candidates[idx]);

    search(idx + 1, target - candidates[idx]);

    // exclude number at idx
    prefix.pop();

    if (prefix[prefix.length - 1] !== candidates[idx]) {
      search(idx + 1, target);
    }
  }

  search(0, target);
  return res;
};

module.exports = { combinationSum2 };
