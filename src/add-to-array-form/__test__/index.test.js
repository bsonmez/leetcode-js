const { addToArrayForm } = require('../index');

const testArray = [1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3];
const testNumber = 516;

describe('Add To Array From', () => {
  it('Should addToArrayForm', () => {
    expect(addToArrayForm(testArray, testNumber))
      .toMatchObject([1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 5, 7, 9]);
  });
});
