const { filterRestaurants } = require('../index');

const restaurants = [
  [1, 4, 1, 40, 10],
  [2, 8, 0, 50, 5],
  [3, 8, 1, 30, 4],
  [4, 10, 0, 10, 3],
  [5, 1, 1, 15, 1]];
const veganFriendly = 0;
const maxPrice = 50;
const maxDistance = 10;

describe('Filter Resturants', () => {
  it('Should filter resturants ', () => {
    expect(filterRestaurants(restaurants, veganFriendly, maxPrice, maxDistance))
      .toMatchObject([4, 3, 2, 1, 5]);
  });
});
