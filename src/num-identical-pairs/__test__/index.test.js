const { numIdenticalPairs } = require("../index");

describe("num Identical Pairs", () => {
  it("Should find indentical", () => {
    expect(numIdenticalPairs([1, 1, 1, 1])).toBe(6);
  });
});
