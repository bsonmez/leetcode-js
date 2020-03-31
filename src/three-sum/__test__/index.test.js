const { threeSum } = require('../index');

describe('Three Sum', () => {
  it('Should find zero by adding numbers in the array ', () => {
    const array = [-1, 0, 1, 2, -1, -4];

    expect(threeSum(array)).toEqual([[-1, -1, 2], [-1, 0, 1]]);
  });
});
