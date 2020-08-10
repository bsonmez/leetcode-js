const LinkedList = require("../../../utils/data-structures/linked-list");

const { rotateRight } = require("../index");

describe("Rotate", () => {
  it("Should rotate linked list to right direction with given variable ", () => {
    const l1 = new LinkedList();

    l1.append(1);
    l1.append(2);
    l1.append(3);
    l1.append(4);
    l1.append(5);

    const res = {
      next: {
        next: { next: { next: { next: null, value: 3 }, value: 2 }, value: 1 },
        value: 5,
      },
      value: 4,
    };
    expect(rotateRight(l1.head, 2)).toEqual(res);
  });

  it("Should rotate linked list to right direction with given variable ", () => {
    const l1 = new LinkedList();

    l1.append(0);
    l1.append(1);
    l1.append(2);

    const res = {
      next: { next: { next: null, value: 1 }, value: 0 },
      value: 2,
    };
    expect(rotateRight(l1.head, 4)).toEqual(res);
  });
});
