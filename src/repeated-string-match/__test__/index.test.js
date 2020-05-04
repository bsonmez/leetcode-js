const { repeatedStringMatch } = require('../index');

describe('Repeated String Match', () => {
  it('Should return number of repeat', () => {
    expect(repeatedStringMatch('abcd', 'cdabcdab')).toBe(3);
  });
});
