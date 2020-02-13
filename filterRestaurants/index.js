/**
 * @param {number[][]} restaurants
 * @param {number} veganFriendly
 * @param {number} maxPrice
 * @param {number} maxDistance
 * @return {number[]}
 */

var filterRestaurants = function(restaurants, veganFriendly, maxPrice, maxDistance) {
 var suggestions = []
  for(const resturant of restaurants){
    if((veganFriendly === 0 ||  resturant[2] === veganFriendly)  && resturant[3]<= maxPrice && resturant[4] <= maxDistance){
      suggestions.push(resturant)
    }
  }
  suggestions.sort((a, b) => b[1] - a[1] || b[0] - a[0]);
  return suggestions.map(s=>s[0])
 };

var restaurants = [[1,4,1,40,10],[2,8,0,50,5],[3,8,1,30,4],[4,10,0,10,3],[5,1,1,15,1]] 
var veganFriendly = 0
var maxPrice = 50
var maxDistance = 10

console.log(filterRestaurants(restaurants,veganFriendly,maxPrice,maxDistance))