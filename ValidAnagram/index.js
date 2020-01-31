/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
   if(s.length != t.length) return false 
   const map ={}
    s.toLowerCase().split('').map(c => map[c] = map[c] ? map[c] + 1 : 1 )
    t.toLowerCase().split('').map(c => map[c] = map[c] ? map[c] - 1 : -1)
    return Object.keys(map).every(k => map[k] === 0);
};

console.log(isAnagram('anagram','nagaram'))
console.log(isAnagram('rat','car'))

