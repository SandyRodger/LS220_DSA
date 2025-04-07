/*

https://launchschool.com/lessons/157d45f6/assignments/6558873d

You are given an array of intervals, where each interval is represented
by an array [start, end] indicating the start and end points. Your task
is to merge all overlapping intervals and return an array of
non-overlapping intervals that cover all the original intervals.

P:

Write a function that takes a 2D array, each subArray containing 2 integers representing the start and end of a thing. The function must determine where the thing meets or overlaps and merge those subArrays into one subArray. If lengths of thing do not meet, then return them unchanged in the output.

merge if:
  - left end is => right start

you're done if
  - you can go though the array wihtout triggering any changes.

E

Example 1:

Input: intervals = [[2,5], [4,8], [10,12], [13,16]]
Output: [[2,8], [10,12], [13,16]]
Explanation: Intervals [2,5] and [4,8] overlap, so they are merged into [2,8].

Example 2:

Input: intervals = [[3,6], [3,4], [5,8], [7,9]]
Output: [[3,9]]
Explanation: All intervals overlap and are merged into a single interval.

Example 3:

console.log(mergeIntervals([[7,8], [1,3], [6,11], [2,4]]));
// Expected: [[1,4], [6,11]]

  - Despite being out of order, the [7,8] interval is swallowed up by the [6,11]

Example 4:

console.log(mergeIntervals([[2,5], [4,8], [10,12], [13,16]]));
// Expected: [[2,8], [10,12], [13,16]]

[2, 5] + [4, 8] => [2, 8]

Example 5:

console.log(mergeIntervals([[3,6], [3,4], [5,8], [7,9]]));
// Expected: [[3,9]]

[3, 6] + [3, 4] => [3, 6]
[3, 6] + [5, 8] => [3, 8]
[3, 8] + [7, 9] => [3, 9]

- If the input has been merged to 1 interval, return that

Example 6:

console.log(mergeIntervals([[1,3], [5,7], [9,11]]));
// Expected: [[1,3], [5,7], [9,11]]

input is unchanged

Example 7:

console.log(mergeIntervals([[1,4], [0,4]]));
// Expected: [[0,4]]

- you can start from 0

Example 8:

console.log(mergeIntervals([[1,4], [2,3]]));
// Expected: [[1,4]]

- 1st eaten by 2nd

Example 9:

console.log(mergeIntervals([]));
// Expected: []

empty input returns empty output

console.log(mergeIntervals([[1,4], [4,5]]));
// Expected: [[1,5]]


D:

[[7,8], [1,3], [6,11], [2,4]] => [[1,4], [6,11]]

- iterate through input repeatedly until some condition is met (or not met?)
OR 
- each time you change something start again
- sort input?
- compare cur and next simultaneously

Three types of overlap:
  - one is swallowed by the other
  - front fender-benedr
  - rear fender-bender`

A:

- sort input by starting values

- iterate through intervals with the index
  - Check for type1 overlap 
  - if curr end is greater than or equal to next start
    - use slice to cut it out and insert an array with curr start and next end
    - continue
  - if next is out of bounds return intervals

C:

*/

function noOverlap(intervals) {
  for (i = 0; (i+1) < intervals.length; i++) {
    if (intervals[i][1] >= intervals[i+1][0]) {
      return false
    }
  }
  return true;
}

function mergeIntervals(intervals) {

  intervals.sort((a, b) => a[0] - b[0]);
  
  while (!noOverlap(intervals)) {
    for (i = 0; i+1 < intervals.length; i++) {
      let curr = intervals[i];
      let next = intervals[i+1]
      if (curr[0] <= next[0] && curr[1] >= next[1]) {
        intervals.splice(i, 2, curr);
      } else if (next[0] < curr[0] && curr[1] < next[1]) {
        intervals.splice(i, 2, next);
      } else if (curr[1] >= next[0]) {
        intervals.splice(i, 2, [curr[0], next[1]]);
      }
    }
  }
  return intervals;
}


console.log(mergeIntervals([[7,8], [1,3], [6,11], [2,4]]));
// Expected: [[1,4], [6,11]]

console.log(mergeIntervals([[2,5], [4,8], [10,12], [13,16]]));
// Expected: [[2,8], [10,12], [13,16]]

console.log(mergeIntervals([[3,6], [3,4], [5,8], [7,9]]));
// Expected: [[3,9]]

console.log(mergeIntervals([[1,3], [5,7], [9,11]]));
// Expected: [[1,3], [5,7], [9,11]]

console.log(mergeIntervals([[1,4], [0,4]]));
// Expected: [[0,4]]

console.log(mergeIntervals([[1,4], [2,3]]));
// Expected: [[1,4]]

console.log(mergeIntervals([]));
// Expected: []

console.log(mergeIntervals([[1,4], [4,5]]));
// Expected: [[1,5]]