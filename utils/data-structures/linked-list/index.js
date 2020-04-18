const LinkedListNode = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
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
