// /*

// https://launchschool.com/lessons/aac32d42/assignments/7202631d

// You are given an array of unique positive integers and a positive
// integer target. The goal is to find all unique combinations of 
// integers from the numbers that sum up to the target value.
// Each number from the numbers array can be used as many times as needed.
// The order of numbers in a combination doesn't matter.
// Two combinations are considered different if they use at least
// one number a different number of times.
// All valid combinations should be returned in any order.

// HINT:

// For the dead-end condition, think about how you can ensure that you are never visiting previous numbers, but include the current number and all numbers after it.

// P:

//  Write a function that takes an array of unique positive integers and uses backtracking to produce all unique combinations of these numbers (with repetition possible, and sequence irrelevant) which add up to a target number. The output will be a 2D array containing all valid permutations.

// E:

// Example 1:
// Given numbers = [3, 5, 7] and target = 15, the valid
// combinations are:
// [[3, 3, 3, 3, 3], [3, 5, 7], [5, 5, 5]]

// - 3 * 5 = 15
// - 3 + 5 + 7 (the input array unchanged) = 15
// - 5 * 3 = 15

// Example 2:
// For numbers = [1, 3, 5, 7] and target = 8, we get:
// [[1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 3], [1, 1, 1, 5], [1, 1, 3, 3], [1, 7], [3, 5]]

// - As in example 1, the array seems to be iterated through, the first number of the outputs following the sequence of the input array.

// - 1 * 8 (if there is a 1 it will always = target number * itself.)

// console.log(testSumCombinations([2, 3, 6, 7], 7, [[2, 2, 3], [7]]));
// console.log(testSumCombinations([2, 3, 5], 8, [[2, 2, 2, 2], [2, 3, 3], [3, 5]]));
// console.log(testSumCombinations([2], 1, []));
// console.log(testSumCombinations([1, 2, 3], 4, [[1, 1, 1, 1], [1, 1, 2], [1, 3], [2, 2]]));
// console.log(testSumCombinations([2, 3, 5], 10, [[2, 2, 2, 2, 2], [2, 2, 3, 3], [2, 3, 5], [5, 5]]));

// console.log(testSumCombinations([1, 2, 3], 5, [
//     [1, 1, 1, 1, 1],
//     [1, 1, 1, 2],
//     [1, 1, 3],
//     [1, 2, 2],
//     [2, 3],
// ]));

// console.log(testSumCombinations([1, 2, 4, 8], 16, [
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2],
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4],
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2],
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 4],
//     [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2],
//     [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 4],
//     [1, 1, 1, 1, 1, 1, 1, 1, 4, 4],
//     [1, 1, 1, 1, 1, 1, 1, 1, 8],
//     [1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2],
//     [1, 1, 1, 1, 1,1, 2, 2, 2, 4],
//     [1, 1, 1, 1, 1, 1, 2, 4, 4],
//     [1, 1, 1, 1, 1, 1, 2, 8],
//     [1, 1, 1, 1, 2, 2, 2, 2, 2, 2],
//     [1, 1, 1, 1, 2, 2, 2, 2, 4],
//     [1, 1, 1, 1, 2, 2, 4, 4],
//     [1, 1, 1, 1, 2, 2, 8],
//     [1, 1, 1, 1, 4, 4, 4],
//     [1, 1, 1, 1, 4, 8],
//     [1, 1, 2, 2, 2, 2, 2, 2, 2],
//     [1, 1, 2, 2, 2, 2, 2, 4],
//     [1, 1, 2, 2, 2, 4, 4],
//     [1, 1, 2, 2, 2, 8],
//     [1, 1, 2, 4, 4, 4],
//     [1, 1, 2, 4, 8],
//     [2, 2, 2, 2, 2, 2, 2, 2],
//     [2, 2, 2, 2, 2, 2, 4],
//     [2, 2, 2, 2, 4, 4],
//     [2, 2, 2, 2, 8],
//     [2, 2, 4, 4, 4],
//     [2, 2, 4, 8],
//     [4, 4, 4, 4],
//     [4, 4, 8],
//     [8, 8]
// ]));

// D:

// Example 1:
// Given numbers = [3, 5, 7] and target = 15, the valid
// combinations are:
// [[3, 3, 3, 3, 3], [3, 5, 7], [5, 5, 5]]


