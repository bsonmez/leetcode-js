const { majorityElement } = require('../index');

const testArray = [3, 2, 3, 2, 2];


describe('Majority Element', () => {
  it('Should find majority element', () => {
    expect(majorityElement(testArray)).toBe(2);
  });

  it('Should NOT be equal to majority element', () => {
    expect(majorityElement(testArray)).not.toBe(3);
  });

  it('Should be equal to null when the array is empty', () => {
    expect(majorityElement([])).toBeNull();
  });
});
