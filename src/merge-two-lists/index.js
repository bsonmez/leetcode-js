/* eslint-disable no-param-reassign */
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


let nodeArrays = function (node) {
  const nodeArray = [];
  let currentNode = node;
  while (currentNode) {
    nodeArray.push(currentNode.value);
    currentNode = currentNode.next;
  }
  return nodeArray;
};


let mergeTwoLists = function (l1, l2) {
  if (l1 === null) {
    return l2;
  }
  if (l2 === null) {
    return l1;
  }

  if (l1.value > l2.value) {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
  l1.next = mergeTwoLists(l1.next, l2);


  return l1;
};


module.exports = { mergeTwoLists, nodeArrays };
