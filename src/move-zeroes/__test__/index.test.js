const { moveZeroes } = require("../index");

describe("Move Zeros", () => {
  it("Should move zeros at the end", () => {
    expect(moveZeroes([0, 0, 1])).toEqual([1, 0, 0]);
    expect(moveZeroes([0, 1, 0, 3, 12])).toEqual([1, 3, 12, 0, 0]);
  });
});
