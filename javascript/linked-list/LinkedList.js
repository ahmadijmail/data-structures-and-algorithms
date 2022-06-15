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

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.length++;
      return this;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
      this.length++;
      return this;
    }
  }

  insertBefore(value, newValue) {
    let newNode = new Node(newValue);
    let curr = this.head;
    let prev = null;
    while (curr) {
      if (curr.value === value) {
        if (prev === null) {
          this.head = newNode;
          newNode.next = curr;
        } else {
          prev.next = newNode;
          newNode.next = curr;
        }
        this.length++;
        return;
      }
      prev = curr;
      curr = curr.next;
    }
  }
  insertAfter(value, newValue) {
    let newNode = new Node(newValue);
    let curr = this.head;
    while (curr) {
      if (curr.value === value) {
        newNode.next = curr.next;
        curr.next = newNode;
        this.length++;
        return;
      }
      curr = curr.next;
    }
  }
  kthFromEnd(k) {
    let curr = this.head;
    let count = 0;
    while (curr) {
      count++;
      curr = curr.next;
    }
    if (k > count) {
      return 'Exception';
    }
    if (k < 1) {
      return 'Exception';
    }
    curr = this.head;
    for (let i = 0; i < count - k; i++) {
      curr = curr.next;
    }
    return curr.value;
  }

}

module.exports = LinkedList;
