"use strict";
const Node = require("./Node");

class LinkedList {
  constructor() {
    this.head = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return this;
    } else {
      let currNode = this.head;
      while (currNode.next) {
        currNode = currNode.next;
      }
      currNode.next = newNode;
      return this;
    }
  }

  includes(value) {
    let currNode = this.head;
    while (!this.head) {
      if (currNode.value == value) return true;
      currNode = currNode.next;
    }
    return false;
  }

  toString() {
    let result = "";
    let currNode = this.head;
    while (currNode) {
      result = `${result}${currNode.value} -->`;
      currNode = currNode.next;
    }
    console.log(`${result} NULL`);
  }
}

module.exports = LinkedList;
