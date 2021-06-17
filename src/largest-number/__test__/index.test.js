const { largestNumber } = require("../index");

describe("Largest Number", () => {
  it("Should find the largest number with the given array", () => {
    expect(largestNumber([10, 2])).toBe("210");
  });

  it("Should find the largest number with the given array", () => {
    expect(largestNumber([3, 30, 34, 5, 9])).toBe("9534330");
  });

  it("Should find the largest number with the given array", () => {
    expect(largestNumber([1])).toBe("1");
  });

  it("Should find the largest number with the given array", () => {
    expect(largestNumber([10])).toBe("10");
  });
});
