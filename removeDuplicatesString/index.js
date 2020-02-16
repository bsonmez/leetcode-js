/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
 var res = []
 for(var i = 0 ; i<S.length; i ++){
   if(S[i] !== res[res.length-1]){
    res.push(S[i])
   }else
   res.pop()
 }
  return res.join('') 
};

console.log(removeDuplicates("azxxzy"))