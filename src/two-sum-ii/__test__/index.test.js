const { twoSum } = require('../index');

describe('Two Sum', () => {
  it('Should do summation', () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    expect(twoSum(nums, target)).toEqual([1, 2]);
  });

  it('Should do summation', () => {
    const nums = [5, 25, 75];
    const target = 100;
    expect(twoSum(nums, target)).toEqual([2, 3]);
  });
});
