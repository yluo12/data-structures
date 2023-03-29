class Queue {
  constructor() {
    this.index = 0;
  }

  enqueue(value) {
    this.index++;
    for (var i = this.index; i > 0; i--) {
      collector[i] = collector[i - 1];
    }
    collector['0'] = value;
  }
  dequeue() {
    if (this.index > 0) {
      this.index--;
    }
    var firstIn = collector[this.index];
    delete collector[this.index];
    return firstIn;
  }
  size() {
    return this.index;
  }

}
var collector = {};