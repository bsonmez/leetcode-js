/* eslint-disable no-restricted-syntax */
/* eslint-disable max-len */
/* eslint-disable no-irregular-whitespace */
/**
 * @param {number[][]} restaurants
 * @param {number} veganFriendly
 * @param {number} maxPrice
 * @param {number} maxDistance
 * @return {number[]}
 */

const filterRestaurants = function (restaurants, veganFriendly, maxPrice, maxDistance) {
  const suggestions = [];
  for (const resturant of restaurants) {
    if ((veganFriendly === 0 ||  resturant[2] === veganFriendly) && resturant[3] <= maxPrice && resturant[4] <= maxDistance) {
      suggestions.push(resturant);
    }
  }
  suggestions.sort((a, b) => b[1] - a[1] || b[0] - a[0]);
  return suggestions.map((s) => s[0]);
};

module.exports = { filterRestaurants };
