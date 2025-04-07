/*
https://launchschool.com/exercises/d45d8820

In this problem, you're presented with a nested array, matrix, which has two key characteristics:

Each subarray in the matrix is sorted in ascending order.
The first element of each subarray is larger than the final element of the preceding subarray.
Your task is to determine whether a given integer, target, exists within this nested array.

The time complexity of your solution should be O(log(M*N)).

P:

- Write a function that takes a 2D array ("nums") and a number ("key") and returns a boolean.
- Each subarray contains numbers sorted from lowest to highest.
- The numbers are also sorted across the higher level array, so to flatten the array would return a sorted array.
- The function must use binary search
- The time complexity of the solution must be O(log(M*N))
- The output represents whether key exists in nums

E:

[[4, 8, 12], [16, 20, 24], [28, 32, 36]], 20) === true)

- last number in 2nd subArr is too big. 1st number is too small - FOUND
- mid-point is 20 -FOUND  

[[3, 6, 9], [12, 15, 18], [21, 24, 27]], 27) === true)

- mid = 1, last num too small, go right
- mid = 2, mid is too small. go right
- mid = 2 FOUND

[[1, 3, 5], [7, 9, 11], [13, 15, 17]], 19) === false)

- mid = 1, last is too small, go right
- mid = 2, found
- mid = 1(15), too small, go right
- mid = 2(17), too small
- mid out of bounds, false

[[10, 20, 30], [40, 50, 60], [70, 80, 90]], 10) === true)

- mid 1, too small.
- mid 0, found
- mid 1 (20) too large, go left
- mid 0 (10) found, return true

[[15, 25, 35], [45, 55, 65], [75, 85, 95]], 5) === false)

- mid is too large, go left
- range is too small, don't enter 2nd binarysearch, early return

D:

- 2 bin searches
  - 1st look at last and first elem
  - 2nd start at mid and shift around

A:

Variables:

l1 = 0
r1 = input.length

[[10, 20, 30], [40, 50, 60], [70, 80, 90]], 10) === true)

While l1 <= r1
  - let mid1 = l1 + r1 /2
  - if the array at mid1 has
    - 1st elem too small AND last elem too big - you've found it
      - SECOND BIN SEARCH:
        - let l2 = 0;
        - let r2 = input[mid1].length;
            WHILE l2 <= r2
              - mid2 = l2 + r2 / 2
              - if it is key, return true
              - if it is too small, go right(left = mid + 1)
              - if it is too big go left (right = mid - 1)
    - both too small, go right (left = mid1 + 1)
    - both too big, go left  (right = mid1 - 1)
- return false


*/

function bsearchMax(iter, condition) {
  let left = 0;
  let right = iter.length - 1;
  // [[10, 20, 30], [40, 50, 60], [70, 80, 90]], 10) === true)
  while (left < right) {
// ---------------------
// left = 0 
// right = 2
// mid = 1
// condition(mid) (1) => 40 <= 10 => false
//---------------------
// left = 0 
// right = 0
// mid = 0
// condition(mid) (0) => matrix[i][0] <= target)
//---------------------
  let mid = left + Math.ceil((right - left) / 2);
    if (condition(mid)) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }

  return left;
}

function findInNestedArray(matrix, target) {
  let subarrayIndex = bsearchMax(matrix, (i) => matrix[i][0] <= target);
  let subarray = matrix[subarrayIndex] ?? [];

  let targetIndex = bsearchMax(subarray, (i) => subarray[i] <= target);
  return subarray[targetIndex] === target;
}

// function findInNestedArray(nums, key) {

//   let l1 = 0;
//   let r1 = nums.length - 1;

//   while (l1 <= r1) {
//     let mid1 = Math.floor((l1 + r1)/2);
//     let first = nums[mid1][0];
//     let last = nums[mid1].at(-1);
//     if (first <= key && last >= key) {
//       let l2 = 0;
//       let r2 = nums[mid1].length - 1;
//       while ( l2 <= r2) {
//         let mid2 = Math.floor((l2 + r2) / 2);
//         let candidate = nums[mid1][mid2];
//         if ( candidate === key) {
//           return true;
//         } else if (candidate < key) {
//           l2 = mid2 + 1;
//         } else {
//           r2 = mid2 - 1;
//         }
//       }
//     } else if (last < key) {
//       l1 = mid1 + 1;
//     } else {
//       r1 = mid1 - 1;
//     }
//   }

//   return false 
// }

console.log(findInNestedArray([[4, 8, 12], [16, 20, 24], [28, 32, 36]], 20) === true);
console.log(findInNestedArray([[3, 6, 9], [12, 15, 18], [21, 24, 27]], 27) === true);
console.log(findInNestedArray([[1, 3, 5], [7, 9, 11], [13, 15, 17]], 19) === false);
console.log(findInNestedArray([[10, 20, 30], [40, 50, 60], [70, 80, 90]], 10) === true);
console.log(findInNestedArray([[15, 25, 35], [45, 55, 65], [75, 85, 95]], 5) === false);