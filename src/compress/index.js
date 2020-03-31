/**
 * @param {character[]} chars
 * @return {number}
 */
const compress = function (chars) {
  let i = 0;
  let j = 0;

  while (i < chars.length) {
    if (chars[j] === chars[i]) {
      j += 1;
    } else if (j > i + 1) {
      const count = (j - i).toString().split('');
      chars.splice(i + 1, j - i - 1, ...count);
      i = i + 1 + count.length;
      j = i;
    } else if (j = i + 1) {
      i = j;
      j += 1;
    }
  }

  return chars.length;
};


module.exports = { compress };
