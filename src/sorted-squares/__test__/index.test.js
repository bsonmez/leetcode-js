
const { sortedSquares } = require('../index');

describe('Single Number', () => {
  it('Should return an array of the squares of each number, also in sorted non-decreasing order.', () => {
    const arr = [-4, -1, 0, 3, 10];
    expect(sortedSquares(arr)).toEqual([0, 1, 9, 16, 100]);
  });

  it('Should return an array of the squares of each number, also in sorted non-decreasing order.', () => {
    const arr = [-7, -3, 2, 3, 11];
    expect(sortedSquares(arr)).toEqual([4, 9, 9, 49, 121]);
  });

  it('Should return an array of the squares of each number, also in sorted non-decreasing order.', () => {
    const arr = [-40000, 2, 3, -524, -10000];
    expect(sortedSquares(arr)).toEqual([4, 9, 274576, 100000000, 1600000000]);
  });
});
