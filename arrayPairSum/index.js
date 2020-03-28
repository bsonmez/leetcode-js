/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
nums.sort(function(a, b){return a - b})
let pairs = []

for(let i=0; i < nums.length ; i += 2){
   pairs.push(Math.min(nums[i],nums[i+1]))
}
 return pairs.reduce((a, b) => a + b, 0)  
};

console.log(arrayPairSum([1,4,3,2]))