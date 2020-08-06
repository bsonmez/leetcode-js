const { threeSumClosest } = require("../index");

describe("Three Sum Closest", () => {
  it("Should find the closest number to target ", () => {
    const array = [-1, 2, 1, -4];

    expect(threeSumClosest(array, 1)).toBe(2);
  });
});
