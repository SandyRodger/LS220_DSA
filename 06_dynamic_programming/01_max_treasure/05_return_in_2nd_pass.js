/*

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

start: 8:06
end: peeked.

Write a function that takes a mXn grid filled with positive numbers and determines the highest sum which can be accumulated when traversing the grid top left to bottom right only moving right or down.

Note:

- The maxSum is not necessarily found by always choosing the greater number between right and down.1
E:

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

- Surely, there is a second path to 17, which is straight down and straight right?

Ex2:

const grid1 = [[7]]; => 7

Ex3:

const grid2 = [[1, 3], [2, 4]]; => 8

Ex4:

const grid4 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
]; => 149

const grid5 = [
  [1, 1, 1, 1, 1, 1],
  [1, 2, 2, 2, 2, 1],
  [1, 2, 3, 3, 2, 1],
  [1, 2, 3, 3, 2, 1],
  [1, 2, 2, 2, 2, 1],
  [1, 1, 1, 1, 1, 1]
];

const largeGrid = Array(200).fill().map(() => Array(200).fill(1));

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

D:


TOP DOWN

- solve without a cache first (AKA brute force)

- define cache -> Map
- define function
  - guard for base-case(s)
  - guard for cache.has
  - recursive case
  - return result
-  return recursiveFunction call.


Example:
grid = [
  [1, 3, 1, 5],
  [2, 2, 4, 1],
  [5, 0, 2, 3],
  [0, 6, 1, 2]
]

maxTreasure(grid) should return 17


-  Bottom up (my template):
  - guard clauses
  - create a cache called dp (usually an array mirroring the input, filled with 0)
  - Use for loops to set the values in dp, building on previous answers
  - return the last element in dp
    

A:
C:

*/

// grid = [
//   [1, 3, 1, 5],
//   [2, 2, 4, 1],
//   [5, 0, 2, 3],
//   [0, 6, 1, 2]
// ]

function maxTreasure(grid) {
  const h = grid.length;
  const w = grid[0].length;
  const dp = Array.from({length: h}, () => Array(w).fill(0))

  for (r = 0; r < h; r++) {
    for (c = 0; c < w; c++) {
      if (r === 0 && c === 0) { 
        dp[r][c] = grid[r][c] 
      } else if (r === 0) {
        dp[r][c] = grid[r][c] + grid[r][c-1];
      } else if (c === 0) {
        dp[r][c] = grid[r][c] + grid[r-1][c];
      } else {
        dp[r][c] = grid[r][c] + Math.max(dp[r-1][c], dp[r][c-1]);
      }
    }
  }
  return dp[h-1][w-1];
}

// Test cases
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

const largeGrid = Array(200).fill().map(() => Array(200).fill(1));

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


// console.log(maxTreasure(grid1) === 7);
// console.log(maxTreasure(grid2) === 8);
console.log(maxTreasure(grid3))// === 17);
// console.log(maxTreasure(grid4) === 149);
// console.log(maxTreasure(grid5) === 21);
// // The test case below should time out with a brute force approach.
// console.log(maxTreasure(largeGrid) === 399);
// console.log(maxTreasure(grid6) === 10010);
// console.log(maxTreasure(grid7) === 10010);