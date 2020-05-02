const { repeatedSubstringPattern } = require('../index');

describe('Remove Duplicates Strings', () => {
  it('Should be remove duplicated strings and return non-duplicated', () => {
    expect(repeatedSubstringPattern('abab')).toBeTruthy();
  });

  it('Should be remove duplicated strings and return non-duplicated', () => {
    expect(repeatedSubstringPattern('aba')).toBeFalsy();
  });

  it('Should be remove duplicated strings and return non-duplicated', () => {
    expect(repeatedSubstringPattern('abcabcabcabc')).toBeTruthy();
  });
});
