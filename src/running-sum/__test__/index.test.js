const { runningSum } = require("../index");

describe("Rotate", () => {
  it("Should sum all array elements for every key", () => {
    expect(runningSum([3, 1, 2, 10, 1])).toEqual([3, 4, 6, 16, 17]);
  });

  it("Should sum all array elements for every key", () => {
    expect(runningSum([1, 2, 3, 4])).toEqual([1, 3, 6, 10]);
  });
});
