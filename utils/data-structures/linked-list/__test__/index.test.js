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

  it('should delete head node from the linkedlist', () => {
    const linkedList = new LinkedList();

    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();

    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);

    expect(linkedList.toString()).toBe('1,2,3');

    linkedList.delete(1);

    expect(linkedList.head.value).toBe(2);
    expect(linkedList.toString()).toBe('2,3');
  });

  it('should delete a node from the linkedlist', () => {
    const linkedList = new LinkedList();

    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();

    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);

    expect(linkedList.toString()).toBe('1,2,3');

    linkedList.delete(2);

    expect(linkedList.head.value).toBe(1);
    expect(linkedList.toString()).toBe('1,3');
  });

  it('should delete tail node from the linkedlist', () => {
    const linkedList = new LinkedList();

    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();

    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);

    expect(linkedList.toString()).toBe('1,2,3');

    linkedList.delete(3);

    expect(linkedList.tail.value).toBe(2);
    expect(linkedList.toString()).toBe('1,2');
  });
});
