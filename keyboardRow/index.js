/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  const firstRow = /^[qwertyuiop]*$/i
  const secondRow = /^[asdfghjkl]*$/i
  const thirdRow = /^[zxcvbnm]*$/i

    return words.filter(w=>{
      if(firstRow.test(w) || secondRow.test(w) || thirdRow.test(w)) return true
      return false
    })
};

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]))