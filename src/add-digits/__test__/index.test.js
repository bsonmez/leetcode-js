const { addDigits } = require('../index');

describe('Add Digits', () => {
  it('Should add digists ', () => {
    expect(addDigits(362)).toBe(2);
  });
});
