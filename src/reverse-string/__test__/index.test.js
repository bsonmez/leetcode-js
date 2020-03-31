const { reverseString } = require('../index');

describe('Reverse String', () => {
  it('Should reverse strings ', () => {
    const word = ['h', 'e', 'l', 'l', 'o'];
    expect(reverseString(word)).toEqual(['o', 'l', 'l', 'e', 'h']);
  });

  it('Should reverse strings ', () => {
    const word = ['H', 'a', 'n', 'n', 'a', 'h'];
    expect(reverseString(word)).toEqual(['h', 'a', 'n', 'n', 'a', 'H']);
  });
});
