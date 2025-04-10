/*

https://launchschool.com/lessons/157d45f6/assignments/845eee02

You are given an array of integers. Your task is to create a new array
where each element is the product of all numbers in the original array
except the number at that index.

Implement a function that takes an integer array as input and returns
a new array where the element at index i is the product of all
elements in the input array except the element at index i.


Example 1:

Input: [2, 3, 4, 5]
Output: [60, 40, 30, 24]
Explanation:
    For index 0: 3 * 4 * 5 = 60
    For index 1: 2 * 4 * 5 = 40
    For index 2: 2 * 3 * 5 = 30
    For index 3: 2 * 3 * 4 = 24

Example 2:

Input: [-2, 1, -3, 4]
Output: [-12, 24, -8, 6]
Explanation:
    For index 0: 1 * (-3) * 4 = -12
    For index 1: (-2) * (-3) * 4 = 24
    For index 2: (-2) * 1 * 4 = -8
    For index 3: (-2) * 1 * (-3) = 6

Note: Your solution must have a time complexity of O(n).

find prod of all the numbers
iteratre through subtraxting that prod.

*/

function exclusiveProduct(nums) {
  let total = nums.reduce((acc, val) => acc * val);
  let altTotal = nums.filter((val) => val !== 0 ).reduce((acc, val) => acc * val);
  return nums.map((n) => {
    if (n === 0) return altTotal;
    return total/n;
  }
  );
}


// Test cases
console.log(exclusiveProduct([2, 3, 4, 5]));
// Expected: [60, 40, 30, 24]

console.log(exclusiveProduct([-2, 1, -3, 4]));
// Expected: [-12, 24, -8, 6]

console.log(exclusiveProduct([1, 2, 3, 4]));
// Expected: [24, 12, 8, 6]

console.log(exclusiveProduct([0, 1, 2, 3]));
// Expected: [6, 0, 0, 0]

console.log(exclusiveProduct([1, 1, 1, 1]));
// Expected: [1, 1, 1, 1]

console.log(exclusiveProduct([2, 1, 5, 3]));
// Expected: [15, 30, 6, 10]

console.log(exclusiveProduct([-1, -1, -1, -1]));
// Expected: [-1, -1, -1, -1]

console.log(exclusiveProduct([10]));
// Expected: [1]

console.log(exclusiveProduct([0, 1, 0, 3])); // => [ 3, 0, 3, 0 ]
// Expected: