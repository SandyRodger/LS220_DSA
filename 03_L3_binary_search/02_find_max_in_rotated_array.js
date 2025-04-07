// /*

// Write a function `findMax` that finds the maximum element in
// a rotated sorted array.

// A rotated sorted array is an array that was originally sorted
// in ascending order, but has been rotated (shifted) by some
// number of positions. The function should take an array of
// integers as input, representing the rotated sorted array,
// and it should return the maximum element in the array.
// The array is guaranteed to have at least one element.

// The solution should be in O(logN) time complexity.

// Example:
// Input: nums = [8, 9, 10, 2, 5, 6]
// Output: 10
// Explanation: The original sorted array [2, 5, 6, 8, 9, 10]
//              was rotated 3 times.

// P: 

// Write a function that takes a sorted-rotated array, and uses binary search to find the highest number in O(logN) time complexity.

// The highest number will always be directly to the left of the lowest number.

// E:

// test(findMax([8, 9, 10, 2, 5, 6]), 10);

// - mid = 10
// - mid is highest num
// - return 10

// test(findMax([15, 18, 2, 3, 6, 12]), 18);

// - mid is 18, 18 is highest num.

// test(findMax([7, 8, 2, 3, 4, 5, 6]), 8);

// - mid = 3
// - we need to go left
//   - because Left > LOM
// - mid = 8

// test(findMax([3, 1]), 3);

// - m = 1
// - m = 3, return 3

// test(findMax([5]), 5);

// - m = 5

// test(findMax([9, 10, 11, 12, 13, 14, 15, 1, 2, 3]), 15);

// - m = 13
// - ROM > right, so go right.
// - m = 1
// - LOM is highest Num

// test(findMax([4, 5, 1, 2, 3]), 5);

// - m = 1
// - LOM is highest Num

// test(findMax([23, 34, 38, 40, 41, 14, 15, 16, 17, 18, 19, 20, 21]), 41);

// - m = 15
// - Left > LOM, go left
// - m = 38
// - go right
// - m = 41, return 41

// test(findMax([100, 200, 300, 400, 500]), 500);

// - m = 300
// - go right
// - m = 400
// - go right
// - m = 500

// test(findMax([45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 44]), 63);

// - m = 55
// - left is not greater than LOM, go right
// - m = 61
// - left is not greater than LOM, go right
// - m = 63 BINGO

// test(findMax([11, 13, 15, 17, 19, 21, 1, 3, 5, 7, 9]), 21);

// - m = 21
// - bingo

// D:

// - binary search
// - use LeftOfMid (LOM), and ROM

// A:

// - Initialize:
//   - Left
//   - Right

// - while left < right:
//   - set mid
//   - set lom
//   - set ROM

//   - if LOM greater than mid, return LOM
//   - if mid > ROM, return mid
//   - if Left > LOM
//     - go left
//   -  go right

// C:
// */

// function highestVal(l, m, r) {
//   // console.log(`l = ${l} m = ${m} | |r = ${r} |`)
//   if (!m) {
//     return m
//   } else if (l > m) {
//     return l;
//   } else if (m > r) {
//     return m;
//   }
// }

// function findMax(nums) {

//   if (nums.length === 1) { return nums[0] };

//   let left = 0;
//   let right = nums.length - 1;
  
//   while (left < right) {
//     let mid = Math.floor((left + right)/2);
//     let lom = mid - 1;
//     let rom = mid + 1;

    
//     if (nums[left] > nums[lom]) {
//       right = lom;
//     } else {
//       left = rom;
//     }

//     let poss = highestVal(nums[lom], nums[mid], nums[rom]);
//     if (poss) {return poss};

//     if (rom === nums.length - 1) {return nums[rom]};

//   }
// }

