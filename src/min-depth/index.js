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
let minDepth = function (root) {
  if (root === null) { return 0; }
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};

module.exports = { minDepth };
