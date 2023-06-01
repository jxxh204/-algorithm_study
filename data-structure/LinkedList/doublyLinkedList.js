class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(val) {
    this.val = val;
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (this.length === 1) {
        this.head.next = newNode;
        newNode.prev = this.head;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
    }
    this.length++;

    return this;
  }
  unshift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      const prevNode = this.tail.prev;
      prevNode.next = null;
      this.tail.prev = null;
      this.tail = prevNode;
    }
    this.length--;
    return this;
  }
  shift() {
    console.log("shift");
    const tempHead = this.head;
    if (this.length === 0) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      const nextNode = this.head.next;
      nextNode.prev = null;
      this.head.next = null;
      this.head = nextNode;
    }
    this.length--;
    return tempHead;
  }
  get(index) {
    if (index >= this.length || index < 0) return null;
    if (index === 0) return this.head;
    if (index === this.length - 1) return this.tail;

    const halfLength = Math.floor(this.length / 2);
    if (index <= halfLength) {
      //작
      let count = 0;
      let countNode = this.head;
      while (index !== count) {
        countNode = countNode.next;
        count++;
      }
    } else {
      //크
      count = this.length - 1;
      countNode = this.tail;
      while (index !== count) {
        countNode = countNode.prev;
        count--;
      }
    }
    return countNode;
  }
  set(index, val) {
    let newNode = new Node(val);

    if (index >= this.length) return false;
    if (index < 0) return false;
    if (index === 0) {
      this.head.next.prev = newNode;
      this.head = newNode;
      return true;
    }
    if (index === this.length - 1) {
      this.tail.prev.next = newNode;
      this.tail = newNode;
      return true;
    }
    let getNode = this.get(index);

    const beforeNode = getNode.prev;
    const afterNode = getNode.next;
    beforeNode.next = newNode;
    afterNode.prev = newNode;
    getNode = newNode;
    return true;
  }
}
