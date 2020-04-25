const { generateParenthesis } = require('../index');

describe('Generate Parenthesis', () => {
  it('Should generate all combinations of well-formed parentheses.', () => {
    expect(generateParenthesis(3)).toEqual(['((()))', '(()())', '(())()', '()(())', '()()()']);
  });
});
