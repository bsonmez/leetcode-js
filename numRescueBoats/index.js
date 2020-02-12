/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
  people.sort((a, b) => a - b);
  var j = people.length - 1;
  var boats = 0;
  for (var i = 0 ; i <= j; ++boats) { 
  people[j--] + people[i] <= limit && ++i;
}
  return boats;
};

console.log(numRescueBoats([3,2,2,1],3))