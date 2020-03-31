const { singleNumber } = require('../index');

describe('Single Number', () => {
  it('Should find a single number that not repated in the array', () => {
    const arr = [4, 1, 2, 1, 2];
    expect(singleNumber(arr)).toBe(4);
  });

  it('Should find a single number that not repated in the array', () => {
    const arr = [2, 2, 1];
    expect(singleNumber(arr)).toBe(1);
  });

  it('Should find a WRONG single number that not repated in the array', () => {
    const arr = [2, 2, 1];
    expect(singleNumber(arr)).not.toBe(2);
  });
});
