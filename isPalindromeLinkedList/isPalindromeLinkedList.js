/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

var isPalindrome = function(head) {
  var count = 1;
  var mid = 0;
  var temp = head;
  var tempArr = [];
  
  if(head === null || head.next === null) return true
  
  while(temp.next !== null) {
      temp = temp.next;
      count++
  }
  
  mid = Math.floor(count/2)
  var i = count;
  
  if(i%2 === 0) {
      while(count > 0) {
          if(count > mid) {
              tempArr.push(head.val);
          } else if (count <= mid) {
              if(head.val !== tempArr.pop()) return false
          }
          head = head.next;
          count--;
      }
  } else if (i%2 === 1) {
      while(count > 0) {
          if(count > mid + 1) {
              tempArr.push(head.val);
          } else if (count <= mid) {
              if(head.val !== tempArr.pop()) return false
          }
          head = head.next;
          count--;
      }
  }
     
  return true
};

console.log(isPalindrome([1,2]))

