/*

https://launchschool.com/lessons/94a964c2/assignments/d73b5d2e

You are provided with a 2D grid map where each cell
is either marked as a tree ('T') or open land ('O').
Your goal is to transform specific regions of open land into trees.
An open land region consists of open land cells that are
connected horizontally or vertically.

Any region of open land that is completely surrounded by trees
on all four sides should be converted into a tree area by changing
its designation to 'T'.

The transformation rules are as follows:
- If an open land cell ('O') is connected to other open land cells
  horizontally or vertically, they form an open land region.
- If an entire open land region is completely surrounded by tree
  cells ('T') on all four sides (up, down, left, and right), then
  all cells in this region should be changed to tree cells ('T').
- Open land regions that are not completely surrounded by trees will remain unchanged.

Implement a function `forestExpansion` that
accepts a nested array grid representing the 2D map.
The function should return the same grid, modified
so that all open land regions surrounded by trees
on all four sides are converted to trees.

P

Write a function that takes a 2D grid representing a forest. This grid only contains 2 values - 'T' and 'O', representing tree and empty. The function must identify regions of empty spaces that are surrounded by trees and convert them to tree spaces. If an empty space is not totally surrounded, it wil not be transformed. "surrounded" means vertically and horizontally, but not diagonally. 

So the steps are:
  - Identify open regions
  - check whether they are surrounded
  - if they are, transform them to trees
  - mark them so that they are not checked again

E:

Example 1:

Input:
[
['T', 'T', 'O'],
['T', 'O', 'T'],
['T', 'T', 'T']
]

Output:
[
['T', 'T', 'O'],
['T', 'T', 'T'],
['T', 'T', 'T']
]

Explanation:
There are two distinct open land regions - cell (0, 2) and cell (1, 1).
The region made up of cell (1, 1) is completely surrounded by trees,
horizontally and vertically, so it's converted to a tree.


Example 2:

Input:
[
['T', 'O', 'T'],
['O', 'O', 'O'],
['T', 'O', 'T']
]

Output:
[
['T', 'O', 'T'],
['O', 'O', 'O'],
['T', 'O', 'T']
]

Explanation:
There is only one open land region in this case made up of
cells (0, 1), (1, 0), (1, 1), (1, 2), and (2, 1).
This region is not fully surrounded by trees, so it remains unchanged.

const grid2 = [
['T', 'O', 'T'],
['O', 'O', 'O'],
['T', 'O', 'T']
];
const expected2 = [
['T', 'O', 'T'],
['O', 'O', 'O'],
['T', 'O', 'T']
];

console.log(gridsAreEqual(forestExpansion(grid2), expected2));

const grid3 = [
['T', 'T', 'T', 'T'],
['T', 'O', 'T', 'T'],
['T', 'T', 'O', 'T'],
['T', 'T', 'T', 'T']
];
const expected3 = [
['T', 'T', 'T', 'T'],
['T', 'T', 'T', 'T'],
['T', 'T', 'T', 'T'],
['T', 'T', 'T', 'T']
];

console.log(gridsAreEqual(forestExpansion(grid3), expected3));

const grid4 = [
['O', 'T', 'O', 'T'],
['T', 'O', 'T', 'O'],
['O', 'T', 'O', 'O']
];
const expected4 = [
['O', 'T', 'O', 'T'],
['T', 'T', 'T', 'O'],
['O', 'T', 'O', 'O']
];

console.log(gridsAreEqual(forestExpansion(grid4), expected4));

const grid5 = [
['T', 'T', 'T', 'O', 'T'],
['T', 'O', 'T', 'O', 'T'],
['T', 'O', 'T', 'T', 'T'],
['T', 'T', 'T', 'T', 'T'],
];
const expected5 = [
['T', 'T', 'T', 'O', 'T'],
['T', 'T', 'T', 'O', 'T'],
['T', 'T', 'T', 'T', 'T'],
['T', 'T', 'T', 'T', 'T'],
];

console.log(gridsAreEqual(forestExpansion(grid5), expected5));

// my tests:

const grid6 = [
['T', 'T', 'T', 'O', 'T'],
['T', 'O', 'O', 'O', 'T'],
['T', 'O', 'O', O', 'T'],
['T', 'T', 'T', 'T', 'T'],
];
const expected6 = [
['T', 'T', 'T', 'O', 'T'],
['T', 'O', 'O', 'O', 'T'],
['T', 'O', 'O', 'O', 'T'],
['T', 'T', 'T', 'T', 'T'],
];

console.log(gridsAreEqual(forestExpansion(grid6), expected6));

const grid7 = [
['T', 'T', 'T', 'T', 'T'],
['T', 'O', 'O', 'O', 'T'],
['T', 'O', 'O', O', 'T'],
['T', 'T', 'T', 'T', 'T'],
];
const expected7 = [
['T', 'T', 'T', 'T', 'T'],
['T', 'T', 'T', 'T', 'T'],
['T', 'T', 'T', 'T', 'T'],
['T', 'T', 'T', 'T', 'T'],
];

console.log(gridsAreEqual(forestExpansion(grid7), expected7));

D:

- Use a set to mark which spaces have been checked
- Double for loop ? -> traverse the forest -> when you find an empty space start exploring it

A:

- traverse the forest  (double for loop)
- when you find an empty space start exploring the region around it (depth first search)
  - Where are the boundries of this meadow
    - if it touches the edges of the grid you can abandon the transformation
    - otherwise it will definitely be transformed, so you only need to discover the boundries of the meadow
      - save the coOrdinates of empties in an array called toPlant
  - mark this region as explored

C:
*/