//                               [3]                   [5]        [7]
//                         [3(6)][5(8)][7(10)]
//             [+3=9], [+5=11], [+7 = 13]
//     [+3=12],[+5=14], [+7=16 X]
// [+3=15],[+5=17X],[+7=19X]

// Step 2: Define Naive Branching Logic:

//   - create all permutations, regardless of repetition.
//   - pass each element to a function which adds each number in array once and repeats until the result sums to greater than target.

//  [3, 5, 7]

// - take 3 (3)
//   - add 3 (6)
//     - add 3 (9)
//       - add 3 (12)
//         - add 3 (15)
//       - add 5
//       - add 7
//     - add 5
//     - add 7
//   - add 5
//   - add 7
  
// A:



// C:
// */

// // function step2Test(array, target) {
// //   let result = [];
// //   let candidate = [];
// //   function recursiveFunction(candidate, array) {
// //     for (n of array) {
// //       if (candidate.concat(n).reduce((a, n) => a + n) < target) {
// //         console.log(candidate.concat(n))
// //         recursiveFunction(candidate.concat(n), array, target)
// //       } else if (candidate.concat(n).reduce((a, n) => a + n) === target) {
// //         result.push(candidate.concat(n));
// //       }
// //     }
// //   }
// //   recursiveFunction(candidate, array);
// //   return result;
// // }

// // console.log(step2Test([2, 3, 6, 7], 7))

// function sumCombinations(candidates, target) {

//   function backtrack(candidates, candidate, result) {
//     if (candidate.length && candidate.reduce((a,v) => a + v) === target ) {
//       result.push([...candidate]);
//       return;
//     }

//     for (let elem of candidates) {
//       if (candidate.length > 0 && candidate.reduce((a, v) => a + v) > target) {
//         continue;
//       }

//       candidate.push(elem);
//       backtrack(candidates, candidate, result);
//       candidate.pop();
//     }
//   }

//   const result = [];
//   const candidate = [];
//   backtrack(candidates, candidate, result);
//   console.log(result);
//   return result;
// }

// function combToString(comb) {
//     return comb.slice().sort((a, b) => a - b).join(',');
// }

// function testSumCombinations(numbers, target, expected) {
//     const result = sumCombinations(numbers, target);
//     if (result.length !== expected.length) return false;

//     for (const combination of result) {
//         if (combination.reduce((sum, num) => sum + num, 0) !== target) {
//             return false;
//         }
//     }

//     const resultSet = new Set(result.map(combToString));
//     const expectedSet = new Set(expected.map(combToString));

//     if (resultSet.size !== result.length) return false;
//     if (resultSet.size !== expectedSet.size) return false;

//     for (const comb of resultSet) {
//         if (!expectedSet.has(comb)) return false;
//     }

//     return true;
// }

// console.log(testSumCombinations([2, 3, 6, 7], 7, [[2, 2, 3], [7]]));
// console.log(testSumCombinations([2, 3, 5], 8, [[2, 2, 2, 2], [2, 3, 3], [3, 5]]));
// console.log(testSumCombinations([2], 1, []));
// console.log(testSumCombinations([1, 2, 3], 4, [[1, 1, 1, 1], [1, 1, 2], [1, 3], [2, 2]]));
// console.log(testSumCombinations([2, 3, 5], 10, [[2, 2, 2, 2, 2], [2, 2, 3, 3], [2, 3, 5], [5, 5]]));

// console.log(testSumCombinations([1, 2, 3], 5, [
//     [1, 1, 1, 1, 1],
//     [1, 1, 1, 2],
//     [1, 1, 3],
//     [1, 2, 2],
//     [2, 3],
// ]));

