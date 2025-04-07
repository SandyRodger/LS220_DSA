/*

https://launchschool.com/lessons/94a964c2/assignments/993cb660

As a hydrologist, you're studying a unique rectangular island
situated between the Atlantic Ocean and the Indian Ocean. The
island's terrain varies in elevation across its surface.
The island is represented as an m x n grid, where each cell has
a specific elevation.

The ocean borders are as follows:

The Atlantic Ocean borders the island's western and northern coasts.
The Indian Ocean borders the island's southern and eastern coasts.

You're given an m x n integer matrix `heights` where `heights[r][c]`
represents the height above sea level of the cell at coordinate (r, c).
During the rainy season, water accumulates on the island and
flows according to these rules:

Water can flow from a cell to adjacent cells in four directions,
north, south, east, and west if the adjacent cell's elevation
is less than or equal to the current cell's elevation.
Water can flow from any edge cell directly into the bordering ocean.

Your task is to identify all the locations on the island where accumulated
rainwater has the potential to eventually reach *both* the Atlantic and
Indian Oceans, either directly or through connected cells.


Example 1:

Input:
[
 [1, 2, 1, 3, 6],
 [2, 2, 3, 4, 4],
 [2, 3, 5, 2, 1],
 [9, 8, 1, 3, 5],
 [5, 1, 2, 2, 3]
]

Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]

Explanation:
- [0,4] with an elevation of 6 can flow to the Atlantic Ocean (north) and the Indian Ocean (east) directly.
- [1,3] with an elevation of 4 can flow to the Atlantic via [0,3] (as well as several other paths) and
  can reach the Indian ocean via [1,4] (as well as several other paths).
- [1,4] can flow to both oceans in a similar fashion as [1, 3].
- [2,2] can reach Atlantic Ocean directly to the north or west and the Indian ocean directly to the east.
- [3,0], [3,1], and [4,0] can flow to the Atlantic to the west and reach the Indian ocean to the south.

Example 2:

Input:
[[1]]

Output: [[0,0]]

Explanation: On a single-cell island, water from the sole cell can reach both oceans.

P:

Write a function that takes a 2D array contianing positive integers. The function should return the co-ordinates of those array-positions which are valid:

Valid:
  - there is a route from this square to the top/right border AND the bottom/left border
  - traversal from one square to another is possible if the next number is EQUAL TO or LESS THAN the previous number.
  - Once the path reaches a border number (top/bottom row, index 0/index = length-1) it can be assumed to be valid. 

Input

  - a single cell is the minimum input

Output 
  - minimum input outputs [[0,0]] => there is no way of stopping top right cell from valid path
  
E:

Example 1:

Input:
[
 [1, 2, 1, 3, 6],
 [2, 2, 3, 4, 4],
 [2, 3, 5, 2, 1],
 [9, 8, 1, 3, 5],
 [5, 1, 2, 2, 3]
]

Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]

Explanation:
- [0,4] with an elevation of 6 can flow to the Atlantic Ocean (north) and the Indian Ocean (east) directly.
- [1,3] with an elevation of 4 can flow to the Atlantic via [0,3] (as well as several other paths) and
  can reach the Indian ocean via [1,4] (as well as several other paths).
- [1,4] can flow to both oceans in a similar fashion as [1, 3].
- [2,2] can reach Atlantic Ocean directly to the north or west and the Indian ocean directly to the east.
- [3,0], [3,1], and [4,0] can flow to the Atlantic to the west and reach the Indian ocean to the south.
- The thing I notice about this example is that the valid numbers correlate with a diagonal line across the island, clustering at top right and bottom left corners. This is the most likely outcome, but shouldn't affect my logic.

Example 2:

Input:
[[1]]

Output: [[0,0]]

Explanation: On a single-cell island, water from the sole cell can reach both oceans.

- A single cell island is valid input.

Example 3: 

const grid3 = [
  [3, 3, 3, 3, 3],
  [3, 2, 2, 2, 3],
  [3, 2, 1, 2, 3],
  [3, 2, 2, 2, 3],
  [3, 3, 3, 3, 3]
];
const expected3 = [[0,0],[0,1],[0,2],[0,3],[0,4],[1,0],[1,4],[2,0],[2,4],[3,0],[3,4],[4,0],[4,1],[4,2],[4,3],[4,4]];

- All solutions begin with a top-row cell and end with a bottom-row cell (not necessarily).
- This island has the highest point at it's borders.
- Because all the borders have an equal height they can traverse water around equally, making all border cells valid.
- Their order of inclusion in the output is a clue:
  - top row left to right
  - 2nd row, left to right
  - 3rd row left to right
  - 4th row left to right
  - 5th row left to right
    - This suggests to be a double for loop

const grid4 = [
  [1, 2, 3],
  [8, 9, 4],
  [7, 6, 5]
];
const expected4 = [[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]];
console.log(coordinateSetsEqual(waterFlow(grid4), expected4));

- spiral


const grid5 = [
  [10, 10, 10, 10],
  [10,  1,  1, 10],
  [10,  1,  1, 10],
  [10, 10, 10, 10]
];
const expected5 = [[0,0],[0,1],[0,2],[0,3],[1,0],[1,3],[2,0],[2,3],[3,0],[3,1],[3,2],[3,3]];
console.log(coordinateSetsEqual(waterFlow(grid5), expected5));

- like grid 3, an island with high shore-lines where the only valid paths are the shore-cells.
- The last cell to be considered will the the bottom left, the first will be the top right.

My test cases:

const grid6 = [
  [2, 2, 2, 2, 3],
  [3, 1, 1, 1, 2],
  [3, 1, 1, 1, 2],
  [3, 1, 1, 1, 2],
  [2, 3, 3, 3, 3]
];

const expected6 = [[0,4]];
  - maximum block.
  - the borders can flow into the island, but they are blocked by the opposite shore-border.

  const grid7 = [
  [2, 2, 2, 2, 2],
  [2, 8, 8, 8, 2],
  [2, 8, 9, 8, 2],
  [2, 8, 8, 8, 2],
  [2, 2, 2, 2, 2]
];

const expected7 = [[0,4]];
  - minimum block.
  - all cells valid and included in output.


D:

- double for-loops
- When are paths blocked?

helper methods:
  - validPathNorthWest => boolean
  - validPathSouthEast => booean

  - create a path from each cell that when it reaches a success condition  can quit the recursion and return true for that cell.


A:

- for every startingPoint find the cells it can reach.
- if those cells includes a NW and a SE coOrd, then push it into the results

C:
*/

