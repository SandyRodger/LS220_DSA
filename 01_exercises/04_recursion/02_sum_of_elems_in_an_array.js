/*

https://launchschool.com/exercises/29a0d641?track=ruby

Given an array of integers nums, find sum of all of its elements using recursion.

console.log(sum([1, 2, 3]) === 6);
console.log(sum([10, 15, 20, 10, 5]) === 60);
console.log(sum([-5, -1, 5, 2, -3]) === -2);
console.log(sum([7]) === 7);
console.log(sum([]) === 0);

*/

// took me 91 seconds

function sum(arr, pointer = 0) {
  if (!arr[pointer]) return 0;
  return arr[pointer] + sum(arr, pointer + 1)
}
console.log(sum([1, 2, 3]) === 6);
console.log(sum([10, 15, 20, 10, 5]) === 60);
console.log(sum([-5, -1, 5, 2, -3]) === -2);
console.log(sum([7]) === 7);
console.log(sum([]) === 0);