// console.log(testSumCombinations([1, 2, 4, 8], 16, [
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2],
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4],
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2],
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 4],
//     [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2],
//     [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 4],
//     [1, 1, 1, 1, 1, 1, 1, 1, 4, 4],
//     [1, 1, 1, 1, 1, 1, 1, 1, 8],
//     [1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2],
//     [1, 1, 1, 1, 1,1, 2, 2, 2, 4],
//     [1, 1, 1, 1, 1, 1, 2, 4, 4],
//     [1, 1, 1, 1, 1, 1, 2, 8],
//     [1, 1, 1, 1, 2, 2, 2, 2, 2, 2],
//     [1, 1, 1, 1, 2, 2, 2, 2, 4],
//     [1, 1, 1, 1, 2, 2, 4, 4],
//     [1, 1, 1, 1, 2, 2, 8],
//     [1, 1, 1, 1, 4, 4, 4],
//     [1, 1, 1, 1, 4, 8],
//     [1, 1, 2, 2, 2, 2, 2, 2, 2],
//     [1, 1, 2, 2, 2, 2, 2, 4],
//     [1, 1, 2, 2, 2, 4, 4],
//     [1, 1, 2, 2, 2, 8],
//     [1, 1, 2, 4, 4, 4],
//     [1, 1, 2, 4, 8],
//     [2, 2, 2, 2, 2, 2, 2, 2],
//     [2, 2, 2, 2, 2, 2, 4],
//     [2, 2, 2, 2, 4, 4],
//     [2, 2, 2, 2, 8],
//     [2, 2, 4, 4, 4],
//     [2, 2, 4, 8],
//     [4, 4, 4, 4],
//     [4, 4, 8],
//     [8, 8]
// ]));
const BREAK = '**********************************************************************************************************'
const BREAK2 = '**********************************************************************************************************'
const BREAK3 = '**********************************************************************************************************'
const BREAK4 = '**********************************************************************************************************'
const BREAK5 = '**********************************************************************************************************'
/*
 
2nd go

/*

https://launchschool.com/lessons/aac32d42/assignments/7202631d

You are given an array of unique positive integers and a positive
integer target. The goal is to find all unique combinations of 
integers from the numbers that sum up to the target value.
Each number from the numbers array can be used as many times as needed.
The order of numbers in a combination doesn't matter.
Two combinations are considered different if they use at least
one number a different number of times.
All valid combinations should be returned in any order.

HINT:

For the dead-end condition, think about how you can ensure that you are never visiting previous numbers, but include the current number and all numbers after it.

P:

E:

Example 1:
Given numbers = [3, 5, 7] and target = 15, the valid
combinations are:
[[3, 3, 3, 3, 3], [3, 5, 7], [5, 5, 5]]

- 3 * 5 = 15
- 3 + 5 + 7 (the input array unchanged) = 15
- 5 * 3 = 15

Example 2:
For numbers = [1, 3, 5, 7] and target = 8, we get:
[[1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 3], [1, 1, 1, 5], [1, 1, 3, 3], [1, 7], [3, 5]]

- As in example 1, the array seems to be iterated through, the first number of the outputs following the sequence of the input array.

- 1 * 8 (if there is a 1 it will always = target number * itself.)

console.log(testSumCombinations([2, 3, 6, 7], 7, [[2, 2, 3], [7]]));
console.log(testSumCombinations([2, 3, 5], 8, [[2, 2, 2, 2], [2, 3, 3], [3, 5]]));
console.log(testSumCombinations([2], 1, []));
console.log(testSumCombinations([1, 2, 3], 4, [[1, 1, 1, 1], [1, 1, 2], [1, 3], [2, 2]]));
console.log(testSumCombinations([2, 3, 5], 10, [[2, 2, 2, 2, 2], [2, 2, 3, 3], [2, 3, 5], [5, 5]]));

console.log(testSumCombinations([1, 2, 3], 5, [
    [1, 1, 1, 1, 1],
    [1, 1, 1, 2],
    [1, 1, 3],
    [1, 2, 2],
    [2, 3],
]));

console.log(testSumCombinations([1, 2, 4, 8], 16, [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 4],
    [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2],
    [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 4],
    [1, 1, 1, 1, 1, 1, 1, 1, 4, 4],
    [1, 1, 1, 1, 1, 1, 1, 1, 8],
    [1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2],
    [1, 1, 1, 1, 1,1, 2, 2, 2, 4],
    [1, 1, 1, 1, 1, 1, 2, 4, 4],
    [1, 1, 1, 1, 1, 1, 2, 8],
    [1, 1, 1, 1, 2, 2, 2, 2, 2, 2],
    [1, 1, 1, 1, 2, 2, 2, 2, 4],
    [1, 1, 1, 1, 2, 2, 4, 4],
    [1, 1, 1, 1, 2, 2, 8],
    [1, 1, 1, 1, 4, 4, 4],
    [1, 1, 1, 1, 4, 8],
    [1, 1, 2, 2, 2, 2, 2, 2, 2],
    [1, 1, 2, 2, 2, 2, 2, 4],
    [1, 1, 2, 2, 2, 4, 4],
    [1, 1, 2, 2, 2, 8],
    [1, 1, 2, 4, 4, 4],
    [1, 1, 2, 4, 8],
    [2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 4],
    [2, 2, 2, 2, 4, 4],
    [2, 2, 2, 2, 8],
    [2, 2, 4, 4, 4],
    [2, 2, 4, 8],
    [4, 4, 4, 4],
    [4, 4, 8],
    [8, 8]
]));

D:
A:
C:
*/

