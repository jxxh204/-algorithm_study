class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    const newNode = new Node(val);
    if (!this.root) return (this.root = newNode);

    let currentDepth = this.root;
    while (true) {
      if (val === currentDepth.value) return undefined;
      if (val < currentDepth.value) {
        //left
        if (currentDepth.left === null) {
          currentDepth.left = val;
          return this;
        }
        currentDepth = currentDepth.left;
      } else {
        if (currentDepth.right === null) {
          currentDepth.right = val;
          return this;
        }
        currentDepth = currentDepth.right;
      }
    }
  }
  find(val) {
    if (this.root === null) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (current.value === val) return current;

      if (val < current.value) {
        current = current.left;
      } else if (val > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    return current;
  }
}
