const { twoSum } = require('../index');

describe('Two Sum', () => {
  it('Should do summation', () => {
    const nums = [2, 7, 11, 15, 8, 1];
    const target = 9;
    expect(twoSum(nums, target)).toEqual([0, 1]);
  });

  it('Should do summation', () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    expect(twoSum(nums, target)).toEqual([0, 1]);
  });
});
