/**
 * Definition for a binary tree node.
 * function TreeNode(value) {
 *     this.value = value;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
let maxDepth = function (root) {
  if (root === null) { return 0; }
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

module.exports = { maxDepth };
