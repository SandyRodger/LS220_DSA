/*

You are given a binary tree where each node contains an integer value. Your task is to implement a function that returns the sum of all the even-valued nodes in the tree using recursion.

You may not save the values in an external variable, they should be returned from the recursive method

Requirements:

Implement a function sumEvenNodes(root), where root is the root of the binary tree.
The function should return the sum of all nodes that have an even value.
You must use recursion to traverse the tree.
Example:

        10
       /  \
      5    12
     / \   /  \
    3   8 7   14

Even numbers in the tree: 10, 12, 14
Expected Output: 10 + 12 + 14 = 36
Constraints:
The tree may have up to 10^4 nodes.
Node values are in the range [-10^5, 10^5].
The tree is not necessarily balanced.

P:

Write a function that takes the head of a Binary tree and uses recursion to return the sum of all node values which are even. The catch is you cannot use a running total. You must return the values from the recursive method and accumulate them on the way up out of the recursive stack.

E:


const tree1 = buildTree([]);
test(1, 0, sumEvenNodes(tree1));

  - empty input returns 0

const tree2 = buildTree([10]);
test(2, 10, sumEvenNodes(tree2));
 
  - a single node is valid input

const tree3 = buildTree([2, 1, 3]);
test(3, 2, sumEvenNodes(tree3));

  - HP

const tree4 = buildTree([10, 5, 15, 2, 7, 12, 20]);
test(4, 44, sumEvenNodes(tree4));

  - 10 + 2 + 12 + 20

const tree5 = buildTree([5, 1, 4, null, null, 3, 6]);
test(5, 10, sumEvenNodes(tree5))

  - 4 + 6 = 10

const tree6 = buildTree([10, 5, 15, 2, 7, 12, 20]);
test(6, 44, sumEvenNodes(tree6))

  - 10 + 2 + 12 + 20 (SAME AS TREE 4)

const tree7 = buildTree([10, 5, 15, null, 6, 12, 21]);
test(7, 28, sumEvenNodes(tree7));

- 10 + 6 + 12 = 28

const tree8 = buildTree([10, 5, 15, 2, 7, 12, 20, 1, 2, 2, 9, 10, 14, 16, 22]);
test(8, 110, sumEvenNodes(tree8)) 

- lots 

const tree9 = buildTree([10, 5, 15, 2, 7, 12, 20, 1, 4, 6, 9, 10, 14, 16, 22]);
test(9, 116, sumEvenNodes(tree9)) // 

- lots

const tree10 = buildTree([10, 5, 15, 2, 7, 12, 20, 1, 4, 2, 9, 10, 16, 17, 22]);
test(10, 98, sumEvenNodes(tree10)) //

- lots

const tree11 = buildTree([10, 5, 15, 2, 7, 12, 20, 1, 4, 6, 11112, 11, 11111, 17, 22, 0, 1.5, 3, 4.5, 5.5, 6.5, 8, 9.5, 10.5, 11.5, 13, 14.5, 16.5, 18, 21, 23]);
test(11, 11214, sumEvenNodes(tree11))

- lots, with decimals.

D:

            10
        /        \
      5            15
    /  \         /    \
  2     7       12      20
 /  \    / \    /  \    / \
1    4  6   9  10  14  16  22

- what is the base case?
  - node is null
    - return 0
- what is the recursive case?
  - if node's value is even then set vaoue to that, otherwise set it to 0
  - return value + return value of function(left) + function(right)



A:
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

function sumEvenNodes(node) {
  if (node === null) {
    return 0;
  } else {
    let value = node.value % 2 === 0 ? node.value : 0;
    return value + sumEvenNodes(node.right) + sumEvenNodes(node.left);
  }
}

// TESTS: all test cases should log true

// 0 levels

const tree1 = buildTree([]);
test(1, 0, sumEvenNodes(tree1));

// 1 level

const tree2 = buildTree([10]);
test(2, 10, sumEvenNodes(tree2));

// 2 levels

const tree3 = buildTree([2, 1, 3]);
test(3, 2, sumEvenNodes(tree3));

// 3 levels

const tree4 = buildTree([10, 5, 15, 2, 7, 12, 20]);
test(4, 44, sumEvenNodes(tree4));

const tree5 = buildTree([5, 1, 4, null, null, 3, 6]);
test(5, 10, sumEvenNodes(tree5))

const tree6 = buildTree([10, 5, 15, 2, 7, 12, 20]);
test(6, 44, sumEvenNodes(tree6))

const tree7 = buildTree([10, 5, 15, null, 6, 12, 21]);
test(7, 28, sumEvenNodes(tree7));

// // 4 levels

// //             10
// //         /        \
// //       5            15
// //     /  \         /    \
// //   2     7       12      20
// //  /  \    / \    /  \    / \
// // 1    4  6   9  10  14  16  22

const tree8 = buildTree([10, 5, 15, 2, 7, 12, 20, 1, 2, 2, 9, 10, 14, 16, 22]);
test(8, 110, sumEvenNodes(tree8)) // 2 is equal to parent

const tree9 = buildTree([10, 5, 15, 2, 7, 12, 20, 1, 4, 6, 9, 10, 14, 16, 22]);
test(9, 116, sumEvenNodes(tree9)) // leaf 10 is equal to root 10

const tree10 = buildTree([10, 5, 15, 2, 7, 12, 20, 1, 4, 2, 9, 10, 16, 17, 22]);
test(10, 98, sumEvenNodes(tree10)) // 16 greater than grandparent

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

const tree11 = buildTree([10, 5, 15, 2, 7, 12, 20, 1, 4, 6, 11112, 11, 11111, 17, 22, 0, 1.5, 3, 4.5, 5.5, 6.5, 8, 9.5, 10.5, 11.5, 13, 14.5, 16.5, 18, 21, 23]);
test(11, 11214, sumEvenNodes(tree11))


const tree12 = buildTree([3, 2, 4]);
test(12, 6, sumEvenNodes(tree12));

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