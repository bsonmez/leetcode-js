const { generate } = require('../index');

describe('Pascals Triangle', () => {
  it('Should generate pascals triangle', () => {
    expect(generate(5)).toEqual([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]);

    expect(generate(3)).toEqual([[1], [1, 1], [1, 2, 1]]);

    expect(generate(4)).toEqual([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]]);
  });
});
