const LinkedList = require('../index');

describe('Linked List', () => {
  it('should add node to empty linkedlist', () => {
    const linkedList = new LinkedList();

    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();

    linkedList.append(1);
    linkedList.append(2);

    expect(linkedList.toString()).toBe('1,2');
  });
});
