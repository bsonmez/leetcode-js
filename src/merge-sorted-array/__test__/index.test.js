const { merge } = require('../index');


describe('Merge', () => {
  it('Should merge two arrays ', () => {
    const firstArray = [1, 2, 3, 0, 0, 0];
    const secondArray = [2, 5, 6];
    const firstLength = 3;
    const secondLength = 3;

    expect(merge(firstArray, firstLength, secondArray, secondLength)).toEqual([1, 2, 2, 3, 5, 6]);
  });

  it('Should NOT be able to merge two arrays ', () => {
    const firstArray = [1, 2, 3, 0, 0, 0];
    const secondArray = [2, 5, 6];
    const firstLength = 3;
    const secondLength = 3;

    expect(merge(firstArray, firstLength, secondArray, secondLength))
      .not.toEqual([1, 2, 3, 2, 5, 6]);
  });


  it('Should NOT be able to merge two arrays ', () => {
    const firstArray = [0];
    const secondArray = [1];
    const firstLength = 0;
    const secondLength = 1;

    expect(merge(firstArray, firstLength, secondArray, secondLength))
      .toEqual([1]);
  });
});
