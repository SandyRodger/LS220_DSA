/*

You are given a binary tree where each node contains an integer value. 
Your task is to implement a function that determines whether the tree is height-balanced.
A binary tree is height-balanced if:
The left and right subtrees of every node differ in height by at most 1.
Example 1 (Balanced Tree)

        5
       / \
      3   8
     / \   \
    1   4   10
Output: true (The tree is balanced)

Example 2 (Unbalanced Tree)

        1
       / 
      2   
     / 
    3  
   /  
  4  
Output: false (The left subtree is too deep compared to the right subtree)

Problem:

Write a function that analyzises a Binary tree (by traversing it) and returns false if a difference of levels greater than 1 is found, otherwise returns true.

Examples:

const tree1 = buildTree([8]); => true
const tree2 = buildTree([5, 3, 7]);
const tree3 = buildTree([2, 8, 4, 3, 9]);
const tree4 = buildTree([6, 2, 8, null, 5]);

        6
       / \
      2   8
       \   
        5   

const tree5 = buildTree([3, 7, 2, 1, 9, 5, 4, null, null, 6, 8, 2, null, null, null, 3]);

        3
       / \
      7   2
     / \  / \
    1   9 5  4
       / \
      6   8
    /
   2
  /
 3 
 


const tree6 = buildTree([9, 4, 7, null, 1, 3, null, 8, 12, null, 3]);

        9
       / \
      4   7 -> shallowest level (2)
       \   
        13  
         \
          8 -> early return here?
         /
       12
      /
     3  -> deepest level (6)

D:

pre/in/post order traversal ? doesn't matter - NLR preorder

The leaf-nodes are the ones to be compared, the others are irrelevant.

So traverse the tree with NLR, when a node has no children look at the depth. save shallowest depth and deepest depth.
if the diff is more than 1 early return false.

DFS - stack or recursion? I'll do a stack
How to keep track of levels? each object in the stack will have a level counter

const tree5 = buildTree([3, 7, 2, 1, 9, 5, 4, null, null, 6, 8, 2, null, null, null, 3]);

        3
       / \
      7   2
     / \  / \
    1   9 5  4
       / \
      6   8
    /
   2
  /
 3 


A:

VARIABLES:

level = 1
stack = [[root, level]] -> root, level 1
shallowest level = 1
deepestLevel = 1

WHILE -> stack isn't empty
  DFS:
    - N: pop off stack top, with level -> [node, level]
    - increment level
    - push R into stack [node.right, level]
    - push L into stack [node.left, level]


RETURN - deepest minus shallowest is less than or equal to 1.

[2, 8, 4, 3, 9]

stack: [2, 1]

current: [2, 1]
level: 2

stack: [[4, 2], [8, 2]]

current: [8, 2]
level: 3

stack: [[4, 2], [9, 3], [3, 3]]

current: [3, 3]

deepest: 3
shallowest: 3

current: [9, 3]
stack: [[4, 2]]

level: 4

*/

function isBalanced(root) {
  let level = 1;
  let stack = [root];
  let shallowest = Infinity;
  let deepest = 1;

  while (stack.length) {
    for (i = stack.length; i > 0; i--) {
      let current = stack.pop();
      if (!current.left && !current.right) {
        deepest = Math.max(deepest, level);
        shallowest = Math.min(shallowest, level);
      } else {
        if (current.right) stack.push(current.right);
        if (current.left) stack.push(current.left);
      }
    }
    level++;
  }
  return (deepest - shallowest) <= 1;
}


class TreeNode {
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
const root = new TreeNode(val);
nodes.push(root);
while (arr.length > 0) {
  const curr = nodes.shift();
  const left_val = arr.shift();
  if (left_val !== null) {
    curr.left = new TreeNode(left_val);
    nodes.push(curr.left);
  }
  if (arr.length > 0) {
    const right_val = arr.shift();
    if (right_val !== null) {
      curr.right = new TreeNode(right_val);
      nodes.push(curr.right);
    }
  }
}
return root;
}

const tree1 = buildTree([8]);
const tree2 = buildTree([5, 3, 7]);
const tree3 = buildTree([2, 8, 4, 3, 9]);
const tree4 = buildTree([6, 2, 8, null, 5]);
const tree5 = buildTree([3, 7, 2, 1, 9, 5, 4, null, null, 6, 8, 2, null, null, null, 3]);
const tree6 = buildTree([9, 4, 7, null, 1, 3, null, 8, 12, null, 3]);

console.log(isBalanced(tree1) === true);
console.log(isBalanced(tree2) === true);
console.log(isBalanced(tree3) === true);
console.log(isBalanced(tree4) === true); 
console.log(isBalanced(tree5) === false);
console.log(isBalanced(tree6) === false); 

function isBalanced(root) {
  if (root === null) return true;
  let minDepth = Infinity;
  let maxDepth = -Infinity;
  let unbalanced = false;
  function traverse(node, level) {
      if (node === null || unbalanced) return;
      if (node.left === null && node.right === null) {
          minDepth = Math.min(minDepth, level);
          maxDepth = Math.max(maxDepth, level);
          if (maxDepth - minDepth >= 2) {
              unbalanced = true;  // Stop further traversal
          }
          return;
      }
      traverse(node.left, level + 1);
      traverse(node.right, level + 1);
  }
  traverse(root, 1);
  return !unbalanced;
}
