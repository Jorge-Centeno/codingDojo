class SLLNode {
  // constructor, other methods, removed for brevity
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SLL {
  constructor() {
    this.head = null;
  }

  addFront(value) {
    var newNode = new SLLNode(value);
    newNode.next = this.head;
    this.head = newNode;
    return this.head;
  }

  removeFront() {
    var removeNode = this.head;
    this.head = removeNode.next;
    removeNode.next = null;
    return this.head;
  }

  front() {
    if (this.head == null) {
      return null;
    } else {
      return this.head.value;
    }
  }
}

var mySLL = new SLL();
console.log(mySLL.front());
mySLL.addFront(18);
console.log(mySLL.front());
mySLL.addFront(5);
mySLL.addFront(73);

//console.log(mySLL);
//mySLL.removeFront();
