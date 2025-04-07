/*

Given the root node of a binary tree, implement a
function `postorderTraversal` that returns an
array containing the values of the nodes visited in
an postorder traversal.

Your task is to implement the function iteratively using a stack.

P:

Write a function that takes the head of a binary tree and traverses it in Post-order traversal (LRN), creating an array of the values as it goes.

E:

[1, null, 2, 3] => [3, 2, 1]

          1
        N   2
          3   N

[1, 2, 3, null, null, 4, null, null, 5] => [2, 5, 4, 3, 1]

             1
        2          3
      N   N     4     N
              N   5

- curr =  1
- Look left , 2
  - Look left , NULL
  - Look right, NULL
- Look right, 3
  - Look left, 4
    - look left NULL
    - look right 5
      - Look left: NULL
      - look Right: NULL
      - Add 5 to output
    - Add 4 to output
  - look right: NULL
  - Add 4 to output
- Add 1 to output

[5, 3, null, 2, null, 1, null] => [1, 2, 3, 5]

                      5
            3                   null
      2         null
1           null

- curr = 5
- look left
  - curr = 3
  - look left
    - left is 2
      - curr = 2
      - look left
        - left is 1
        - curr = 1
        - look left (null)
        - look right (null)
        - add curr.val to output ([1])
      - look right (null)
      - add this node to output ([1, 2])
    - look right (null)
  - look right (null)
  - add this node to output ([1, 2, 3])
- look right (null)
- add this node to output



[10, 5, 15, null, 6, 12, 21, null, null, 11]) => [6, 5, 11, 12, 21, 15, 10]

D:

Go left as far as you can
Go right as far as you can
If you cna go not further, add the value

A:

stack = [root]
output = []
curr = root

while the stack isn't empty
curr = stack.at(-1)
  Go Left ( if there's a curr.left node, push that onto the stack and start again)
    if there's a curr.right node push that onto the 
      if there's a node start again
        if not add val to output

C:
*/

function postorderTraversal(root) {
  let stack1 = [root];
  let stack2 = [];
  let result = [];

  while (stack1.length) {
    let curr = stack1.pop();
    stack2.push(curr);
    if (curr.left) stack1.push(curr.left);
    if (curr.right) stack1.push(curr.right);
  }

  while (stack2.length) {
    result.push(stack2.pop().val)
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
console.log(postorderTraversal(tree1)); // Output: [3, 2, 1]

const tree2 = buildTree([1, 2, 3, null, null, 4, null, null, 5]);
// console.log(tree2.right.left)
console.log(postorderTraversal(tree2)); // Output: [2, 5, 4, 3, 1]

const tree3 = buildTree([5, 3, null, 2, null, 1, null]);
console.log(postorderTraversal(tree3)); // Output: [1, 2, 3, 5]

const tree4 = buildTree([10, 5, 15, null, 6, 12, 21, null, null, 11]);
console.log(postorderTraversal(tree4)); // Output: [6, 5, 11, 12, 21, 15, 10]