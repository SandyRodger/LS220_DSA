/*

https://launchschool.com/lessons/c10716a1/assignments/20554f33

Write a function named `minLengthForTargetSum` that
determines the minimal length of a contiguous subarray
within an array of positive integers, `nums`. This
subarray should have a sum that is greater than or
equal to a specified positive integer, `target`.
The function should return the length of this
subarray. If no such subarray exists, return 0.

The time complexity of your solution should be O(NlogN).

Example:
Input: nums = [4, 2, 5, 7], target = 10
Output: 2
Explanation: In this example, the shortest subarray that
             meets or exceeds the target sum of 10 is [5, 7].
             This subarray sums to 12, which is greater than
             the target sum of 10. The length of this subarray is 2.

hint:

You can perform a binary search on the length of the array. This way, you can eliminate half of the possible lengths each time, which accounts for the logN part of the solution.

P:

Write a function that takes 2 arguments a non-ordered array of numbers (nums) and a target number (target). This function uses binary search to return the length of the shortest possible contiguous sub-array that sums to equal/greater than target number.

E:

[1, 2, 3], 5), 2

- mid = 2
- mid + rom = target
- save lowestLength as 2
- then search for an actual 5?

[1, 1, 1], 4), 0

- mid = 1
- both directions are equal.
- go left?
- then go right?

[8, 2, 1, 4], 8), 1

- mid = 1
- look left
- mid = 2
- look left
- find 8?

[1, 2, 5, 4, 3], 9), 2

- mid = 5
- +rom = 2
- search for 9?

[1, 4, 1, 3, 6, 2], 9), 2


- mid = 3
- mid + rom = 9
- look for 9

[1, 2, 3, 4], 10), 4

- 

[1, 2, 6, 1, 1, 7], 9), 3
[4, 2, 2, 1, 5, 2], 14), 5

D:
A:

- create a range of possible lengths (possLengths):
  - 1 to nums.length
- initialize shorestPoss as 0

[4, 2, 2, 1, 5, 2], 14), 5

- binary search possLengths (p)
  - pass each "possLength" to a helper function that uses anchor/runner pointers to see if it's possible
  - if it is impossible, go right (subarrays of longer length)
  - if it is possible, save that as shortestPoss, go left (subarrays of shorter length)
- return shortestPoss

HELPER: "substringMeetsTarget"

input: (possLength, nums, target)
output: [start, end index] OR false

- set anchor as 0
- set runner as possLength
- set sum as the sum of nums between anchor and runner

- while runner <= nums.length

  - if sum exceeds or is equal to target
    - return [anchor, runner]
  - otherwise:
    - subtract nums[anchor] from sum
    - runner++
    - anchor++
    - add nums[runner] to sum

-If you get to the end return false

C:

*/


function substringMeetsTarget(possLength, target, nums) {
  let anchor = 0;
  let runner = possLength - 1;
  let sum = nums.slice(anchor, possLength).reduce((acc, val) => acc + val);

  while (runner <= nums.length) {
    if (sum >= target) { return possLength };
    sum -= nums[anchor];
    runner++;
    anchor++;
    sum += nums[runner];
  }

}

function minLengthForTargetSum(nums, target) {
  let possLengths = Array.from({length: target}, (_, i) => i + 1);
  let shortestPoss = 0;
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let possLength = substringMeetsTarget(possLengths[mid], target, nums);
    if (possLength) {
      shortestPoss = possLength;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return shortestPoss;
}

test(minLengthForTargetSum([1, 2, 3], 5), 2);
test(minLengthForTargetSum([1, 1, 1], 4), 0);
test(minLengthForTargetSum([8, 2, 1, 4], 8), 1);
test(minLengthForTargetSum([1, 2, 5, 4, 3], 9), 2);
test(minLengthForTargetSum([1, 4, 1, 3, 6, 2], 9), 2);
test(minLengthForTargetSum([1, 2, 3, 4], 10), 4);
test(minLengthForTargetSum([1, 2, 6, 1, 1, 7], 9), 3);
test(minLengthForTargetSum([4, 2, 2, 1, 5, 2], 14), 5);

function test(act, exp) {
  if (act === exp) {
    console.log('(-:');
  } else {
    console.log(`expected ${exp}, instead got ${act}`);
  }
}

function test2(act, expAnchor, expRunner) {
  if (act[0] === expAnchor && act[1] === expRunner) {
    console.log('(-:');
  } else {
    console.log(`expected ${expAnchor}, instead got ${act[0]}`);
    console.log(`expected ${expRunner}, instead got ${act[1]}`);
  }
}

// LS solution:

function isValidLength(k, target, nums) {
  let a = 0;
  let r = 0;
  let sum = 0;

  while (r < k) {
    sum += nums[r];
    r++;
  }
  if (sum >= target) {
    return true;
  }

  while (r < nums.length) {
    sum -= nums[a];
    a++;
    sum += nums[r];
    r++;
    if (sum >= target) {
      return true;
    }
  }

  return false;
}

function minLengthForTargetSum(nums, target) {
  let result = 0;
  let left = 1;
  let right = nums.length;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (isValidLength(mid, target, nums)) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return result;
}