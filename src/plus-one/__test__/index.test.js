const { plusOne } = require('../index');

describe('Plus One', () => {
  it('Should add plus one', () => {
    const numbers = [9, 9];
    expect(plusOne(numbers)).toEqual([1, 0, 0]);
  });

  it('Should add plus one', () => {
    const numbers = [1, 2, 3];
    expect(plusOne(numbers)).toEqual([1, 2, 4]);
  });

  it('Should add plus one', () => {
    const numbers = [4, 3, 2, 1];
    expect(plusOne(numbers)).toEqual([4, 3, 2, 2]);
  });
});
