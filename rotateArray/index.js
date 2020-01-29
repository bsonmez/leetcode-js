/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  if(k<0 || nums.length == 1) return nums

  for(i=0;i<k;i++){
   var last =  nums[nums.length-1]
   nums.pop()
   nums.unshift(last)
  }

return nums
    
};

console.log(rotate([1,2,3,4,5,6,7],3))