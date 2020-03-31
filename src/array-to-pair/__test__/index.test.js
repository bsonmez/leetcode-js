const { arrayPairSum } = require('../index');

const testArray = [1, 4, 3, 2];

describe('Array Pair Sum', () => {
  it('Should arrayPairSum', () => {
    expect(arrayPairSum(testArray))
      .toBe(4);
  });
});
