/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

let removeNthFromEnd = function (head, n) {
  let targetNode = head;
  let currentNode = head;
  let position = 1;

  if (!head.next) return null;

  while (true) {
    if (!currentNode.next) {
      if (position === n) head = head.next;
      else targetNode.next = targetNode.next.next;
      break;
    } else {
      if (position > n) {
        targetNode = targetNode.next;
      } else {
        position++;
      }
      currentNode = currentNode.next;
    }
  }
  return head;
};


module.exports = { removeNthFromEnd };
