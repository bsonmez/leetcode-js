/* eslint-disable no-param-reassign */
/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */


let countCharacters = function (words, chars) {
  chars = chars.split('');
  let count = 0;

  for (let word of words) {
    let flag = true;
    let temp = chars;

    word.split('').map((w) => {
      if (!temp.includes(w)) {
        flag = false;
      } else {
        let charIndex = temp.findIndex((i) => i === w);
        temp = temp.filter((v, index) => index !== charIndex);
      }
    });

    if (flag) {
      count += word.length;
    }
  }
  return count;
};


module.exports = { countCharacters };
