const { removeDuplicates } = require('../index');

describe('Remove Duplicates', () => {
  it('Should be return removed duplicates array size ', () => {
    const numbers = [1, 1, 2, 3];
    expect(removeDuplicates(numbers)).toBe(3);
  });

  it('Should be return removed duplicates array size ', () => {
    const numbers = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    expect(removeDuplicates(numbers)).toBe(5);
  });

  it('Should be return removed duplicates array size ', () => {
    const numbers = [1, 1, 2];
    expect(removeDuplicates(numbers)).toBe(2);
  });

  it('Should NOT be equal removed duplicates array size ', () => {
    const numbers = [1, 1, 2, 3];
    expect(removeDuplicates(numbers)).not.toBe(1);
  });
});