function waterFlow(heights) {
  let result = [];
  const coOrds = (row, col) => `${row},${col}`;
  const paths = {}

  function findOceans(row, col, pathsKey, visited) {
    visited.add(coOrds(row, col));

    if (row === 0 || col === 0) { paths[pathsKey].atlantic = true }
    if ((row+1) === heights.length || (col+1) === heights[0].length) { paths[pathsKey].indian = true }

    if (row > 0 && !visited.has(coOrds(row-1, col)) && heights[row-1][col] <= heights[row][col]) { findOceans(row-1, col, pathsKey, visited)}
    if (row < heights.length - 1 && !visited.has(coOrds(row+1, col)) && heights[row+1][col] <= heights[row][col]) { findOceans(row+1, col, pathsKey, visited)}
    if (col > 0 && !visited.has(coOrds(row, col - 1)) && heights[row][col-1] <= heights[row][col]) { findOceans(row, col - 1, pathsKey, visited)};
    if (col < heights[0].length && !visited.has(coOrds(row, col+1)) && (heights[row][col+1] <= heights[row][col])) { findOceans(row, col + 1, pathsKey, visited)};
  }

  for (row = 0; row < heights.length; row ++) {
    for (col = 0; col < heights[0].length; col++) {
      let visited = new Set();
      let pathsKey = coOrds(row, col);
      paths[pathsKey] = {
        atlantic: false,
        indian: false,
      };
      findOceans(row, col, pathsKey, visited);
    }
  }


  for (const [k, _] of Object.entries(paths)) {
    if (paths[k].atlantic && paths[k].indian) {
      result.push([Number(k[0]), Number(k[2])]);
    }
  }
  return result;
}

// Helper function for the test cases

function coordinateSetsEqual(set1, set2) {
  if (set1.length !== set2.length) return false;
  const stringSet1 = new Set(set1.map(JSON.stringify));
  return set2.every(coord => stringSet1.has(JSON.stringify(coord)));
}

// Test Cases:

const grid1 = [
  [1, 2, 1, 3, 6],
  [2, 2, 3, 4, 4],
  [2, 3, 5, 2, 1],
  [9, 8, 1, 3, 5],
  [5, 1, 2, 2, 3]
];
const expected1 = [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]];

console.log(coordinateSetsEqual(waterFlow(grid1), expected1));

const grid2 = [[1]];
const expected2 = [[0,0]];
console.log(coordinateSetsEqual(waterFlow(grid2), expected2));

const grid3 = [
  [3, 3, 3, 3, 3],
  [3, 2, 2, 2, 3],
  [3, 2, 1, 2, 3],
  [3, 2, 2, 2, 3],
  [3, 3, 3, 3, 3]
];
const expected3 = [[0,0],[0,1],[0,2],[0,3],[0,4],[1,0],[1,4],[2,0],[2,4],[3,0],[3,4],[4,0],[4,1],[4,2],[4,3],[4,4]];
console.log(coordinateSetsEqual(waterFlow(grid3), expected3));

const grid4 = [
  [1, 2, 3],
  [8, 9, 4],
  [7, 6, 5]
];
const expected4 = [[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]];
console.log(coordinateSetsEqual(waterFlow(grid4), expected4));

const grid5 = [
  [10, 10, 10, 10],
  [10,  1,  1, 10],
  [10,  1,  1, 10],
  [10, 10, 10, 10]
];
const expected5 = [[0,0],[0,1],[0,2],[0,3],[1,0],[1,3],[2,0],[2,3],[3,0],[3,1],[3,2],[3,3]];
console.log(coordinateSetsEqual(waterFlow(grid5), expected5));


const grid6 = [
  [2, 2, 2, 2, 3],
  [3, 1, 1, 1, 2],
  [3, 1, 1, 1, 2],
  [3, 1, 1, 1, 2],
  [2, 3, 3, 3, 3]
];

const expected6 = [[0,4]];
console.log(waterFlow(grid6));
console.log(coordinateSetsEqual(waterFlow(grid6), expected6));

  const grid7 = [
  [2, 2, 2, 2, 2],
  [2, 8, 8, 8, 2],
  [2, 8, 9, 8, 2],
  [2, 8, 8, 8, 2],
  [2, 2, 2, 2, 2]
];

// prints all co-ordinates