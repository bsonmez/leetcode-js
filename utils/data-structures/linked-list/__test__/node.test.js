const LinkedListNode = require('../node');

describe('Linked List Node', () => {
  it('should create node with value', () => {
    const node = new LinkedListNode(2);

    expect(node.value).toBe(2);
    expect(node.next).toBeNull();
  });
});