function sumCombinations(candidates, target) {

  const cache = new Map();
  const comp = (a, b) => a - b;

  function backtrack(candidates, candidate, result) {
    const sum = candidate.reduce((acc, val) => acc + val);
    if (sum === target && !cache.has(String(candidate.toSorted(comp)))) {
      result.push([...candidate]);
      cache.set(String(candidate.toSorted(comp)));
      return;
    }

    for (let elem of candidates) {
      if ((sum + elem) > target) { 
        continue
       } else {
        candidate.push(elem);  // take
        backtrack(candidates, candidate, result);  // explore
        candidate.pop();  // clean up
       }
    }
  }

  const result = [];
  for (i = 0; i < candidates.length; i++) {
    backtrack(candidates, [candidates[i]], result);
  }
  return result;
}

function combToString(comb) {
    return comb.slice().sort((a, b) => a - b).join(',');
}

function testSumCombinations(numbers, target, expected) {
    const result = sumCombinations(numbers, target);
    if (result.length !== expected.length) return false;

    for (const combination of result) {
        if (combination.reduce((sum, num) => sum + num, 0) !== target) {
            return false;
        }
    }

    const resultSet = new Set(result.map(combToString));
    const expectedSet = new Set(expected.map(combToString));

    if (resultSet.size !== result.length) return false;
    if (resultSet.size !== expectedSet.size) return false;

    for (const comb of resultSet) {
        if (!expectedSet.has(comb)) return false;
    }
  
    return true;
}

console.log(testSumCombinations([2, 3, 6, 7], 7, [[2, 2, 3], [7]]));
console.log(testSumCombinations([2, 3, 5], 8, [[2, 2, 2, 2], [2, 3, 3], [3, 5]]));
console.log(testSumCombinations([2], 1, []));
console.log(testSumCombinations([1, 2, 3], 4, [[1, 1, 1, 1], [1, 1, 2], [1, 3], [2, 2]]));
console.log(testSumCombinations([2, 3, 5], 10, [[2, 2, 2, 2, 2], [2, 2, 3, 3], [2, 3, 5], [5, 5]]));

console.log(testSumCombinations([1, 2, 3], 5, [
    [1, 1, 1, 1, 1],
    [1, 1, 1, 2],
    [1, 1, 3],
    [1, 2, 2],
    [2, 3],
]));

console.log(testSumCombinations([1, 2, 4, 8], 16, [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 4],
    [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2],
    [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 4],
    [1, 1, 1, 1, 1, 1, 1, 1, 4, 4],
    [1, 1, 1, 1, 1, 1, 1, 1, 8],
    [1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2],
    [1, 1, 1, 1, 1,1, 2, 2, 2, 4],
    [1, 1, 1, 1, 1, 1, 2, 4, 4],
    [1, 1, 1, 1, 1, 1, 2, 8],
    [1, 1, 1, 1, 2, 2, 2, 2, 2, 2],
    [1, 1, 1, 1, 2, 2, 2, 2, 4],
    [1, 1, 1, 1, 2, 2, 4, 4],
    [1, 1, 1, 1, 2, 2, 8],
    [1, 1, 1, 1, 4, 4, 4],
    [1, 1, 1, 1, 4, 8],
    [1, 1, 2, 2, 2, 2, 2, 2, 2],
    [1, 1, 2, 2, 2, 2, 2, 4],
    [1, 1, 2, 2, 2, 4, 4],
    [1, 1, 2, 2, 2, 8],
    [1, 1, 2, 4, 4, 4],
    [1, 1, 2, 4, 8],
    [2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 4],
    [2, 2, 2, 2, 4, 4],
    [2, 2, 2, 2, 8],
    [2, 2, 4, 4, 4],
    [2, 2, 4, 8],
    [4, 4, 4, 4],
    [4, 4, 8],
    [8, 8]
]));

