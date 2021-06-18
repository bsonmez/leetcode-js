/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  var start = 0;
  let end = nums.length - 1;
  let temp;

  for (var i = 0; i <= end; ) {
    if (nums[i] === 0) {
      temp = nums[i];
      nums[i] = nums[start];
      nums[start] = temp;
      i++;
      start++;
    } else if (nums[i] == 2) {
      temp = nums[i];
      nums[i] = nums[end];
      nums[end] = temp;
      end--;
    } else {
      i++;
    }
  }
  return nums;
};

module.exports = { sortColors };
