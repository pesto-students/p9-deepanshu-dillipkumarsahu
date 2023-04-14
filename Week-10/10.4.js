function hasPath(n, edges, source, destination) {
  // create adj List
  const adjList = new Map();
  for (let i = 0; i < n; i++) {
    adjList.set(i, []);
  }
  for (let [x, y] of edges) {
    adjList.get(x).push(y);
  }

  // BFS
  const visitedNodes = new Set();
  const queue = [source];
  while (queue.length > 0) {
    const node = queue.shift();
    if (node === destination) {
      return true;
    }
    for (let neighbor of adjList.get(node)) {
      if (!visitedNodes.has(neighbor)) {
        visitedNodes.add(node);
        queue.push(neighbor);
      }
    }
  }
  return false;
}
// 
const n = 6;
const edges = [
  [0, 1],
  [0, 2],
  [3, 5],
  [5, 4],
  [4, 3],
];
const source = 0;
const destination = 1;
console.log(hasPath(n, edges, source, destination));
