/*
https://launchschool.com/lessons/bb36c4cc/assignments/a4eceee3

Given the root node of a binary tree containing only single-digit
integers (0-9), implement a function `calculatePathSum` that
computes the total sum of all root-to-leaf paths.
A root-to-leaf path is a sequence of nodes from the root to a
leaf, where each node's value represents a digit in the number
formed by that path.

Example 2:
    8
   / \
  2   9
 / \
6   4

In this tree, there are three root-to-leaf paths:
8 -> 2 -> 6 (representing the number 826)
8 -> 2 -> 4 (representing the number 824)
8 -> 9 (representing the number 89)
The total sum would be 826 + 824 + 89 = 1739.

Start: 11:33
End: 13:22
total: 1:49

P:

- Write a function that takes a binary tree root-node. 
- The function must traverse each unique root-to-leaf path and collect the values of the nodes. 
  - a path is finished (and therefore number is complete) when the node has no more children
- Each node contains a single positive integer (0 - 9)
- The numbers are added sequencially as digits, rather than as additions (so 3, 4 => 34, not 7)
- Once each path has been calculated, they must be summed together and returned.

E:

const tree1 = buildTree([8]);
console.log(calculatePathSum(tree1) === 8);

  - The tree has only one value. 
  - can a tree have no values?

const tree2 = buildTree([5, 3, 7]);
console.log(calculatePathSum(tree2) === 110);

    5
   / \
  3   7

In this tree, there are two root-to-leaf paths:
5 -> 3 (representing the number 53)
5 -> 7 (representing the number 57)
The total sum would be 53 + 57 = 110.

const tree3 = buildTree([2, 8, 4, 3, 9]);
console.log(calculatePathSum(tree3) === 596);

    2
   / \
  8   4
 / \
3   9

- 283 + 289 + 24

const tree4 = buildTree([6, 2, 8, null, 5]);
console.log(calculatePathSum(tree4) === 693);

    6
   / \
  2   8
   \
    5
- 625 + 68

const tree5 = buildTree([3, 7, 2, 1, 9, 5, 4, null, null, 6, 8]);
console.log(calculatePathSum(tree5) === 8614);

- not sure

const tree6 = buildTree([9, 4, 7, null, 1, 3, null, null, 8]);
console.log(calculatePathSum(tree6) === 10391);

D:

    2
   / \
  8   4
 / \
3   9

- 283 + 289 + 24

- depth first searches (stack) NLR (preorder)

function preorderTraversal(root) {
  const stack = [];

  function traverse(node) {
    if (node === null) {
      return;
    }
    stack.push(node.val);
    traverse(node.left);
    traverse(node.right);
  }

  traverse(root);
  return stack;
}

- add digits into a string
- when final node in path is reached, add to sumTotal

A:

const tree3 = buildTree([2, 8, 4, 3, 9]);
console.log(calculatePathSum(tree3) === 596);

    2
   / \
  8   4
 / \
3   9

- 283 + 289 + 24

currentNumber = root
pathSum = 2
Recursive method(currentNode)
  pathSum += currentNode.val
  - if this node is leaf add pathSum to total and return
  - otherwise
    - if there is a node to the left:
      - recursive method(pathSum * 10, node.left)
    - if there is a node to the right:
      - pathSum * 10 + recursive method(node.right)

C:

*/

class TreeNode {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

function calculatePathSum(root) {
  let total = 0;

  function recursive(node, pathSum = 0) {
    pathSum += node.val;
    if (!node.left && !node.right) {
      total += pathSum;
    }
    if (node.left) {
      recursive(node.left, pathSum * 10);
    }
    if (node.right) {
      recursive(node.right, pathSum * 10);
    }
  }
  recursive(root)
  return total;
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
console.log(calculatePathSum(tree1))// === 8);

const tree2 = buildTree([5, 3, 7]);
console.log(calculatePathSum(tree2))// === 110);

const tree3 = buildTree([2, 8, 4, 3, 9]);
console.log(calculatePathSum(tree3))// === 596);

const tree4 = buildTree([6, 2, 8, null, 5]);
console.log(calculatePathSum(tree4))// === 693);

const tree5 = buildTree([3, 7, 2, 1, 9, 5, 4, null, null, 6, 8]);
console.log(calculatePathSum(tree5))// === 8614);

const tree6 = buildTree([9, 4, 7, null, 1, 3, null, null, 8]);
console.log(calculatePathSum(tree6))// === 10391);
