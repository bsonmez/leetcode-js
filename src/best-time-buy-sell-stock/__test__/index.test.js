const { maxProfit } = require("../index");

// Write test cases to verify the following inputs and outputs:
// Input: [7, 1, 5, 3, 6, 4]
// Output: 5
test("Input: [7, 1, 5, 3, 6, 4] should return 5", () => {
  expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
});

// Input: [7, 6, 4, 3, 1]
// Output: 0
test("Input: [7, 6, 4, 3, 1] should return 0", () => {
  expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
});

// Input: [1, 2]
// Output: 1
test("Input: [1, 2] should return 1", () => {
  expect(maxProfit([1, 2])).toBe(1);
});
