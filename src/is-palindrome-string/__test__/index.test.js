const { isPalindrome } = require("../index");

describe("Is Palindrome String", () => {
  it("Should check if the string is palindrome", () => {
    const string = "A man, a plan, a canal: Panama";
    const empty = " ";
    expect(isPalindrome(string)).toBeTruthy();
    expect(isPalindrome(empty)).toBeTruthy();
  });

  it("Should check if the string is NOT palindrome", () => {
    const string = "race a car";
    expect(isPalindrome(string)).toBeFalsy();
  });
});
