/**
 * @param {string[]} words
 * @return {string[]}
 */

let stringMatching = function (words) {
  words.sort((a, b) => a.length - b.length);

  const res = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (words[j].includes(words[i])) {
        res.push(words[i]);
        break;
      }
    }
  }

  return res;
};

module.exports = { stringMatching };
