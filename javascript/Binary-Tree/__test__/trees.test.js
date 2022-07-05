'use strict';
const BinaryTree = require('../binary-tree');
const Node = require('../node');
const BinarySearchTree= require('../../Binary-Tree/Binary-Search-Tree')
let tree = null;

describe("Binary Tree", () => {
    beforeAll(() => {
        let one = new Node(1);
        let two = new Node(2);
        let three = new Node(3);
        let four = new Node(4);
        let five = new Node(5);
        let six = new Node(6);
        let seven = new Node(7);
        let eight = new Node(8);
        let nine = new Node(9);

        one.left = two;
        one.right = three;
        two.left = six;
        six.right = seven;
        seven.left = eight;
        seven.right = nine;
        three.left = four;
        three.right = five;

        tree = new BinaryTree(one);
    });

    test('Can successfully instantiate an empty tree',()=>{
        const newTree = new BinaryTree();
        expect(newTree.root).toBeNull();
    })

    test('Can successfully instantiate a tree with a single root node',()=>{
        let node = new Node(1)
        const newTree = new BinaryTree(node);
        expect(newTree.root.value).toBe(1);
    })

    test('for a Binary Search Tree, can successfully add a left child and right child properly to a node',()=>{
    
        const newTree = new BinarySearchTree();
        newTree.Add(5)
        newTree.Add(6)
        newTree.Add(3)
        expect(newTree.root.left.value).toBe(3);
        expect(newTree.root.right.value).toBe(6);
    })

    test('constructor', () => {
        const newTree = new BinaryTree();
        expect(newTree.root).toBeNull();
        expect(tree.root.value).toEqual(1);
    });
    test('Can successfully return a collection from a preorder traversal', () => {
        let expectedOutput = [1, 2, 6, 7, 8, 9, 3, 4, 5];
        let preOrder = tree.preOrder();
        expect(preOrder).toEqual(expectedOutput);
    });
    test('Can successfully return a collection from an inorder traversal', () => {
        let expectedOutput = [6, 8, 7, 9, 2, 1, 4, 3, 5];
        let inOrder = tree.inOrder();
        expect(inOrder).toEqual(expectedOutput);
    });
    test('Can successfully return a collection from a postorder traversal', () => {
        let expectedOutput = [8, 9, 7, 6, 2, 4, 5, 3, 1];
        let postOrder = tree.postOrder();
        expect(postOrder).toEqual(expectedOutput);
    });

    test('Get Max Value', () => {
        
        let x= tree.findMax(tree.root)
        expect(x).toEqual(9);
    });
})