const LinkedList = require("../../utils/data-structures/linked-list");

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
var reverseListIterative = function (head) {
  let prev = null;
  let curr = head;

  while (curr) {
    let next = null;
    // save next
    next = curr.next;
    // reverse
    curr.next = prev;
    // advance prev and curr
    prev = curr;
    curr = next;
  }

  return prev;
};

var reverseListRecursive = function (head) {
  // base case
  if (!head || !head.next) {
    return head;
  }

  // go all the way to the end
  let reversedListHead = reverseListRecursive(head.next);

  // add reverse myself
  head.next.next = head;
  head.next = null;
  // go up
  return reversedListHead;
};

module.exports = {
  reverseListIterative,
  reverseListRecursive,
};
