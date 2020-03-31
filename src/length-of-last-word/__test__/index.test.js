const { lengthOfLastWord } = require('../index');

describe('Length Of Last Word', () => {
  it('Should find length Of Last Word', () => {
    expect(lengthOfLastWord('Hello World')).toBe(5);
  });

  it('Should NOT be equal length Of Last Word ', () => {
    expect(lengthOfLastWord('Hello Home')).not.toBe(3);
  });
});
