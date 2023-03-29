class Stack {
  constructor() {
    this.stackSize = 0;
  }

  push(value) {
    stackTray[this.stackSize] = value;
    this.stackSize++;
  }
  pop() {
    if (this.stackSize > 0) {
      this.stackSize--;
    }
    var topItem = stackTray[this.stackSize];
    delete stackTray[this.stackSize];
    return topItem;
  }
  size() {
    return this.stackSize;
  }

}
var stackTray = {};

