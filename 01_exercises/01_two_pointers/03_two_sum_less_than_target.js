/*

https://launchschool.com/exercises/24c53eab?track=ruby

In this problem, you're given an array of integers nums and a target integer target. Your objective is to find the maximum sum that can be obtained by adding two distinct elements from the array, where this sum is less than the target.

Requirements:

The input will be an array of integers, nums, and a target integer, target.
You need to find the maximum value of nums[i] + nums[j] where i != j and nums[i] + nums[j] < target.
If no such pair exists, return -1.
Example test cases:

HINT:

You can sort it.

P:

Write a function that takes an array of numbers and a target number and uses a 2 pointer system to determine the largest possible number that sums to less than target.

E:

[5, 8, 3, 2, 1], 6) === 5);
      s^ e^ (3 + 2)

[3, 1, 4], 5) === 4
s^ e^ (3 + 1)

[8, 2, 4, 9, 5, 10, 1, 7], 16) === 15
s^ e^ (3 + 1)

[5, 8, 3, 2, 1], 6) === 5
      s^ e^ (3 + 2)
- if either of the numbers  are greater than target then move that one

[6, 8, 10, 12], 5) === -1

- if no combination can be found return -1

[1, 2, 3, 4, 5], 100) === 9
         s^ e^ (4 + 5)

- 

[10, 20, 30, 40, 50], 40) === 30
s^       e^ (10 + 30)

- It's unhelpful that most of these examples are almost or totally sorted.

[7, 4, 15, 11, 21, 9], 24) === 22
s^ e^ 

D:

  while (right < nums.length) {
    let sum = nums[left] +nums[right];
    if (sum >= target) {
      left++;
    } else {
      right++
      output = Math.max(output, sum);
    }
  }

[8, 2, 4, 9, 5, 10, 1, 7], 16))// === 15);
   s^       e^ 

When do I increment left?
  - if the sum is >= target && left is bigger than right
  - if the sum is < target && left is less than right ?
When do I increment right? 
  - all other situations
Does left do anything other than move?
  - it points
Does right do anything other than move?
  - it points
When do I stop iterating?
  - when left passes left

A:

Variables:

output = -1
left = 0
left = length - 1

While left < right
inc left - if the sum is >= target && left is bigger than right
          - if the sum is < target && left is less than right ?
dec right   - all other situations
- return output
C:
*/

function twoSumLessThanTarget(nums, target) {

  let output = -1;
  let left = 0;
  let right = nums.length - 1;
  nums.sort((a, b) => a - b);

  while (left < right) {
    let sum = nums[left] + nums[right];

    if (sum >= target) {
      right--;
    } else {
      left++;
      output = Math.max(output, sum)
    }

  }

  return output;
}

console.log(twoSumLessThanTarget([3, 1, 4], 5) === 4);
console.log(twoSumLessThanTarget([8, 2, 4, 9, 5, 10, 1, 7], 16) === 15);
console.log(twoSumLessThanTarget([5, 8, 3, 2, 1], 6) === 5);
console.log(twoSumLessThanTarget([6, 8, 10, 12], 5) === -1);
console.log(twoSumLessThanTarget([1, 2, 3, 4, 5], 100) === 9);
console.log(twoSumLessThanTarget([10, 20, 30, 40, 50], 40) === 30);
console.log(twoSumLessThanTarget([7, 4, 15, 11, 21, 9], 24) === 22);


