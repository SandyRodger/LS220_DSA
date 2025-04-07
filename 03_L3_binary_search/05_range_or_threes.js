/*

https://launchschool.com/books/dsa/read/find_range_of_threes

Implement a function `findRange` that takes in an array of
integers sorted in ascending order. The function should
return an array containing the starting and ending
positions of the number 3 within the array. If the number 3
is not found, return [-1, -1].

Example:
Input: nums = [1, 2, 3, 3, 3, 3, 3, 4, 5]
Output: [2, 6]

Example:
Input: nums = [1, 2, 5, 5, 6, 9, 10]
Output: [-1, -1]

*/

function findRangeOfThrees(arr) {
  let output = [-1, -1];
  let left = 0;
  let right = arr.length - 1;

  // find first 3
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] >= 3) {
      right = mid - 1;
      if (arr[mid] === 3) {
        output[0] = mid;
      }
    } else {
      left = mid + 1
    }
  }

  // find last 3
  left = 0
  right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] <= 3) {
      left = mid + 1;
      if (arr[mid] === 3) {
        output[1] = mid;
      }
    } else {
      right = mid - 1;
    }
  }

  return output
}

console.log(findRangeOfThrees([1, 2, 3, 3, 3, 3, 3, 4, 5])); // [2, 6]
console.log(findRangeOfThrees([1, 2, 5, 5, 6, 9, 10]));      // [-1, -1]
console.log(findRangeOfThrees([]));                          // [-1, -1]
