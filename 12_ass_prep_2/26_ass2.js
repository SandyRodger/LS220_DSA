/*

Given an ordered array of distinct integers, return the lowest index where the index matches the value found at that index.

Found out later -> Must be better than O(n) time complexity

E:


[-10, -5, -2, 0, 4, 30] => 4
 0     1   2  3  4   5

*/

// solution:

// function lowestMatch(arr) {
//   let left = 0;
//   let right = arr.length - 1;
//   let output = -1;

//   while (left <= right) {
//     let mid = Math.floor(((left + right) / 2));

//     if (mid === arr[mid]) output = mid;

//     if (mid > arr[mid]) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }

//   return output;
// }

// recursive:

function lowestMatch(arr, left = 0, right = 'none', output = -1) {
  if (right === 'none') right = arr.length - 1;
  if (left > right) return output;
  let mid = Math.floor(((left + right) / 2));
  if (mid === arr[mid]) output = mid;
  [left, right] = mid > arr[mid] ? [mid + 1, right] : [left, mid - 1];
  return lowestMatch(arr, left, right, output);
}

console.log(lowestMatch([0, 1, 2, 3, 4]) ===  0);
console.log(lowestMatch([3, 40 ,41, 100]) ===  -1);
console.log(lowestMatch([-10, -5, -2, 0, 4, 30]) === 4);