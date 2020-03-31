const { isAnagram } = require('../index');

describe('Is Anagram', () => {
  it('Should check the word is anagram and return true', () => {
    expect(isAnagram('anagram', 'nagaram')).toBeTruthy();
  });

  it('Should check the word is anagram and return true', () => {
    expect(isAnagram('rat', 'car')).toBeFalsy();
  });
});
