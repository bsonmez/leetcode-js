/**
 * Definition for a binary tree node.
 * function TreeNode(value) {
 *     this.value = value;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
let isSymmetric = function (root) {
  if (!root) return false;

  function isMirror(left, right) {
    if (!left && !right) { return true; }

    if (!left || !right || left.value !== right.value) {
      return false;
    }

    return isMirror(left.left, right.right) && isMirror(left.right, right.left);
  }

  return isMirror(root.left, root.right);
};


module.exports = { isSymmetric };
