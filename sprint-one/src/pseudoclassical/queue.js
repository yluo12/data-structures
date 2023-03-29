var Queue = function() {
  this.index = 0;
};

var collector = {};

Queue.prototype.enqueue = function(value) {
  this.index++;
  for (var count = this.index - 1; count > 0; count--) {
    collector[count] = collector[count - 1];
  }
  collector['0'] = value;
};

Queue.prototype.dequeue = function() {
  if (this.index > 0) {
    this.index -= 1;
  }
  var firstIn = collector[this.index];
  delete collector[this.index];
  return firstIn;
};

Queue.prototype.size = function() {
  return this.index;
};

