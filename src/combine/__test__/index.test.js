const { combine } = require('../index');

describe('Combine', () => {
  it('Should return all possible combinations of k numbers out of 1 ... n.', () => {
    const n = 4;
    const k = 2;

    const result = [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]];
    expect(combine(n, k)).toEqual(result);
  });
});
