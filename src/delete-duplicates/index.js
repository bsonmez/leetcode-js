/**
 * This solution is slight different then actually solution.
 * As an extra, the solution uses linkedlist from utils/data-structures/linked-list
 *
 *  Definition for singly-linked list.
 * function ListNode(value) {
 *     this.value = value;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function (head) {
  if (head === null || head.next === null) return head;

  let prev = head;
  let current = prev.next;

  while (current) {
    if (prev.value === current.value) {
      prev.next = current.next;
      current = prev.next;
    } else {
      prev = current;
      current = current.next;
    }
  }

  // No need to use in original solution
  // Converts the nodes into the array
  const nodeArrays = () => {
    const nodeArray = [];
    let currentNode = head;
    while (currentNode) {
      nodeArray.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return nodeArray;
  };

  // return head in original solution
  return nodeArrays();
};

module.exports = { deleteDuplicates };
