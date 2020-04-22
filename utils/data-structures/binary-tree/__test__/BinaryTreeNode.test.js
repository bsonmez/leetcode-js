const BinaryTreeNode = require('../BinaryTreeNode');

describe('Binary Tree Node', () => {
  it('should return null for all nodes', () => {
    const node = new BinaryTreeNode();

    expect(node).toBeDefined();

    expect(node.value).toBeNull();
    expect(node.left).toBeNull();
    expect(node.right).toBeNull();
  });

  it('should create nodes', () => {
    const rootNode = new BinaryTreeNode(5);
    const leftNode = new BinaryTreeNode(10);
    const rightNode = new BinaryTreeNode(15);

    rootNode.setLeft(leftNode).setRight(rightNode);

    expect(rootNode.value).toBe(5);
    expect(rootNode.left.value).toBe(10);
    expect(rootNode.right.value).toBe(15);
  });
});
