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
var deleteMiddle = function (head) {
  if (!head.next) {
    return null;
  }
  let slow = head;
  let fast = head;
  let mid = null;

  while (fast && fast.next) {
    fast = fast.next.next;
    mid = slow;
    slow = slow.next;
  }

  mid.next = mid.next.next;

  // convert linked list to to linked list object
  const ll = new LinkedList();

  while (head) {
    ll.append(head.value);
    head = head.next;
  }

  return ll;
};

module.exports = { deleteMiddle };
