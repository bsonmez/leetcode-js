const { isHappy } = require('../index');

describe('Is Happy', () => {
  it('Should calculate if the number equals one', () => {
    expect(isHappy(19)).toBeTruthy();
  });

  it('Should calculate if the number NOT equals one', () => {
    expect(isHappy(42)).toBeFalsy();
  });
});
