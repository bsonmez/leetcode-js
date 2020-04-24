const BinaryTreeNode = require('../../../utils/data-structures/binary-tree/BinaryTreeNode');

const { minDepth } = require('../index');

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

    expect(minDepth(rootNode)).toBe(2);
  });

  it('Should create a binary tree and calculate depth', () => {
    const rootNode = new BinaryTreeNode(3);
    const leftNode = new BinaryTreeNode(9);
    const rightNode = new BinaryTreeNode(20);
    const childRightLeft = new BinaryTreeNode(6);
    const childRightRight = new BinaryTreeNode(5);

    rootNode.setLeft(leftNode).setRight(rightNode);
    rightNode.setLeft(childRightLeft).setRight(childRightRight);

    expect(minDepth(rootNode)).toBe(2);
  });
});
