/*

https://launchschool.com/lessons/dd8751d3/assignments/f8891b88

Imagine a series of vertical barriers arranged in a straight
line at equal distances across a flat field.
These barriers have different heights. After a rainstorm,
water collects between the barriers, forming reservoirs.
Your task is to determine the maximum volume of rainwater
that can be captured between any two barriers, without
the water spilling over the tops of those two barriers.

Write a function `maxRainwater` that takes an array of
barrier `heights` and calculates the maximum volume
of rainwater that can be harvested between any two barriers.

The array `heights` represents the height of each barrier,
where `heights[i]` is the height of the i-th barrier.
The distance between each barrier is uniform.

The input array will contain at least 2 values.

Example:
Input: [1, 2, 1]
maxWater: 2
Explanation: The distance between the first and
third barrier is 2, and the height is 1, so
the maximum amount of rainfall is 2 * 1 = 2

  |    =>    |
|_|_|      |*|*|

Example:
Input: [2, 3, 4, 2]
maxWater: 6
Explanation: The distance between the first and
fourth barrier is 3, and the height is 2, so the
maximum amount of rainfall is 3 * 2 = 6

    |            |
  | |    =>    | |
| | | |      |*|*|*|
|_|_|_|      |*|*|*|

P:

- write a function that takes an array of integers ("barriers") (min length 2)
- the function should return a number representing the maximum amount of water that could be collected between any two barriers.
  - weirdly water can flow around the barriers, while also being kept in by them
  - the rule seems to be if there is a difference in water-level when one side's water exceeds its barrier, that would be seen as it spilling over, but if the water level on each side rises over the barrier between them at the same time - there is no spillage/over-flow

E:

Example:
Input: [1, 2, 1]
maxWater: 2
Explanation: The distance between the first and
third barrier is 2, and the height is 1, so
the maximum amount of rainfall is 2 * 1 = 2

  |    =>    |
|_|_|      |*|*|

Example:
Input: [2, 3, 4, 2]
maxWater: 6
Explanation: The distance between the first and
fourth barrier is 3, and the height is 2, so the
maximum amount of rainfall is 3 * 2 = 6

    |            |
  | |    =>    | |
| | | |      |*|*|*|
|_|_|_|      |*|*|*|

[1, 1]) === 1

- distance * lower height ( 1 * 1)

[1, 3]) === 1

- distance * lower height (1 * 1)

[1, 2, 1]) === 2

- 1 * 2 (so the waters can flow around the central 2)

[2, 3, 4, 2]) === 6

- 2 * 3 
- alternatives would have been:
  - 2 * 1
  - 2 * 2
  - 2 * 3 tick
  - 3 * 1

[2, 2, 2, 2, 2]) === 8

- all barriers are the same height so it;s last and 1st, 2 * 4

[2, 9, 5, 10, 5, 6]) === 24

- 6 * 4

[5, 4, 3, 2, 9, 10, 3, 4, 5]) === 40


[3, 1, 2, 5, 2, 4, 2, 5, 6, 1, 5, 3, 2, 3, 4, 1, 2]) === 44
[2, 2, 13, 9, 1, 15, 2, 5, 9, 7, 5, 3, 6, 3, 4, 1, 4, 5]) === 75

D:
A:
C:
*/

// [2, 3, 4, 2]) === 6

// function maxRainwater(barriers) {
//   let left = 0;
//   let right = barriers.length - 1;
//   let maxWater = 0;

//   while (left < right) {
//     let lower = Math.min(barriers[left], barriers[right]);
//     let water = (right - left) * lower;
//     maxWater = Math.max(maxWater, water);
//     barriers[left] > barriers[right] ? right-- : left++;
//   }
  
//   return maxWater;
// }

// recursion:

function maxRainwater(barriers, left = 0, right = barriers.length - 1, maxWater = 0) {
  maxWater = Math.max(maxWater, (right - left) *  Math.min(barriers[left], barriers[right]));
  if (left >= right) return maxWater;
  if (barriers[left] > barriers[right]) {
    return maxRainwater(barriers, left, right-1, maxWater);
  } else {
    return maxRainwater(barriers, left+1, right, maxWater);
  }
}

console.log(maxRainwater([1, 1]) === 1);
console.log(maxRainwater([1, 3]) === 1);
console.log(maxRainwater([1, 2, 1]) === 2);
console.log(maxRainwater([2, 3, 4, 2]) === 6);
console.log(maxRainwater([2, 2, 2, 2, 2]) === 8);
console.log(maxRainwater([2, 9, 5, 10, 5, 6]) === 24);
console.log(maxRainwater([5, 4, 3, 2, 9, 10, 3, 4, 5]) === 40);
console.log(maxRainwater([3, 1, 2, 5, 2, 4, 2, 5, 6, 1, 5, 3, 2, 3, 4, 1, 2]) === 44);
console.log(maxRainwater([2, 2, 13, 9, 1, 15, 2, 5, 9, 7, 5, 3, 6, 3, 4, 1, 4, 5]) === 75);