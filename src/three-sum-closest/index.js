/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let threeSumClosest = function (nums, target) {
  const sortedArr = nums.sort((a, b) => a - b);
  let closest = Infinity;

  for (let i = 0; i < sortedArr.length - 2; i++) {
    let left = i + 1;
    let right = sortedArr.length - 1;

    while (left < right) {
      const sum = sortedArr[i] + sortedArr[left] + sortedArr[right];

      if (Math.abs(sum - target) < Math.abs(closest - target)) {
        closest = sum;
      } else if (sum > target) {
        right--;
      } else {
        left++;
      }
    }
  }
  return closest;
};

module.exports = { threeSumClosest };
