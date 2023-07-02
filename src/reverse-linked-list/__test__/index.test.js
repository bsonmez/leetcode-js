const { reverseListIterative, reverseListRecursive } = require("../index");
const LinkedList = require("../../../utils/data-structures/linked-list");

describe("Reverse Linked List", () => {
  describe("Iterative", () => {
    it("should reverse a linked list", () => {
      const ll = new LinkedList();
      ll.append(1);
      ll.append(2);
      ll.append(3);
      ll.append(4);
      ll.append(5);

      const reversed = reverseListIterative(ll.head);
      expect(reversed).toEqual({
        value: 5,
        next: {
          value: 4,
          next: {
            value: 3,
            next: { value: 2, next: { value: 1, next: null } },
          },
        },
      });
    });
    it("should reverse a linked list with one node", () => {
      const ll = new LinkedList();
      ll.append(1);

      const reversed = reverseListIterative(ll.head);
      expect(reversed).toEqual({ value: 1, next: null });
    });
    it("should reverse a linked list with no nodes", () => {
      const ll = new LinkedList();

      const reversed = reverseListIterative(ll.head);
      expect(reversed).toEqual(null);
    });
  });
  describe("Recursive", () => {
    it("should reverse a linked list", () => {
      const ll = new LinkedList();
      ll.append(1);
      ll.append(2);
      ll.append(3);
      ll.append(4);
      ll.append(5);

      const reversed = reverseListRecursive(ll.head);
      expect(reversed).toEqual({
        value: 5,
        next: {
          value: 4,
          next: {
            value: 3,
            next: { value: 2, next: { value: 1, next: null } },
          },
        },
      });
    });
    it("should reverse a linked list with one node", () => {
      const ll = new LinkedList();
      ll.append(1);

      const reversed = reverseListRecursive(ll.head);
      expect(reversed).toEqual({ value: 1, next: null });
    });
    it("should reverse a linked list with no nodes", () => {
      const ll = new LinkedList();

      const reversed = reverseListRecursive(ll.head);
      expect(reversed).toEqual(null);
    });
  });
});
