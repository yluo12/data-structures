var Stack = function() {
  var someInstance = {
    i: 0
  };

  // Use an object with numeric keys to store values
  var storage = {};


  // Implement the methods below
  someInstance.push = function(value) {
    storage['key' + someInstance.i] = value;
    someInstance.i++;
    //add value to top
  };

  someInstance.pop = function() {
    if (someInstance.i > 0) {
      someInstance.i -= 1;
    }
    var returnValue = storage['key' + someInstance.i];
    delete storage['key' + someInstance.i];
    return returnValue;
    //remove and return value from top
  };

  someInstance.size = function() {
    return someInstance.i;//return numberof items in stack
  };

  return someInstance;
};
