"use strict";
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }
  isEmpty() {
    if (this.front === null || this.length === 0) {
      return true;
    } else {
      return false;
    }
  }
  enqueue(value) {
    
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
      this.length += 1;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
      this.length += 1;
    }
  }
  dequeue() {
  
    if (this.isEmpty()) {
      return "the queue is empty";
    } else {
      const temp = this.front;
      this.front = this.front.next;
      temp.next = null;
      this.length -= 1;
      return temp.value;
    }
  }
  peek() {
   
    if (this.isEmpty()) {
      return null;
    }
    return this.front.value;
  }
}
module.exports = Queue;


let nquee= new Queue
nquee.enqueue(1)
nquee.enqueue(2)
nquee.enqueue(3)

console.log(nquee);

nquee.dequeue(2)


console.log(nquee);