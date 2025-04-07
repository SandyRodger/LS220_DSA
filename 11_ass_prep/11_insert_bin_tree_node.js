/*

Given a tree, a target node and an insert node, insert the node as the left child of the target node, preserving the subsequent children

Print the result in preOrderTraversal (NLR)

P:

Write a function that takes 3 args:
  - a Binary-tree root node
  - a target-node
  - an insert-node

- The function must find the target node and insert the insert-node as its left child, while preserving the subsequent order of that tree path.
- The output should be an array of the trees updated node-values, in pre-order traversal. (a helper method has been provided for this part of the problem.)

key-point: each node is its own independent tree, regardless of what happens to it parent nodes.

E:

Original tree:

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

Example 1:

console.log(insertNode(root1, 2, 8)); // [6, 2, 8, 0, 4, 3, 5, 8, 7, 9]
        6
       / \
      2   8
     / \  / \
    8   4 7  9
   /    / \
  0    3   5

  - we make 9 the child of 2 and attach 0 (2's previous child) to 9 as it's left child)

Example 2:

console.log(insertNode(root1, 2, 4)); // [6, 2, 4, 0, 4 ,3, 5, 8 ,7 ,9]
        6
       / \
      2   8
     / \  / \
    4   4 7  9
   /    / \
  0    3   5

Example 3:

console.log(insertNode(root1, 3, 5)); // [6, 2, 0, 4, 3, 5, 5, 8, 7, 9]

        6
       / \
      2   8
     / \  / \
    0   4 7  9
       / \
      3   5
     /
    5

- Again 3 is a leaf, so the tricky part of reattaching subsequent paths is missed

Example 4:

console.log(insertNode(root1, 7, 5)); // [6, 2, 0, 4, 3, 5, 8, 7, 5, 9]

          6
       /    \
      2      8
     / \      / \
    0   4    7  9
       / \  /
      3   5 5
           
- leaf-node: easy.

Example 5:

console.log(insertNode(root1, 6, 9)); // 

        6
       / \
      9   8 
     / \  / \
    2   4 7  9
   /    / \
  0    3   5

- The higher the target -node the more work there is to do
  - 9 becomes 6's left
    - 4 is attached to 9' right
      - 3 becomes 4's left
      - 5 becomes 4's right
    - 2 is attached to 9's left
      - 0 becomes 2's left

D:

Original tree:

        6
       / \
      2   8
     / \  / \
    0   4 7  9
       / \
      3   5

  output:
        6
       / \
      9   8 
     / \  / \
    2   4 7  9
   /    / \
  0    3   5

Tasks:
  - Find target node
  - keep hold of lower-branch, while attaching nodes to tree

- Binary tree (values are somewhat unimportant - they only mark where the node is.)
- everything to the right of  target node isinput:
- once the insert node has been attached to its right child, the right child branch remains unchanged and needn't be traversed.

A:

Example 4:

console.log(insertNode(root1, 7, 5)); // [6, 2, 0, 4, 3, 5, 8, 7, 5, 9]

Original tree:

        6
       / \
      2   8
     / \  / \
    0   4 7  9
       / \
      3   5

output:
         6
       /    \
      2      8
     / \      / \
    0   4    7  9
       / \  /
      3   5 5

- Find target node with NLR traversal (save as curr)

HELPER FUNCTION: findNode(root, target) => node, saved to curr

- save curr as root
- save stack as []

- while curr.val is not target, do the following
- if there is a right child push it to the stack
- if there is a left child push it to the stack
- pop off the stack and save that as curr

MAIN FUNCTION:

  - if curr has a left child
    - save it's left child (2) (prevLeft)
  - If curr has a right child
    - save curr's right child as prevRight
  - Save InsertNode to curr's left (cutting off any previous branch)
  - If there was a right child attach prevRight to curr.right


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

const root2 = new TreeNode(6,
  new TreeNode(2, new TreeNode(0), new TreeNode(4, new TreeNode(3), new TreeNode(5))),
  new TreeNode(8, new TreeNode(7), new TreeNode(9))
);
const root3 = new TreeNode(6,
  new TreeNode(2, new TreeNode(0), new TreeNode(4, new TreeNode(3), new TreeNode(5))),
  new TreeNode(8, new TreeNode(7), new TreeNode(9))
);
const root4 = new TreeNode(6,
  new TreeNode(2, new TreeNode(0), new TreeNode(4, new TreeNode(3), new TreeNode(5))),
  new TreeNode(8, new TreeNode(7), new TreeNode(9))
);
const root5 = new TreeNode(6,
  new TreeNode(2, new TreeNode(0), new TreeNode(4, new TreeNode(3), new TreeNode(5))),
  new TreeNode(8, new TreeNode(7), new TreeNode(9))
);

function preorderTraversal(root) {
  let output = [];

  function recu(node) {
    if (!node) { return };
    output.push(node.val);
    if (node.left) { recu(node.left) };
    if (node.right) {recu(node.right)};
  }

  recu(root);
  return output;
}
// console.log(insertNode(root1, 2, 8)); // [6, 2, 8, 0, 4, 3, 5, 8, 7, 9]
//         6
//        / \
//       2   8
//      / \  / \
//     8   4 7  9
//    /    / \
//   0    3   5
function insertNode(root, target, insert) {

  function findNode(root, target) {
    let curr = root;
    let stack = [];

    while (curr.val !== target) {
      if (curr.right) { stack.push(curr.right) };
      if (curr.left) { stack.push(curr.left) };      
      curr = stack.pop()
    }
    return curr;
  }

  let curr = findNode(root, target);
  let prevLeft = curr.left;
  let prevRight = curr.right;

  curr.left = new TreeNode(insert);
  curr.left.left = prevLeft;
  curr.right = prevRight;

  return preorderTraversal(root);
}

test(insertNode(root1, 2, 8), [6, 2, 8, 0, 4, 3, 5, 8, 7, 9]);
test(insertNode(root2, 2, 4), [6, 2, 4, 0, 4 ,3, 5, 8 ,7 ,9]);
test(insertNode(root3, 3, 5), [6, 2, 0, 4, 3, 5, 5, 8, 7, 9]);
test(insertNode(root4, 0, 5), [6, 2, 0, 5, 4, 3, 5, 8, 7, 9]);
test(insertNode(root5, 7, 5), [6, 2, 0, 4, 3, 5, 8, 7, 5, 9]);

function test(act, exp) {
  if (exp.length !== act.length) { 
    console.log(`expected ${exp}`)
    console.log(`actual   ${act}`)
    return
  }
  for (i = exp.length; i >= 0 ; i--) {
    if (act[i] !== exp[i]) {
      console.log(`expected ${exp}`)
      console.log(`actual   ${act}`)
      return
    }
  }
  console.log(`(-:`)
}

