/*

https://launchschool.com/lessons/d95e376a/assignments/66169c11

// Given the root node of a binary tree, implement a
// function `preorderTraversal`, that returns an
// array containing the values of the nodes visited in
// a preorder traversal.

// Your task is to implement the function iteratively using a stack.

P:

- Write a function that takes 1 arg:
  - head of a binary tree ("root")
- The function should traverse the tree
- The values of each node should be stored
- The function will output an array containing these node values in a pre-order sequence
  - this means NLR

E:
      1
       \
        2
       /
      3

[1, null, 2, 3] =>  [1, 2, 3]

      1
     /  \
    2    3
       /
      4
       \
        5

[1, 2, 3, null, null, 4, null, null, 5] =>[1, 2, 3, 4, 5]

[5, 3, null, 2, null, 1, null] => [5, 3, 2, 1]

[10, 5, 15, null, 6, 12, 21, null, null, 11] => [10, 5, 6, 15, 12, 11, 21]

D:

      1
     /  \
    2    3
       /
      4
       \
        5

[1, 2, 3, null, null, 4, null, null, 5] =>[1, 2, 3, 4, 5]

Stack => []
curr = 5
output = [1, 2, 3, 4, 5]

- while the stack isn't empty
  - curr = stack.pop()
  - push curr.val onto output
  - if it isn't null, push curr.right onto stack
  - if it isn't null, push curr.left onto stack


A:


[1, 2, 3, null, null, 4, null, null, 5] =>[1, 2, 3, 4, 5]

Stack => []
curr = 5
output = [1, 2, 3, 4, 5]

- while the stack isn't empty
  - curr = stack.pop()
  - push curr.val onto output
  - if it isn't null, push curr.right onto stack
  - if it isn't null, push curr.left onto stack

C:
*/

// function preorderTraversal(root) {

//   let stack = [root];
//   let output = [];

//   while (stack.length) {
//     let curr = stack.pop();
//     output.push(curr.val);
//     if (curr.right) stack.push(curr.right);
//     if (curr.left) stack.push(curr.left);
//   }

//   return output
// }

// recursion:

// function preorderTraversal(stack, output = []) {

//   if (!stack.length) return output;

//   let curr = stack.pop();
//   output.push(curr.val);
//   if (curr.right) stack.push(curr.right);
//   if (curr.left) stack.push(curr.left);
//   return preorderTraversal(stack, output)

// }

// alt

// function preorderTraversal(curr, stack = [], output = [], firstCall = true) {

//   if (firstCall) {
//     stack.push(curr);
//     firstCall = false;
//   }

//   if (!stack.length) return output;

//   curr = stack.pop();
//   output.push(curr.val);
//   if (curr.right) stack.push(curr.right);
//   if (curr.left) stack.push(curr.left);
//   return preorderTraversal(curr, stack, output, firstCall)
// }



class Node {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

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

function preorderTraversal(root) {
  let stack = [root];
  let output = [];
  while (stack.length) {
    let curr = stack.pop()
    output.push(curr.val);
    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);
  }
  return output;
}

const tree1 = buildTree([1, null, 2, 3]);
console.log(preorderTraversal(tree1)); // Output: [1, 2, 3]

const tree2 = buildTree([1, 2, 3, null, null, 4, null, null, 5]);
console.log(preorderTraversal(tree2)); // Output: [1, 2, 3, 4, 5]

const tree3 = buildTree([5, 3, null, 2, null, 1, null]);
console.log(preorderTraversal(tree3)); // Output: [5, 3, 2, 1]

const tree4 = buildTree([10, 5, 15, null, 6, 12, 21, null, null, 11]);
console.log(preorderTraversal(tree4)); // Output: [10, 5, 6, 15, 12, 11, 21]