const grid1 = [
  ['T', 'T', 'O'],
  ['T', 'O', 'T'],
  ['T', 'T', 'T']
  ]

function forestExpansion(grid) {

  const numRows = grid.length;
  const numCols = grid[0].length;
  const isTree = (row, col) => grid[row][col] === 'T';
  const visited = new Set();
  const coOrds = (row, col) => `${row},${col}`;

  function outOfBounds(row, col) {
    return (row < 0 || row >= numRows || col < 0 || col >= numCols)
  }

  function exploreMeadow(row, col) {

    if (outOfBounds(row, col) || isTree(row, col) || visited.has(coOrds(row, col))) {
      return;
    }
    // grid[row, col] = 'V';
    visited.add(coOrds(row, col));
    exploreMeadow(row, col-1);
    exploreMeadow(row, col+1);
    exploreMeadow(row-1, col);
    exploreMeadow(row+1, col);
  }

  // check top/bottom row
  for (col = 0; col < numCols; col++) {

    if (!isTree(0, col)){
      exploreMeadow(0, col);
    }
    if (!isTree(numRows-1, col)) {
      exploreMeadow(numRows-1, col);
    }
  }

  // check left/right side
  for (row = 0; row < numRows; row++) {
    if (!isTree(row, 0)) {
      exploreMeadow(row, 0);
    }
    if (!isTree(row, numCols-1)) {
      exploreMeadow(row, numCols-1);
    }
  }

  for (row = 0; row < numRows; row++) {
    for (col = 0; col < numCols; col++) {
      // console.log(coOrds(row, col));
      if (!isTree(row, col) && !visited.has(coOrds(row, col))) {
        grid[row][col] = 'T';
      }
    }
  }

  return grid;
}


// console.log(forestExpansion(grid1));

function gridsAreEqual(grid1, grid2) {
  if (grid1.length !== grid2.length) return false;

  return grid1.every((row, i) => row.length === grid2[i].length && row.every((cell, j) => cell === grid2[i][j]));
}



const expected1 = [
['T', 'T', 'O'],
['T', 'T', 'T'],
['T', 'T', 'T']
];

console.log(gridsAreEqual(forestExpansion(grid1), expected1));

const grid2 = [
['T', 'O', 'T'],
['O', 'O', 'O'],
['T', 'O', 'T']
];
const expected2 = [
['T', 'O', 'T'],
['O', 'O', 'O'],
['T', 'O', 'T']
];

console.log(gridsAreEqual(forestExpansion(grid2), expected2));

const grid3 = [
['T', 'T', 'T', 'T'],
['T', 'O', 'T', 'T'],
['T', 'T', 'O', 'T'],
['T', 'T', 'T', 'T']
];
const expected3 = [
['T', 'T', 'T', 'T'],
['T', 'T', 'T', 'T'],
['T', 'T', 'T', 'T'],
['T', 'T', 'T', 'T']
];

console.log(gridsAreEqual(forestExpansion(grid3), expected3));

const grid4 = [
['O', 'T', 'O', 'T'],
['T', 'O', 'T', 'O'],
['O', 'T', 'O', 'O']
];
const expected4 = [
['O', 'T', 'O', 'T'],
['T', 'T', 'T', 'O'],
['O', 'T', 'O', 'O']
];

console.log(gridsAreEqual(forestExpansion(grid4), expected4));

const grid5 = [
['T', 'T', 'T', 'O', 'T'],
['T', 'O', 'T', 'O', 'T'],
['T', 'O', 'T', 'T', 'T'],
['T', 'T', 'T', 'T', 'T'],
];
const expected5 = [
['T', 'T', 'T', 'O', 'T'],
['T', 'T', 'T', 'O', 'T'],
['T', 'T', 'T', 'T', 'T'],
['T', 'T', 'T', 'T', 'T'],
];

console.log(gridsAreEqual(forestExpansion(grid5), expected5));