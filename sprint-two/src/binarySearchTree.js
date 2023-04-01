var BinarySearchTree = function(value) {
  var newTree = Object.create(bstMethods);
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  return newTree;
};

var bstMethods = {};

bstMethods.insert = function(v) {

  var node = BinarySearchTree(v);
  if (this.value === v) {
    return;
  }
  if (v > this.value && this.right === null) {
    this.right = node;
  }
  if (v < this.value && this.left === null) {
    this.left = node;
  }
  if (v > this.value && this.right !== null) {
    targetNode = this.right;
    this.insert.call(this.right, v);
  }
  if (v < this.value && this.left !== null) {
    targetNode = this.left;
    this.insert.call(this.left, v);
  }

};

bstMethods.contains = function(target) {

  if (this.value === target) {
    return true;
  }
  if (target > this.value) {
    return this.contains.call(this.right, target);
  }
  if (target < this.value) {
    return this.contains.call(this.left, target);
  }
  return false;

};

bstMethods.depthFirstLog = function(func) {
  func(this.value);
  if (this.left !== null) {
    this.depthFirstLog.call(this.left, func);
  }
  if (this.right !== null) {
    this.depthFirstLog.call(this.right, func);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
