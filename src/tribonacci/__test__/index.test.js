const { tribonacci } = require('../index');

describe('Tribonacci', () => {
  it('Should return the value of Tn.', () => {
    expect(tribonacci(4)).toBe(4);
  });

  it('Should return the value of Tn.', () => {
    expect(tribonacci(25)).toBe(1389537);
  });
});
