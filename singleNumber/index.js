/**
 * @param {number[]} nums
 * @return {number}
 */

 /*
  * Bit-Wise XOR ( ^ ) : 
  * Its is a binary operator i.e. accepts two operands. 
  * Bit-wise XOR ( ^ ) returns 1 if both the operands are different and 0 in any other case.
 */

var singleNumber = function(nums) {
  return nums.reduce((accum, elem) => accum^elem, 0);
};


console.log(singleNumber([4,1,2,1,2]))