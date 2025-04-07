/*
https://launchschool.com/lessons/c10716a1/assignments/790cac0e

Write a function `findPeakInTerrain` that finds any peak in a
given hilly nums. A peak is an element that is strictly
greater than its neighbors. The first and last elements can
be peaks if they are strictly greater than their single neighbor.
Adjacent elements in the nums cannot be equal.

The function should take an array of integers as input,
representing the elevations of spots in the nums.
It should return the index of any peak in the nums.
There is guaranteed to be at least one peak in the input array.

Example:
Input: nums = [1, 3, 2, 1, 4, 5]
Output: 1 or 5
Explanation: Both index 1 (elevation 3) and index 5
             (elevation 5) are peaks.

P:

- Write a function that takes 1 argument:
  - an array of integers
- it should use binary search to find a the index of any number which matches the following conditions:
  - the element at that index+1 must be either outside the limits of the array or a number less than itself.
  - the element at that index-1 must be either outside the limits of the array or a number less than itself.

Also:
  - There is guaranteed to be such a number in the array. (In fact the only way there couldn't be is if all, or all but one, of the numbers were equal.)

E:

findPeakInTerrain([1, 2, 1]) === 1);

- mid = 1
- mid -1 < mid
- mid + 1 < mid

findPeakInTerrain([1, 3, 4, 1]) === 2);

- mid = 1
- nums[mid] = 3
- mid + 1 is too big, so we go right ?

findPeakInTerrain([3, 2, 1]) === 0);

- first elem is a peak (there will always be a peak ?)

findPeakInTerrain([1, 2, 3]) === 2);

- reverse of last example

[1, 4].includes(findPeakInTerrain([1, 3, 2, 1, 5, 4])));

- 2 possible answers (can go left or right)
  - does this mean we can search left, then if we don't find it go back and search right?

findPeakInTerrain([1, 2, 3,4 , 5, 7, 3]) === 5);

- 7 > 5, 7 > 3 HP

findPeakInTerrain([1, 2, 3, 4, 3, 2, 1]) === 3);

- 1st mid is target

[0, 8].includes(findPeakInTerrain([5, 4, 3, 2, 1, 2, 3, 4, 5])));

- 1st and last are valid targets

findPeakInTerrain([1, 2, 3, 4, 5, 4, 3, 2, 1]) === 4);

- 1st mid is target
- 4, 5, 4

findPeakInTerrain([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]) === 0);

- similar to earlier example

findPeakInTerrain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) === 9);

- reverse of previous example

D:

[1, 4].includes(findPeakInTerrain([1, 3, 2, 1, 5, 4])));

Key insight:
  - if nums[mid] < nums[0] there must be a peak to the left
  - if nums[mid] > nums.at(-1) there must be a peak to the right

When do we go Left?
  - when nums[mid] < nums[0]
When do we go right?
  - nums[mid] > nums.at(-1) (Or just whenever the first conditional doesn't trigger)

A:

VARIABLES:
  - left = 0
  - right = length - 1

while left <= right
  - mid = left + right / 2

  If it's a peak - > return mid

  If we should go right ()
    - left = mid + 1
  If we should go left
    - right = mid - 1


C:
*/

// function findPeakInTerrain(nums) {
//   let left = 0;
//   let right = nums.length - 1;
//   let mid;
//   const isPeak = (i) => Math.max(nums[i-1], nums[i], nums[i+1]) === nums[i];

//   while (left <= right) {
//     mid = Math.floor((left + right) / 2);
//     if (isPeak(mid)) return mid;

//     if (nums[mid] > nums[left]) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }

//   return  nums[0] > nums[1] ?  0 : nums.length - 1;
// }

// recursion

function findPeakInTerrain(nums, left = 0, right = nums.length - 1) {
  let mid = Math.floor((left + right) / 2);

  if (Math.max(nums[mid-1], nums[mid], nums[mid+1]) === nums[mid]) return mid;
  if (left > right) return  nums[0] > nums[1] ?  0 : nums.length - 1;

  if (nums[mid] > nums[left]) {
    return findPeakInTerrain(nums, mid+1 , right)
  } else {
    return findPeakInTerrain(nums, left , mid-1)
  }
}

console.log(findPeakInTerrain([1, 2, 1]) === 1);
console.log(findPeakInTerrain([1, 3, 4, 1]) === 2);
console.log(findPeakInTerrain([3, 2, 1]) === 0);
console.log(findPeakInTerrain([1, 2, 3]) === 2);
console.log([1, 4].includes(findPeakInTerrain([1, 3, 2, 1, 5, 4])));
console.log(findPeakInTerrain([1, 2, 3, 4, 5, 7, 3]) === 5);
console.log(findPeakInTerrain([1, 2, 3, 4, 3, 2, 1]) === 3);
console.log([0, 8].includes(findPeakInTerrain([5, 4, 3, 2, 1, 2, 3, 4, 5])));
console.log(findPeakInTerrain([1, 2, 3, 4, 5, 4, 3, 2, 1]) === 4);
console.log(findPeakInTerrain([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]) === 0);
console.log(findPeakInTerrain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) === 9);

// my tests
console.log(findPeakInTerrain([1, 2, 3, 4, 3, 2, 1]) === 3);

