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

const isPalindrome = function (head) {
  let count = 1;
  let mid = 0;
  let temp = head;
  const tempArr = [];

  if (head === null || head.next === null) return true;

  while (temp.next !== null) {
    temp = temp.next;
    count++;
  }

  mid = Math.floor(count / 2);
  const i = count;

  if (i % 2 === 0) {
    while (count > 0) {
      if (count > mid) {
        tempArr.push(head.val);
      } else if (count <= mid) {
        if (head.val !== tempArr.pop()) return false;
      }
      head = head.next;
      count--;
    }
  } else if (i % 2 === 1) {
    while (count > 0) {
      if (count > mid + 1) {
        tempArr.push(head.val);
      } else if (count <= mid) {
        if (head.val !== tempArr.pop()) return false;
      }
      head = head.next;
      count--;
    }
  }

  return true;
};


module.exports = { isPalindrome };
