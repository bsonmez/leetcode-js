# Linked List

Linked List is a linear data structure. That linear order is not given by physical place in the memory. Instead, each element(node) points to the next one. It is a data structure consisting of a group of nodes which together represent a sequence.This structure allows for efficient insertion or removal of elements from any position in the sequence during iteration. Faster access, such as random access, is not feasible. Arrays have better cache locality as compared to linked lists.

![Linked List](https://www.cs.cmu.edu/~adamchik/15-121/lectures/Linked%20Lists/pix/linkedlist.bmp)

To run tests simply run:

```
yarn t linked-list
```

## Include

- [x] append
- [ ] prepend
- [x] delete
- [ ] find
- [ ] deleteTail
- [ ] deleteHead

## Usage

```js
const linkedList = new LinkedList();

linkedList.append(1); // 1
linkedList.append(2); // 1->2
linkedList.append(6); // 1->2->6

linkedList.delete(2); // 1->6
```

## References

- [CMU](https://www.cs.cmu.edu/~adamchik/15-121/lectures/Linked%20Lists/linked%20lists.html)
- [Wikipedia](https://en.wikipedia.org/wiki/Linked_list)