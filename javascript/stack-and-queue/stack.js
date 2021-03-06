"use strict";
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }
  isEmpty() {
    if (this.top === null) {
      return true;
    } else {
      return false;
    }
  }
  push(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.top = newNode;
      this.length += 1;
    } else {
      newNode.next = this.top;
      this.top = newNode;
      this.length += 1;
    }
  }
  pop() {
    if (this.isEmpty()) {
      console.log("No Nodes are left in the stack");
      return false;
    }
    const temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    this.length -= 1;
    return temp.value;
  }
  peek() {
    if (this.isEmpty()) {
      return "no nodes in the stack";
    } else {
      return this.top.value;
    }
  }
}

module.exports = Stack;

let nquee= new Stack
nquee.push(1)
nquee.push(2)
nquee.push(3)

console.log(nquee);
nquee.pop()

console.log(nquee);