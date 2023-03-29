var Queue = function() {
  var instance = {
    index: 0
  };
  _.extend(instance, queueMethods);
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  return instance;
};
var storage = {};

var queueMethods = {};
queueMethods.enqueue = function(value) {
  this.index++;
  for (var count = this.index - 1; count > 0; count--) {
    storage[count] = storage[count - 1];
  }
  storage['0'] = value;
};
queueMethods.dequeue = function() {
  if (this.index > 0) {
    this.index -= 1;
  }
  var returnValue = storage[this.index];
  delete storage[this.index];
  return returnValue;
};
queueMethods.size = function() {
  return this.index;
};



