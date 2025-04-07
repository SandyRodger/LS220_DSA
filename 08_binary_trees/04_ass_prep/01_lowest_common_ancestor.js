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

P:

Write a method that takes the head of a binary tree, and two node values and returns the value of the lowest common ancesor of the two input node values.

E:

        6
       / \
      2   8
     / \  / \
    0   4 7  9
       / \
      3   5

input: 3, 5
output:  4
path to 3 = [6, 2, 4, 3]
path to 5 = [6, 2, 4, 5]

NLR => 6, 2, 0, 4, 3, 5, 8, 7, 9

      
const root1 = new TreeNode(6,
  new TreeNode(2, new TreeNode(0), new TreeNode(4, new TreeNode(3), new TreeNode(5))),
  new TreeNode(8, new TreeNode(7), new TreeNode(9))
);

D:

Backtracking to find the path to each node

find the rightmost common number in each array

TEMPLATE:

function someProblem(candidates) {
  function backtrack(candidates, candidate, result) {
    if ( <<success condition>> ) { => last element is val1 or val2
      result.push([...candidate]);
      return; => don't return
    }

    for (let elem of candidates) { => for children of node ?
      if (true) {  // replace true with the dead-end condition => if they have children, keep going
        continue;
      }

      candidate.push(elem);  // take
      backtrack(candidates, candidate, result);  // explore
      candidate.pop();  // clean up
    }
  }

  const result = [];
  const candidate = [];
  backtrack(candidates, candidate, result);
  return result;
}

A:

HELPER FUNCTION:
  Find path to val1, save vals in array1
  Find path to val1, save vals in array2

C:
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

function lowestCommonAncestor(root, val1, val2) {

  function backtrack(node, path, result) {
    if ( [val1, val2].includes(path.at(-1)) ) {
      result.push([...path]);
    }

    if (!node.left && !node.right) { return }

    if (node.left) { 
      path.push(node.left.val);
      backtrack(node.left, path, result);
      path.pop();
    }
    if (node.right) {
      path.push(node.right.val);
      backtrack(node.right, path, result);
      path.pop();
    }
  }

  const twoPaths = [];
  const path = [root.val];
  backtrack(root, path, twoPaths);

  let longer = twoPaths[0].length >= twoPaths[1].length ? twoPaths[0] : twoPaths[1];
  let shorter = twoPaths[0].length < twoPaths[1].length ? twoPaths[0] : twoPaths[1];

  for (let i1 = longer.length - 1; i1 >= 0; i1--) {
    for (let i2 = shorter.length - 1; i2 >= 0; i2--) {
      if (longer[i1] === shorter[i2]) { return longer[i1] }
    }
  }

}

console.log(lowestCommonAncestor(root1, 2, 8)); // Expected Output: 6
console.log(lowestCommonAncestor(root1, 2, 4)); // Expected Output: 2
console.log(lowestCommonAncestor(root1, 3, 5)); // Expected Output: 4
console.log(lowestCommonAncestor(root1, 0, 5)); // Expected Output: 2
console.log(lowestCommonAncestor(root1, 7, 9)); // Expected Output: 8

