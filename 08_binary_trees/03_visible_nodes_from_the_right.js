/*

https://launchschool.com/lessons/bb36c4cc/assignments/d747ae60

Given the root of a binary tree, return an array of the node
values visible when the tree is viewed from the right side.

Example 1:

   1
  / \
 2   3
  \   \
   5   4

Input: [1,2,3,null,5,null,4]
Output: [1,3,4]

Example 2:

   1
    \
     3

Input: [1,null,3]
Output: [1,3]

P:

Write a function that takes the root of a binary tree and returns an array containing the rightMost value on each level.

E:

[1,2,3,null,5,null,4]))); // Expected: [1,3,4]
[1,null,3]))); // Expected: [1,3]
[]))); // Expected: []
[1,2,3,4]))); // Expected: [1,3,4]

    1
   / \
  2   3
 /
4


[1,2,3,null,5,null,4,6,null,7]))); // Expected: [1,3,4,7]

   1
  / \
 2   3
  \   \
   5   4
  /     /
 6     7

-  these trees are not full(?) balanced (?)

[1,2,3,null,4,5,6,null,null,7]))); // Expected: [1,3,6,7]

             1
            /  \
           2    3
            \  / \
             4 5  6
                 /
                7

[1,2,3,4,5,6,7]))); // Expected: [1,3,7]

             1
            /  \
           2    3
         /  \  / \
        4    56   7

[1,2,3,4,null,5,6,7,null,null,null,8]))); // Expected: [1,3,6,8]

             1
            /  \
           2    3
         /     / \
        4     5   6
       /         /
      7         8


[1,2,3,4,5,null,6,null,null,7]))); // Expected: [1,3,6,7]

             1
            /  \
           2    3
         /  \    \
        4    5    6
            /
           7

[1,2,3,4,null,5,null,6,null,7,null,8]))); // Expected: [1,3,5,7,8]

             1
            /  \
           2    3
         /     / 
        4     5   
       /     /
      6     7
     /
    8
  

D:

gather all the values in a level
find the rightmost value in the level (save it in result)
go to the next level
if there are no more levels return result

How do I know I'm done with a level? Stack?
level 1 => max 1 values 
level 2 => max 2 values 
level 3 => max 4 values 
level 4 => max 8 values 

small version:
             1
            / 
           2  
 
A:

save the integers in each level in a seperate array saved in an object, where the keys are the indexes.
Iterate through the tree with an index counter (idx)

VARIABLES:

- levels => an empty object

C:
*/

function visibleNodes(root) {
  if (!root) {return []};

  let levels = {};

  function traverseTree(n, l) {
    if (levels[l]) {
      levels[l].push(n.val);
    } else {
      levels[l] = [n.val];
    }
    
    if (n.left) { traverseTree(n.left, l+1)};
    if (n.right) { traverseTree(n.right, l+1)};
  }

  traverseTree(root, 0);
  return Object.values(levels).map((elem) => elem.at(-1));
}

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function buildTree(arr) {
  if (arr.length === 0) return null;
  const root = new TreeNode(arr[0]);
  const thisLevel = [root];
  let i = 1;
  while (thisLevel.length > 0 && i < arr.length) {
    const node = thisLevel.shift();
    if (arr[i] !== null) {
      node.left = new TreeNode(arr[i]);
      thisLevel.push(node.left);
    }
    i++;
    if (i < arr.length && arr[i] !== null) {
      node.right = new TreeNode(arr[i]);
      thisLevel.push(node.right);
    }
    i++;
  }
  return root;
}

function visibleNodes(root) {
  if (!root) return [];

  let values = [];
  let stack = [[root, 0]];

  while (stack.length > 0) {
    let element = stack.pop();
    let node = element[0];
    let level = element[1];

    if (node.left) stack.push([node.left, level + 1]);
    if (node.right) stack.push([node.right, level + 1]);

    if (!values[level]) values.push(node.val);
  }

  return values;
}

