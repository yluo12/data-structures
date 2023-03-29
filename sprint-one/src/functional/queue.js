var Queue = function() {
  var someInstance = {
    index: 0
  };

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {

    someInstance.index++;
    for (var i = someInstance.index - 1; i > 0; i--) {
      storage[i] = storage[i - 1];
    }
    storage['0'] = value;

    //if index is 0, add at zero
    //other wise, for each key value pair, increment the key
    //add a string to the back of the queue
  };

  someInstance.dequeue = function() {
    if (someInstance.index > 0) {
      someInstance.index -= 1;
    }
    var returnValue = storage[someInstance.index];
    delete storage[someInstance.index];
    return returnValue;
    //remove and return thestring at the front of the queue
  };

  someInstance.size = function() {
    return someInstance.index;//return number of items in queue
  };

  return someInstance;
};
