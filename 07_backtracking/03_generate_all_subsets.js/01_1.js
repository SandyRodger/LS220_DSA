/*

https://launchschool.com/lessons/aac32d42/assignments/119434f4

"the tirckiest one so far" 

You are given an array of distinct integers. Your task is to generate all
possible subsets of this array.
A subset is a collection of elements from the array, where the order
doesn't matter, and each element can either be included or not. The empty
set is considered a subset of every array. Return all subsets of the
given array. The order of subsets in the output doesn't matter.

Example 1:
Input: [5]
Output: [[],[5]]
Explanation:
For a single-element array, there are only two subsets: the empty set and the set containing the element.

Example 2:
Input: nums = [1,2,3]
Output: [[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]
Explanation: This represents all possible subsets, from the empty set to the full set.

P:

Write a function that takes an array of integers and returns a 2D array containing 
all possible subsets.

A subset:
  - can be an empty array
  - can have a different length
  - 

  E:

Example 1:
Input: [5]
Output: [[],[5]]
Explanation:
For a single-element array, there are only two subsets: the empty set and the set containing the element.

Example 2:
Input: nums = [1,2,3]
Output: [[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]
Explanation: This represents all possible subsets, from the empty set to the full set.

Example 3:

nums = [1,2] 
output = [[],[1],[2],[1,2]]

Example 4:

nums = [1,2,3,4]
output = [[],[1],[2],[3],[4],[1,2],[1,3],[1,4],[2,3],[2,4],[3,4],[1,2,3],[1,2,4],[1,3,4],[2,3,4],[1,2,3,4]]

Example 5:

nums = [-1,0,1]
output = [[],[-1],[0],[1],[-1,0],[-1,1],[0,1],[-1,0,1]])

Example 6:

nums = [1,2,3,4,5]
output = [
[],[1],[2],[3],[4],[5],
[1,2],[1,3],[1,4],[1,5],[2,3],[2,4],[2,5],[3,4],[3,5],[4,5],
[1,2,3],[1,2,4],[1,2,5],[1,3,4],[1,3,5],[1,4,5],[2,3,4],[2,3,5],[2,4,5],[3,4,5],
[1,2,3,4],[1,2,3,5],[1,2,4,5],[1,3,4,5],[2,3,4,5],
[1,2,3,4,5]
]));

D:

for lengths 0 to input.length (targetLength)
from each starting point, find all unique subsets of this length

nums = [1,2,3,4,5]
targetLength = 0

Question: What is the code that returns an empty array when I search the input?

from idx 0, how many empy arrays are there?

A:
C:
*/

function generateSubsets(nums) {
 function backtrack(candidates, candidate, result) {
   
   result.push([...candidate]);

    for (let idx = 0; idx < candidates.length; idx++) {
      const elem = candidates[idx];
      candidate.push(elem);  // take
      backtrack(candidates.slice(idx + 1), candidate, result);  // explore
      candidate.pop();  // clean up
    }
  }

  const result = [];
  const candidate = [];
  backtrack(nums, candidate, result);
  return result;
}

console.log(generateSubsets([1,2,3,4,5]))

function testGenerateSubsets(nums, expected) {
    const result = generateSubsets(nums);
    if (result.length !== expected.length) return false;

    const stringifySubset = subset => subset.sort((a, b) => a - b).join(',');
    const resultSet = new Set(result.map(stringifySubset));
    const expectedSet = new Set(expected.map(stringifySubset));

    return resultSet.size === expectedSet.size &&
           [...resultSet].every(item => expectedSet.has(item));
}

console.log(testGenerateSubsets([1,2,3], [[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]));
console.log(testGenerateSubsets([5], [[],[5]]));
console.log(testGenerateSubsets([1,2], [[],[1],[2],[1,2]]));
console.log(testGenerateSubsets([1,2,3,4], [[],[1],[2],[3],[4],[1,2],[1,3],[1,4],[2,3],[2,4],[3,4],[1,2,3],[1,2,4],[1,3,4],[2,3,4],[1,2,3,4]]));
console.log(testGenerateSubsets([-1,0,1], [[],[-1],[0],[1],[-1,0],[-1,1],[0,1],[-1,0,1]]));
console.log(testGenerateSubsets([1,2,3,4,5], [
[],[1],[2],[3],[4],[5],
[1,2],[1,3],[1,4],[1,5],[2,3],[2,4],[2,5],[3,4],[3,5],[4,5],
[1,2,3],[1,2,4],[1,2,5],[1,3,4],[1,3,5],[1,4,5],[2,3,4],[2,3,5],[2,4,5],[3,4,5],
[1,2,3,4],[1,2,3,5],[1,2,4,5],[1,3,4,5],[2,3,4,5],
[1,2,3,4,5]
]));