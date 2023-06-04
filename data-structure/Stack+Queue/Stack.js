class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.size = 0;
    this.first = null;
    this.last = null;
  }
  unshift(val) {
    const newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = this.first;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    this.size++;
    return this;
  }
  shift() {
    let shiftNode = this.first;

    if (this.size === 0) return false;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = shiftNode.next;
    }

    this.size--;
    return shiftNode;
  }
}
