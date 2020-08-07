/* eslint-disable no-param-reassign */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let swapPairs = function (head) {
  if (head === null || head.next === null) return head;
  let temp = head.next;
  head.next = temp.next;
  temp.next = head;
  head.next = swapPairs(head.next);

  return temp;
};

module.exports = { swapPairs };
