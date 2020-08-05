const { romanToInt } = require("../index");

describe("Romant to Int", () => {
  it("Should convert roman to integer ", () => {
    expect(romanToInt("LVIII")).toBe(58);
  });
});
