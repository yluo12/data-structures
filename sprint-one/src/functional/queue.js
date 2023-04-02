var Queue = function() {
  var someInstance = {
    index: 0
  };

  // Use an object with numeric keys to store values
  someInstance.storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    someInstance.storage[someInstance.size()] = value;
  };

  someInstance.dequeue = function() {
    var firstValue = someInstance.storage[0];
    delete someInstance.storage[0];
    for (var key in someInstance.storage) {
      someInstance.storage[key - 1] = someInstance.storage[key];
      delete someInstance.storage[key];
    }
    return firstValue;
  };

  someInstance.size = function() {
    return Object.keys(someInstance.storage).length;
  };

  return someInstance;
};
