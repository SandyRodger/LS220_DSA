/*

Problem: Kth Smallest Element in a Sorted Matrix

You are given an n x n matrix where each row and each column is sorted in ascending order.
Find the k-th smallest element in the matrix.

Example 1
Input:

const matrix = [
  [1, 5, 9],
  [10, 11, 13],
  [12, 13, 15]
];
const k = 8;
console.log(kthSmallest(matrix, k));
Output:

13
Explanation:

The elements in sorted order are [1, 5, 9, 10, 11, 12, 13, 13, 15]. The 8th smallest is 13.

Example 2
Input:

const matrix = [
  [1, 2],
  [1, 3]
];
const k = 2;
console.log(kthSmallest(matrix, k));
Output:

1
Explanation:

The elements in sorted order are [1, 1, 2, 3]. The 2nd smallest is 1.

Constraints:
n == matrix.length == matrix[i].length
1 <= n <= 300
-10^9 <= matrix[i][j] <= 10^9
1 <= k <= n^2
*/


function kthSmallest(matrix, k) {
  // console.log(1)
  let highest = matrix.at(-1).at(-1);
  let result = new Map();
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      result[[r][c]] = matrix[r][c];
    }
  }
  return Object.entries(result)[k-1][1]
}

const matrix2 = [
  [1, 5, 9],
  [10, 11, 13],
  [12, 13, 15]
];

const k = 8;
console.log(kthSmallest(matrix2, k)); // 13


const matrix1 = [
  [1, 2],
  [1, 3]
];

let k1 = 2;
console.log(kthSmallest(matrix1, k1)); // 1
