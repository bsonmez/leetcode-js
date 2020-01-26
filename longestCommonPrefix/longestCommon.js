/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
   if(strs.length<1)
     return ""

     prefix= strs[0]

    for(i=0; i< strs.length; i++){
     while(strs[i].indexOf(prefix) != 0){
      prefix = prefix.substring(0, prefix.length - 1);
      if (!prefix.length) return "";
     }
    }
    return prefix;
};

var arr = ["flower","flow","flight"]

console.log(longestCommonPrefix(arr))