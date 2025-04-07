/*

https://launchschool.com/lessons/bb36c4cc/assignments/a4eceee3

Given the root node of a binary tree containing only single-digit
integers (0-9), implement a function `calculatePathSum` that
computes the total sum of all root-to-leaf paths.
A root-to-leaf path is a sequence of nodes from the root to a
leaf, where each node's value represents a digit in the number
formed by that path.

Example 1:
    5
   / \
  3   7

In this tree, there are two root-to-leaf paths:
5 -> 3 (representing the number 53)
5 -> 7 (representing the number 57)
The total sum would be 53 + 57 = 110.

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

A:

recursive funtion: : followThisBranch(childNode, sumSoFar)
  - this value + sumSofar* 10
  - if there's a rightleft-Child go there
  - if not then add sumSoFar to total.

*/

// class TreeNode {
//   constructor(value) {
//     this.val = value;
//     this.left = null;
//     this.right = null;
//   }
// }


// function buildTree(arr) {
//   if (arr.length === 0) {
//     return null;
//   }
//   const nodes = [];
//   const val = arr.shift();
//   const root = new TreeNode(val);
//   nodes.push(root);
//   while (arr.length > 0) {
//     const curr = nodes.shift();
//     const left_val = arr.shift();
//     if (left_val !== null) {
//       curr.left = new TreeNode(left_val);
//       nodes.push(curr.left);
//     }
//     if (arr.length > 0) {
//       const right_val = arr.shift();
//       if (right_val !== null) {
//         curr.right = new TreeNode(right_val);
//         nodes.push(curr.right);
//       }
//     }
//   }
//   return root;
// }

// // Example 2:
// //     8
// //    / \
// //   2   9
// //  / \
// // 6   4

// function calculatePathSum(root) {
//   let total = 0;

//   function followThisBranch(node, sumSoFar) {
//     // console.log(node);
//     if (node.left) {
//       followThisBranch(node.left, node.left.val + (sumSoFar * 10));
//     }
//     if (node.right) {
//       followThisBranch(node.right, node.right.val + (sumSoFar * 10));
//     }
//     if (!node.left && !node.right) {
//       total += sumSoFar;
//     }
//   }

//   followThisBranch(root, root.val);
//   return total;
// }

// const tree1 = buildTree([8]);
// console.log(calculatePathSum(tree1) === 8);

// const tree2 = buildTree([5, 3, 7]);
// console.log(calculatePathSum(tree2) === 110);

// const tree3 = buildTree([2, 8, 4, 3, 9]);
// console.log(calculatePathSum(tree3) === 596);

// const tree4 = buildTree([6, 2, 8, null, 5]);
// console.log(calculatePathSum(tree4) === 693);

// const tree5 = buildTree([3, 7, 2, 1, 9, 5, 4, null, null, 6, 8]);
// console.log(calculatePathSum(tree5) === 8614);

// const tree6 = buildTree([9, 4, 7, null, 1, 3, null, null, 8]);
// console.log(calculatePathSum(tree6) === 10391);


// const tree7 = buildTree([8, 2, 9, 6, 4]);
// console.log(calculatePathSum(tree7) === 1739);


// // LS solution:

// function calculatePathSum(root) {
//   function helper(node, currentSum) {
//     if (node === null) {
//       return 0;
//     }

//     currentSum = currentSum * 10 + node.val;

//     if (node.left === null && node.right === null) {
//       return currentSum;
//     }

//     const leftSum = helper(node.left, currentSum)
//     const rightSum = helper(node.right, currentSum)
//     return leftSum + rightSum ;
//   }
//   return helper(root, 0)
// }


/*

2nd go:

Given the root node of a binary tree containing only single-digit
integers (0-9), implement a function `calculatePathSum` that
computes the total sum of all root-to-leaf paths.
A root-to-leaf path is a sequence of nodes from the root to a
leaf, where each node's value represents a digit in the number
formed by that path.

Example 1:
    5
   / \
  3   7

In this tree, there are two root-to-leaf paths:
5 -> 3 (representing the number 53)
5 -> 7 (representing the number 57)
The total sum would be 53 + 57 = 110.

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

Start: 07:30
End: 


P
E
D
A:

DFS/BFS

C
*/

class TreeNode {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

function calculatePathSum(root) {
  // Your implementation here
}

// Helper function for test cases

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

// Test Cases

const tree1 = buildTree([8]);
console.log(calculatePathSum(tree1) === 8);

const tree2 = buildTree([5, 3, 7]);
console.log(calculatePathSum(tree2) === 110);

const tree3 = buildTree([2, 8, 4, 3, 9]);
console.log(calculatePathSum(tree3) === 596);

const tree4 = buildTree([6, 2, 8, null, 5]);
console.log(calculatePathSum(tree4) === 693);

const tree5 = buildTree([3, 7, 2, 1, 9, 5, 4, null, null, 6, 8]);
console.log(calculatePathSum(tree5) === 8614);

const tree6 = buildTree([9, 4, 7, null, 1, 3, null, null, 8]);
console.log(calculatePathSum(tree6) === 10391);
