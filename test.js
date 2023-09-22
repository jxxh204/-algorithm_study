let adj = {}; // Adjacency list
let sizes = {}; // Sizes of subtrees rooted at each node

function dfs(node) {
  if (sizes[node] !== undefined) return sizes[node];
  let size = 1; // Include the node itself
  for (let neighbor of adj[node] || []) {
    size += dfs(neighbor);
  }
  sizes[node] = size;
  return size;
}

// Given array of edges
const edges = [
  [1, 2],
  [1, 3],
  [3, 6],
  [3, 4],
  [3, 5],
];

// Build the adjacency list
for (const [u, v] of edges) {
  if (!adj[u]) adj[u] = [];
  adj[u].push(v);
}

const totalPoints = 121;

// Run DFS to populate the 'sizes' object
dfs(1);
console.log(sizes);
// Calculate the number of points each node should get
const points = {};
for (const [node, size] of Object.entries(sizes)) {
  points[node] = Math.floor(totalPoints * (size / sizes[1]));
}
console.log(points);
// Output the result in the order of the unique nodes in the tree
const result = edges.map(([parent, child]) => points[child]);
