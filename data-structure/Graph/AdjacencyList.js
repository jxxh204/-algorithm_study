class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(v) {
    if (!this.adjacencyList[v]) this.adjacencyList[v] = [];
  }
  addEdge(v1, v2) {
    if (!this.adjacencyList[v1].includes(v2)) this.adjacencyList[v1].push(v2);
    if (!this.adjacencyList[v2].includes(v1)) this.adjacencyList[v2].push(v1);
  }
  removeEdge(v1, v2) {
    const v2Index = this.adjacencyList[v1].indexOf(v2);
    const v1Index = this.adjacencyList[v2].indexOf(v1);
    if (v2Index !== -1) this.adjacencyList[v1].splice(v2Index, 1);
    if (v1Index !== -1) this.adjacencyList[v2].splice(v1Index, 1);
  }
  removeVertex(v) {
    for (const vertexKey in this.adjacencyList) {
      this.removeEdge(vertexKey, v);
    }
    delete this.adjacencyList[v];
  }
}

const g = new Graph();
g.addVertex("busan");
g.addVertex("seoul");
g.addVertex("yang");

g.addEdge("busan", "seoul");

g.removeVertex("busan");
console.log(g);
