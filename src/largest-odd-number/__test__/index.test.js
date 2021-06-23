const { largestOddNumber } = require("../index");

describe("Largest Odd Number", () => {
  it("Should find the largest odd number", () => {
    expect(largestOddNumber("35427")).toBe("35427");
  });

  it("Should find the largest odd number", () => {
    expect(largestOddNumber("52")).toBe("5");
  });

  it("Should find the largest odd number", () => {
    expect(largestOddNumber("4206")).toBe("");
  });
});
