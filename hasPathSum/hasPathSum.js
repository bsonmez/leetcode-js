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
var hasPathSum = function(root, sum) {
    if (!root) return false;

    if (!(root.left || root.right)) {
      if (root.val === sum) return true;
      else return false;
    }
    console.log(root.val)

    let diff = sum - root.val;


    return hasPathSum(root.left, diff) || hasPathSum(root.right, diff);
};

console.log(hasPathSum(sum = 22))
