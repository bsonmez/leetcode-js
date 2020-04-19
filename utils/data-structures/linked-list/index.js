const LinkedListNode = require('./node');
const Comparator = require('../../comparator');

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;

    this.compare = new Comparator();
  }

  append(value) {
    const newNode = new LinkedListNode(value);

    // If there is no head, assign it as head
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    // Attach the node at the end
    this.tail.next = newNode;
    this.tail = newNode;

    return this;
  }

  delete(value) {
    // if there is no head, then no node to be deleted
    if (!this.head) {
      return null;
    }

    let deletedNode = null;

    // If it is the head, assign second node as head
    if (this.compare.equal(this.head.value, value)) {
      deletedNode = this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;

    if (currentNode !== null) {
      while (currentNode.next) {
      // If the next node deleted then assign it to be next next node
        if (this.compare.equal(currentNode.next.value, value)) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    // if the value is tail
    if (this.compare.equal(this.tail.value, value)) {
      this.tail = currentNode;
    }


    return deletedNode;
  }


  nodeArrays() {
    const nodeArray = [];

    let currentNode = this.head;
    while (currentNode) {
      nodeArray.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodeArray;
  }

  toArray(callback) {
    return this.nodeArrays().map((node) => node.toInt(callback));
  }

  toString(callback) {
    return this.nodeArrays().map((node) => node.toString(callback)).toString();
  }
}


module.exports = LinkedList;
