const { maxProfit } = require("../index");

describe("Max Sub Array", () => {
  it("Should calculate the most profitable amount", () => {
    expect(maxProfit([1, 3, 7, 5, 10, 3], 3)).toBe(6);
  });

  it("Should calculate the most profitable amount", () => {
    expect(maxProfit([1, 3, 2, 8, 4, 9], 2)).toBe(8);
  });
});
