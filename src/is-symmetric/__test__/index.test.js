const BinaryTreeNode = require('../../../utils/data-structures/binary-tree/BinaryTreeNode');

const { isSymmetric } = require('../index');

describe('Is Symmetric', () => {
  it('Should create a binary tree and check and return true', () => {
    const rootNode = new BinaryTreeNode(1);
    const leftNode = new BinaryTreeNode(2);
    const rightNode = new BinaryTreeNode(2);
    const childLeftLeft = new BinaryTreeNode(3);
    const childLeftRight = new BinaryTreeNode(4);
    const childRightLeft = new BinaryTreeNode(4);
    const childRightRight = new BinaryTreeNode(3);

    rootNode.setLeft(leftNode).setRight(rightNode);
    leftNode.setLeft(childLeftLeft).setRight(childLeftRight);
    rightNode.setLeft(childRightLeft).setRight(childRightRight);

    expect(isSymmetric(rootNode)).toBeTruthy();
  });

  it('Should create a binary tree and check and return false', () => {
    const rootNode = new BinaryTreeNode(1);
    const leftNode = new BinaryTreeNode(2);
    const rightNode = new BinaryTreeNode(2);
    const childLeftRight = new BinaryTreeNode(3);
    const childRightRight = new BinaryTreeNode(3);

    rootNode.setLeft(leftNode).setRight(rightNode);
    leftNode.setRight(childLeftRight);
    rightNode.setRight(childRightRight);

    expect(isSymmetric(rootNode)).toBeFalsy();
  });
});
