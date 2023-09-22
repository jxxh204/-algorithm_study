"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var adj = {}; // Adjacency list

var sizes = {}; // Sizes of subtrees rooted at each node

function dfs(node) {
  if (sizes[node] !== undefined) return sizes[node];
  var size = 1; // Include the node itself

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (adj[node] || [])[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var neighbor = _step.value;
      size += dfs(neighbor);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  sizes[node] = size;
  return size;
} // Given array of edges


var edges = [[1, 2], [1, 3], [3, 6], [3, 4], [3, 5]]; // Build the adjacency list

for (var _i = 0, _edges = edges; _i < _edges.length; _i++) {
  var _edges$_i = _slicedToArray(_edges[_i], 2),
      u = _edges$_i[0],
      v = _edges$_i[1];

  if (!adj[u]) adj[u] = [];
  adj[u].push(v);
}

var totalPoints = 121; // Run DFS to populate the 'sizes' object

dfs(1);
console.log(sizes); // Calculate the number of points each node should get

var points = {};

for (var _i2 = 0, _Object$entries = Object.entries(sizes); _i2 < _Object$entries.length; _i2++) {
  var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
      node = _Object$entries$_i[0],
      size = _Object$entries$_i[1];

  points[node] = Math.floor(totalPoints * (size / sizes[1]));
}

console.log(points); // Output the result in the order of the unique nodes in the tree

var result = edges.map(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      parent = _ref2[0],
      child = _ref2[1];

  return points[child];
});