/*

P:

Write a function that taken an array of positive integers and returns the highest possible sum of ints that are non-adjacent.

E:

Example 1:
Input: houses = [3,1,4,1,5]
Output: 12
Explanation: Rob house 1 (loot = 3), house 3 (loot = 4), and house 5 (loot = 5).
Total loot stolen = 3 + 4 + 5 = 12.

Example 2:
Input: houses = [6,2,7,9,3,1]
Output: 16
Explanation: Rob house 1 (loot = 6), house 3 (loot = 7), and house 5 (loot = 3).
Total loot stolen = 6 + 7 + 3 = 16.

[3,1,4,1,5] => 12

- 3 (3)
  - 4 (7)
    - 5 (12)
- 1 (1)
  - 1 (2)
  - 5 (6)
- 4 (4)
  - 5 (9)
- 1 (1)
- 5 (5)

[6,2,7,9,3,1] => 16

6,9,1 OR 6,7,3

[2,1,1,2] => 4

2, 2

[1,2,3,1] => 4

- 1, 3

[2,7,9,3,1] => 12

- 291

[1,1,1,1,1,1,1,1,1,1] => 5

- 11111

[10,1,1,10] => 20

- 10, 10

[5,3,4,11,2] => 16

- 5, 11

[1] => 1

- 1

[] => 0

D:

BASE CASE:

no numbers

recursive case:

pass the end of the array

A:

Input: houses = [6,2,7,9,3,1]
Output: 16
Explanation: Rob house 1 (loot = 6), house 3 (loot = 7), and house 5 (loot = 3).
Total loot stolen = 6 + 7 + 3 = 16.

- Look at each number
- if that house + the third house onwards is more, save that
- if the next house + the fourth house moving onwards is more choose that house.

C:

*/


function maximizeLoot(houses) {
  if (houses.length === 0) return 0;
  if (houses.length === 1) return houses[0];

  const dp = Array(houses.length + 1).fill(0);
  dp[1] = houses[0];

  for (let i = 2; i <= houses.length; i++) {
    console.log(`dp : ${dp}`);
    console.log(`dp[i (${i})] is set to the larger of dp[i - 1] (${dp[i - 1]})`);
    console.log(`and dp[i - 2] (${dp[i - 2]}) + houses[i - 1] (${houses[i - 1]})`)
    console.log(`which is (${dp[i - 2] + houses[i - 1]})`);
    console.log(`---------------------------------------`)
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + houses[i - 1]);
  }

  return dp[houses.length];
}

console.log(maximizeLoot([3,1,4,1,5]) === 12);
// console.log(maximizeLoot([6,2,7,9,3,1]) === 16);
// console.log(maximizeLoot([2,1,1,2]) === 4);
// console.log(maximizeLoot([1,2,3,1]) === 4);
// console.log(maximizeLoot([2,7,9,3,1]) === 12);
// console.log(maximizeLoot([1,1,1,1,1,1,1,1,1,1]) === 5);
// console.log(maximizeLoot([10,1,1,10]) === 20);
// console.log(maximizeLoot([5,3,4,11,2]) === 16);
// console.log(maximizeLoot([1]) === 1);
// console.log(maximizeLoot([]) === 0);
// console.log(maximizeLoot([1, 1, 1, 100, 1, 1, 1]) === 102);
// console.log(maximizeLoot([1, 1, 1, 1, 100, 1, 1, 1]) === 103);