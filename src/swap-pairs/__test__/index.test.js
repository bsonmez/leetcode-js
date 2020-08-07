const LinkedList = require("../../../utils/data-structures/linked-list");
const { swapPairs } = require("../index");

const l1 = new LinkedList();

l1.append(1);
l1.append(2);
l1.append(3);
l1.append(4);

describe("Swap Pairs", () => {
  it("Should swap nodes in every two nodes", () => {
    const res = {
      next: { next: { next: { next: null, value: 3 }, value: 4 }, value: 1 },
      value: 2,
    };
    expect(swapPairs(l1.head)).toEqual(res);
  });
});
