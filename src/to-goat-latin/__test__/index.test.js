const { toGoatLatin } = require('../index');

describe('To Goat Latin', () => {
  it('Should be able to speak goat :)', () => {
    expect(toGoatLatin('I speak Goat Latin')).toEqual('Imaa peaksmaaa oatGmaaaa atinLmaaaaa');
  });

  it('Should be able to speak goat again :)', () => {
    expect(toGoatLatin('The quick brown fox jumped over the lazy dog'))
      .toEqual('heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa');
  });

  it('Should be not able to get tihs time :(', () => {
    expect(toGoatLatin('The quick brown fox jumped over the lazy dog'))
      .not.toEqual('heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa what azylmaaaaaaaaa ogdmaaaaaaaaaa');
  });
});
