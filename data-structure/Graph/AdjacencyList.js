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
  depthFirstSearch(start) {
    const result = [];
    let visited = {};
    const that = this;
    (function dfs(vertex){
      if(!vertex) return null
      visited[vertex] = true;
      result.push(vertex)
      that.adjacencyList[vertex].forEach(neighbor => {
        if(!visited[neighbor]) return dfs(neighbor)
      });
    })(start)
    return result;
  }
}

const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A","B");
g.addEdge("A","C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")

console.log(g.depthFirstSearch("A"));