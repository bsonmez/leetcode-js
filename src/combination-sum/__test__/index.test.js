const { combinationSum } = require('../index');

describe('Combination Sum', () => {
  it('Should find all unique combinations in candidates where the candidate numbers sums to target.', () => {
    const candidates = [2, 3, 6, 7];
    const target = 7;

    expect(combinationSum(candidates, target)).toEqual([
      [2, 2, 3],
      [7],
    ]);
  });

  it('Should find all unique combinations in candidates where the candidate numbers sums to target.', () => {
    const candidates = [2, 3, 5];
    const target = 8;

    expect(combinationSum(candidates, target)).toEqual([
      [2, 2, 2, 2],
      [2, 3, 3],
      [3, 5],
    ]);
  });
});
