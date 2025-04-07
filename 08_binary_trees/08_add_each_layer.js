/*

I created this problem.

P:

Write a function that returns the total of each level, where each node value is multiplied by its order left to right.

So:

      8       => (8 * 1) = 8
    /  \
  3     4     => (3 * 1) + (4 * 2) = 11

  = 19

E:


const tree1 = buildTree([8]);
console.log(totalByLevelWithMultiplication(tree1))// === 8);

- 8 * 1 = 8

const tree2 = buildTree([5, 3, 7]);
console.log(totalByLevelWithMultiplication(tree2))// === 22);

- (5 * 1) + ((3 * 1) + (7 * 2)) 
=    5     +    3     +    14
= 22

const tree3 = buildTree([2, 8, 4, 3, 9]);
console.log(totalByLevelWithMultiplication(tree3))// === );

      2       => (2 * 1) = 2
    /  \
   8    4     => (8 * 1) + (4 * 2) = 16
  / \  
 3  9         => (3 * 1) + (9 * 2) = 21


- 1st level: 2
- 2nd level: 8 + 8 = 16 (18)
- 3rd level: 3 + 18 = 21 (39)
=> 39

const tree4 = buildTree([6, 2, 8, null, 5]);
console.log(totalByLevelWithMultiplication(tree4)));

      6       => (6 * 1) = 6
    /  \
   2    8     => (2 * 1) + (8 * 2) = 16 (22)
    \  
    5         => (5 * 1) = 5 (27)


const tree5 = buildTree([3, 7, 2, 1, 9, 5, 4, null, null, 6, 8]);
console.log(totalByLevelWithMultiplication(tree5));

      6       => (6 * 1) = 6
    /  \
   2    8     => (2 * 1) + (8 * 2) = 16 (22)
    \  
    5         => (5 * 1) = 5 (27)

    
const tree6 = buildTree([9, 4, 7, null, 1, 3, null, null, 8]);
console.log(totalByLevelWithMultiplication(tree6)));

      9    => 9
    /  \
   4    7  => 4 + 14 = 18 (27)
    \  / 
     1 3   => 1 + 6 = 7 (34)
      \
       8  => 8 (42)

D:

const tree4 = buildTree([6, 2, 8, null, 5]);
console.log(totalByLevelWithMultiplication(tree4)));

      6       => (6 * 1) = 6
    /  \
   2    8     => (2 * 1) + (8 * 2) = 16 (22)
    \  
    5         => (5 * 1) = 5 (27)

BFS - queue

start with queue containing rootNode
while the queue contains nodes (ie has length)
process all values in the queue into its total (helper method)
add that to a running total
with a for loop, unshift each node
  - push it onto the queue

A:

Variables:

queue = [root] => collecting the nodes in each level, somehow pausing bewtween levels, to process values.
sumTotal = 0 => return this at the end.


while the queue has length
  - set how many things are in the queue "levelLength"
  - Establish multiplier as 1
  - while the multiplier is <= levelLength
    - take the nodes (node) using shift() ("curr")
    - check if the node has children, if it does add it/them to the right of the queue
    - take the value of curr and add it (multiplied by multiplier) to sumTotal
    - multiplier increment by 1

return sumTotal

queue = []
sumtotal = 29
levelLength = 1
multiplier = 2
curr = 5

const tree4 = buildTree([6, 2, 8, null, 5]);

      6       => (6 * 1) = 6
    /  \
   2    8     => (2 * 1) + (8 * 2) = 18 (24)
    \  
    5         => (5 * 1) = 5 (29)


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

function totalByLevelWithMultiplication(root) {
  let queue = [root];
  let sumTotal = 0;

  while (queue.length) {
    let levelLength = queue.length;
    let multiplier = 1;
    while (multiplier <= levelLength) {
      let curr = queue.shift();
      if (curr.left) {queue.push(curr.left)};
      if (curr.right) {queue.push(curr.right)};
      sumTotal += (curr.val * multiplier);
      multiplier++;
    }
  }
  
  return sumTotal;
}


// const tree1 = buildTree([8]);
// console.log(totalByLevelWithMultiplication(tree1))// === 8);

const tree2 = buildTree([5, 3, 7]);
console.log(totalByLevelWithMultiplication(tree2))// === 22);

// const tree3 = buildTree([2, 8, 4, 3, 9]);
// console.log(totalByLevelWithMultiplication(tree3))// === 596);

// const tree4 = buildTree([6, 2, 8, null, 5]);
// console.log(totalByLevelWithMultiplication(tree4))// === 693);

// const tree5 = buildTree([3, 7, 2, 1, 9, 5, 4, null, null, 6, 8]);
// console.log(totalByLevelWithMultiplication(tree5))// === 8614);

// const tree6 = buildTree([9, 4, 7, null, 1, 3, null, null, 8]);
// console.log(totalByLevelWithMultiplication(tree6))// === 10391);
