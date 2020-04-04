const { findLucky } = require('../index');

describe('Find Lucky', () => {
  it('Should find number which has a frequency in the array equal to its value.', () => {
    const arr = [1, 1, 2, 2, 3, 3, 3];
    expect(findLucky(arr)).toBe(3);
  });

  it('Should find number which has a frequency in the array equal to its value.', () => {
    const arr = [3, 3, 2, 1];
    expect(findLucky(arr)).toBe(1);
  });

  it('Should return -1 if there is no lucky number', () => {
    const arr = [2, 2, 2, 3, 3];
    expect(findLucky(arr)).toBe(-1);
  });

  it('Should return -1 if there is no lucky number', () => {
    const arr = [5];
    expect(findLucky(arr)).toBe(-1);
  });

  it('Should find number which has a frequency in the array equal to its value.', () => {
    const arr = [7, 7, 7, 7, 7, 7, 7];
    expect(findLucky(arr)).toBe(7);
  });

  it('Should find number which has a frequency in the array equal to its value.', () => {
    const arr = [
      5, 8, 10, 9, 8, 10, 9, 6, 6, 7, 10, 8, 10,
      10, 9, 4, 6, 2, 10, 3, 5, 10, 2, 6, 4, 8,
      7, 3, 9, 9, 5, 7, 8, 7, 11, 9, 3, 1, 5, 11,
      9, 5, 8, 10, 8, 4, 9, 7, 6, 7, 10, 9, 7, 8,
      6, 10, 4];
    expect(findLucky(arr)).toBe(10);
  });
});
