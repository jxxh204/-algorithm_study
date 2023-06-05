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
}
