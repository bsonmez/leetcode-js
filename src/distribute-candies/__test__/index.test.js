const { distributeCandies } = require('../index');

const testArray = [1, 1, 2, 3];

describe('Distribute Candies', () => {
  it('Should distributeCandies', () => {
    expect(distributeCandies(testArray)).toBe(2);
  });
});
