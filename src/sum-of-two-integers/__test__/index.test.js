const { getSum } = require('../index');

describe('Get Sum', () => {
  it('Should sum two number binary', () => {
    expect(getSum(2, 4)).toBe(6);
  });

  it('Should sum two number binary', () => {
    expect(getSum(1, 2)).toBe(3);
  });
});
