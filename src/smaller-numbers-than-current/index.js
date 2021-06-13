/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  const sorted = Array.from(nums).sort((n1, n2) => n2 - n1);
  const mapArray = sorted.map((num, index) => [num, nums.length - index - 1]);
  const map = new Map(mapArray);
  return nums.map((num) => map.get(num));
};

module.exports = { smallerNumbersThanCurrent };

//https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
