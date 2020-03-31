const { rotate } = require('../index');

describe('Rotate', () => {
  it('Should rotate array ', () => {
    const array = [1, 2, 3, 4, 5, 6, 7];
    const number = 3;
    expect(rotate(array, number)).toEqual([5, 6, 7, 1, 2, 3, 4]);
  });

  it('Should rotate array ', () => {
    const array = [-1, -100, 3, 99];
    const number = 2;
    expect(rotate(array, number)).toEqual([3, 99, -1, -100]);
  });

  it('Should rotate array with negative number', () => {
    const array = [-1, -100, 3, 99];
    const number = -1;
    expect(rotate(array, number)).toEqual([-1, -100, 3, 99]);
  });
});
