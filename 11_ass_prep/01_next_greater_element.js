/*

I did this problem with Dominque on 30.1.25

-------------------------------------------------------------------------------------------

Given an array of integers, for each element, find the next greater element to the right. If no such element exists, output -1 for that element.

You need to implement a function nextGreaterElement(nums) that takes an array of integers nums and returns an array of integers where each element at index i represents the next greater element of nums[i] in the original array.

For Example:

Input: [4, 5, 2, 10]
Output: [5, 10, 10, -1]

Explanation:
For 4, the next greater element is 5.
For 5, the next greater element is 10.
For 2, the next greater element is 10.
For 10, there is no greater element, so -1 is returned.

P:

Write a function that takes an array of integers ("nums") and returns an array of the same length where each position is filled by the number in "nums" that was found closest to the right AND greater. If no such number exists then that position should be filled with a -1.

E:

Input: [4, 5, 2, 10]
Output: [5, 10, 10, -1]

Explanation:
For 4, the next greater element is 5.
For 5, the next greater element is 10.
For 2, the next greater element is 10.
For 10, there is no greater element, so -1 is returned.

Example 2:

nextGreaterElement([1, 2, 3, 4, 5])) => [2, 3, 4, 5, -1]

the greater number to 1 at index 0 is 2 at index 1
...
the final number must always be -1.


D:

stack
create an output arrray filled with -1s as default values.

A:



VARIABLES:

input: [4, 5, 2, 10] => [5, 10, 10, -1]

stack = [3]
output = [5, 10, 10, -1]
curr = 10
i = 3

iterate through nums by index (i)
  - curr = nums[i]
  - if curr > nums[stack.at(-1)]
    - While curr > nums[stack.at(-1)]:
      - output[stack.pop()] = curr
  - push i onto the stack
C:

*/

// [4, 1, 2], [1, 3, 4, 2])); = [-1,3,-1]

function nextGreaterElement(nums) {

  let stack = [];
  let output = Array(nums.length).fill(-1)
 
  for (i = 0; i < nums.length; i++) {
    while (nums[i] > nums[stack.at(-1)]) {
      output[stack.pop()] = nums[i];
    }
    stack.push(i)
  }
  return output
}


console.log(nextGreaterElement([4, 5, 2, 10])); // [5, 10, 10, -1]
console.log(nextGreaterElement([1, 2, 3, 4, 5])); // [2, 3, 4, 5, -1]
console.log(nextGreaterElement([-1, 2, -3, 4, 5])); // [2, 4, 4, 5, -1]
console.log(nextGreaterElement([])); // []
console.log(nextGreaterElement([10, 10, 10, 10])); // [-1, -1, -1, -1]
console.log(nextGreaterElement([5, 4, 3, 2, 1])); // => [-1, -1, -1, -1, -1]
console.log(nextGreaterElement([1000, 5000, 0, 99])); // [5000, -1, 99, -1]