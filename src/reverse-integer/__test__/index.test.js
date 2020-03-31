const { reverse } = require('../index');

describe('Reverse', () => {
  it('Should be return zero', () => {
    expect(reverse(1534236469)).toBe(0);
  });

  it('Should be return reversed number', () => {
    expect(reverse(123)).toBe(321);
  });

  it('Should be return reversed number', () => {
    expect(reverse(-123)).toBe(-321);
  });

  it('Should be return reversed number', () => {
    expect(reverse(120)).toBe(21);
  });
});
