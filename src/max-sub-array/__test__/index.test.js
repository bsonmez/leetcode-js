const { maxSubArray } = require('../index');


describe('Max Sub Array', () => {
  it('Should find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.', () => {
    const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
    expect(maxSubArray(array)).toBe(6);
  });

  it('Should find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.', () => {
    const array = [-1];
    expect(maxSubArray(array)).toBe(-1);
  });

  it('Should find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.', () => {
    const array = [-2, -1];
    expect(maxSubArray(array)).toBe(-1);
  });

  it('Should find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.', () => {
    const array = [1, 2];
    expect(maxSubArray(array)).toBe(3);
  });
});
