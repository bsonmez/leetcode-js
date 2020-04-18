const LinkedList = require('../../../utils/data-structures/linked-list');

const { deleteDuplicates } = require('../index');

describe('Delete Duplicates', () => {
  it('Should create a linked list and delete duplicates', () => {
    const linkedList = new LinkedList();

    linkedList.append(1);
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(3);

    expect(linkedList.toArray()).toEqual([1, 1, 2, 3, 3]);
    expect(deleteDuplicates(linkedList.head)).toEqual([1, 2, 3]);
  });
});
