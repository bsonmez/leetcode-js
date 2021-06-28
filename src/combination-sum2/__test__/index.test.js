const { combinationSum2 } = require("../index");

describe("Combination Sum", () => {
  it("Should find all unique combinations in candidates where the candidate numbers sums to target.", () => {
    const candidates = [10, 1, 2, 7, 6, 1, 5];
    const target = 8;

    expect(combinationSum2(candidates, target)).toEqual([
      [1, 1, 6],
      [1, 2, 5],
      [1, 7],
      [2, 6],
    ]);
  });

  it("Should find all unique combinations in candidates where the candidate numbers sums to target.", () => {
    const candidates = [2, 5, 2, 1, 2];
    const target = 5;

    expect(combinationSum2(candidates, target)).toEqual([[1, 2, 2], [5]]);
  });
});
