class MaxBinaryHeap {
  constructor() {
    this.value = [];
  }
  insert(number) {
    this.value.push(number);
    let heapIndex = this.value.length - 1;
    const element = this.value[heapIndex];

    while (heapIndex > 0) {
      let parentIdx = Math.floor((heapIndex - 1) / 2);
      const parent = this.value[parentIdx];

      if (element <= parent) break;
      this.value[heapIndex] = parent;
      this.value[parentIdx] = element;
      heapIndex = parentIdx;
    }
  }
}
