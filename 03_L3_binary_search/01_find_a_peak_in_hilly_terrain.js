/*

https://launchschool.com/lessons/c10716a1/assignments/790cac0e


Write a function `findPeakInTerrain` that finds any peak in a
given hilly terrain. A peak is an element that is strictly
greater than its neighbors. The first and last elements can
be peaks if they are strictly greater than their single neighbor.
Adjacent elements in the terrain cannot be equal.

The function should take an array of integers as input,
representing the elevations of spots in the terrain.
It should return the index of any peak in the terrain.
There is guaranteed to be at least one peak in the input array.

Example:
Input: terrain = [1, 3, 2, 1, 4, 5]
Output: 1 or 5
Explanation: Both index 1 (elevation 3) and index 5
             (elevation 5) are peaks.

P:

Write a function  that takes an array of integers ("terrain") and returns a single integer representing the index of a peak from terrain which is a peak.

There may be multiple peaks, in which case any peak is a valid output.

There will never be less than 1 peak.

None of the numbers will be equal to its neighbours.

An integer is a peak if:
1. The integers to its immediate left and right are less
2. OR it is the first/last element in terrain and its single neighbour is less.

Thoughts:

Once an uphill gradient has been detected it must lead to a peak because either one encounters a lower hill, or it climbs right to the end of the array, at which point the final height is the peak.

so if the mid point is uphill to the right, and downhill to the left...
then we look at the 1/4 point
If that is lower than mid then we need to look in between 1/4 and 1/2
   if it is higher than mid then we can keep looing leftwards, even though we may have skipped a peak

PEAKS ARE ALWAYS UPWARDS.

E:

test(findPeakInTerrain([1, 2, 1]), 1);

- peak at index 1 is higher than its neighbours. (HP)

test(findPeakInTerrain([1, 3, 4, 1]), 2);

- index 2 only

test(findPeakInTerrain([3, 2, 1]), 0);

- Index 0 only

test(findPeakInTerrain([1, 2, 3]), 2);

- index 2 only

test2([1, 4], findPeakInTerrain([1, 3, 2, 1, 5, 4]));

- index 1 and 4

test(findPeakInTerrain([1, 2, 3, 4, 5, 7, 3]), 5);

- index 5

test(findPeakInTerrain([1, 2, 3, 4, 3, 2, 1]), 3);

- index 3

test2([0, 8], findPeakInTerrain([5, 4, 3, 2, 1, 2, 3, 4, 5]));

- last and first

test(findPeakInTerrain([1, 2, 3, 4, 5, 4, 3, 2, 1]), 4);

- 4le

test(findPeakInTerrain([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 0);

- only first

test(findPeakInTerrain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 9);

- only last

D:

- binary search

A:

test2([0, 8], findPeakInTerrain([5, 4, 3, 2, 1, 2, 3, 4, 5]));

isAPeak helper function

- set left as 0
- set right as length - 1
- while right is greater than left:
  - set mid as right + left / 2 (floored)
  - if mid is a peak return mid.
  - if mid -1 is higher
    -right = mid - 1
  - otherwise
    - left = mid + 1

error message at the end, because there is always one peak.

C:

*/

function isAPeak(left, mid, right) {
  if (!left && mid > right) {
    return true;
  } else if (!right && mid > left) {
    return true;
  } else if ((mid > left) && (mid > right)) {
    return true;
  }
  return false;
}

// console.log(isAPeak(1, 2, 1) === true);
// console.log(isAPeak(5, 2, 1) === false);
// console.log(isAPeak(1, 2, 10) === false);
// console.log(isAPeak(2, 2, 2) === false);
// console.log(isAPeak(undefined, 2, 2) === false);
// console.log(isAPeak(2, 2, undefined) === false);
// console.log(isAPeak(1, 2, undefined) === true);
// console.log(isAPeak(undefined, 2, undefined) === false);
// console.log(isAPeak(undefined, 2, 1) === true);


function findPeakInTerrain(terrain) {
  let left = 0
  let right = terrain.length - 1;
  let mid;

  while (right >= left) {
    mid = Math.floor(right + left / 2);
    if (isAPeak(terrain[mid-1], terrain[mid], terrain[mid+1])) {
      return mid;
    } else if (terrain[mid -1] > terrain[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return mid;
}

test(findPeakInTerrain([1, 2, 1]), 1);
test(findPeakInTerrain([1, 3, 4, 1]), 2);
test(findPeakInTerrain([3, 2, 1]), 0);
test(findPeakInTerrain([1, 2, 3]), 2);
test2([1, 4], findPeakInTerrain([1, 3, 2, 1, 5, 4]));
test(findPeakInTerrain([1, 2, 3, 4, 5, 7, 3]), 5);
test(findPeakInTerrain([1, 2, 3, 4, 3, 2, 1]), 3);
test2([0, 8], findPeakInTerrain([5, 4, 3, 2, 1, 2, 3, 4, 5]));
test(findPeakInTerrain([1, 2, 3, 4, 5, 4, 3, 2, 1]), 4);
test(findPeakInTerrain([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 0);
test(findPeakInTerrain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 9);

function test2(poss, act) {
  if (poss.includes(act)) {
    console.log('(-:');
  } else {
    console.log(`poss was ${poss}, but output was ${act}`);
  }
}

function test(act, exp) {
  if (act === exp) {
    console.log('(-:');
  } else {
    console.log(`expected ${exp}, instead got ${act}`);
  }
}