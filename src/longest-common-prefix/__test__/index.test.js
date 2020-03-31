const { longestCommonPrefix } = require('../index');

const testArray = ['flower', 'flow', 'flight'];

describe('Longest Common Prefix', () => {
  it('Should find longest Common Prefix ', () => {
    expect(longestCommonPrefix(testArray)).toBe('fl');
  });

  it('Should NOT equal to longest Common Prefix', () => {
    expect(longestCommonPrefix(testArray)).not.toBe('f');
  });
});
