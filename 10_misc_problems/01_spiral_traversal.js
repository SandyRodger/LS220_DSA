/*

https://launchschool.com/lessons/157d45f6/assignments/04a1c7f8

You are given a 2D matrix of integers. Your task is to traverse the matrix
in a spiral order, starting from the top-left corner and moving clockwise.
Return an array containing all elements of the matrix in the order they
are visited during the spiral traversal.

The spiral order moves right, then down, then left, then up, and repeats
this pattern until all elements have been visited.

P:

Write a function that takes a 2D array of integers and prints out each order in a spiral pattern:

Pattern is as follows:
  - begin at top left element
  - traverse right until the end
  - traverse down until the end
  - traverse left until the end
  - traverse up until the end
  - repeat until there are no more elements to traverse.

output is a 1D array or integers

E:

Example 1:
Input:
[
 [10, 20, 30],
 [40, 50, 60],
 [70, 80, 90]
]
Output: [10, 20, 30, 60, 90, 80, 70, 40, 50]

Example 2:
Input:
[
 [1,  2,  3,  4],
 [5,  6,  7,  8],
 [9,  10, 11, 12],
 [13, 14, 15, 16]
]
Output: [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]

Example 3:

console.log(spiralTraversal([
  [5, 10],
  [15, 20]
])); // Expected output: [5, 10, 20, 15]

Example 4:

console.log(spiralTraversal([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12]
])); // Expected output: [1, 2, 3, 6, 9, 12, 11, 10, 7, 4, 5, 8]

Example 5:

console.log(spiralTraversal([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20]
])); // Expected output: [1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12]

- it seems that there are no duplicates in the arrays. This does not affect my task - the elems could all be nulls and it would not change my logic.

console.log(spiralTraversal([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15]
])); // Expected output: [1, 2, 3, 4, 5, 10, 15, 14, 13, 12, 11, 6, 7, 8, 9]

- this is a 5 x 3 grid, not equal sides.

console.log(spiralTraversal([
  [42]
])); // Expected output: [42]

- a single input is valid

console.log(spiralTraversal([
  [1, 2, 3, 4, 5, 6]
])); // Expected output: [1, 2, 3, 4, 5, 6]

- This input is one row only, also valid (input === output)

console.log(spiralTraversal([
  [1],
  [2],
  [3],
  [4],
  [5],
  [6]
])); // Expected output: [1, 2, 3, 4, 5, 6]

-  this example is one column only

D:

output array into which I push elems

helper methods:
  - leftValid
  - rightValid
  - upValid
  - downValid

A:

Variables;

currCoOrds = [0, 0]
- output = [matrix[currCoOrds]]
visited = new Set()

while up, down, left and right have all not been visited
  - go right as far as you can
  - go down as far as you can
  - go left as far as you can
  - go up as far as you can


  You cannot travel further if that number has been visited already OR it is out of bounds

  travel left to right, adding the elements, then delete top row
  travel up to down, adding elements, then delete the right col

C:
*/

function spiralTraversal(matrix) {

  if (matrix[0].length === 1) { return matrix.flat() };

  let output = [];

  while (matrix.length) {
    if (matrix.length) {
      for (c = 0; c < matrix[0].length; c++) {
        output.push(matrix[0][c]);
      }
      matrix.shift();
    }

    if (matrix.length) {
      for (r = 0; r < matrix.length; r++) {
        output.push(matrix[r].pop());
      }
    }

    if (matrix.length) {
      for (c = matrix[0].length; c > 0; c--) {
        output.push(matrix.at(-1).pop());
      }
      matrix.pop();
    }

    if (matrix.length) {
      for (r = matrix.length-1; r >= 0; r--) {
        output.push(matrix[r].shift());
      }
    }
  }
  return output;
}

function test(act, exp) {
  // for (i = 0; i < exp.length; i++) {
  //   if (act[i] !== exp[i]) {
  //     console.log(`exp: ${exp} \n act: ${act}`)
  //     return;
  //   }
  // }
  // console.log(`(-:`)
  console.log(`----------`)
  console.log(act)
  console.log(exp)
  console.log(`----------`)
}

test(spiralTraversal([
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90]
]), [10, 20, 30, 60, 90, 80, 70, 40, 50]);

test(spiralTraversal([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
]), [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]);

test(spiralTraversal([
  [5, 10],
  [15, 20]
]), [5, 10, 20, 15]);

test(spiralTraversal([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12]
]), [1, 2, 3, 6, 9, 12, 11, 10, 7, 4, 5, 8]);

test(spiralTraversal([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20]
]), [1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12]);

test(spiralTraversal([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15]
]), [1, 2, 3, 4, 5, 10, 15, 14, 13, 12, 11, 6, 7, 8, 9]);

test(spiralTraversal([
  [42]
]), [42])

test(spiralTraversal([
  [1, 2, 3, 4, 5, 6]
]), [1, 2, 3, 4, 5, 6]);

test(spiralTraversal([
  [1],
  [2],
  [3],
  [4],
  [5],
  [6]
]), [1, 2, 3, 4, 5, 6]);