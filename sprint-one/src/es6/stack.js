class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  push (value) {
    this.storage[this.size()] = value;
  }

  pop () {
    var length = this.size();
    var topValue = this.storage[length - 1];
    delete this.storage[length - 1];
    return topValue;
  }

  size () {
    return Object.keys(this.storage).length;
  }

}