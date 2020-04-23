const BinaryTreeNode = require('../../../utils/data-structures/binary-tree/BinaryTreeNode');

const { maxDepth } = require('../index');

describe('Max Depth', () => {
  it('Should create a binary tree and calculate depth', () => {
    const rootNode = new BinaryTreeNode(-8);
    const leftNode = new BinaryTreeNode(-6);
    const rightNode = new BinaryTreeNode(7);
    const childLeftLeft = new BinaryTreeNode(6);
    const childLeftLeftRight = new BinaryTreeNode(5);

    rootNode.setLeft(leftNode).setRight(rightNode);
    leftNode.setLeft(childLeftLeft);
    childLeftLeft.setLeft(childLeftLeftRight);

    expect(maxDepth(rootNode)).toBe(4);
  });
});
