const { isPalindrome } = require('../index');

describe('Is Palindrome', () => {
  it('Should check if the number is palindrome', () => {
    expect(isPalindrome(121)).toBeTruthy();
  });

  it('Should check if the number is NOT palindrome', () => {
    expect(isPalindrome(-121)).toBeFalsy();
    expect(isPalindrome(10)).toBeFalsy();
  });
});
