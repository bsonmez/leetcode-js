const { backspaceCompare } = require('../index');


describe('Backspace Compare', () => {
  it('Should return if they are equal when both are typed into empty text editors. # means a backspace character.', () => {
    const s = 'ab#c';
    const t = 'ab#c';
    expect(backspaceCompare(s, t)).toBeTruthy();
  });

  it('Should return if they are equal when both are typed into empty text editors. # means a backspace character.', () => {
    const s = 'ab##';
    const t = 'c#d#';
    expect(backspaceCompare(s, t)).toBeTruthy();
  });

  it('Should return if they are equal when both are typed into empty text editors. # means a backspace character.', () => {
    const s = 'a#c';
    const t = 'b';
    expect(backspaceCompare(s, t)).toBeFalsy();
  });
});
