/* eslint-disable prefer-destructuring */
const LinkedList = require("../../utils/data-structures/linked-list");

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  let ll = new LinkedList();

  let curr1 = l1.head;
  let curr2 = l2.head;
  let sum = 0;
  let carry = 0;

  while (curr1 !== null || curr2 !== null || sum > 0) {
    if (curr1 !== null) {
      sum += curr1.value;
      curr1 = curr1.next;
    }

    if (curr2 !== null) {
      sum += curr2.value;
      curr2 = curr2.next;
    }

    if (sum >= 10) {
      carry = 1;
      sum -= 10;
    }

    ll.append(sum);

    sum = carry;
    carry = 0;
  }

  // No need to use in original solution
  // Converts the nodes into the array
  const nodeArrays = (linkedlist) => {
    const nodeArray = [];
    let currentNode = linkedlist.head;

    while (currentNode) {
      nodeArray.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return nodeArray;
  };

  // return head in original solution
  return nodeArrays(ll);
};

module.exports = { addTwoNumbers };
