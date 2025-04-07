/*

Problem Statement:

You are given a binary tree, where each node contains an integer value. Implement a function that determines whether the tree is a Binary Search Tree (BST). A BST must satisfy the following properties:

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

A:

// #10

                               10
                     /                     \
                  5                           15
               /      \                    /           \
            2            7                12                  20
         /     \        /    \           /    \           /        \
       1         4     6      9        11       14       17           22
     /  \       / \   /  \   / \      /  \     /  \     /   \        /  \
    0    1.5   3  4.5 5.5 6.58  9.5  10.5 11.5 13 14.5 16.5  18     21    23

function isValidBST(node, valueAboveLastRightBranch = null, valueAboveLastLeftBranch = null) {
  if (node === null) { return true };
  if (node.value >= valueAboveLastLeftBranch ||
      node.value <= valueAboveLastRightBranch ) {
        return false;
      };
  return (isValidBST(node.left, valueAboveLastRightBranch, node.value) &&
          isValidBST(node.right, node.value, valueAboveLastLeftBranch))
}

Variables:

main function? => searchTree(node, valueAboveLastRightBranch = null, valueAboveLastLeftBranch = null)
  - base case: if node is null, return true
  - if it's not a BST:
    - if it is too big
      - if node value is greater than or equal to valueAboveLastLeftBranch
        - return false
    - if it is too small
      - if node value is less than or equal to valueAboveLastLeftBranch
        - return false
  - otherwise

    - return (searchTree(node.left, valueAboveLastRightBranch, node.value AND
              searchTree(node.right, node.value, valueAboveLastLeftBranch)

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

function isValidBST(node, valueAboveLastLeftBranch = null, valueAboveLastRightBranch = null) {
  if (node === null) { return true };
  if ((valueAboveLastLeftBranch && node.value >= valueAboveLastLeftBranch) ||
      (valueAboveLastRightBranch && node.value <= valueAboveLastRightBranch)) {
        return false;
      };
  return (isValidBST(node.left, node.value, valueAboveLastRightBranch) &&
          isValidBST(node.right, valueAboveLastLeftBranch, node.value))
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
//     0    1.5   3  4.5 5.5 6.58  9.5  10.5 11.5 13 14.5 16.5  18     21    23

const tree11 = buildTree([10, 5, 15, 2, 7, 12, 20, 1, 4, 6, 9, 11, 14, 17, 22, 0, 1.5, 3, 4.5, 5.5, 6.5, 8, 9.5, 10.5, 11.5, 13, 14.5, 16.5, 18, 21, 23]);
test(11, true, isValidBST(tree11))

const tree12 = buildTree([11, 5, 15, 2, 7, 12, 20, 1, 4, 6, 9, 11, 14, 17, 22, 0, 1.5, 3, 4.5, 5.5, 6.5, 8, 9.5, 10.5, 13, 13, 14.5, 17.5, 21, 23]);
test(12, false, isValidBST(tree12)) // because the 13 is greater than grandparent

const tree13 = buildTree([12, 5, 15, 2, 7, 12, 20, 1, 4, 6, 9, 11, 14, 17, 22, 0, 1.5, 3, 4.5, 5.5, 6.5, 8, 9.5, 10.5, 13, 13, 14.5, 17.5, 21, 23]);
test(13, false, isValidBST(tree13)) // clashing value on level 2 with value on level 5

