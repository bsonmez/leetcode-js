/* eslint-disable keyword-spacing */
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
 * @param {number} k
 * @return {ListNode}
 */
let rotateRight = function (head, k) {
  if (head === null || head.next === null || k === 0) return head;

  let tail = {};
  let len = 1;

  tail = head;
  while (tail.next) {
    len++;
    tail = tail.next;
  }

  let count = len - (k % len);
  tail.next = head;

  while (count > 0) {
    head = head.next;
    tail = tail.next;
    count--;
  }
  tail.next = null;
  return head;
};

module.exports = { rotateRight };
