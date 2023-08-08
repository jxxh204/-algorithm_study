class PriorityQueue {
  constructor() {
    this.values = [];

    this.visited = [];
    this.distances = {};
    this.previous = {};
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.distances[val] = priority;
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
  search(start, end) {}
}

let q = new PriorityQueue();
q.enqueue("A", 99999);
q.enqueue("B", 99999);
q.enqueue("C", 99999);
q.enqueue("D", 99999);
q.enqueue("E", 99999);
q.enqueue("F", 99999);

console.log(q.distances);
