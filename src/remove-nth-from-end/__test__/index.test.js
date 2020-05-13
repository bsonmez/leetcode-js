const LinkedList = require('../../../utils/data-structures/linked-list');
const { removeNthFromEnd } = require('../index');

describe('Remove Nth Node From End of List', () => {
  it('Should remove the n-th node from the end of list and return its head.', () => {
    const linkedList = new LinkedList();
    const linkedListResult = new LinkedList();

    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);

    linkedListResult.append(2);
    linkedListResult.append(3);

    expect(removeNthFromEnd(linkedList.head, 3)).toEqual(linkedListResult.head);
  });

  it('Should remove the n-th node from the end of list and return its head.', () => {
    const linkedList = new LinkedList();
    const linkedListResult = new LinkedList();

    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(4);
    linkedList.append(5);

    linkedListResult.append(1);
    linkedListResult.append(2);
    linkedListResult.append(3);
    linkedListResult.append(5);


    expect(removeNthFromEnd(linkedList.head, 2)).toEqual(linkedListResult.head);
  });
});
