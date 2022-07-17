"use strict";
class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  fizzBuzz = (value) => {
    if (value % 15 === 0) {
      value = "FizzBuzz";
    } else if (value % 3 === 0) {
      value = "Fizz";
    } else if (value % 5 === 0) {
      value = "Buzz";
    } else {
      value = value.toString();
    }
    return value;
  };
  fizzBuzzTree() {
    let traverse = (node) => {
      if (node === null) return null;

      let newValue = fizzBuzz(node.value);

      let newNode = new Node(newValue);
      newNode.left = traverse(node.left);
      newNode.right = traverse(node.right);

      return newNode;
    };
  }
}

// module.exports = BinaryTree;
