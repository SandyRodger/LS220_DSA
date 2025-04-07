/*

https://launchschool.com/exercises/5ec1e512?track=ruby


In this problem, you're given an array of numbers nums, and a specific integer k. Your objective is to compute the average value of each contiguous subarray of length k within the given array.

Requirements:

The input will be an array of numbers and an integer k.
You need to find the average of every contiguous subarray of size k in the array.
The output should be an array containing these averages.
Example test cases:

console.log(findAverages([1, 2, 3, 4, 5, 6], 3)); // [ 2, 3, 4, 5 ]
console.log(findAverages([1, 2, 3, 4, 5], 2));    // [1.5, 2.5, 3.5, 4.5]
console.log(findAverages([10, 20, 30, 40, 50], 4)); // [ 25, 35 ]
console.log(findAverages([5, 5, 5, 5, 5], 1));      // [ 5, 5, 5, 5, 5 ]



A:

[1, 2, 3, 4, 5], 2));    // [1.5, 2.5, 3.5, 4.5]

i = 0
arr.length = 5
arr.length - 2 = 3
while i <= 3 (0, 1, 2, 3)

- for loop, while index is less than or equal to arr.length - k (0, 1, 2, 3)
------------------------------------
[1, 2, 3, 4, 5], 2));    // [1.5, 2.5, 3.5, 4.5]
i = 0
start = 0
end = 2
------------------------------------
  - start = i
  - end = i + k
  - sum = 0
  - while start < end
    - add num[start] to sum
    - start++
  - divide the sum by the key
  - push the result into an output array.



*/

// function findAverages(nums, k) {

//   let output = [];

//   for (i = 0; i <= nums.length - k; i++) {
//     let start = i;
//     let end = i + k;
//     let sum = 0

//     while (start < end) {
//       sum += nums[start];
//       start++;
//     }

//     output.push(sum/k);
//   }
//   return output;
// }

// LS preferred method

function findAverages(nums, k) {

  let sum = 0;
  for (i = 0; i < k; i++) sum += nums[i];
  let output = [sum/k];
  let start = 0;
  let end = k;

  while (end < nums.length) {
    sum -= nums[start];
    start++;
    sum += nums[end]
    end++;
    output.push(sum/k);
  }

  return output;
}

console.log(findAverages([1, 2, 3, 4, 5, 6], 3)); // [ 2, 3, 4, 5 ]
console.log(findAverages([1, 2, 3, 4, 5], 2));    // [1.5, 2.5, 3.5, 4.5]
console.log(findAverages([10, 20, 30, 40, 50], 4)); // [ 25, 35 ]
console.log(findAverages([5, 5, 5, 5, 5], 1));      // [ 5, 5, 5, 5, 5 ]
