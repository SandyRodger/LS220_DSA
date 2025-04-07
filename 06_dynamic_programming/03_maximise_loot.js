/*

https://launchschool.com/lessons/6165017e/assignments/7a696508

You're a clever thief planning a heist in a neighborhood
where houses are arranged in a line. Each house contains a
certain amount of valuable loot. However, the houses have a
unique security system: if two adjacent houses are robbed, it
triggers a neighborhood-wide alarm.

Given an array of integers representing the value of loot in
each house, determine the maximum amount of loot you can
steal without triggering the alarm system.


Example 1:
Input: houses = [3,1,4,1,5]
Output: 12
Explanation: Rob house 1 (loot = 3), house 3 (loot = 4), and house 5 (loot = 5).
Total loot stolen = 3 + 4 + 5 = 12.

Example 2:
Input: houses = [6,2,7,9,3,1]
Output: 19
Explanation: Rob house 1 (loot = 6), house 3 (loot = 7), and house 5 (loot = 3).
Total loot stolen = 6 + 7 + 3 = 16.

P:

- Write a function that takes an array of integers and determines the highest possible sum of the integers that accord to this condition:
  - two adjacent integers cannot be taken.

E:

Example 1:
Input: houses = [3,1,4,1,5]
Output: 12
Explanation: Rob house 1 (loot = 3), house 3 (loot = 4), and house 5 (loot = 5).
Total loot stolen = 3 + 4 + 5 = 12.

- other possibilities would be:
  - 3 + 4 + 1
  - 3 + 4
  - 3 + 1
  - 3 + 5
  - 3
  - 1 + 1
  - 1 + 5
  - 1
  - 4 + 5
  - 4

Example 2:
Input: houses = [6,2,7,9,3,1]
Output: 19
Explanation: Rob house 1 (loot = 6), house 3 (loot = 7), and house 5 (loot = 3).
Total loot stolen = 6 + 7 + 3 = 16.

[2,1,1,2] => 4

- 2 (skip the 2 middle houses) + 2

[1,2,3,1] => 4

- 1 + 3

[2,7,9,3,1] => 12

- 2 + 9 + 1

[1,1,1,1,1,1,1,1,1,1] => 5

- taking odds and taking evens both result in 5

[10,1,1,10] => 20

- same logic as example 3

[5,3,4,11,2] => 16

- 5 + 11

[1] => 1

- input of 1 is valid and will return it's only element

[] => 0

- empty input is valid => return 0. 


D:

Example 1:
Input: houses = [3,1,4,1,5]
Output: 12
Explanation: Rob house 1 (loot = 3), house 3 (loot = 4), and house 5 (loot = 5).
Total loot stolen = 3 + 4 + 5 = 12.

Bottom-up (tabulation)
- use 2 for loops, but with a cache, so combinations are not repeated
- save the highest sum when it's encountered.

2 operations:
  - count loot as you go, comparing it to highestLoot.
  - keep track of where you have robbed. (return value of recursion)

A:

Example 1:
Input: houses = [3,1,4,1,5]
Output: 12
Explanation: Rob house 1 (loot = 3), house 3 (loot = 4), and house 5 (loot = 5).
Total loot stolen = 3 + 4 + 5 = 12.

Indexes of houses:\

[0, theRest]
  - [0, 2, the Rest]
    - [0, 2, 4]
    - done
  - [0, 3, the Rest]
    - done
  - [0, 4, the Rest]
    - done
[1, theRest]
  - [1, 3, theRest]
  - done
[2, theRest]
  - [2, 4]
  - done
[3, theRest]
  - done
[4, theRest]
  - done

BASE CASE:

  - a single house

RECURSIVE CASE:

- we get to the end of the street

VARIABLES:

cache = map
highestLoot = 0
lootSoFar = 0
housesRobbed = ""

HELPER FUNTION: createKeyString(k) => `${k}@${idx}, `

iterate through houses (houseIndex)
  - pass houseIndex and lootSum to HF "restOfStreet"

restOfStreet(lootSum, currIndex) => return value immaterial
  - loot so far += loot at this house (7)
  - nextViableHouseIndex = currIndex + 2 (index 4)
  - If nextViableHouseIndex goes beyond houses.length
    - save housesRobbed to cache
    - compare/save lootSum
    - reset lootSum
  - otherwise
    - loop from nextViableHouse to the end of the street
      - pass in lootSum and currentIndex

C:

*/

function maximizeLoot(houses) {

  const cache = new Map();
  let highestLoot = 0;
  let lootSum = 0;
  let housesRobbed = "";
  
  const createKeyString = (loot, idx) => `${loot}@${idx}, `;

  function restOfStreet(i) {
    console.log(housesRobbed)
    lootSum += houses[i];
    housesRobbed.concat(createKeyString(houses[i], i))
    let nextHouse = i + 2;

    if (nextHouse > houses.length) {
      cache.set(housesRobbed)
      highestLoot = Math.max(highestLoot, lootSum);
      lootSum = 0;
    } else {
      for (i = nextHouse; i < houses.length; i++) {
        restOfStreet(nextHouse)
      }
    }
  }

  for (i = 0; i < houses.length; i++) {
    restOfStreet(i);
  }

  return highestLoot;
}

test(maximizeLoot([3,1,4,1,5]), 12);
// test(maximizeLoot([6,2,7,9,3,1]), 16);
// test(maximizeLoot([2,1,1,2]), 4);
// test(maximizeLoot([1,2,3,1]), 4);
// test(maximizeLoot([2,7,9,3,1]), 12);
// test(maximizeLoot([1,1,1,1,1,1,1,1,1,1]), 5);
// test(maximizeLoot([10,1,1,10]), 20);
// test(maximizeLoot([5,3,4,11,2]), 16);
// test(maximizeLoot([1]), 1);
// test(maximizeLoot([]), 0);

function test(act, exp) {
  if (act === exp) {
    console.log(`(-:`);
  } else {
    console.log(`expected: ${exp}, actually got ${act}`);
  }
}
