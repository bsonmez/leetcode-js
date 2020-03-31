/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
const hasPathSum = function (root, sum) {
  if (!root) return false;

  if (!(root.left || root.right)) {
    if (root.val === sum) return true;
    return false;
  }

  const diff = sum - root.val;

  return hasPathSum(root.left, diff) || hasPathSum(root.right, diff);
};

module.exports = { hasPathSum };
