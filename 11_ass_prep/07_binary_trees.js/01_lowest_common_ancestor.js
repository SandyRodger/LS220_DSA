/*

Given a binary search tree (BST) and two node values, find the lowest common ancestor (LCA) of the two nodes.

The lowest common ancestor is defined as the lowest node in the tree that has both p and q as descendants (where we allow a node to be a descendant of itself).

Constraints:

All node values are unique.
p and q are guaranteed to exist in the BST.

Examples:

        6
       / \
      2   8
     / \  / \
    0   4 7  9
       / \
      3   5

const root1 = new TreeNode(6,
  new TreeNode(2, new TreeNode(0), new TreeNode(4, new TreeNode(3), new TreeNode(5))),
  new TreeNode(8, new TreeNode(7), new TreeNode(9))
);

console.log(lowestCommonAncestor(root1, 2, 8)); // Expected Output: 6
console.log(lowestCommonAncestor(root1, 2, 4)); // Expected Output: 2
console.log(lowestCommonAncestor(root1, 3, 5)); // Expected Output: 4
console.log(lowestCommonAncestor(root1, 0, 5)); // Expected Output: 2
console.log(lowestCommonAncestor(root1, 7, 9)); // Expected Output: 8

*/

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const root1 = new TreeNode(6,
  new TreeNode(2, new TreeNode(0), new TreeNode(4, new TreeNode(3), new TreeNode(5))),
  new TreeNode(8, new TreeNode(7), new TreeNode(9))
);

console.log(lowestCommonAncestor(root1, 2, 8)); // Expected Output: 6
console.log(lowestCommonAncestor(root1, 2, 4)); // Expected Output: 2
console.log(lowestCommonAncestor(root1, 3, 5)); // Expected Output: 4
console.log(lowestCommonAncestor(root1, 0, 5)); // Expected Output: 2
console.log(lowestCommonAncestor(root1, 7, 9)); // Expected Output: 8


