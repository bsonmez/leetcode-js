/* eslint-disable radix */
class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }

  toInt(callback) {
    return callback ? callback(this.value) : parseInt(this.value);
  }
}

module.exports = LinkedListNode;
