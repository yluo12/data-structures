var Queue = function() {
  var instance = Object.create(queueMethods);
  instance.index = 0;
  return instance;
};

var collector = {};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.index++;
  for (var count = this.index - 1; count > 0; count--) {
    collector[count] = collector[count - 1];
  }
  collector['0'] = value;
};
queueMethods.dequeue = function() {
  if (this.index > 0) {
    this.index -= 1;
  }
  var returnValue = collector[this.index];
  delete collector[this.index];
  return returnValue;
};
queueMethods.size = function() {
  return this.index;
};
