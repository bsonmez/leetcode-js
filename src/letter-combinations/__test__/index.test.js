const { letterCombinations } = require('../index');

describe('Letter Combinations', () => {
  it('Should return all possible letter combinations that the number could represent.', () => {
    expect(letterCombinations('23')).toEqual([
      'ad', 'ae', 'af',
      'bd', 'be', 'bf',
      'cd', 'ce', 'cf',
    ]);
  });
});
