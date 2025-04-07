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
Output: 2
Explanation: The distance between the first and
third barrier is 2, and the height is 1, so
the maximum amount of rainfall is 2 * 1 = 2

  |    =>    |
|_|_|      |*|*|

Example:
Input: [2, 3, 4, 2]
Output: 6
Explanation: The distance between the first and
fourth barrier is 3, and the height is 2, so the
maximum amount of rainfall is 3 * 2 = 6

    |            |
  | |    =>    | |
| | | |      |*|*|*|
|_|_|_|      |*|*|*|

P:

Write a function that takes an array of integers (representing barriers in a rainfall collection container) and returns an integer (representing the greatest volume of water that could be gathered between two barriers).

How the barriers work:

- water cannot go around the barriers
- The space between each barrier is equal to 1.
- We are not interested in the boundries of the field, only the spaces between barriers.
- They are not sorted

How do I know to use Start/End?

  - Start/end is for determining subArrays.

5 start end questions:

1. When do I move start? => when nums[start] + nums[end] is too small, inc start by 1
2. When do I move end? => when nums[start] + nums[end] is too big, dec end by 1
3. Does start do anything other than move? => It points to 1st value
4. Does end do anything other than move? => It points to 2nd value
5. End when start >= end OR when we find target num.

E:

[1, 1]) === 1
  - The distance between them in 1
  - The height is 1
    - 1 x 1  = 1
[1, 3]) === 1
  - The lower is 1
  - The higher is 3
  - distance is 1
  - 1 x 1 = 1
[1, 2, 1]) === 2
  - Imagining high rainfall 1 to 2 would fill and 2 to 1 would independently fill. BUT the question specifies how much water can be collected between two barriers. OK but it's still between 2 barriers even if the waters are collected independently. But by that logic I should be able to count higher volumes also but I cannot.
  - 1 + 1  = 2
[2, 3, 4, 2]) === 6
  - 2 to 3 = 2
  - 3 to 4 = 3
  - 4 to 2 = 2
[2, 2, 2, 2, 2]) === 8
[2, 9, 5, 10, 5, 6]) === 24
  - between 9 and 6 are 4 places. 4 x 6 = 24
  - pools = [2, 5, 5, 5, 5] => nope
[5, 4, 3, 2, 9, 10, 3, 4, 5]) === 40
  - 8 x 5 = 40
[3, 1, 2, 5, 2, 4, 2, 5, 6, 1, 5, 3, 2, 3, 4, 1, 2]) === 44
  - between 5 and 4 is 11, 11 x 4 = 44
[2, 2, 13, 9, 1, 15, 2, 5, 9, 7, 5, 3, 6, 3, 4, 1, 4, 5]) === 75
  - 15 x 5

My examples:

Question: how can I know that at any point I can forgo looking at the rest of the array?
Answer: If the lowerHeight * distanceToMatchingHeight is higher than DistanceToEnd * ???

[1, 1, 1, 1, 1, 9, 1, 1, 1] => 5

D:

- Not brute force. ie not finding absolutely every combination possible with 2 for loops

Helper methods:
  - calculate waterCaught(leftInt, rightInt)

Pointers:
anchor/runner

When should I move the start pointer? - We move the start pointer to the right (increment it) after we've calculated the water caught between left and right and when the number to its right is higher than the number to the left of the right-pointer,

When should I move the end pointer? - The mirror of the above

Does the start pointer do something besides moving? - When it is providing the number to 'waterCaught'

Does the end pointer do something besides moving? - As above

Under which condition do we stop the iteration? - We stop the iteration when when the start and end pointers meet.

A:

[2, 9, 5, 10, 5, 6]) === 24

- initialize start and end pointers.
- initialize mostWater = 0

- do a 2 pointer search from the higher of the 2

C:
*/

function waterCaught(start, end, distance) {
  let lower = Math.min(start, end);
  return lower * distance;
}

function maxRainwater(barriers) {
  let mostWater = 0
  let start = 0;
  let end = barriers.length - 1;

  while (start < end) {
    mostWater = Math.max(mostWater, waterCaught(barriers[start], barriers[end], (end - start)));
    if (barriers[start] >= barriers[end]) {
      end--;
    } else {
      start++;
    }
  }

  return mostWater;
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
// my test cases:
console.log(maxRainwater([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]) === 9);
console.log(maxRainwater([1, 1, 1, 1, 1, 1, 1, 1, 9, 1]) === 9);
console.log(maxRainwater([1, 9, 1, 1, 1, 1, 1, 1, 1, 1]) === 9);
console.log(maxRainwater([1, 2, 3, 4, 5, 6, 7, 8, 9]) === 20);

// BRUTE FORCE APROACH:

// function maxRainwater(barriers) {
//   let mostWater = 0
//   let iterations = 0
  // brute force:

//   for (left = 0; left < barriers.length; left++) {
//     iterations += 1;
//     for (right = left; right < barriers.length; right++) {
//       iterations += 1;
//       let distance = right - left;
//       if (waterCaught(barriers[left], barriers[right], distance) > mostWater) {
//         // console.log(`left: ${left}`)
//         mostWater = waterCaught(barriers[left], barriers[right], distance);
//       }
//     }
//   }
//   console.log(`iterations:${iterations}`)
//   return mostWater;
// }

/*

WALKTHROUGH:

Input: [2, 9, 5, 10, 5, 6]
Output: 24

-------------------------
Round 1:

mostWater = 0 => 8
start = 0 => 1
end = 5
barriers[start] = 2
barriers[end] = 6
end - start = 5
waterCaught = 2 * 5 === 10

-------------------------
Round 2: [2, 9, 5, 10, 5, 6]

mostWater =  24
start =  1
end = 5
barriers[start] = 9
barriers[end] = 6
end - start = 4
waterCaught = 6 * 4 === 24
-------------------------

Round 3: [2, 9, 5, 10, 5, 6]

mostWater =  24
start =  1
end = 4
barriers[start] = 9
barriers[end] = 5
end - start = 3
waterCaught = 5 * 3 === 15, remains 24

-------------------------

Round 4: [2, 9, 5, 10, 5, 6]

mostWater =  24
start =  1
end = 3
barriers[start] = 9
barriers[end] = 10
end - start = 2
waterCaught = 9 * 2 === 18, remains 24

-------------------------

Round 5: [2, 9, 5, 10, 5, 6]

mostWater =  24
start =  2
end = 3
barriers[start] = 5
barriers[end] = 10
end - start = 1
waterCaught = 5 * 1 === 5, remains 24

-------------------------

Round 5: [2, 9, 5, 10, 5, 6]

mostWater =  24
start =  3
end = 3

start increments and is equal to end, so escape the while loop

- return the mostWater, set in round 2 as 24

*/
