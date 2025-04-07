/*

https://www.geeksforgeeks.org/problems/minimum-depth-of-a-binary-tree/1?itm_source=geeksforgeeks

*/

class Node
{
    constructor(x){
        this.key=x;
        this.left=null;
        this.right=null;
    }
}


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


function minDepth(node, depth = 0) {
  if (!node) return depth;
  return Math.min(minDepth(node.left, depth + 1), minDepth(node.right, depth + 1))
}

// TESTS: all test cases should log true

// 0 levels

const tree1 = buildTree([]);
test(1, 0, minDepth(tree1));

// 1 level

const tree2 = buildTree([10]);
test(2, 1, minDepth(tree2));

// 2 levels

const tree3 = buildTree([2, 1, 3]);
test(3, 2, minDepth(tree3));

// 3 levels

const tree4 = buildTree([10, 5, 15, 2, 7, 12, 20]);
test(4, 3, minDepth(tree4));

const tree5 = buildTree([5, 1, 4, null, null, 3, 6]);
test(5, 2, minDepth(tree5))

const tree6 = buildTree([10, 5, 15, 2, 7, 12, 20]);
test(6, 3, minDepth(tree6))

const tree7 = buildTree([10, 5, 15, null, 6, 12, 21]);
test(7, 2, minDepth(tree7));

// 4 levels

//             10
//         /        \
//       5            15
//     /  \         /    \
//   2     7       12      20
//  /  \    / \    /  \    / \
// 1    4  6   9  10  14  16  22

const tree8 = buildTree([10, 5, 15, 2, 7, 12, 20, 1, 2, 2, 9, 10, 14, 16, 22]);
test(8, 4, minDepth(tree8)) // 2 is equal to parent

const tree9 = buildTree([10, 5, 15, 2, 7, 12, 20, 1, 4, 6, 9, 10, 14, 16, 22]);
test(9, 4, minDepth(tree9)) // leaf 10 is equal to root 10

const tree10 = buildTree([10, 5, 15, 2, 7, 12, 20, 1, 4, 2, 9, 10, 16, 17, 22]);
test(10, 4, minDepth(tree10)) // 16 greater than grandparent

// 5 levels

// #10



const tree11 = buildTree([10, 5, 15, 2, 7, 12, 20, 1, 4, 6, 9, 11, 14, 17, 22, 0.1, 1.5, 3, 4.5, 5.5, 6.5, 8, 9.5, 10.5, 11.5, 13, 14.5, 16.5, 18, 21, 23]);
test(11, 5, minDepth(tree11))

//                                11
//                      /                     \
//                   5                           15
//                /      \                    /           \
//             2            7                12                  20
//          /     \        /    \           /    \           /        \
//        1         4     6      9        11       14       17           22
//      /  \       / \   /  \   / \      /  \     /  \     /   \        /  \
//     0.1   1.5   3  4.5 5.5 6.58  9.5  10.5 11.5 13 14.5 16.5  18     21    23

const tree12 = buildTree([11, 5, 15, 2, 7, 12, 20, 1, 4, 6, 9, 11, 14, 17, 22, 0.1, 1.5, 3, 4.5, 5.5, 6.5, 8, 9.5, 10.5, 13, 13, 14.5, 17.5, 21, 23, 100]);
test(12, 5, minDepth(tree12)) 

const tree13 = buildTree([12, 5, 15, 2, 7, 121, 11, 20, 1, 4, 6, 9, 11, 14, 17, 22, 0.1, 1.5, 3, 4.5, 5.5, 6.5, 8, 9.5, 10.5, 13, 13, 14.5, 17.5, 21, 23]);
test(13, 5, minDepth(tree13)) 