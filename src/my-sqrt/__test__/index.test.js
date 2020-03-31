const { mySqrt } = require('../index');

describe('My Sqrt', () => {
  it('Should calculate sqrt', () => {
    expect(mySqrt(4)).toBe(2);

    expect(mySqrt(8)).toBe(2);
  });

  it('Should NOT equal to calculated sqrt', () => {
    expect(mySqrt(16)).not.toBe(2);

    expect(mySqrt(9)).not.toBe(2);
  });
});
