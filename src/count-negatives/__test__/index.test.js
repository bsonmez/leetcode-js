const { countNegatives } = require("../index");

describe("Count Characters", () => {
  it("Should count negatives correctly", () => {
    const matrix = [
      [4, 3, 2, -1],
      [3, 2, 1, -1],
      [1, 1, -1, -2],
      [-1, -1, -2, -3],
    ];
    expect(countNegatives(matrix)).toBe(8);
  });

  it("Should count negatives correctly", () => {
    const matrix = [
      [3, 2],
      [1, 0],
    ];
    expect(countNegatives(matrix)).toBe(0);
  });

  it("Should count negatives correctly", () => {
    const matrix = [
      [1, -1],
      [-1, -1],
    ];
    expect(countNegatives(matrix)).toBe(3);
  });

  it("Should count negatives correctly", () => {
    const matrix = [[-1]];
    expect(countNegatives(matrix)).toBe(1);
  });
});
