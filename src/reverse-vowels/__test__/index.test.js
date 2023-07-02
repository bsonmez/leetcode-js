const { reverseVowels } = require("../index");

describe("Reverse Vowels of a String", () => {
  it("Should reverse the vowels of a string", () => {
    const s = "hello";
    expect(reverseVowels(s)).toEqual("holle");
  });

  it("Should reverse the vowels of a string", () => {
    const s = "leetcode";
    expect(reverseVowels(s)).toEqual("leotcede");
  });

  it("Should reverse the vowels of a string", () => {
    const s = "aA";
    expect(reverseVowels(s)).toEqual("Aa");
  });
});
