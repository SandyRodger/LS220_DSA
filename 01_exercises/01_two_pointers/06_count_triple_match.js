/*

https://launchschool.com/exercises/0269ceaf

You have an ordered array nums consisting of integers. Your task is to determine whether there are any two distinct elements in the array where one element is exactly three times the value of the other element. The time complexity of the solution should be O(N).

Restrictions:

You should not use built-in methods like filter, map, reduce, or find.
Do not use the includes method for checking existence in the array.
Avoid using indexOf or lastIndexOf.

P:

Write a method that takes an array of sorted integers and uses 2 pointers to determine whether of the numbers equal 3 X any other the other numbers.

E:

[1, 3, 9, 28]) === true

  - 3 (at index 1) is triple 1 (at index 0)
  - any other matches don't matter becasue we're going to early return.

[1, 2, 4, 10, 11, 12]) === true

- 12 at index 5 is triple 4 at index 2

[0, 5, 7, 55]) === false

- no triple

[4, 5, 7, 9, 13, 15, 17]) === true

- 5 tripled is 15

[2, 6, 13, 54]) === true 

- 2 tripled is 6

[1, 5, 17, 51]) === true

- 17 tripled is 51

[1, 2, 4, 8]) === false

- none

D:

- Take each number, triple it, look for that number with binary search
  - time complexity NlogN, unacceptable.
OR 

2 pointers, no bin search
- 2 pointers num1, num2, starting at index 0 and 1.
- if num1 * 3 is less than num2, inc num2
- otherwise if num1*3 is less than or equal to num2 inc num1.

[1, 5, 17, 51]) === true
--------------------------
num1 -> 1
num2 -> 5
num1*3(3) < 5, so increment num1 and num2
--------------------------
num1 -> 5
num2 -> 17
num1*3(15) > 17, so increment num1 and num2
--------------------------
num1 -> 17
num2 -> 51
num1*3(51) === 51, so return true
--------------------------
OR
- use a set, add tripled values in, if it's already there, return true
- (still no using bin search)

A:
C:

*/

// this is how I did it first go through. But now I see it is quadratic time complexity O(n^2), because it iterates over the collection once for every element in the collection.

// function checkTripleMatch(arr) {
//   let left = 0;

//   while (left < arr.length) {
//     for (right = left + 1; right < arr.length; right ++) {
//       if (arr[left] * 3 === arr[right]) {
//         return true;
//       }
//     }
//     left++;
//   }
//   return false
// }

function checkTripleMatch(arr) {
  let triples = new Set;
  for (i = 0; i < arr.length; i++) {
    if (triples.has(arr[i])) return true;
    let t = arr[i] * 3;
    triples.add(t);
  }
  return false
}

console.log(checkTripleMatch([1, 3, 9, 28]) === true);
console.log(checkTripleMatch([1, 2, 4, 10, 11, 12]) === true);
console.log(checkTripleMatch([0, 5, 7, 55]) === false);
console.log(checkTripleMatch([4, 5, 7, 9, 13, 15, 17]) === true);
console.log(checkTripleMatch([2, 6, 13, 54]) === true);
console.log(checkTripleMatch([1, 5, 17, 51]) === true);
console.log(checkTripleMatch([1, 2, 4, 8]) === false);