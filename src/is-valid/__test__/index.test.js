
const { isValid } = require('../index');

describe('Is Valid', () => {
  it('Should determine if the input string is valid.', () => {
    expect(isValid('()')).toBeTruthy();
    expect(isValid('()[]{}')).toBeTruthy();
    expect(isValid('{[]}')).toBeTruthy();
  });

  it('Should determine if the input string is valid.', () => {
    expect(isValid('([)]')).toBeFalsy();
    expect(isValid('(]')).toBeFalsy();
  });
});
