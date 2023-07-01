const { deleteMiddle } = require("../index.js");
const LinkedList = require("../../../utils/data-structures/linked-list");

describe("Middle of the Linked List", () => {
  it("Should return the middle node of the linked list.", () => {
    const l1 = new LinkedList();

    l1.append(1);
    l1.append(3);
    l1.append(4);
    l1.append(7);
    l1.append(1);
    l1.append(2);
    l1.append(6);

    const deleted = deleteMiddle(l1.head);

    expect(deleted.toArray()).toEqual([1, 3, 4, 1, 2, 6]);
  });

  it("Should return the second middle node.", () => {
    const l1 = new LinkedList();

    l1.append(1);
    l1.append(2);
    l1.append(3);
    l1.append(4);

    const deleted = deleteMiddle(l1.head);
    expect(deleted.toArray()).toEqual([1, 2, 4]);
  });
});
