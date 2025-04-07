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

Write a function that takes a 2D grid of positive integers representing a grid and return the sum total of numbers that represent a path from the top left to the bottom right of the grid. When traversing the grid one can only move right or down.

- grids are regular squares (totalColumns === totalRows)

Question:

- How to account for large treasure amounts found after lots of small amounts?
  A: it's not just a case of taking the greater adjacent sum each time. That's why this is a DP problem.

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

What is the base case?

  - when i get to the bottom rightmost number.

What is the recursive definition?

- choose the larget of down, plus the following pathways or right plus the following pathways.

Top down or bottom-up:

- I will do bottom up, make a grid and fill it with values

const grid3 = [
  [1, 3, 1, 5],
  [2, 2, 4, 1],
  [5, 0, 2, 3],
  [0, 6, 1, 2]
]; => 17

A:

- Create a 2D array of 0s, same dimensions as input (result) (create a helper function for this).
- set first cell as 1st cell of input

- write a recursive function(row, col)
  BASE CASE:
  - if right and down are both out of bounds just return.
  - if right is in bounds (row + 1 < input.length):
    - if (thisInMyGrid + rightInInputGrid) is greater, set the rightInMyGrid co-ordinate as this
    - call recursive function with right cell co-ordinates
  - if down is in bounds
    - if (thisInMyGrid + downInInputGrid) is greater, set the down co-ordinate as this.
    - even if not: call recursive function with down cell co-ordinates

- call the reursive function with the top left element of inputGrid as an argument
- return result at bottom right.

C:
*/

function maxTreasure(inputGrid) {
  let l = inputGrid.length;
  let result = Array(l).fill().map(() => Array(l).fill(0));
  result[0][0] = inputGrid[0][0];

  function recursive(r, c) {
    if ((r >= l) && (c >= l)) { return }
    
    if ((c+1) < l) {
      if ((result[r][c] + inputGrid[r][c+1]) > result[r][c+1]) {
        result[r][c+1] = result[r][c] + inputGrid[r][c+1];
      }
      recursive(r, c+1);
    }

    if ((r+1) < l) {
      if ((result[r][c] + inputGrid[r+1][c]) > result[r+1][c]) {
        result[r+1][c] = result[r][c] + inputGrid[r+1][c];
      }
      recursive(r+1, c);
    }
  }

  recursive(0, 0)
  return result[l-1][l-1];
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

console.log(maxTreasure(grid1) === 7);
console.log(maxTreasure(grid2) === 8);
console.log(maxTreasure(grid3) === 17);
console.log(maxTreasure(grid4) === 149);
console.log(maxTreasure(grid5) === 21);
// The test case below should time out with a brute force approach.
console.log(maxTreasure(largeGrid) === 399);
console.log(maxTreasure(grid6) === 10010);
console.log(maxTreasure(grid7) === 10010);