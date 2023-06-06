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
  BFS() {
    let node = this.root,
      data = [],
      queue = [];
    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
  DFS() {
    const preOrder = () => {
      let visited = [];
      const travarse = (node) => {
        visited.push(node);
        if (node.left) {
          travarse(node.left);
        } else if (node.right) {
          travarse(node.right);
        }
      };
      traval(this.root);
      return visited;
    };
    const postOrder = () => {
      let visited = [];
      const travarse = (node) => {
        if (node.left) {
          travarse(node.left);
        } else if (node.right) {
          travarse(node.right);
        }
        visited.push(node);
      };

      traval(this.root);
      return visited;
    };
    const inOrder = () => {
      let visited = [];
      const travarse = (node) => {
        node.left && travarse(node.left);
        visited.push(node);
        node.right && travarse(node.right);
      };

      traval(this.root);
      return visited;
    };
    return {
      preOrder,
      postOrder,
      inOrder,
    };
  }
}
