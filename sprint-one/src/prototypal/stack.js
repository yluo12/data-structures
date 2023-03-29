var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  obj.storage = {};
  return obj;
};

var stackMethods = {};

stackMethods.push = function (value) {
  this.storage[this.size()] = value;
};

stackMethods.pop = function () {
  var length = this.size();
  var topValue = this.storage[length - 1];
  delete this.storage[length - 1];
  return topValue;
};

stackMethods.size = function () {
  return Object.keys(this.storage).length;
};

