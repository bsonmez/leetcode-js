const { gcdOfStrings } = require('../index');

describe('GCD Of Strings', () => {
  it('Should return the largest string', () => {
    const str1 = 'ABCABC';
    const str2 = 'ABC';
    expect(gcdOfStrings(str1, str2)).toBe('ABC');
  });

  it('Should return the largest string', () => {
    const str1 = 'ABABAB';
    const str2 = 'ABAB';
    expect(gcdOfStrings(str1, str2)).toBe('AB');
  });

  it('Should return the largest string', () => {
    const str1 = 'LEET';
    const str2 = 'CODE';
    expect(gcdOfStrings(str1, str2)).toBe('');
  });
});
