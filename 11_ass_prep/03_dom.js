/*

Problem: 
Given a binary array nums, you can delete one element from it. 
Return the size of the longest subarray containing only 1's in the resulting array.
  
Example 1:
Input: nums = [1,1,0,1,1,0,1,1,1]
Output: 5
Explanation: 
- If we delete the second zero (nums[5]), the resulting array is [1,1,0,1,1,1,1,1], which has a longest subarray of 1's with length 5.

Example 2:
Input: nums = [1,0,1,1,0,1,1]
Output: 4
Explanation:
- If we delete the second zero (nums[4]), the resulting array is [1,0,1,1,1,1], which has a longest subarray of 1's with length 4.

Example 3:
Input: nums = [1,1,1]
Output: 3
Explanation: 
- There is no zero in the array to delete, so the longest subarray of 1's is the whole array.

Constraints:
- 1 <= nums.length <= 10^5
- nums[i] is either 0 or 1

P:

Write a function that takes an array of 0s and 1s. Find the length of the longest possible subArray of contiguous 1s, if any 0 is deleted.

If the inoput is all ones, return its length
If it's all 0s, return 0
Min length of input is 1
max length is 100,000

E:

Example 1:
Input: nums = [1,1,0,1,1,0,1,1,1]
Output: 5
Explanation: 
- If we delete the second zero (nums[5]), the resulting array is [1,1,0,1,1,1,1,1], which has a longest subarray of 1's with length 5.

Example 2:
Input: nums = [1,0,1,1,0,1,1]
Output: 4
Explanation:
- If we delete the second zero (nums[4]), the resulting array is [1,0,1,1,1,1], which has a longest subarray of 1's with length 4.

Example 3:
Input: nums = [1,1,1]
Output: 3
Explanation: 
- There is no zero in the array to delete, so the longest subarray of 1's is the whole array.

Example 4:

console.log(longestSubarray([0])); // Output: 0 

Example 5:

console.log(longestSubarray([1])); // Output: 1 

D:


- Basically we can ignore the 1s and just concentrate on the 0s.
- find a zero, find the next 2 zeroes.
- the distance between 1st and 3rd zeroes (minus 1) is the length 


Input: nums = [1,1,0,1,1,0,1,1,1]
Output: 5

start of right half



A:

Variables:

- currentLongestSubstring = 0

- find the first 0. (anchor)
- find the third 0 (runner)
- measure the distance between them, subtract 1
- compare that distance to currentLongestSubstring and save it if it is longer
- move anchor and runner to next 0.
- repeat until runner exceeds length of input

C:
*/

// function indexOfNextZeroFrom(array, idx) {
//   for (let i = idx + 1; i < array.length; i++) {
//     if (array[i] === 0) { return i }
//   }
//   return false;
// }

// function longestSubarray(array) {
//   let firstZero = indexOfNextZeroFrom(array, -1);
//   if (Object.is(false, firstZero)) { return array.length };
//   let a = firstZero;
//   let secondZero = indexOfNextZeroFrom(array, firstZero);
//   let thirdZero = indexOfNextZeroFrom(array, secondZero);
//   // let result = (r-1) - (a+1);
//   return [firstZero, secondZero, thirdZero];
// }

// function longestSubarray(array) {
//   let indexesOfZeros = [0];
//   let noOnes = true;
//   let noZeros = true;
//   for (i = 0; i < array.length; i++) {
//     if (array[i] === 1) { noOnes = false};
//     if (array[i] === 0) { 
//       noZeros = false; 
//       if ((i && array[i+1]) || (i != array.length && array[i-1])) {
//         indexesOfZeros.push(i+1);
//       }
//     };
//   }

//   if (noOnes) { return 0 };
//   if (noZeros) { return array.length };
//   indexesOfZeros.push(array.length);


//   let a = 0;
//   let r = 2;
//   let output = indexesOfZeros[r] - indexesOfZeros[a] - 1;

//   while (r < indexesOfZeros.length) {
//     output = Math.max(output, (indexesOfZeros[r] - indexesOfZeros[a]) - 1)
//     r++;
//     a++;
//   }
//   console.log(indexesOfZeros)
//   return output;
// }

// function longestSubarray(array) {
//   let a = 0;
//   let r = array.length + 1;
//   array.unshift(0);
//   let second = false;
//   let third = false;
//   let allZeros = true;
//   let allOnes = true;

//   for (i = 1; i < array.length; i++) {
//     if (array[i] === 0) {
//       allOnes = false;
//       if (!second) {
//         second = true;
//       } else if (!third) {
//         third = true;
//         r = i;  
//       }
//     }
//     if (array[i] === 1) { allZeros = false };
//   }

//   if (allOnes) { return array.length -1};
//   if (allZeros) { return 0}
//   array.push(0);
//   let output = (r - a) - 2;
  // console.log(r);
  // console.log(a);
  // while (r < array.length) {

  // }
//   return output;
// }

function longestSubarray(nums) {
  let left = 0;
  let zeroCount = 0;
  let maxWindow = 0;
  let containsZero = false; // to track if there's any zero in the array

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      zeroCount++;
      containsZero = true;
    }
    
    // If more than one zero is in the window, shrink the window from the left
    while (zeroCount > 1) {
      if (nums[left] === 0) {
        zeroCount--;
      }
      left++;
    }
    
    // Update maximum window length observed
    maxWindow = Math.max(maxWindow, right - left + 1);
  }
  
  // If the window contained a zero, we delete that zero to form a contiguous block of 1's.
  // Otherwise, if there were no zeros, we can use the whole array.
  return containsZero ? maxWindow - 1 : maxWindow;
}


console.log(longestSubarray([1,1,0,1,1,0,1,1,1])); // Output: 5
console.log(longestSubarray([1,1,1,1,0,1,1,1])); // Output: 7 
console.log(longestSubarray([1, 0, 0, 0, 0, 0, 1])); // Output: 1
console.log(longestSubarray([1,1,1])); // Output: 3
console.log(longestSubarray([0,0,0,0,0])); // Output: 0
console.log(longestSubarray([1,1,1,1])); // Output: 4 
console.log(longestSubarray([0])); // Output: 0 
console.log(longestSubarray([1])); // Output: 1 