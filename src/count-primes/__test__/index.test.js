const { countPrimes } = require('../index');

describe('Count Primes', () => {
  it('Should count primes right', () => {
    expect(countPrimes(10)).toBe(4);
    expect(countPrimes(3)).toBe(1);
    expect(countPrimes(2)).toBe(0);
    expect(countPrimes(499979)).toBe(41537);
  });
});
