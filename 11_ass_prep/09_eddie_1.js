/*

Problem Statement:

You are given an array of integers nums representing a sequence of numbers. Your task is to determine the length of the longest contiguous subarray that contains at most two distinct numbers.

"You try to walk away but you're still tied to the tent
you're still wearing the headphones,
you're still on the IV,
you're still approaching the first shrine
"

P:

Write a function that takes an array of numbers. Return a number representing the longest section of the input which contains a maximum of 2 distinct numbers.

E:

[1, 2, 1, 2, 3]) === 4); // [1, 2, 1, 2]

- this array contains 1 and 2, 3 would exceed the limit of distinct numbers.


[4, 4, 4, 4]) === 4); // [4, 4, 4, 4]

- Max output will be the length of the input

[1, 2, 3, 4, 5]) === 2); // [1, 2] or [2, 3] or [3, 4] etc.

- if all elems are unique and length is 2 or more, output will be 2

[5, 1, 5, 5, 1, 2]) === 5); // [5, 1, 5, 5, 1]

- HP

[1, 2, 2, 1, 3, 4, 3, 4, 3, 3]) === 5); // [3, 4, 3, 4, 3]

- input splits neatly at index 4.

[1, 1, 2, 2, 3, 3, 3]) === 4); // [2, 2, 3, 3]
- error ?

corrected:
[1, 1, 2, 2, 3, 3, 3]) === 5); // [2, 2, 3, 3, 3]



[1, 2, 1, 3, 4, 5, 6, 7]) === 3); // [1, 2, 1]

- HP

[2, 2, 1, 1, 2, 3, 3, 2, 2, 2]) === 5); // 

- error ?

[0, 1, 2, 2, 1, 1, 0]) === 5); // [1, 2, 2, 1, 1]

- error

[8, 8, 8, 8, 8, 8]) === 6); // [8, 8, 8, 8, 8, 8]

- length: 6


D:

Anchor runner to keep track of first of two distinct nums
a queue to keep track of the queue

input: [5, 1, 5, 5, 1, 2]
queue = [
    [5, [0, 2, 3]],
    [1, [1, 4]],
    [2, [5]]
]


A:


C:


*/


function longestSubarray(nums) {
  // Implementation goes here
}

console.log(longestSubarray([1, 2, 1, 2, 3]) === 4); // [1, 2, 1, 2]
console.log(longestSubarray([4, 4, 4, 4]) === 4); // [4, 4, 4, 4]
console.log(longestSubarray([1, 2, 3, 4, 5]) === 2); // [1, 2] or [2, 3] or [3, 4] etc.
console.log(longestSubarray([5, 1, 5, 5, 1, 2]) === 5); // [5, 1, 5, 5, 1]
console.log(longestSubarray([1, 2, 2, 1, 3, 4, 3, 4, 3, 3]) === 6); // 
console.log(longestSubarray([1, 1, 2, 2, 3, 3, 3]) === 5); // 
console.log(longestSubarray([1, 2, 1, 3, 4, 5, 6, 7]) === 3); // [1, 2, 1]
console.log(longestSubarray([2, 2, 1, 1, 2, 3, 3, 2, 2, 2]) === 6); // 
console.log(longestSubarray([0, 1, 2, 2, 1, 1, 0]) === 5); // [2, 2, 1, 1, 0]
console.log(longestSubarray([8, 8, 8, 8, 8, 8]) === 6); // [8, 8, 8, 8, 8, 8]
