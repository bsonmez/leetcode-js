const LinkedList = require('../../../utils/data-structures/linked-list');

const { mergeTwoLists, nodeArrays } = require('../index');

describe('Merge', () => {
  it('Should merge two sorted linked lists and return it as a new list.', () => {
    const l1 = new LinkedList();
    const l2 = new LinkedList();

    l1.append(-10);
    l1.append(-9);
    l1.append(-7);
    l1.append(-1);
    l1.append(-3);
    l1.append(3);
    l1.append(3);
    l1.append(7);
    l1.append(7);

    l2.append(-6);
    l2.append(-4);
    l2.append(1);
    l2.append(1);
    l2.append(2);
    l2.append(6);

    const head = mergeTwoLists(l1.head, l2.head);
    expect(nodeArrays(head)).toEqual([-10, -9, -7, -6, -4, -1, -3, 1, 1, 2, 3, 3, 6, 7, 7]);
  });
});
