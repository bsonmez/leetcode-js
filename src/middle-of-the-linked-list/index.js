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
var middleNode = function (head) {
  let curr = head;
  let values = [];

  while (curr) {
    values.push(curr.value);
    curr = curr.next;
  }

  const length = values.length;
  const middle = Math.floor(length / 2);

  // Create a new LinkedList object
  const ll = new LinkedList();
  const newHead = ll.append(values[middle]);
  let current = newHead;

  // Build the linked list from the remaining values
  for (let i = middle + 1; i < length; i++) {
    current.next = ll.append(values[i]);
    current = current.next;
  }

  return newHead;
};

module.exports = { middleNode };
