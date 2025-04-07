/*

https://launchschool.com/lessons/157d45f6/assignments/845eee02

You are given an array of integers. Your task is to create a new array
where each element is the product of all numbers in the original array
except the number at that index.

Implement a function that takes an integer array as input and returns
a new array where the element at index i is the product of all
elements in the input array except the element at index i.


Example 1:

Input: [2, 3, 4, 5]
Output: [60, 40, 30, 24]
Explanation:
    For index 0: 3 * 4 * 5 = 60
    For index 1: 2 * 4 * 5 = 40
    For index 2: 2 * 3 * 5 = 30
    For index 3: 2 * 3 * 4 = 24

Example 2:

Input: [-2, 1, -3, 4]
Output: [-12, 24, -8, 6]
Explanation:
    For index 0: 1 * (-3) * 4 = -12
    For index 1: (-2) * (-3) * 4 = 24
    For index 2: (-2) * 1 * 4 = -8
    For index 3: (-2) * 1 * (-3) = 6

Note: Your solution must have a time complexity of O(n).

P:

Write a function that takes an array of integers and returns a new array containing the products of a calculation. 

Calculation. While iterating through input-Array (idx) the new element will be the product of all integers in input except that at idx. 

Key- restriction: time complexity must be O(N), therefore I cannot use iterative functions for each element like .slice() or .reduce()

E:

Example 1:

Input: [2, 3, 4, 5]
Output: [60, 40, 30, 24]
Explanation:
    For index 0: 3 * 4 * 5 = 60
    For index 1: 2 * 4 * 5 = 40
    For index 2: 2 * 3 * 5 = 30
    For index 3: 2 * 3 * 4 = 24

Example 2:

Input: [-2, 1, -3, 4]
Output: [-12, 24, -8, 6]
Explanation:
    For index 0: 1 * (-3) * 4 = -12
    For index 1: (-2) * (-3) * 4 = 24
    For index 2: (-2) * 1 * 4 = -8
    For index 3: (-2) * 1 * (-3) = 6


test(exclusiveProduct([1, 2, 3, 4]), [24, 12, 8, 6]);

- 

test(exclusiveProduct([0, 1, 2, 3]), [6, 0, 0, 0]);
test(exclusiveProduct([1, 1, 1, 1]), [1, 1, 1, 1]);
test(exclusiveProduct([2, 1, 5, 3]), [15, 30, 6, 10]);
test(exclusiveProduct([-1, -1, -1, -1]), [-1, -1, -1, -1]);
test(exclusiveProduct([10]), [1]);

D:

I can only see each number once, so what do I need to do?
  - update all numbers (can i?)

[1, 2, 3, 4])

I am allowed 4 operations

1st => 2 * 3 * 4 => 24
2nd => 1 * 3 * 4 => 12
3rd => 1 * 2 * 4 => 8
4th => 1 * 2 * 3 => 6

I need to store calculations and re-use them somehow

back-tracking? DP ? Could I expres this as a grid?

[1, 2, 3, 4]
[1]
[3]
[4]

OR:

[1, 2, 3, 4]
[1, 2, 3, 4]
[1, 2, 3, 4]
[1, 2, 3, 4]

No, I just need to find a way to update the calculation each iteration:

Round1:  array[0] = (array[1] * array[2] * array [3])
Round2:  array[1] = (array[0] * array[2] * array [3])
Round3:  array[2] = (array[0] * array[1] * array [3])
Round4:  array[3] = (array[0] * array[1] * array [3])

I would need input.length "inputLength"

A:

Solution without O(N) time complexity:

  return nums.map((_, idx) => {
    return nums.toSpliced(idx, 1).reduce((acc, val) => acc * val);
  })

C:

*/
function exclusiveProduct(nums) {

  let result = Array(nums.length).fill(1)
  let suffixProd = 1;
  let prefixProd = 1;

  for (i = 0; i < nums.length; i++) {
    result[i] = prefixProd;
    prefixProd *= nums[i]
  }

  for (i = nums.length - 1; i >= 0; i--) {
    result[i] *= suffixProd;
    suffixProd *= nums[i]
  }

  return result
}

// test(exclusiveProduct([4, 6, 2, 5]), ["?"]);
test(exclusiveProduct([2, 3, 4, 5]), [60, 40, 30, 24]);
test(exclusiveProduct([-2, 1, -3, 4]), [-12, 24, -8, 6]);
test(exclusiveProduct([1, 2, 3, 4]), [24, 12, 8, 6]);
test(exclusiveProduct([0, 1, 2, 3]), [6, 0, 0, 0]);
test(exclusiveProduct([1, 1, 1, 1]), [1, 1, 1, 1]);
test(exclusiveProduct([2, 1, 5, 3]), [15, 30, 6, 10]);
test(exclusiveProduct([-1, -1, -1, -1]), [-1, -1, -1, -1]);
test(exclusiveProduct([10]), [1]);

function test(act, exp) {
  // for (i = 0; i < exp.length; i++) {
  //   if (act[i] !== exp[i]) {
  //     console.log(`exp: ${exp} \n act: ${act}`)
  //     return;
  //   }
  // }
  // console.log(`(-:`)
  
  console.log(`----------`)
  console.log(act)
  console.log(exp)
  console.log(`----------`)
}
