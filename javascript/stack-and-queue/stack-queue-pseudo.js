"use strict";
const stack = require("./stack");

class pseudoQueue {
  constructor() {
    this.stack1 = new stack();
    this.stack2 = new stack();
  }
  enqueue(value) {
    this.stack1.push(value);
  }
  dequeue() {
    if (this.stack2.isEmpty()) {
      while (this.stack1.peek() != "no nodes in the stack") {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.pop();
  }
}

// let pseudoQueue1= new pseudoQueue();
// pseudoQueue1.enqueue(1)
// pseudoQueue1.enqueue(2)
// pseudoQueue1.enqueue(3)
// console.log(pseudoQueue1);

// pseudoQueue1.dequeue()
// pseudoQueue1.dequeue()
// console.log(pseudoQueue1);
