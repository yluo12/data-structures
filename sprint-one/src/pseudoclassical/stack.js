var Stack = function() {
  this.stackSize = 0;
};

var stackTray = {};

Stack.prototype.push = function(value) {
  stackTray[this.stackSize] = value;
  this.stackSize++;
};
Stack.prototype.pop = function() {
  if (this.stackSize > 0) {
    this.stackSize--;
  }
  var topItem = stackTray[this.stackSize];
  delete stackTray[this.stackSize];
  return topItem;
};
Stack.prototype.size = function() {
  return this.stackSize;
};


