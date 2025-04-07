/*

https://launchschool.com/lessons/d95e376a/assignments/44561838

Given the root node of a binary tree, implement a
function `inorderTraversal` that returns an
array containing the values of the nodes visited in
an inorder traversal.

Your task is to implement the function iteratively using a stack.

P:
E:

[1, null, 2, 3]) => [1, 3, 2]
[1, 2, 3, null, null, 4, null, null, 5]) => [2, 1, 4, 5, 3]
[5, 3, null, 2, null, 1, null]) => [1, 2, 3, 5]





[10, 5, 15, null, 6, 12, 21, null, null, 11]) => [5, 6, 10, 11, 12, 15, 21]

        10
   5          15
N    6       12    21
  N   N   11   N N   N 

D:
A:

[1, null, 2, 3]) => [1, 3, 2]
[1, 2, 3, null, null, 4, null, null, 5]) => [2, 1, 4, 5, 3]
[5, 3, null, 2, null, 1, null]) => [1, 2, 3, 5]
[10, 5, 15, null, 6, 12, 21, null, null, 11]) => [5, 6, 10, 11, 12, 15, 21]

VARIABLES:

stack = [root]
output = []

LNR:

If there's something to the left, go left
if there's nothing to the left, but something to the right, save the value then go right
if there's nothing left and right save value and go back


C:

*/

function inorderTraversal(root) {
  const result = [];
  const stack = [];
  let curr = root;

  while (curr !== null || stack.length > 0) {
    while (curr !== null) {
      stack.push(curr);
      curr = curr.left;
    }

    curr = stack.pop();
    result.push(curr.val);

    curr = curr.right;
  }

  return result;
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
// console.log(inorderTraversal(tree1)); // Output: [1, 3, 2]

// const tree2 = buildTree([1, 2, 3, null, null, 4, null, null, 5]);
// console.log(inorderTraversal(tree2)); // Output: [2, 1, 4, 5, 3]

// const tree3 = buildTree([5, 3, null, 2, null, 1, null]);
// console.log(inorderTraversal(tree3)); // Output: [1, 2, 3, 5]

const tree4 = buildTree([10, 5, 15, null, 6, 12, 21, null, null, 11]);
// console.log(tree4);
console.log(inorderTraversal(tree4)); // Output: [5, 6, 10, 11, 12, 15, 21]