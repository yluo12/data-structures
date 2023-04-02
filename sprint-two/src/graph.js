

// Instantiate a new graph
var Graph = function() {
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var key in this) {
    if (key === node.toString()) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // if (Object.keys(this).length !== 1) {
  //   for (var key in this) {
  //     this.removeEdge(key, node);
  //   }
  // }
  for (var key in this) {
    for (var i = 0; i < this[key].length; i++) {
      var currentEdge = this[key][i];
      if (currentEdge === node) {
        this[key].splice(i, 1);
      }
    }
  }
  delete this[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (typeof fromNode === 'function' || typeof toNode === 'function') {
    return 'Check your input!';
  }
  return this[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this[fromNode].push(toNode);
  this[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this[fromNode].splice(this[fromNode].indexOf(toNode), 1);
  this[toNode].splice(this[toNode].indexOf(fromNode), 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this) {
    if (typeof this[key] !== 'function') {
      cb(key);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
addNode: O(1)
contains: O(n)
removeNode: O(n^2)
hasEdge: O(n)
addEdge: O(1)
removeEdge: O(n)
forEachNode: O(n)
 */


