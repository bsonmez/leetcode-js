
/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
  var words = S.split(' ');
  var goat = []

  words.map((word,idx)=> {
   var first =  word.charAt(0)
   
   if (!first.toLocaleLowerCase().match(/^(a|e|i|o|u)$/)){
    word = word.slice(1) + first
    }

    a = 'a'.repeat(idx+1)
    word = word+'ma'+a

    goat.push(word)
  })

  goat= goat.toString().replace(/,/g, " ");

  return goat 
};

console.log(toGoatLatin("I speak Goat Latin"))