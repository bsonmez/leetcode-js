const { isUgly } = require('../index');

describe('Is Ugly', () => {
  it('Should be not ugly', () => {
    expect(isUgly(8)).toBeTruthy();
  });

  it('Should be not ugly', () => {
    expect(isUgly(6)).toBeTruthy();
  });

  it('Should be ugly', () => {
    expect(isUgly(14)).toBeFalsy();
  });
});
