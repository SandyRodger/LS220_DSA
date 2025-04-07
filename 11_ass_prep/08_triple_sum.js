/*

Problem: 3Sum 

Given an array nums of n integers, find all unique triplets (nums[i], nums[j], nums[k]) such that:

nums[i] + nums[j] + nums[k] == 0
i != j != k
Return a list of all unique triplets. The solution must not contain duplicate triplets.

Constraints:

3 ≤ nums.length ≤ 3000
-10^5 ≤ nums[i] ≤ 10^5


start: 11:58
       12:18 - I realise that I had not fully read the question. (when will I learn)
End: 13:30 (fail)

P:

Write a function that takes an array of integers (positive and negative) and returns all permutations which conform to these rules:

- length === 3
- sum === 0
- integers cannot be duplicated within a triplet.
- integers can be re-used in other triplets.
- elements needn't be contiguous.

Other constraints:

- input will be min length 3, max length 3000
- integers will be min -1000,000, max 100,000

E:

console.log(threeSum([-1,0,1,2,-1,-4]));
sorted input = [-4, -1, -1, 0, 1, 2];
// Output: [[-1,-1,2], [-1,0,1]]

  - why did the output not find -1,0,1 first? Because the input must be sorted
  - start end ?
  - back-tracking?

console.log(threeSum([0,1,1]));
// Output: []

- if there are no valid triplets, an empty array is the default output

console.log(threeSum([0,0,0]));
// Output: [[0,0,0]]

- output can just be 3 0s.

console.log(threeSum([0,1,1]).length === 0);

- no valid triplets

console.log(threeSum([-2,0,1,1,2]).sort().toString() === [[-2,0,2],[-2,1,1]].sort().toString());

- 



D:

Backtracking template :

function someProblem(candidates) {
  function backtrack(candidates, candidate, result) {
    if ( <<success condition>> ) { currentTriplet === 3 and isn't already in the cache
      result.push([...candidate]);
      return;
    }

    for (let elem of candidates) {
      if (true) {  // replace true with the dead-end condition => exceeds 0
        continue;
      }

      candidate.push(elem);  // take
      backtrack(candidates, candidate, result);  // explore
      candidate.pop();  // clean up
    }
  }

  const result = [];
  const candidate = [];
  backtrack(candidates, candidate, result);
  return result;
}

A:
C:

*/



// Test Cases

function threeSum(candidates) {
  candidates.sort((a, b) => a - b)
  let cache = new Set;

  function backtrack(candidates, candidate, result, i) {
    // console.log(candidate);
    const sum = (a, b, c) => a + b + c;
    let total = sum(...candidate)
    // console.log(total)
    if ( total === 0) {
      let sortedCandidate = candidate.toSorted((a, b) => a - b);
      console.log(sortedCandidate);
      if (!cache.has(String(sortedCandidate))) {
        // console.log(cache)
        cache.add(String(sortedCandidate));
        result.push(sortedCandidate);
      }

      // console.log(cache);

      return;
    }

    for (let idx = i+1; idx < candidates.length; idx++) {

      let elem = candidates[idx];

      if (candidate.length >= 3) {
        continue;
      }

      candidate.push(elem);  // take
      // console.log('!!!')
      backtrack(candidates, candidate, result, (i+1));  // explore
      candidate.pop();  // clean up
    }
  }

  const result = [];
  const candidate = [];
  backtrack(candidates, candidate, result, 0);
  return result;
}


console.log(threeSum([-1,0,1,2,-1,-4]));

console.log(threeSum([-1,0,1,2,-1,-4]).sort().toString() === [[-1,-1,2], [-1,0,1]].sort().toString());
console.log(threeSum([0,1,1]).length === 0);
console.log(threeSum([0,0,0]).toString() === [[0,0,0]].toString());
console.log(threeSum([-2,0,1,1,2]).sort().toString() === [[-2,0,2],[-2,1,1]].sort().toString());





// Hints:
// Sort the array first (this helps eliminate duplicates easily).
// Fix one number (nums[i]), then use two pointers (left and right) to find the other two numbers.
// Skip duplicate values to avoid duplicate triplets.
// Use the sum condition (sum < 0 move left pointer, sum > 0 move right pointer).
// This problem is a great way to practice two-pointer searching while managing duplicate constraints efficiently.
