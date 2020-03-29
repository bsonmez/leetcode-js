/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
   let ranks = nums.slice(0).sort((a, b) => b - a);
    
   return nums.map((num, i) => {
      if (num === ranks[0]) return 'Gold Medal';
      else if (num === ranks[1]) return 'Silver Medal';
      else if (num === ranks[2]) return 'Bronze Medal';
      else return (ranks.indexOf(num) + 1).toString();
   });
};

console.log(findRelativeRanks([10,3,8,9,4]))