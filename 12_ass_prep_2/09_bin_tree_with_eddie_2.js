/*

Problem Statement:

You are given a binary tree, where each node contains an integer value. Implement a function that deterlastRightBranches whether the tree is a Binary Search Tree (BST). A BST must satisfy the following properties:

The left subtree of a node contains only nodes with values less than the node’s value.
The right subtree of a node contains only nodes with values greater than the node’s value.
Both the left and right subtrees must also be binary search trees.
Your function should return true if the tree is a valid BST and false otherwise.

Example:

markdown

       10
      /  \
     5    15
    / \   /  \
   2   7 12   20

Input: The root node of the tree.
Output: true (this is a valid BST).

Additional Constraints:
You must use recursion to solve this problem.
The function should run in O(n) time complexity, where n is the number of nodes in the tree.

P:

Write a function that takes a single argument:
  - the head of a binary tree
- The return value of this function must be a boolean, representing:
  - Whether or or not the tree is a BST
- BST means:
  - each left node (and all values found on its branch) are less than its parent (and indeed all of its parents).
  - each right node (and all values found on its branch) is more than it's parent (and indeed all of its parents).

E:

// 0 levels

[] => true
 - an empty tree counts as valid, because it has not had a chance to be invalidated ( default output is true)

// 1 level

[10] => true
  - a single node counts as as BST

// 2 levels

[2, 1, 3] => true
  -  HP 2 levels

// 3 levels

[10, 5, 15, 2, 7, 12, 20] => true,

[5, 1, 4, null, null, 3, 6] => false
  - 5's right is less - not OK

[10, 5, 15, 2, 7, 12, 20] => true
  - HP

[10, 5, 15, null, 6, 12, 21] => true
  - a BST needn't be full (ie it can have single children)

// 4 levels

[10, 5, 15, 2, 7, 12, 20, 1, 2, 2, 9, 10, 14, 16, 22] => false
  -

const tree9 = buildTree([10, 5, 15, 2, 7, 12, 20, 1, 4, 6, 9, 10, 14, 16, 22]);
test(9, false, isValidBST(tree9)) // leaf 10 is equal to root 10

const tree10 = buildTree([10, 5, 15, 2, 7, 12, 20, 1, 4, 2, 9, 10, 16, 17, 22]);
test(10, false, isValidBST(tree10)) // 16 greater than grandparent

// 5 levels

const tree11 = buildTree([10, 5, 15, 2, 7, 12, 20, 1, 4, 6, 9, 11, 14, 17, 22, 0.1, 1.5, 3, 4.5, 5.5, 6.5, 8, 9.5, 10.5, 11.5, 13, 14.5, 16.5, 18, 21, 23]);
test(11, true, isValidBST(tree11))

const tree12 = buildTree([11, 5, 15, 2, 7, 12, 20, 1, 4, 6, 9, 11, 14, 17, 22, 0.1, 1.5, 3, 4.5, 5.5, 6.5, 8, 9.5, 10.5, 13, 13, 14.5, 17.5, 21, 23]);
test(12, false, isValidBST(tree12)) // because the 13 is greater than grandparent

const tree13 = buildTree([12, 5, 15, 2, 7, 12, 20, 1, 4, 6, 9, 11, 14, 17, 22, 0.1, 1.5, 3, 4.5, 5.5, 6.5, 8, 9.5, 10.5, 13, 13, 14.5, 17.5, 21, 23]);
test(13, false, isValidBST(tree13)) // clashing value on level 2 with value on level 5

D:

When is a node not a BST:
  - value is too small
    -  smaller than it's most recent left branching
  - value is too big
    -  bigger than it's most recent right branching

recursion:
  - BASE CASE: node is null
  - recursive case: look at each child
  - return recursive (right) AND recursive left
A:

Branching logic: (looking for disqualifying factors)
  - If node value is less than the parent at the last left branch 
  - If node value is more than the parent at the last right branch

function arguments:
  - node
  - value of last left branch (LLB)
  - value of last Right branch (LRB)
    - LLB and LRB will start as null, so I'll checking if they exist before each use. 

base case -> if the node is falsey (ie, not there) return true (because if you've gotten to the end of a
branch without triggering a false return value, you're good)

checking -> If node is bigger than (or equal to) last right branch or smaller (or equal to) last left branch return false

recursive case -> return recursive left AND recursive right 

C:
*/


