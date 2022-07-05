"use strict";

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
  //root - left - right
  preOrder() {
    let result = [];
    let traverse = (node) => {
      result.push(node.value);
      // if left go left
      if (node.left) traverse(node.left);
      // if right go right
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }

  // left - root - right
  inOrder() {
    let result = [];
    let traverse = (node) => {
      // if left go left
      if (node.left) traverse(node.left);
      result.push(node.value);
      // if right go right
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }

  //left - right - root
  postOrder() {
    let result = [];
    let traverse = (node) => {
      // if left go left
      if (node.left) traverse(node.left);
      // if right go right
      if (node.right) traverse(node.right);
      result.push(node.value);
    };
    traverse(this.root);
    return result;
  }

  //method 1
  findMax() {
    let max = 0;
    let getMax = (root) => {
      if (root.value > max) {
        max = root.value;
      }
     // console.log(max);
      if (root.left) {
        getMax(root.left);
      }
    //   console.log(max);
      if (root.right) {
        getMax(root.right);
      }
    };
    getMax(this.root);
    return max;
  }

  // method 2 to getmax value
  //    findMax(root) {
  //     if (!root) {
  //       return null;
  //     } else {
  //       let max = root.value;
  //       if (this.findMax(root.left) > max) {
  //         max = this.findMax(root.left);
  //       }

  //       if (this.findMax(root.right) > max) {
  //         max = this.findMax(root.right);
  //       }
  //       return max;
  //     }
  //   }
}

module.exports = BinaryTree;
