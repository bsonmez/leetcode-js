/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
 return Math.min(new Set(candies).size,candies.length / 2)
};

console.log(distributeCandies([1,1,2,3]))