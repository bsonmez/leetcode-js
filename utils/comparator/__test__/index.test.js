const Comparator = require('../index');

describe('Comparator', () => {
  it('should compare given two numbers', () => {
    const comparator = new Comparator();

    expect(comparator.equal(2, 3)).toBeFalsy();
    expect(comparator.equal(2, 2)).toBeTruthy();

    expect(comparator.lessThan(2, 2)).toBeFalsy();
    expect(comparator.lessThanOrEqual(2, 2)).toBeTruthy();
    expect(comparator.lessThan(1, 2)).toBeTruthy();

    expect(comparator.greaterThan(2, 2)).toBeFalsy();
    expect(comparator.greaterThanOrEqual(2, 2)).toBeTruthy();
    expect(comparator.greaterThan(3, 2)).toBeTruthy();
  });
});
