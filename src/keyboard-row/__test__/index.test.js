const { findWords } = require('../index');

const testArray = ['Hello', 'Alaska', 'Dad', 'Peace'];

describe('Find Words', () => {
  it('Should find the words that can be written the same line on Keyword', () => {
    expect(findWords(testArray)).toMatchObject(['Alaska', 'Dad']);
  });

  it('Should NOT find the words that can be written the same line on Keyword', () => {
    expect(findWords(testArray)).not.toMatchObject(['Hello', 'Peace']);
  });
});
