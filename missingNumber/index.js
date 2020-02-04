/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let len = nums.length; 
  let sum = (len*(len+1))/2; 
  let sum2 = nums.reduce((a,c)=> a+c);
  return sum-sum2;
};

console.log(missingNumber([0]))