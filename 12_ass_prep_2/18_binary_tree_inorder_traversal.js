/*

- I peeked, so timings are irrelevant 

https://launchschool.com/lessons/d95e376a/assignments/44561838

Given the root node of a binary tree, implement a
function `inorderTraversal` that returns an
array containing the values of the nodes visited in
an inorder traversal.

Your task is to implement the function iteratively using a stack.

P: (10:21)
- write a function that takes 1 argument:
  - the root of a binary tree ("root")
- and traverses the tree
- and stores its values in "inorder" which means LNR, in an array ("output")
- and outputs this output array

E: (10:23)

      1
       \
        2
        /
       3
[1, null, 2, 3] => [1, 3, 2]


        1
       / \
      2.  3
          / 
         4
          \
           5
[1, 2, 3, null, null, 4, null, null, 5] => [2, 1, 4, 5, 3]

        5
      /
     3
    /
   2
  /
 1

[5, 3, null, 2, null, 1, null] => [1, 2, 3, 5]

         10
      /     \
     5       15
      \      / \
       6    12  21
            /  
           11

[10, 5, 15, null, 6, 12, 21, null, null, 11]) => [5, 6, 10, 11, 12, 15, 21]

D: (10:31)

- stack =  [10];
- curr = 10
- output = [5, 6]

- curr = stack.pop()

L:

while curr is not null
  - push curr onto the stack
  - set curr to curr.left

N:

- curr is stack.pop()
- curr.val -> output

R:

If Curr has a right, 
  - curr = curr.right


A: (11:08)

Variables:

stack = []
curr = root;
output = []

While (stack.length || curr)

  while curr is not null
    - push curr onto the stack
    - set curr to curr.left

  N:

  - curr is stack.pop()
  - curr.val -> output

  R:

  If Curr has a right, 
    - curr = curr.right

return output

C:


         10
      /     \
     5       15
      \      / \
       6    12  21
            /  
           11

[10, 5, 15, null, 6, 12, 21, null, null, 11]) => [5, 6, 10, 11, 12, 15, 21]
*/

function inorderTraversal(root) {
  let stack = [];
  let curr = root;
  let output = [];
  
  while (stack.length || curr) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    
    curr = stack.pop();
    output.push(curr.val);

    curr = curr.right;

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
console.log(inorderTraversal(tree1)); // Output: [1, 3, 2]

const tree2 = buildTree([1, 2, 3, null, null, 4, null, null, 5]);
console.log(inorderTraversal(tree2)); // Output: [2, 1, 4, 5, 3]

const tree3 = buildTree([5, 3, null, 2, null, 1, null]);
console.log(inorderTraversal(tree3)); // Output: [1, 2, 3, 5]

const tree4 = buildTree([10, 5, 15, null, 6, 12, 21, null, null, 11]);
console.log(inorderTraversal(tree4)); // Output: [5, 6, 10, 11, 12, 15, 21]