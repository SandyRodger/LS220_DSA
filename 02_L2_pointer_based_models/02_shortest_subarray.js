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

Write a function that takes an unsorted array of numbers ("nums") and a target number ("taget").
It must return an integer representing the length of the shortest contiguous subarray from nums that sums to >= target.
If there is not one, return 0.

E:

[1, 2, 3], 5) === 2);

- 2 + 5, length is 2

[1, 1, 1], 4) === 0);

- no sum to 4

[8, 2, 1, 4], 8) === 1);

- 8 alone is >= 8 

[1, 2, 3, 4, 5], 9) === 2);

- 4, 5

[1, 4, 1, 3, 6, 2], 9) === 2);

- 3, 6

[1, 2, 3, 4], 10) === 4);

- 1, 2, 3, 4

[1, 2, 6, 1, 1, 7], 9) === 3);

- multiple options, all 3

[4, 2, 2, 1, 5, 2], 14) === 5);

- 4, 2, 2, 1, 5

D:

- No brute forcing
- anchor runner, quitting when target is met/exceeded

A:

[1, 1, 1], 4) === 0;

- initialize anchor as 0
- initialize runner as 1
- initialize result as 0

- while anchor is less than (array length - 1 - result)
  - sum the elements from anchor to runner
    - if they don't add up to target:
      - increment runner
    - else If they do add up to target 
      - length is runner - anchor
      - if length is 1, 
        - return 1
      - if length is lower than current result OR result is falsy 
        - save that length as result
      - increment anchor

- return result

C:
*/

function sumOf(array) {
  return array.reduce((acc, val) => acc + val);
}

// console.log(sumOf([1, 2, 3, 4, 5]) == 15);
// console.log(sumOf([4, 5]) == 9);
// console.log(sumOf([1, 1, 1, 1, 1]) == 5);

function minLengthForTargetSum(nums, target) {
  let anchor = 0;
  let runner = 1;
  let result = 0;

  while (runner <= nums.length) {
    let sum = sumOf(nums.slice(anchor, runner));
    if (sum < target) {
      runner++;
    } else {
      let length = runner - anchor;
      if (length === 1) { return 1 };
      if (length < result || !result) { result = length };
      anchor++;
    }
  }
 
  return result;
}

console.log(minLengthForTargetSum([1, 2, 3], 5) === 2);
console.log(minLengthForTargetSum([1, 1, 1], 4) === 0);
console.log(minLengthForTargetSum([8, 2, 1, 4], 8) === 1);
console.log(minLengthForTargetSum([1, 2, 3, 4, 5], 9) === 2);
console.log(minLengthForTargetSum([1, 4, 1, 3, 6, 2], 9) === 2);
console.log(minLengthForTargetSum([1, 2, 3, 4], 10) === 4);
console.log(minLengthForTargetSum([1, 2, 6, 1, 1, 7], 9) === 3);
console.log(minLengthForTargetSum([4, 2, 2, 1, 5, 2], 14) === 5);

// LS solution:

function minLengthForTargetSum(nums, target) {
  let result = nums.length + 1;
  let currentSum = 0;
  let anchor = 0;
  let runner = 0;

  while (runner < nums.length) {
    currentSum += nums[runner];
    while (currentSum >= target) {
      result = Math.min(result, runner - anchor + 1);
      currentSum -= nums[anchor];
      anchor++;
    }
    runner++;
  }

  return result === nums.length + 1 ? 0 : result;
}