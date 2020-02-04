/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const map = {}
  nums.map(c => map[c] = map[c] ? map[c] + 1 : 1 )
  return !Object.values(map).every(value=> value < 2)    
};

console.log(containsDuplicate([1,2,3]))