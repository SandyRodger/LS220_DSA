/*

https://launchschool.com/lessons/94a964c2/assignments/c13ad6cc

You're a botanist studying the spread of a peculiar wilting
condition in a rose garden. The garden is represented as a
grid where each cell can have one of three states:

- 0 representing an empty plot,
- 1 representing a healthy rose, or
- 2 representing a wilted rose.

Every day, any healthy rose that is adjacent (up, down, left,
or right) to a wilted rose begins to wilt.
Your task is to determine the minimum number of days it takes
for all roses in the garden to wilt. If it's impossible for
all roses to wilt, return -1.

Example 1:

Input:
[
  [2,1,1],
  [1,1,0],
  [0,1,1]
]

Output: 4

Explanation:
Day 1: Roses at (0, 1) and (1, 0) will wilt.
Day 2: Roses at (0, 2) and (1, 1) will wilt.
Day 3: The rose at (2, 1) will wilt.
Day 4: The final rose at (2, 2) will wilt.

Example 2:

Input:
[
  [2,1,1],
  [0,1,1],
  [1,0,1]
]

Output: -1

Explanation: The rose in the bottom left corner (2, 0)
will never wilt because it's not adjacent to any
other roses.

P:

Write a function that takes a 2D array of 0s, 1s and 2s. THe function should output the number of steps it would take to convert all 1s to 2s. The conversion can only happen under these conditions:
  - A 1 must be above, below, left or right of a 2.
  - The conversion can only act on it's direct neighbours, so it cannot transform an entire row in one go. 
If any 1 is surrounded by 0s or the outside of the grid, and therefore cannot ever be converted, the function returns -1.

E:

Example 1:

Input:
[
  [2,1,1],
  [1,1,0],
  [0,1,1]
]

Output: 4

Explanation:
Day 1: Roses at (0, 1) and (1, 0) will wilt.

[
  [2,2,1],
  [2,1,0],
  [0,1,1]
]

Day 2: Roses at (0, 2) and (1, 1) will wilt.

[
  [2,2,2],
  [2,2,0],
  [0,1,1]
]
  
Day 3: The rose at (2, 1) will wilt.

[
  [2,2,2],
  [2,2,0],
  [0,2,1]
]

Day 4: The final rose at (2, 2) will wilt.

[
  [2,2,2],
  [2,2,0],
  [0,2,2]
]

Example 2:

Input:
[
  [2,1,1],
  [0,1,1],
  [1,0,1]
]

Output: -1

Explanation: The rose in the bottom left corner (2, 0)
will never wilt because it's not adjacent to any
other roses.

[[0,2]]) === 0

- There are no 1s to convert

[[1,1,1],[1,2,1],[1,1,1]]) === 2

- The single 2 in the centre of the 3x3 grid converts 4 1s in the first go, then the rest

[[2,2],[1,1],[0,0]]) === 1

- the top layer transforms the mid-layer. The bottom layer is empty.

[[1,1,1],[1,1,1],[1,1,1]]) === -1

- No 2s, return -1

[[2]]) === 0

- The outcome is not -1, because all non-zeroes in the garden are 2s

[[1]]) === -1

- No 2s, all-non-zeroes are not 2s

[]) === -1

- empty array is valid input

[[0,0,0],[0,1,0],[0,0,2]]) === -1

- The 2 is isolated by zeroes above and below.

[[2,1,1],[1,1,1],[0,1,2]]) === 2

begins as:

[[2,1,1],
 [1,1,1],
 [0,1,2]]

1st round:

[[2,2,1],
 [2,1,2],
 [0,2,2]]

2nd round:
[[2,2,2],
 [2,2,2],
 [0,2,2]]

D:

How do I simultaneously conduct BFS from multiple locations

A:

VARS:

- queue = [];
- healthyRoses = 0
- wiltedRoses = 0
- days = 0

- Iterate over the grid enqueing wilted roses and counting healthy roses
- While the queue is not empty AND number of healthy roses is greater than 0:
  - dequeue all wilts in the queue
    - wilt all healthy connected roses
    - enqueue them
    - decrement healthyRoses by however many
    - increment days by 1
- if we get here, but healthyRoses is greater than 0, return -1, otherwise days

C:
*/

