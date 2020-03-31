const { containsDuplicate } = require('../index');

const testArray = [1, 2, 3];

describe('Contains Duplicate', () => {
  it('Should containsDuplicate ', () => {
    expect(containsDuplicate(testArray)).toBeFalsy();
  });
});
