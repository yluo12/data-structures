var Stack = function() {
  var instance = Object.create(stackMethods);
  instance.stackSize = 0;
  return instance;
};

var stackTray = {};

var stackMethods = {};

stackMethods.push = function(value) {
  stackTray[this.stackSize] = value;
  this.stackSize++;
};
stackMethods.pop = function() {
  if (this.stackSize > 0) {
    this.stackSize -= 1;
  }
  var topItem = stackTray[this.stackSize];
  delete stackTray[this.stackSize];
  return topItem;
};
stackMethods.size = function() {
  return this.stackSize;
};

