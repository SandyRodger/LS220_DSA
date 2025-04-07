/*

15.2.24

P:

Write a function that returns the total of each unique branch, where each node value is multiplied by its level order root to leaf.
Use a stack.

So:

      8       
    /  \
  3     4     

8 + (3 * 2) = 14
8 + (4 * 2) = 16
            = 30

E:


const tree1 = buildTree([8]);
console.log(totalByBranchWithMultiplication(tree1))// === 8);

- 8 * 1 = 8

const tree2 = buildTree([5, 3, 7]);
console.log(totalByBranchWithMultiplication(tree2))// === 30);

- (5 * 1) + ((3 * 2) = 11
- (5 * 1) + ((7 * 2) = 19
                     = 30

const tree3 = buildTree([2, 8, 4, 3, 9]);
console.log(totalByBranchWithMultiplication(tree3))// === );

      2       => (2 * 1) = 2
    /  \
   8    4     => (8 * 1) + (4 * 2) = 16
  / \  
 3  9         => (3 * 1) + (9 * 2) = 21

2* 1 + 8*2 + 3*3 = 27
2* 1 + 8*2 + 9*3 = 45
2* 1 + 4*2       = 10
                 = 82


const tree4 = buildTree([6, 2, 8, null, 5]);
console.log(totalByBranchWithMultiplication(tree4)));

      6       
    /  \
   2    8     
    \  
    5       

6 + (2*2) + (5*3) = 25
6 + (8*2)         = 22
                  = 47

const tree5 = buildTree([3, 7, 2, 1, 9, 5, 4, null, null, 6, 8]);
console.log(totalByBranchWithMultiplication(tree5));
    
const tree6 = buildTree([9, 4, 7, null, 1, 3, null, null, 8]);
console.log(totalByBranchWithMultiplication(tree6)));

      9    
    /  \
   4    7  
    \  / 
     1 3   
      \
       8  

9 + 8 + 3 + 32 = 52
9 + 14 + 9     = 32
               = 84

D:

preorder NLR
Stack

2 tasks:
  - traverse the array in the right order
    - 9, 4, 1, 8, [back to 9] 7, 3
  - collect the values and calculate them in the right way

stack = []

key point: for each bifurcation the whole branch values need to be added.

A:

Variables:

- branchValues = [0, 9, 14, 9]
- stack = []
- output = 84
- branchSum = 9
- curr = 7

while the stack isn't empty (traverse the tree with NLR)
  - curr = stack.pop()
  - currValMultiplied = curr.val * branchValues.length
  - branch value += currValMultiplied
  - branchValues << currValMultiplied

  - if there are no children
    - then add branchSum to output
    while (branchValue.length-1) > stack.length
      - subtract branchValues.pop() from branch sum
  - otherwise:
    - If there is a right, add right
    - If there is a left, add left

      9    
    /  \
   4    7  
    \  / 
     1 3   
      \
       8  

9 + 8 + 3 + 32 = 52
9 + 14 + 9     = 32
               = 84

C:

*/

class TreeNode {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

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

function totalByBranchWithMultiplication(root) {
  if (!root) return 0;

  let stack = [[root, 0, 1]]; // node, branchSum, depth
  let output = 0
  
  while (stack.length) {
    let [curr, branchSum, depth] = stack.pop();
    let currValMultiplied = curr.val * depth;
    branchSum += currValMultiplied;

    if (!curr.left && !curr.right) {
      output += branchSum;
    } else {
      if (curr.right) {stack.push([curr.right, branchSum, depth + 1])}
      if (curr.left) {stack.push([curr.left, branchSum, depth + 1])}
    }
  }

  return output;
}


// const tree1 = buildTree([8]);
// console.log(totalByBranchWithMultiplication(tree1))// === 8);

const tree2 = buildTree([5, 3, 7]);
console.log(totalByBranchWithMultiplication(tree2))// === 22);

const tree3 = buildTree([2, 8, 4, 3, 9]);
console.log(totalByBranchWithMultiplication(tree3))// === 89);

const tree4 = buildTree([6, 2, 8, null, 5]);
console.log(totalByBranchWithMultiplication(tree4))// === 693);

const tree5 = buildTree([3, 7, 2, 1, 9, 5, 4, null, null, 6, 8]);
console.log(totalByBranchWithMultiplication(tree5))// === 8614);

const tree6 = buildTree([9, 4, 7, null, 1, 3, null, null, 8]);
console.log(totalByBranchWithMultiplication(tree6))// === 10391);

// chat GPT soluton:

// function totalByBranchWithMultiplication(root) {
//   if (!root) return 0;

//   let output = 0;
//   let stack = [[root, 1, 0]]; // [node, depth, branchSum]

//   while (stack.length) {
//     let [curr, depth, branchSum] = stack.pop();

//     let currValMultiplied = curr.val * depth;
//     branchSum += currValMultiplied;

//     if (!curr.left && !curr.right) {
//       output += branchSum; // Add the final branch sum to output
//     } else {
//       if (curr.right) stack.push([curr.right, depth + 1, branchSum]);
//       if (curr.left) stack.push([curr.left, depth + 1, branchSum]);
//     }
//   }

//   return output;
// }

