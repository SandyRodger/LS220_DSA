/*

Problem: Evaluating an Expression Tree
An expression tree is a binary tree where:

Leaf nodes contain operands (numbers).
Internal nodes contain operators (+, -, *, /).
Each subtree represents a mathematical expression, and the tree can be evaluated recursively.

Example
Consider the following expression tree:

        *
       / \
      +   -
     / \  / \
    3   2 4  1
This tree represents the expression:

(3+2)∗(4−1)
which evaluates to 15.

Task
Write a function that evaluates an expression tree and returns the result. The function should:

Accept a binary tree where each node has either an operator (+, -, *, /) or a number.
Use recursion to evaluate the expression.
Assume division rounds down to an integer.
Bonus: Solve the problem iteratively using a stack.

Constraints
The tree is a valid binary tree.
Operators are only +, -, *, /.
Operands are integers.

P:

Write a function that takes thea head of a binary tree ("head")
The function must traverse the binary tree using recursion and combine each node's value to build a mathematical expression.
return the result of this expression

E:
        *
       / \
      +   -
     / \  / \
    3   2 4  1
This tree represents the expression:

(3+2)∗(4−1)
which evaluates to 15.

- multiply result of left branch with the result of right branch

Example 2:

        -
       / \
      +   -
     / \  / \
    3   2 4  1
This tree represents the expression:

(3+2)∗(4−1)
which evaluates to 15.

D:

recursion:

base case -> if it's a number
recursive case: [operand] result of left branch with the result of right branch

A:

*/


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

function calculateTree(node) {
  if (typeof node.value === 'number')  return node.value;
  return Math.floor(eval(`${calculateTree(node.left)} ${node.value} ${calculateTree(node.right)}`));
}

const tree1 = buildTree(['*', '+', '-', 3, 2, 4, 1]);
test(1, 15, calculateTree(tree1));

const tree2 = buildTree(['/', '+', '-', 3, 2, 4, 1]);
test(1, 1, calculateTree(tree2));

const tree3 = buildTree(['*', '/', '-', '+', '/', '-', 1, 3, 2, 1, 8, 9, 8]);
test(1, NaN, calculateTree(tree3)); // we divide Infinity by zero 

const tree4 = buildTree(['*', '/', '+', '+', '/', '+', 1, 3, 2, 1, 8, 9, 8]);
test(1, Infinity, calculateTree(tree4)); // we multiply 18 by infinity