class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function buildTree(arr) {
  if (arr.length === 0) return null;

  let root = new TreeNode(arr.shift());
  let nodes = [root];

  while (nodes.length > 0) {
    let current = nodes.shift();
    let leftValue = arr.shift();

    if (leftValue) {
      current.left = new TreeNode(leftValue);
      nodes.push(current.left);
    }

    if (arr.length > 0) {
      let rightValue = arr.shift();

      if (rightValue) {
        current.right = new TreeNode(rightValue);
        nodes.push(current.right);
      }
    }
  }
  return root;
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

function isValidBST(node, lastLeftBranch = Infinity, lastRightBranch = -Infinity) {
  if (!node) return true;
  if (node.value >= lastLeftBranch || node.value <= lastRightBranch) return false;
  return (isValidBST(node.left, node.value, lastRightBranch) && 
          isValidBST(node.right, lastLeftBranch, node.value) );
}

// TESTS: all test cases should log true

// 0 levels

const tree1 = buildTree([]);
test(1, true, isValidBST(tree1));

// 1 level

const tree2 = buildTree([10]);
test(2, true, isValidBST(tree2));

// 2 levels

const tree3 = buildTree([2, 1, 3]);
test(3, true, isValidBST(tree3));

// 3 levels

const tree4 = buildTree([10, 5, 15, 2, 7, 12, 20]);
test(4, true, isValidBST(tree4));

const tree5 = buildTree([5, 1, 4, null, null, 3, 6]);
test(5, false, isValidBST(tree5))

const tree6 = buildTree([10, 5, 15, 2, 7, 12, 20]);
test(6, true, isValidBST(tree6))

const tree7 = buildTree([10, 5, 15, null, 6, 12, 21]);
test(7, true, isValidBST(tree7));

// 4 levels

//             10
//         /        \
//       5            15
//     /  \         /    \
//   2     7       12      20
//  /  \    / \    /  \    / \
// 1    4  6   9  10  14  16  22

const tree8 = buildTree([10, 5, 15, 2, 7, 12, 20, 1, 2, 2, 9, 10, 14, 16, 22]);
test(8, false, isValidBST(tree8)) // 2 is equal to parent

const tree9 = buildTree([10, 5, 15, 2, 7, 12, 20, 1, 4, 6, 9, 10, 14, 16, 22]);
test(9, false, isValidBST(tree9)) // leaf 10 is equal to root 10

const tree10 = buildTree([10, 5, 15, 2, 7, 12, 20, 1, 4, 2, 9, 10, 16, 17, 22]);
test(10, false, isValidBST(tree10)) // 16 greater than grandparent

// 5 levels

// #10

//                                10
//                      /                     \
//                   5                           15
//                /      \                    /           \
//             2            7                12                  20
//          /     \        /    \           /    \           /        \
//        1         4     6      9        11       14       17           22
//      /  \       / \   /  \   / \      /  \     /  \     /   \        /  \
//     0.1  1.5   3  4.5 5.5 6.58  9.5  10.5 11.5 13 14.5 16.5  18     21    23

const tree11 = buildTree([10, 5, 15, 2, 7, 12, 20, 1, 4, 6, 9, 11, 14, 17, 22, 0.1, 1.5, 3, 4.5, 5.5, 6.5, 8, 9.5, 10.5, 11.5, 13, 14.5, 16.5, 18, 21, 23]);
test(11, true, isValidBST(tree11))

const tree12 = buildTree([11, 5, 15, 2, 7, 12, 20, 1, 4, 6, 9, 11, 14, 17, 22, 0.1, 1.5, 3, 4.5, 5.5, 6.5, 8, 9.5, 10.5, 13, 13, 14.5, 17.5, 21, 23]);
test(12, false, isValidBST(tree12)) // because the 13 is greater than grandparent

const tree13 = buildTree([12, 5, 15, 2, 7, 12, 20, 1, 4, 6, 9, 11, 14, 17, 22, 0.1, 1.5, 3, 4.5, 5.5, 6.5, 8, 9.5, 10.5, 13, 13, 14.5, 17.5, 21, 23]);
test(13, false, isValidBST(tree13)) // clashing value on level 2 with value on level 5

