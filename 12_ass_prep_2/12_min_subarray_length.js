/*

https://launchschool.com/lessons/dd8751d3/assignments/1ebd342a

Write a function named `minLengthForTargetSum` that
determines the minimal length of a contiguous subarray
within an array of positive integers, `nums`. This
subarray should have a sum that is greater than or
equal to a specified positive integer, `target`. The
function should return the length of this subarray.
If no such subarray exists, return 0.

Example:
Input: nums = [4, 2, 5, 7], target = 10
Output: 2
Explanation: In this example, the shortest subarray that
             meets or exceeds the target sum of 10 is [5, 7].
             This subarray sums to 12, which is greater than
             the target sum of 10. The length of this
             subarray is 2.

P: 

- Write a function that takes 2 args:
  - "nums" -> an array of integers
  - "target" => an integer
- return the smallest possible subarray length which:
  - sums to >= target

E:

[1, 2, 3], 5))// === 2
  => [2, 3]

[1, 1, 1], 4))// === 0
the whole array sums to 3,  in which case return 0 (default return val)

[8, 2, 1, 4], 8))// === 1
  => [8]

[1, 2, 3, 4, 5], 9))// === 2
  = [4, 5], but most examples aren't sorted like this

[1, 4, 1, 3, 6, 2], 9))// === 2
  => [3, 6]

[1, 2, 3, 4], 10))// === 4
  => the whle array

length = 6
[1, 2, 6, 1, 1, 7], 9))// === 3
          ^     ^
  => [1, 1, 3]

[4, 2, 2, 1, 5, 2], 14))// === 5
l = 6
[4, 2, 2, 1, 5]


D:

2 pointers (L, R)
  - move whichever is smaller
  - subtract the smaller from sum
  - when it's smaller than target, return output
to begin with sum the whole array -> "sum"
output starts as length of entire array -> "output"

A:

VARIABLES:

- sum = nums[0]
- left = 0
- right = length - 1

[4, 2, 2, 1, 5, 2], 14))// === 5
l = 6
[4, 2, 2, 1, 5]
 ^           ^
---------------------
sum = 6
left = 0
right = 1

 while right < nums.length
  - if sum < target
    - inc right
    - add nums[right] to sum
  - if sum >= target

*/

// function minLengthForTargetSum(nums, target) {
//   let left = 0;
//   let right = nums.length - 1;
//   let sum = nums.reduce((acc, val) => acc + val);

//   while (sum >= target) {
//     if (nums[left] < nums[right]) {
//       sum -= nums[left];
//       left++;
//     } else {
//       sum -= nums[right];
//       right--;
//     }
//     if (sum < target) return right - left + 2;
//   }
//   return -1;
// }

// recursion:

function minLengthForTargetSum(nums, target, sum = nums.reduce((acc, val) => acc + val), left = 0, right = nums.length - 1) {

  if (sum < target) {
    return left === 0 && right === nums.length - 1 ? -1 : right - left + 2;
  }

  if (nums[left] < nums[right]) {
    return minLengthForTargetSum(nums, target, sum -= nums[left], left += 1, right);
  } else {
    return minLengthForTargetSum(nums, target, sum -= nums[right], left, right -= 1);
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

test(1, 2, minLengthForTargetSum([1, 2, 3], 5));
test(2, -1, minLengthForTargetSum([1, 1, 1], 4));
test(3, 1,  minLengthForTargetSum([8, 2, 1, 4], 8));
test(4, 2, minLengthForTargetSum([1, 2, 3, 4, 5], 9));
test(5, 2, minLengthForTargetSum([1, 4, 1, 3, 6, 2], 9));
test(6,4,  minLengthForTargetSum([1, 2, 3, 4], 10));
test(7, 3, minLengthForTargetSum([1, 2, 6, 1, 1, 7], 9));
test(8, 5, minLengthForTargetSum([4, 2, 2, 1, 5, 2], 14));
