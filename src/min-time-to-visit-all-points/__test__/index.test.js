const { minTimeToVisitAllPoints } = require("../index");

describe("Min Remove to Make Valid", () => {
  it("Should Calculate time between points", () => {
    expect(
      minTimeToVisitAllPoints([
        [1, 1],
        [3, 4],
        [-1, 0],
      ])
    ).toBe(7);
  });

  it("Should Calculate time between points", () => {
    expect(
      minTimeToVisitAllPoints([
        [3, 2],
        [-2, 2],
      ])
    ).toBe(5);
  });
});