// test(findMax([8, 9, 10, 2, 5, 6]), 10);
// test(findMax([15, 18, 2, 3, 6, 12]), 18);
// test(findMax([7, 8, 2, 3, 4, 5, 6]), 8);
// test(findMax([3, 1]), 3);
// test(findMax([5]), 5);
// test(findMax([9, 10, 11, 12, 13, 14, 15, 1, 2, 3]), 15);
// test(findMax([4, 5, 1, 2, 3]), 5);
// test(findMax([23, 34, 38, 40, 41, 14, 15, 16, 17, 18, 19, 20, 21]), 41);
// test(findMax([100, 200, 300, 400, 500]), 500);
// test(findMax([45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 44]), 63);
// test(findMax([11, 13, 15, 17, 19, 21, 1, 3, 5, 7, 9]), 21);

// function test(act, exp) {
//   if (act === exp) {
//     console.log('(-:');
//   } else {
//     console.log(`expected ${exp}, instead got ${act}`);
//   }
// }

// // LS soluton:

// function findMax(nums) {
//   let left = 0;
//   let right = nums.length - 1;
//   let firstElem = nums[0];
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     let midNumber = nums[mid];

//     if ((mid === 0 || nums[mid - 1] < midNumber) && (mid === nums.length - 1 || nums[mid + 1] < midNumber)) {
//       return midNumber;
//     } else if (midNumber < firstElem) {
//       right = mid - 1;
//     } else {
//       left = mid + 1;
//     }
//   }
// }

/*

2nd go:

Write a function `findMax` that finds the maximum element in
a rotated sorted array.

A rotated sorted array is an array that was originally sorted
in ascending order, but has been rotated (shifted) by some
number of positions. The function should take an array of
integers as input, representing the rotated sorted array,
and it should return the maximum element in the array.
The array is guaranteed to have at least one element.

The solution should be in O(logN) time complexity.

Example:
Input: nums = [8, 9, 10, 2, 5, 6]
Output: 10
Explanation: The original sorted array [2, 5, 6, 8, 9, 10]
             was rotated 3 times.

P: 

start 12:15
end: 12:36

Write a function that takes an array (1 <= length < ?) of sorted, then rotated numbers - return the highest number. Use binary search.

Which means the max number will be to the left of the lowest number.

E:

Example:
Input: nums = [8, 9, 10, 2, 5, 6]
Output: 10
Explanation: The original sorted array [2, 5, 6, 8, 9, 10]
             was rotated 3 times.

test(findMax([15, 18, 2, 3, 6, 12]), 18); => idx 1
test(findMax([7, 8, 2, 3, 4, 5, 6]), 8); => idx 1
test(findMax([3, 1]), 3); => idx 0
test(findMax([5]), 5); => idx 0 (needs to handle arrays of 1)
test(findMax([9, 10, 11, 12, 13, 14, 15, 1, 2, 3]), 15);
test(findMax([4, 5, 1, 2, 3]), 5);
test(findMax([23, 34, 38, 40, 41, 14, 15, 16, 17, 18, 19, 20, 21]), 41);
test(findMax([100, 200, 300, 400, 500]), 500); => last elem
test(findMax([45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 44]), 63);
test(findMax([11, 13, 15, 17, 19, 21, 1, 3, 5, 7, 9]), 21);


D:

binary search

A:
C:
*/


function findMax(nums) {
  let highestNum = -Infinity;
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] > highestNum) { highestNum = nums[mid] };

    if (nums[mid] < nums[0]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return highestNum;
}

test(findMax([8, 9, 10, 2, 5, 6]), 10);
test(findMax([15, 18, 2, 3, 6, 12]), 18);
test(findMax([7, 8, 2, 3, 4, 5, 6]), 8);
test(findMax([3, 1]), 3);
test(findMax([5]), 5);
test(findMax([9, 10, 11, 12, 13, 14, 15, 1, 2, 3]), 15);
test(findMax([4, 5, 1, 2, 3]), 5);
test(findMax([23, 34, 38, 40, 41, 14, 15, 16, 17, 18, 19, 20, 21]), 41);
test(findMax([100, 200, 300, 400, 500]), 500);
test(findMax([45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 44]), 63);
test(findMax([11, 13, 15, 17, 19, 21, 1, 3, 5, 7, 9]), 21);

function test(act, exp) {
  if (act === exp) {
    console.log('(-:');
  } else {
    console.log(`expected ${exp}, instead got ${act}`);
  }
}

