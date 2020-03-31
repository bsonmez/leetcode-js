const { compress } = require('../index');

const testArray = ['a', 'a', 'b', 'b', 'c', 'c', 'c'];

describe('Compress', () => {
  it('Should compress', () => {
    expect(compress(testArray)).toBe(6);
  });
});
