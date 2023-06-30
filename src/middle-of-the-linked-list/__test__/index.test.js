const { middleNode } = require("../index.js");
const LinkedList = require("../../../utils/data-structures/linked-list");

describe("Middle of the Linked List", () => {
  it("Should return the middle node of the linked list.", () => {
    const l1 = new LinkedList();

    l1.append(1);
    l1.append(2);
    l1.append(3);
    l1.append(4);
    l1.append(5);

    const middle = middleNode(l1.head);
    expect(middle.toArray()).toEqual([3, 4, 5]);
  });

  it("Should return the second middle node.", () => {
    const l1 = new LinkedList();

    l1.append(1);
    l1.append(2);
    l1.append(3);
    l1.append(4);
    l1.append(5);
    l1.append(6);

    const middle = middleNode(l1.head);
    expect(middle.toArray()).toEqual([4, 5, 6]);
  });
});
