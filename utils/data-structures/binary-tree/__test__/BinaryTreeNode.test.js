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

  it('should return nodes in array and string in order', () => {
    const rootNode = new BinaryTreeNode(5);
    const leftNode = new BinaryTreeNode(10);
    const rightNode = new BinaryTreeNode(15);
    const childLeft = new BinaryTreeNode(20);

    rootNode.setLeft(leftNode).setRight(rightNode);

    leftNode.setLeft(childLeft);

    expect(rootNode.value).toBe(5);
    expect(rootNode.left.value).toBe(10);
    expect(rootNode.left.left.value).toBe(20);
    expect(rootNode.right.value).toBe(15);

    expect(rootNode.orderInArray()).toEqual([20, 10, 5, 15]);
    expect(rootNode.toString()).toBe('20,10,5,15');
  });
});
