const { isPowerOfThree } = require('../index');

describe('Is Power Of Three', () => {
  it('Should be power of three', () => {
    expect(isPowerOfThree(27)).toBeTruthy();
  });

  it('Should NOT be power of three', () => {
    expect(isPowerOfThree(0)).toBeFalsy();
  });

  it('Should be power of three', () => {
    expect(isPowerOfThree(9)).toBeTruthy();
  });

  it('Should NOT be power of three', () => {
    expect(isPowerOfThree(45)).toBeFalsy();
  });
});
