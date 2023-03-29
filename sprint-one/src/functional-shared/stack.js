var Stack = function() {
  var instance = {
    stackSize: 0
  };
  _.extend(instance, stackMethods);
  return instance;
};
var stackTray = {};

var stackMethods = {};
stackMethods.push = function(value) {
  stackTray[this.stackSize] = value;
  this.stackSize++;

  //add value to tray, increase size
};
stackMethods.pop = function() {
  if (this.stackSize > 0) {
    this.stackSize -= 1;
  }
  var topItem = stackTray[this.stackSize];
  delete stackTray[this.stackSize];

  return topItem;
  //remove from top and return
};
stackMethods.size = function() {
  return this.stackSize;
};


