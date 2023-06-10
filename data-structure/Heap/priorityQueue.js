class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}
class PriorityQueue {
  constructor() {
    this.value = [];
  }
  bubbleUp() {
    while (heapIndex > 0) {
      let heapIndex = this.value.length - 1;
      const element = this.value[heapIndex];
      // bubbleUp
      let parentIdx = Math.floor((heapIndex - 1) / 2);
      const parent = this.value[parentIdx];

      if (element.priority <= parent.priority) break;
      this.value[heapIndex] = parent;
      this.value[parentIdx] = element;
      heapIndex = parentIdx;
    }
  }
  enqueue(val, priority) {
    const newNode = new Node(val, priority);
    this.value.push(newNode);
    this.bubbleUp();
  }

  sinkDown() {
    let index = 0;
    const length = this.value.length;
    let parent = this.value[index];

    while (true) {
      let l_childIndex = 2 * index + 1;
      let r_childIndex = 2 * index + 2;
      let l_child, r_child;
      let swap = null;

      if (l_childIndex < length) {
        l_child = this.value[l_childIndex];
        if (l_child.priority < parent.priority) {
          swap = l_childIndex;
        }
      }
      if (r_childIndex < length) {
        r_child = this.value[r_childIndex];
        if (
          (swap === null && r_child.priority < parent.priority) ||
          (swap !== null && r_child.priority < l_child.priority)
        ) {
          // swap이 null이라는 건 l_childIndex가 swap에 들어가지 않았을 때 라는 말.
          // left가 부모보다 작거나
          // left가 부모보다 클 때 right보다 left가 작을 경우 if 적용.
          swap = r_childIndex;
        }
      }
      if (swap === null) break;
      this.value[index] = this.value[swap];
      this.value[swap] = parent;
      index = swap;
    }
  }

  dequeue() {
    const root = this.value[0];
    const end = this.value.pop();
    if (this.value.length > 0) {
      this.value[0] = end;
      this.sinkDown();
    }
    return root;
  }
}
