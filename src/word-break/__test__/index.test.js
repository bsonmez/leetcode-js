const { wordBreak } = require("../index");

describe("Word Break", () => {
  it("Should return true if string can be segmented into a space-separated sequence of one or more dictionary words.", () => {
    const s = "leetcode";
    const wordDict = ["leet", "code"];
    expect(wordBreak(s, wordDict)).toBeTruthy();
  });
  it("Should return true if string can be segmented into a space-separated sequence of one or more dictionary words.", () => {
    const s = "applepenapple";
    const wordDict = ["apple", "pen"];
    expect(wordBreak(s, wordDict)).toBeTruthy();
  });
  it("Should return false if string can be segmented into a space-separated sequence of one or more dictionary words.", () => {
    const s = "catsandog";
    const wordDict = ["cats", "dog", "sand", "and", "cat"];
    expect(wordBreak(s, wordDict)).toBeFalsy();
  });
  it("Should return true if string can be segmented into a space-separated sequence of one or more dictionary words.", () => {
    const s = "cars";
    const wordDict = ["car", "ca", "rs"];
    expect(wordBreak(s, wordDict)).toBeTruthy();
  });
});
