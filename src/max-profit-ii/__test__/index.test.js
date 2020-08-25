const { maxProfit } = require("../index");

describe("Max Sub Array", () => {
  it("Should calculate the most profitable amount", () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(7);
  });

  it("Should calculate the most profitable amount", () => {
    expect(maxProfit([1, 2, 3, 4, 5])).toBe(4);
  });

  it("Should calculate the most profitable amount", () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
  });
});
