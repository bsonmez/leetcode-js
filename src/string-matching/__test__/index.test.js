
const { stringMatching } = require('../index');

describe('String Matching', () => {
  it('Should return all strings in words which is substring of another word in any order. ', () => {
    const words = ['mass', 'as', 'hero', 'superhero'];
    expect(stringMatching(words)).toEqual(['as', 'hero']);
  });

  it('Should return all strings in words which is substring of another word in any order. ', () => {
    const words = ['leetcode', 'et', 'code'];
    expect(stringMatching(words)).toEqual(['et', 'code']);
  });

  it('Should return all strings in words which is substring of another word in any order. ', () => {
    const words = ['blue', 'green', 'bu'];
    expect(stringMatching(words)).toEqual([]);
  });
});
