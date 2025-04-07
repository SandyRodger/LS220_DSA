/*

Problem: Find the Maximum Path Sum in a Binary Tree

Description

A path in a binary tree is a sequence of nodes where each node is connected by edges. A path can start and end at any node in the tree, but it must move downwards (from parent to child).

The path sum is the sum of all node values in the path.

Task
Write a function that takes the root of a binary tree and returns the maximum path sum found in the tree.


       -10
       /  \
      9   20
         /   \
        15    7

Valid Paths and Their Sums:
9 → sum = 9
15 → sum = 15
7 → sum = 7
20 → 15 → sum = 35
20 → 7 → sum = 27
-10 → 9 → sum = -1
15 → 20 → 7 → sum = 42 ✅ (This is the maximum)

Expected Output

maxPathSum(root) // 42

Constraints
Each node contains an integer value (positive or negative).
The tree may have negative values.
The path does not need to include the root.

P
E:


E:

       1
        \
         2
          \
           3

([1, null, 2, 3] =>  6

       1
      / \
     2   3
        / 
       4
        \
         5

[1, 2, 3, null, null, 4, null, null, 5] => 13

       5
      / 
     3   
    /   
   2   
  /     
 1       

[5, 3, null, 2, null, 1, null] => 11

       10
      /  \
     5   15   
     \   / \
      6 12 21
        /
        11   
  
[10, 5, 15, null, 6, 12, 21, null, null, 11] => 48

*/


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

function maxPath(head) {

}

function test(num, exp, act) {
  if (exp !== act) {
    console.log('----------------')
    console.log(`example: ${num}`)
    console.log(`expected ${exp}`)
    console.log(`actually got: ${act}`)
  } else {
    console.log(`(-:`)
  }
}

// Test cases
const tree1 = buildTree([1, null, 2, 3]);
test(1, 6, maxPath(tree1)); // Output: [3, 2, 1]

const tree2 = buildTree([1, 2, 3, null, null, 4, null, null, 5]);
test(2, 13, maxPath(tree2)); // Output: [2, 5, 4, 3, 1]

const tree3 = buildTree([5, 3, null, 2, null, 1, null]);
test(3, 11, maxPath(tree3)); // Output: [1, 2, 3, 5]

const tree4 = buildTree([10, 5, 15, null, 6, 12, 21, null, null, 11]);
test(4, 1, maxPath(tree4)); // Output: [6, 5, 11, 12, 21, 15, 10]

-10
/  \
9   20
  /   \
 15    7

Valid Paths and Their Sums:
9 → sum = 9
15 → sum = 15
7 → sum = 7
20 → 15 → sum = 35
20 → 7 → sum = 27
-10 → 9 → sum = -1
15 → 20 → 7 → sum = 42 ✅ (This is the maximum)

const tree5 = buildTree([-10, 9, 20, null, null, 15, 7]);
test(5, 42, maxPath(tree5));
