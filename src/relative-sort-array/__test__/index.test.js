const { relativeSortArray } = require('../index');

describe('Relative Sort Array', () => {
  it('Should sort element in arr1 as same as arr2 and return arr1 in ascending order.', () => {
    const arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19];
    const arr2 = [2, 1, 4, 3, 9, 6];

    expect(relativeSortArray(arr1, arr2)).toEqual([
      2, 2, 2, 1, 4,
      3, 3, 9, 6, 7,
      19,
    ]);
  });

  it('Should sort element in arr1 as same as arr2 and return arr1 in ascending order.', () => {
    const arr1 = [28, 6, 22, 8, 44, 17];
    const arr2 = [22, 28, 8, 6];

    expect(relativeSortArray(arr1, arr2)).toEqual([22, 28, 8, 6, 17, 44]);
  });
});
