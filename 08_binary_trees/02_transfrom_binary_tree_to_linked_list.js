/*

https://launchschool.com/lessons/bb36c4cc/assignments/1c86d48d

Given the root of a binary tree, transform it into a
linked list-like structure following the tree's nodes
in a pre-order traversal pattern.

In the transformed structure, each node's right child points to
the next node in the traversal, and the left child is always null.
The order of nodes in the list should match a pre-order
traversal of the original binary tree.

The binary tree should be transformed in place.

Example 1:

Input: [1,2,3,4,5]
Equivalent to:

    1
   / \
  2   3
 / \
4   5

Output: [1,null,2,null,4,null,5,null,3]
Equivalent to:

 1
  \
   2
    \
     4
      \
       5
        \
         3

Example 2:

Input: [1,null,2,3]
Equivalent to:

 1
  \
   2
  /
 3

Output: [1,null,2,null,3]
Equivalent to:

 1
  \
   2
    \
     3


Bonus: Can you transform the tree in-place (with O(1) extra space)?


A:

recursive function: "findNextNode"(node)

save node.left as "left"
save node.right as "right"

make node.left point to null
make node.right point to "left"
make currentNode node.left

if there is a currentNode.left:
  - save currentNode.right as "findNextNode"(node.left)
  THEN:
  - set currentNode.left as null
end

return null


- return currentNode
*/


function transform(root) {

  function findNextNode(node) {
    let oldRight;
    if (node.left) {
      oldRight = node.right;
      node.right = findNextNode(node.left);
      // curr = node.right
      // curr.right = findNextNode(node.left);
      node.left = null
    }

    return null;
  }

  findNextNode(root);
}

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Helper function to build a tree from an array
function buildTree(arr) {
  if (arr.length === 0) return null;
  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;
  while (queue.length > 0 && i < arr.length) {
    const node = queue.shift();
    if (arr[i] !== null) {
      node.left = new TreeNode(arr[i]);
      queue.push(node.left);
    }
    i++;
    if (i < arr.length && arr[i] !== null) {
      node.right = new TreeNode(arr[i]);
      queue.push(node.right);
    }
    i++;
  }
  return root;
}

function treeToArray(root) {
  if (root === null) return [];
  const result = [];
  let current = root;
  while (current) {
    result.push(current.val);
    result.push(current.left === null ? null : current.left.val);
    current = current.right;
  }
  while (result[result.length - 1] === null) {
    result.pop();
  }
  return result;
}

function runTest(input) {
  let root = buildTree(input);
  transform(root);
  console.log(treeToArray(root));
}

// Test cases

runTest([1,2,3,4,5]);
// Expected: [1,null,2,null,4,null,5,null,3]


// BRICK WALL