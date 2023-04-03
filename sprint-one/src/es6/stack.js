class Stack {
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

  push (value) {
    this.storage[this.size()] = value;
  }
}