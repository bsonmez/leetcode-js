const { createTargetArray } = require('../index');

describe('Count Primes', () => {
  it('Should create the targeted array', () => {
    const nums = [0, 1, 2, 3, 4];
    const index = [0, 1, 2, 2, 1];
    expect(createTargetArray(nums, index)).toEqual([0, 4, 1, 3, 2]);
  });

  it('Should create the targeted array', () => {
    const nums = [1, 2, 3, 4, 0];
    const index = [0, 1, 2, 3, 0];
    expect(createTargetArray(nums, index)).toEqual([0, 1, 2, 3, 4]);
  });

  it('Should create the targeted array', () => {
    const nums = [1];
    const index = [0];
    expect(createTargetArray(nums, index)).toEqual([1]);
  });
});
