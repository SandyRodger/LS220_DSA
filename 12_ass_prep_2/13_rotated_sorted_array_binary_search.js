/*

Problem: Find a Target in a Rotated Sorted Array Using Binary Search
You are given a rotated sorted array of distinct integers. A rotated sorted array is an array that was originally sorted in ascending order but then rotated at some pivot. Your task is to efficiently find a target value in this array.

Task
Write a function that:

Accepts a rotated sorted array and a target value.
Returns the index of the target if found, otherwise returns -1.
Uses binary search and recursion to achieve O(log n) time complexity.
Example 1

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2

Input: nums = [4,5,6,7,8,1,2,3], target = 6
Output: 2
Example 3

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

Constraints
1 <= nums.length <= 5000
-10^4 <= nums[i] <= 10^4
All integers in nums are distinct.
nums is sorted in ascending order before rotation.
Bonus Challenge
Solve the problem iteratively using a modified binary search instead of recursion.

P:

- Write a function that takes 2 args:
  - an array ("nums") which is:
    - full of integers
    - sorted from low to high
    - rotated
  - a target number ("target")
- find the index in "nums" where:
  - a number equal to target is
  - if it does not exist in "nums", return -1

E:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
  - coincidentally target is at the beginning of the pivot

Input: nums = [4,5,6,7,8,1,2,3], target = 6
Output: 2
  - right = 7
  - left = 0
  - mid = 3
  - nums[mid] = 7
  - nums[mid] is bigger than target, so go left
  -------------------
  - right = 2
  - left = 0
  - mid = 1
  - nums[mid] = 5
  - nums[mid] is smaller than target, so go right
    -------------------
  - right = 2
  - left = 2
  - mid = 2
  - nums[mid] = 6
  - nums[mid] is equal to target so return mid


Example 3

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

D:
A:
C:
*/

// function binarySearch(nums, target) {
//   let left = 0;
//   let right = nums.length - 1;

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (nums[mid] === target) {
//       return mid;
//     } else if (nums[mid] > target && nums[left] <= target) {
//       right = mid - 1;
//     } else {
//       left = mid + 1;
//     }
//   }

//   return -1
// }

function binarySearch(nums, target, left = 0, right = nums.length) {

  if (left > right) return -1;
  
  let mid = Math.floor((left + right) / 2)
  if (nums[mid] === target) return mid;

  if (nums[mid] > target && nums[left] <= target) {
    return binarySearch(nums, target, left = 0, right = mid - 1);
  } else {
    return binarySearch(nums, target, left = mid + 1, right)
  }

}

function test(num, exp, act) {
  if (exp !== act) {
    console.log('----------------')
    console.log(`example: ${num}`)
    console.log(`expected ${exp}`)
    console.log(`actually got: ${act}`)
  } else {
    console.log(`(-:`)
  }
}

test(1, 4, binarySearch([4,5,6,7,0,1,2], 0));
test(2, 2, binarySearch([4,5,6,7,8,1,2,3], 6));
test(3, -1, binarySearch([4,5,6,7,0,1,2], 3));