/*

https://launchschool.com/lessons/6165017e/assignments/6833923d

TOP DOWN:

An adventurer is embarking on a quest through a mysterious grid-like
landscape filled with hidden treasures. The landscape is represented by a grid
with M rows and N columns. Our adventurer begins their journey in the top-left
corner and aims to reach the bottom-right corner, all while gathering as much
treasure as possible.

Rules:
1. The adventurer can only move in two directions: right and down.
2. Each cell in the grid contains a certain amount of treasure, represented by
   a non-negative integer.
3. Upon entering a cell, the adventurer automatically collects the treasure there.

Task:
Create a function `maxTreasure` that takes a 2D grid as input. Each cell
in the grid contains a non-negative integer representing the amount of treasure.
The function should return the maximum possible treasure the adventurer can
accumulate while traveling from the top-left to the bottom-right corner.

Example:
grid = [
  [1, 3, 1, 5],
  [2, 2, 4, 1],
  [5, 0, 2, 3],
  [0, 6, 1, 2]
]

maxTreasure(grid) should return 17

Explanation: The optimal path is 1 -> 3 -> 2 -> 4 -> 2 -> 3 -> 2
collecting a total of 17 treasure units.

Constraints:
- The grid will always have at least one cell.
- All values in the grid will be non-negative integers.
- The grid dimensions M and N will be positive integers.

P:

E:

Example 1:

[[7]]; => 7

- A single int is valid input

Example 2:

- [[1, 3], [2, 4]]; => 8

- sum will always start out as equal to [1, 1]
- path is 1 + 3 + 4 = 8

Example 3:

const grid3 = [
  [1, 3, 1, 5],
  [2, 2, 4, 1],
  [5, 0, 2, 3],
  [0, 6, 1, 2]
]; => 17

- path 1 + 3 + 2 + 4 + 2 + 3 + 2 = 17

const grid4 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
]; => 149

- path is 1 + 6 + 11 + 16 + 21 + 22 + 23 + 24  + 25 = 149
- straight down then straight right. (how to guard against going below bottom row/past last column?)

const grid5 = [
  [1, 1, 1, 1, 1, 1],
  [1, 2, 2, 2, 2, 1],
  [1, 2, 3, 3, 2, 1],
  [1, 2, 3, 3, 2, 1],
  [1, 2, 2, 2, 2, 1],
  [1, 1, 1, 1, 1, 1]
]; => 21

 - path is 1 + 1 + 2 + 2 + 3 +3 + 3 + 2 +2 +1 +1 => 21

const largeGrid = Array(200).fill().map(() => Array(200).fill(1)); => 399

D:

Base case:

  - bottom right corner (no more columns to the right or rows below)

define recursive case:

  - if this plus the path to the right is greater, sum = that
  - if this plus the path down is greater, sum = that

A: 
C:
*/

function maxTreasure(inputGrid) {
  const cache = new Map();

  let l = inputGrid[0].length;
  let h = inputGrid.length;

  // LS solution uses l and h to work back from the bottom corner;

  function recursive(sum, r, c) {
    if ((r >= h) && (l >= c)) {
      return sum
      // the base case is just the value of the square alone and so at this point you should return either the top left value or the bottom right value
    }
//   - guard for cache.has
//   - recursive case

// - if this plus the path to the right is greater, sum = that
// - if this plus the path down is greater, sum = that
    if (r >= h) {
      return Math.max((sum, recursive(sum, r, c+1)))
    } else if (c >= l) {
      return Math.max((sum, recursive(sum, r+1, c)))
    } else {
    return Math.max((sum + recursive(sum, r, c+1)), (sum + recursive(sum, r+1, c)))
    }
  }

  return recursive(inputGrid[0][0]);
}

const grid1 = [[7]];
const grid2 = [[1, 3], [2, 4]];
const grid3 = [
  [1, 3, 1, 5],
  [2, 2, 4, 1],
  [5, 0, 2, 3],
  [0, 6, 1, 2]
];

const grid4 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
];

const grid5 = [
  [1, 1, 1, 1, 1, 1],
  [1, 2, 2, 2, 2, 1],
  [1, 2, 3, 3, 2, 1],
  [1, 2, 3, 3, 2, 1],
  [1, 2, 2, 2, 2, 1],
  [1, 1, 1, 1, 1, 1]
];

// My tests:

const grid6 = [
  [1, 1, 1, 1, 1, 1],
  [1, 2, 2, 2, 2, 1],
  [1, 2, 3, 3, 2, 1],
  [1, 2, 3, 3, 2, 1],
  [1, 2, 2, 2, 2, 1],
  [10000, 1, 1, 1, 1, 1]
]; // => 10010

const grid7 = [
  [1, 1, 1, 1, 1, 10000],
  [1, 2, 2, 2, 2, 1],
  [1, 2, 3, 3, 2, 1],
  [1, 2, 3, 3, 2, 1],
  [1, 2, 2, 2, 2, 1],
  [1, 1, 1, 1, 1, 1]
]; // => 10010

const largeGrid = Array(200).fill().map(() => Array(200).fill(1));

// console.log(maxTreasure(grid1) === 7);
// console.log(maxTreasure(grid2) === 8);
console.log(maxTreasure(grid3) === 17);
// console.log(maxTreasure(grid4) === 149);
// console.log(maxTreasure(grid5) === 21);
// The test case below should time out with a brute force approach.
// console.log(maxTreasure(largeGrid) === 399);
// console.log(maxTreasure(grid6) === 10010);
// console.log(maxTreasure(grid7) === 10010);