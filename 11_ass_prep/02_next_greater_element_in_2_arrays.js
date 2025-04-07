/*

Problem provided by Dominique on 30.1.25

---------------------------------------------------------------------------------------------------

The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

function nextGreaterElement(nums1, nums2) {

}

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])); // [-1,3,-1]
console.log(nextGreaterElement([2,4], [1,2,3,4])); // [3,-1]

START: 12:40

P:

- Write a function that takes 2 arrays of integers (arr1 and arr2)
- arr1 will only contain numbers included in arr2

- For each number in arr1 find the index of that number in arr 2 (j)
- Then find the number ralative to j which is
  - A: to the right of j in arr 2
  - B: greater than arr2[j]
- If no such number exists, then that position will hold -1.

Questions:

should I use part of my solution from previous problem? No - it won't save time and it won't improve my skills.

E:

[4, 1, 2], [1, 3, 4, 2])); = [-1,3,-1]
[2,4], [1,2,3,4])); = [3,-1]

// arr1 is empty
console.log(nextGreaterElement([], [1,2,3,4])); // []
// duplicates in arr2
console.log(nextGreaterElement([1, 2, 3], [1,2,3,1, 2, 3])); // [2, 3, -1]
// ints in arr1 are identical to ints in arr 2
console.log(nextGreaterElement([9, 9, 9, 9], [9, 9, 9, 9, 9, 9])); // [-1, -1, -1, -1];
// only one occurence in arr 2 of the only int, found multiple times, in arr1
console.log(nextGreaterElement([9, 9, 9, 9], [8, 9, 10, 11, 12])); // [10, 10, 10, 10];
// minus ints
console.log(nextGreaterElement([-1, -3, 400], [400, 401, 402, -1, -3])); // [-1, -1, 401]


D:

[4, 1, 2], [1, 3, 4, 2])); = [-1,3,-1]

- Stack
- 2 pointers ?
- 2 stacks ?
- iterate through arr1
- find index of arr1 elem in arr 2
- 

A:
C:

*/

function nextGreaterElement(nums1, nums2) {
  const nextGreater = {};
  const stack = [];

  // Find next greater elements in nums2
  for (let i = nums2.length - 1; i >= 0; i--) {
      while (stack.length && stack[stack.length - 1] <= nums2[i]) {
          stack.pop();
      }
      
      nextGreater[nums2[i]] = stack.length ? stack[stack.length - 1] : -1;
      stack.push(nums2[i]);
  }

  // Map results for nums1
  return nums1.map(num => nextGreater[num]);
}

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])); // [-1,3,-1]
console.log(nextGreaterElement([2,4], [1,2,3,4])); // [3,-1]

// my test cases

// arr1 is empty
console.log(nextGreaterElement([], [1,2,3,4])); // []
// duplicates in arr2
console.log(nextGreaterElement([1, 2, 3], [1,2,3,1, 2, 3])); // [2, 3, -1]
// ints in arr1 are identical to ints in arr 2
console.log(nextGreaterElement([9, 9, 9, 9], [9, 9, 9, 9, 9, 9])); // [-1, -1, -1, -1];
// only one occurence in arr 2 of the only int, found multiple times, in arr1
console.log(nextGreaterElement([9, 9, 9, 9], [8, 9, 10, 11, 12])); // [10, 10, 10, 10];
// minus ints
console.log(nextGreaterElement([-1, -3, 400], [400, 401, 402, -1, -3])); // [-1, -1, 401]
