/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
  A.reverse();
  
  let carry = 0;

  for (let [i, num] of A.entries()) {
    const total = num + K + carry;
    A[i] = total % 10;
    
    carry = Math.floor(total / 10);
    
    K = 0;
  }

  while (carry > 0) {
    A.push(carry % 10);
    carry = Math.floor(carry / 10); 
  }

  return A.reverse();
};

console.log(addToArrayForm([1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3],516))
