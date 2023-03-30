var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.head === null && list.tail === null) {
      list.head = newNode;
      list.tail = newNode;
      return;
    }
    var lastNode = list.tail; // find the last node
    lastNode.next = newNode; // set new node to be the last one in the list
    list.tail = newNode; // set new tail
  };

  list.removeHead = function() {
    if (list.head === null) {
      return;
    }
    if (list.head === list.tail) {
      var result = list.head.value;
      list.head = null;
      list.tail = null;
      return result;
    }
    var former = list.head.value;
    list.head = list.head.next;
    return former;
  };

  list.contains = function(target) {

    var currentNode = list.head;
    while (currentNode !== null) {
      if (currentNode.value === target) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }

    return false;

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
// linkedList.addToTail: O(1)
// linkedList.removeHead: O(1)
// linkedList.contains: O(n)
