const LinkedList = require("../../../utils/data-structures/linked-list");

const { addTwoNumbers } = require("../index");

describe("Add Two Numbers", () => {
  it("Should sum two linkedlist", () => {
    const l1 = new LinkedList();
    const l2 = new LinkedList();

    l1.append(2);
    l1.append(4);
    l1.append(3);

    l2.append(5);
    l2.append(6);
    l2.append(4);

    expect(l1.toArray()).toEqual([2, 4, 3]);
    expect(l2.toArray()).toEqual([5, 6, 4]);

    expect(addTwoNumbers(l1, l2)).toEqual([7, 0, 8]);
  });
});
