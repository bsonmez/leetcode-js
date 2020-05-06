const { minPathSum } = require('../index');

describe('Min Path Sum', () => {
  it('Should find a path from top left to bottom right which minimizes the sum of all numbers along its path.', () => {
    const grid = [
      [1, 3, 1],
      [1, 5, 1],
      [4, 2, 1],
    ];
    expect(minPathSum(grid)).toBe(7);
  });

  it('Should find a path from top left to bottom right which minimizes the sum of all numbers along its path.', () => {
    const grid = [
      [1, 2],
      [1, 1],
    ];
    expect(minPathSum(grid)).toBe(3);
  });

  it('Should find a path from top left to bottom right which minimizes the sum of all numbers along its path.', () => {
    const grid = [
      [1, 2, 5],
      [3, 2, 1],
    ];
    expect(minPathSum(grid)).toBe(6);
  });
});
