/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  if(!nums.length) return 0;
  for(j=0; j<nums.length; j++){
    console.log(nums[j], val,j)
    if(nums[j] == val){
      nums.splice(j, 1); 
    }
  }
  return nums
};

console.log(removeElement([0,1,2,2,3,0,4,2],2))
