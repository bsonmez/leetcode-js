/* eslint-disable no-param-reassign */

/**
 * @param {string} S
 * @return {string}
 */
const toGoatLatin = function (S) {
  const words = S.split(' ');
  let goat = [];

  words.map((word, idx) => {
    const first = word.charAt(0);

    if (!first.toLocaleLowerCase().match(/^(a|e|i|o|u)$/)) {
      word = word.slice(1) + first;
    }

    const a = 'a'.repeat(idx + 1);
    word = `${word}ma${a}`;

    goat.push(word);
  });

  goat = goat.toString().replace(/,/g, ' ');

  return goat;
};

module.exports = { toGoatLatin };
