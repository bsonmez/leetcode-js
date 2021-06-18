const { sortColors } = require("../index");

describe("Sort Colors", () => {
  it("Should sort the colors", () => {
    expect(sortColors([2, 0, 2, 1, 1, 0])).toEqual([0, 0, 1, 1, 2, 2]);
  });

  it("Should sort the colors", () => {
    expect(sortColors([2, 0, 1])).toEqual([0, 1, 2]);
  });

  it("Should sort the colors", () => {
    expect(sortColors([0])).toEqual([0]);
  });

  it("Should sort the colors", () => {
    expect(sortColors([1])).toEqual([1]);
  });
});