// function findAll2s(garden) {
//   let result = []
//   for (row = 0; row < garden.length; row++) {
//     for (col = 0; col < garden[0].length; col++) {
//       if (garden[row][col] === 2) {
//         result.push([row, col]);
//       }
//     }
//   }
//   return result;
// }

// function hasNeighbouringRoses(garden, row, col) {
//   return (
//     (inBounds(row - 1, col, garden) && (garden[row - 1][col] === 1)) ||
//     (inBounds(row + 1, col, garden) && (garden[row + 1][col] === 1)) ||
//     (inBounds(row, col - 1, garden) && (garden[row][col-1] === 1)) ||
//     (inBounds(row, col + 1, garden) && (garden[row][col+1] === 1))
//   )
// }

// function convertNeighbouringRoses(garden, row, col) {
//   if (inBounds(row-1, col, garden) && garden[row - 1][col] === 1) { garden[row - 1][col] = 2};
//   if (inBounds(row + 1, col, garden) && garden[row + 1][col] === 1) { garden[row - 1][col] = 2};
//   if (inBounds(row, col -1) && garden[row][col - 1] === 1) { garden[row - 1][col] = 2};
//   if (inBounds(row, col +1, garden) && garden[row][col + 1] === 1) { garden[row - 1][col] = 2};
// }

// function inBounds(row, col, garden) {
//   let gardenRows = garden.length;
//   let gardenCols = garden[0].length;
//   return (
//     row >= 0 &&
//     row < gardenRows &&
//     col >= 0 &&
//     col < gardenCols
//   )
// }

function wiltedRoses(garden) {
  const rows = garden.length;

  if (rows === 0) { return -1 };

  const cols = garden[0].length;
  let queue = [];
  let healthyRoses = 0;
  
  for (r = 0; r < garden.length; r++) {
    for (c = 0; c < garden[0].length; c++) {
      if (garden[r][c] === 2) {
        queue.push([r, c]);
      } else if (garden[r][c] === 1) {
        healthyRoses += 1;
      }
    }
  }

  let days = 0;

  while (queue.length && healthyRoses) {
    let currentWiltedCount = queue.length;
    for (i = 0; i < currentWiltedCount; i++) {
      const [x, y] = queue.shift();
      for (const[dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        const xx = x + dx;
        const yy = y + dy;
        if (xx < 0 || xx >= rows || yy < 0 || yy >= cols ) {
          continue;
        } 
        if (garden[xx][yy] === 0 || garden[xx][yy] === 2) {
          continue;
        }
        garden[xx][yy] = 2;
        healthyRoses--;
        queue.push([xx, yy]);
      }
    }
    days++;
  }
  
  return healthyRoses > 0 ? -1 : days;
}

// Test Cases:

console.log(wiltedRoses([[2,1,1],[1,1,0],[0,1,1]]) === 4);
console.log(wiltedRoses([[2,1,1],[0,1,1],[1,0,1]]) === -1);
console.log(wiltedRoses([[0,2]]) === 0);
console.log(wiltedRoses([[1,1,1],[1,2,1],[1,1,1]]) === 2);
console.log(wiltedRoses([[2,2],[1,1],[0,0]]) === 1);
console.log(wiltedRoses([[1,1,1],[1,1,1],[1,1,1]]) === -1);
console.log(wiltedRoses([[2]]) === 0);
console.log(wiltedRoses([[1]]) === -1);
console.log(wiltedRoses([]) === -1);
console.log(wiltedRoses([[0,0,0],[0,1,0],[0,0,2]]) === -1);
console.log(wiltedRoses([[2,1,1],[1,1,1],[0,1,2]]) === 2);