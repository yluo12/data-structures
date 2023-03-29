var Stack = function() {
  var someInstance = {};
  someInstance.storage = {};

  // Use an object with numeric keys to store values
  // var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    // var length = Object.keys(someInstance.storage).length;
    someInstance.storage[someInstance.size()] = value;
  };

  someInstance.pop = function() {
    var length = someInstance.size();
    var topValue = someInstance.storage[length - 1];
    delete someInstance.storage[length - 1];
    return topValue;
  };

  someInstance.size = function() {
    return Object.keys(someInstance.storage).length;
  };

  return someInstance;
};