console.log(visibleNodes(buildTree([1,2,3,null,5,null,4]))); // Expected: [1,3,4]
console.log(visibleNodes(buildTree([1,null,3]))); // Expected: [1,3]
console.log(visibleNodes(buildTree([]))); // Expected: []
console.log(visibleNodes(buildTree([1,2,3,4]))); // Expected: [1,3,4]
console.log(visibleNodes(buildTree([1,2,3,null,5,null,4,6,null,7]))); // Expected: [1,3,4,7]
console.log(visibleNodes(buildTree([1,2,3,null,4,5,6,null,null,7]))); // Expected: [1,3,6,7]
console.log(visibleNodes(buildTree([1,2,3,4,5,6,7]))); // Expected: [1,3,7]
console.log(visibleNodes(buildTree([1,2,3,4,null,5,6,7,null,null,null,8]))); // Expected: [1,3,6,8]
console.log(visibleNodes(buildTree([1,2,3,4,5,null,6,null,null,7]))); // Expected: [1,3,6,7]
console.log(visibleNodes(buildTree([1,2,3,4,null,5,null,6,null,7,null,8]))); // Expected: [1,3,5,7,8]
/*

// 2nd go: 4.2.25



// https://launchschool.com/lessons/bb36c4cc/assignments/d747ae60

// Given the root of a binary tree, return an array of the node
// values visible when the tree is viewed from the right side.

// Example 1:

//    1
//   / \
//  2   3
//   \   \
//    5   4

// Input: [1,2,3,null,5,null,4]
// Output: [1,3,4]

// Example 2:

//    1
//     \
//      3

// Input: [1,null,3]
// Output: [1,3]

// P:

// Write a function that takes the root node of a binary tree and returns an array of the values visible from the right hand side, top to bottom.

// Start: 11:22
// End:

// E:

// [1,2,3,null,5,null,4]))); // Expected: [1,3,4]
// [1,null,3]))); // Expected: [1,3]
// []))); // Expected: []
// [1,2,3,4]))); // Expected: [1,3,4]

//     1
//    / \
//   2   3
//  /
// 4


// [1,2,3,null,5,null,4,6,null,7]))); // Expected: [1,3,4,7]

//    1
//   / \
//  2   3
//   \   \
//    5   4
//   /     /
//  6     7

// -  these trees are not full/balanced/complete/perfect

// [1,2,3,null,4,5,6,null,null,7]))); // Expected: [1,3,6,7]

//              1
//             /  \
//            2    3
//             \  / \
//              4 5  6
//                  /
//                 7

// [1,2,3,4,5,6,7]))); // Expected: [1,3,7]

//              1
//             /  \
//            2    3
//          /  \  / \
//         4    56   7

// [1,2,3,4,null,5,6,7,null,null,null,8]))); // Expected: [1,3,6,8]

//              1
//             /  \
//            2    3
//          /     / \
//         4     5   6
//        /         /
//       7         8


// [1,2,3,4,5,null,6,null,null,7]))); // Expected: [1,3,6,7]

//              1
//             /  \
//            2    3
//          /  \    \
//         4    5    6
//             /
//            7

// [1,2,3,4,null,5,null,6,null,7,null,8]))); // Expected: [1,3,5,7,8]

//              1
//             /  \
//            2    3
//          /     / 
//         4     5   
//        /     /
//       6     7
//      /
//     8
  

// D:

// BFS: do each level, collect rightmost, then do next level
// BFS => thisLevel

// A:

// [1,2,3,4,null,5,6,7,null,null,null,8]))); // Expected: [1,3,6,8]

//              1
//             /  \
//            2    3
//          /     / \
//         4     5   6
//        /         /
//       7         8

// On each Level:
//   - look at the collection of nodes
//     - collect their values
//       - save the rightmost.
//     - collect references to them, in order to process after
//   - Go to the next level


// C:
// */

// function visibleNodes(root) {
//   const thisLevel = [root];
//   let output = [];
//   let nextLevel = [];
//   let levelValues = [];
//   if (root.left) {nextLevel.push(root.left)};
//   if (root.right) {nextLevel.push(root.right)};

//   while (nextLevel.length) {
//     while (thisLevel.length) {
//       nextLevel = [];
//       levelValues = [];
//       let curr = thisLevel.shift();
//       levelValues.push(curr.val);
//       if (curr.left) { nextLevel.push(curr.left) };
//       if (curr.right) { nextLevel.push(curr.right) };
//     }
//     output.push(levelValues.pop())
//   }
//   return output;
// }

// class TreeNode {
//   constructor(val, left = null, right = null) {
//     this.val = val;
//     this.left = left;
//     this.right = right;
//   }
// }

// function buildTree(arr) {
//   if (arr.length === 0) return null;
//   const root = new TreeNode(arr[0]);
//   const thisLevel = [root];
//   let i = 1;
//   while (thisLevel.length > 0 && i < arr.length) {
//     const node = thisLevel.shift();
//     if (arr[i] !== null) {
//       node.left = new TreeNode(arr[i]);
//       thisLevel.push(node.left);
//     }
//     i++;
//     if (i < arr.length && arr[i] !== null) {
//       node.right = new TreeNode(arr[i]);
//       thisLevel.push(node.right);
//     }
//     i++;
//   }
//   return root;
// }

// console.log(visibleNodes(buildTree([1,2,3,null,5,null,4]))); // Expected: [1,3,4]
// console.log(visibleNodes(buildTree([1,null,3]))); // Expected: [1,3]
// console.log(visibleNodes(buildTree([]))); // Expected: []
// console.log(visibleNodes(buildTree([1,2,3,4]))); // Expected: [1,3,4]
// console.log(visibleNodes(buildTree([1,2,3,null,5,null,4,6,null,7]))); // Expected: [1,3,4,7]
// console.log(visibleNodes(buildTree([1,2,3,null,4,5,6,null,null,7]))); // Expected: [1,3,6,7]
// console.log(visibleNodes(buildTree([1,2,3,4,5,6,7]))); // Expected: [1,3,7]
// console.log(visibleNodes(buildTree([1,2,3,4,null,5,6,7,null,null,null,8]))); // Expected: [1,3,6,8]
// console.log(visibleNodes(buildTree([1,2,3,4,5,null,6,null,null,7]))); // Expected: [1,3,6,7]
// console.log(visibleNodes(buildTree([1,2,3,4,null,5,null,6,null,7,null,8]))); // Expected: [1,3,5,7,8]