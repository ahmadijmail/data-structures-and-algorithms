"use strict";

const Node = require("../Binary-Tree/node");

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  Add(value) {
    if (!this.root) {
      this.root = new Node(value);
    }
    if (this.root.value > value) {
      if (!this.left) {
        this.root.left = new Node(value);
      }
    } else if (this.root.value < value) {
      if (!this.right) {
        this.root.right = new Node(value);
      }
    }
  }

  Contains(value) {
    if (!this.root) {
      return false;
    } else if (this.root.left.value == value || this.root.right.value == value) {
      return true;
    } else return false
    
  }

 
}

module.exports = BinarySearchTree;

let newtree = new BinarySearchTree();

newtree.Add(7);
newtree.Add(2);
newtree.Add(3);
newtree.Add(8);
console.log(newtree);
console.log(newtree.Contains(3));
