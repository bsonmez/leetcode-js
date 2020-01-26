/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if(!nums.length) return 0;
  var i = 0;
  for(j=0; j<nums.length; j++){
    if(nums[j] != nums[i]){
      i++;
      nums[i] = nums[j];
    }
  }
  return i+1
};

console.log(removeDuplicates([1,1,2,3]))