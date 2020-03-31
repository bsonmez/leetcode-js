const { fib } = require('../index');

describe('Fibbonacci', () => {
  it('Should calculate fib ', () => {
    expect(fib(4)).toBe(3);
  });

  it('Should calculate fib ', () => {
    expect(fib(3)).toBe(2);
  });

  it('Should calculate fib ', () => {
    expect(fib(2)).toBe(1);
  });
});
