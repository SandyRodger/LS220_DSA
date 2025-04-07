/*

https://launchschool.com/lessons/d95e376a/assignments/66169c11

Given the root node of a binary tree, implement a
function `preorderTraversal`, that returns an
array containing the values of the nodes visited in
a preorder traversal.

Your task is to implement the function iteratively using a stack.

P:

Write a function that takes the head of a binary tree and returns an array containing all the values of the nodes in this tree, in the order that they are pre-order-traversed. You have to use a stack.

E

[1, null, 2, 3]); => [1, 2, 3]

- node is 1,
  - to the left is nothing.
  - to the right is 2
    - node is 2
      - the the left is 3
      - to the right is nothing
  - to the left is nothing
- end

[1, 2, 3, null, null, 4, null, null, 5]) => [1, 2, 3, 4, 5]

        1
      2   5
    3    4 
  n   n n  n
  

[5, 3, null, 2, null, 1, null]) => [5, 3, 2, 1]

      5
    3   n
  2   n
1   n


[10, 5, 15, null, 6, 12, 21, null, null, 11]) => [10, 5, 6, 15, 12, 11, 21]

D:

StaCK as an array

A:

[5, 3, null, 2, null, 1, null]) => [5, 3, 2, 1]

VARIABLES:

stack = [root]
output = []

WHILE stack isn't empty
  - add root's top val to output
  - if there's a right node put that at the top of the stack
  - if there's a left node, put that at the top of the stack


C:
*/

// [5, 3, null, 2, null, 1, null]) => [5, 3, 2, 1]

function preorderTraversal(root) {
  const stack = [root];
  const output = [];
  
  while (stack.length) {
    let curr = stack.pop()
    output.push(curr.val);
    if (curr.right) { stack.push(curr.right)};
    if (curr.left) { stack.push(curr.left)};
  }

  return output;
}

class Node {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

// Helper function for test cases
function buildTree(arr) {
  if (arr.length === 0) {
    return null;
  }

  const nodes = [];

  const val = arr.shift();
  const root = new Node(val);
  nodes.push(root);

  while (arr.length > 0) {
    const curr = nodes.shift();

    const leftVal = arr.shift();
    if (leftVal !== null) {
      curr.left = new Node(leftVal);
      nodes.push(curr.left);
    }

    if (arr.length > 0) {
      const rightVal = arr.shift();
      if (rightVal !== null) {
        curr.right = new Node(rightVal);
        nodes.push(curr.right);
      }
    }
  }

  return root;
}


const tree1 = buildTree([1, null, 2, 3]);
console.log(preorderTraversal(tree1)); // Output: [1, 2, 3]

const tree2 = buildTree([1, 2, 3, null, null, 4, null, null, 5]);
console.log(preorderTraversal(tree2)); // Output: [1, 2, 3, 4, 5]

const tree3 = buildTree([5, 3, null, 2, null, 1, null]);
// console.log(tree3.left.left.left.val)
console.log(preorderTraversal(tree3)); // Output: [5, 3, 2, 1]

const tree4 = buildTree([10, 5, 15, null, 6, 12, 21, null, null, 11]);
console.log(preorderTraversal(tree4)); // Output: [10, 5, 6, 15, 12, 11, 21]