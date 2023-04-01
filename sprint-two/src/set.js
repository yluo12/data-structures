var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this.contains(item)) {
    this._storage.push(item);
  }
  //check if item is present
  //if not add to this._storage
};

setPrototype.contains = function(item) {
  if (this._storage.includes(0) && item === -0) {
    return false;
  }
  return this._storage.includes(item);
};

setPrototype.remove = function(item) {
  this._storage.splice(this._storage.indexOf(item), 1);
  // array.splice(index, numberOfItem)
};

/*
 * Complexity: What is the time complexity of the above functions?
.add = O(n)
.contains = O(n)
.remove = O(n)
 */
