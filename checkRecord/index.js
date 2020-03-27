/**
 * @param {string} s
 * @return {boolean}
 */

var checkRecord = function(s) {
 var letters =  s.split('')
 const map = {};
 let continuous = false

for(let i=0; i < letters.length; i++ ){
  var previous=letters[i-1];
  var current=letters[i];
  var next = letters[i+1];

  if(current == 'L' &&  previous == current && current == next) continuous=true

  if (map[letters[i]] == null) map[letters[i]] = 0;
    map[letters[i]]++;
  }

  return !(map.A > 1 || continuous )
};

var checkRecordAlternative = function(s) {
  return s.split('A').length <= 2 && s.indexOf('LLL') === -1;
};

console.log(checkRecord("LLPPPLL"))
console.log(checkRecordAlternative("LLPPPLL"))

