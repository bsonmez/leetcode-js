const { removeDuplicates } = require('../index');

describe('Remove Duplicates II', () => {
  it('Should be return removed duplicates array size ', () => {
    const numbers = [0, 0, 1, 1, 1, 1, 2, 3, 3];
    expect(removeDuplicates(numbers)).toBe(7);
  });

  it('Should be return removed duplicates array size ', () => {
    const numbers = [1, 1, 1, 2, 2, 3];
    expect(removeDuplicates(numbers)).toBe(5);
  });
});
