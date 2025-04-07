/*

https://launchschool.com/books/advanced_dsa/read/binary_tree_height

Given the root node of a binary tree, implement a
function `getHeight` that calculates its height.

The height of the tree is the level of the
deepest node or the longest path from the root
to a leaf node.

The root node is considered to have a height of 1.

Example

     1
    / \
   2   3
  / \
 4   5


The height of this binary tree is 3, as the
longest path from the root node to a leaf node
(either from 1 to 4 or from 1 to 5) involves 3 nodes.

P:

recurive definition:

A [data structure] is a [problem definition] if [some condition is true], and the rest of the [data structure] is [problem definition].

A binary tree has reached its highest height if all paths have been explored/compared and the rest of the binary tree has been explored ?

The [problem description] of the [data structure] is [1] or [value of element], [operation] the [min/max/comparison] between the left and right subtrees of the [data structure].

The highest path of the binary tree is 1 or the return value of the recursive funtion

*/
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

function getHeight(root) {  
  if (!root) { return 0 };
  return 1 + Math.max(getHeight(root.left), getHeight(root.right))

}

const tree1 = buildTree([1]);
console.log(getHeight(tree1) === 1);

const tree2 = buildTree([1, 2, 3, null, null, 4, 5]);
console.log(getHeight(tree2) === 3);

const tree3 = buildTree([1, 2, 3, 4, 5, 6, 7]);
console.log(getHeight(tree3) === 3);

const tree4 = buildTree([1, 2, 3, null, null, 4, 5, null, null, null, 6]);
console.log(getHeight(tree4) === 4);

const tree5 = buildTree([1, 2, null, 3, null, 4, null, 5, 6, null, null, null, 7]);
console.log(getHeight(tree5) === 6);

const tree6 = buildTree([1, 2, null, 3, null, 4, null, 5, null, 6, 8, null, 7, null, 9, null, null, null, 10]);
console.log(getHeight(tree6) === 8);
// All test cases should log true