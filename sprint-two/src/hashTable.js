

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit); // []
  // console.log(this._storage);
  var count = this._limit - 1;
  while (count >= 0) {
    this._storage.set(count, []);
    count--;
  }
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket.length !== 0) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i].splice(1, 1, v);
        return;
      }
    }
    bucket.push([k, v]);
  } else {
    bucket.push([k, v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  if (typeof k !== 'string') {
    return undefined;
  }
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
time complexities of all three methods are appoximately O(1)
 */


