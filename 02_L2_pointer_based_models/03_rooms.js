/*
https://launchschool.com/lessons/dd8751d3/assignments/38cc0de1

Write a function `rooms` that determines the minimum number of
rooms required to handle a series of interviews given their
time intervals.

Each interval is represented as an array [start, end],
where `start` is the start time and `end` is the end
time of the interview.

The function should return the number of conference rooms
required to ensure no two interviews overlap in the same room.

Example I:
Input: intervals = [[20, 25], [10, 15], [0, 25]]
Output: 2
Explanation: The first interview is scheduled from
             time 0 to 25. The second interview is
             from time 10 to 15 and overlaps with
             the first interview, requiring a second
             room. The third interview from 20 to 25
             also overlaps with the first. Thus, a
             minimum of two rooms are required.

Example II:
Input: intervals = [[5, 9], [1, 3]]
Output: 1
Explanation: The first interview is scheduled from
             time 5 to 9. The second interview is
             from time 1 to 3. These two interviews
             do not overlap, therefore only one
             conference room is needed.

P: 

Write a function that takes an array or interview times and returns an integer representing how many rooms will be required.

- Interview times:
  - each is a subarray containing 2 numbers, start and end.
-Rooms required:
  - AKA how many interviews overlap
- times:
  - Interviews can end and the next one begin in the same minute.
  - times starts at minute 0.
E:

[[20, 25], [10, 15], [0, 25]]) === 2);

- The subarrays are not ordered chronologically (will i need to search for the next beginning interview?)
- Order:

  - 0 to 25
  - 10 to 15 then 20 to 25

[[5, 9], [1, 3]]) === 1);

- 1 to 3, 5 to 9.

[[1, 2], [3, 4], [5, 6]]) === 1);

- 1 to 2, 3 to 4, 5 to 6

[[1, 4], [2, 5], [3, 6]]) === 3);

- 1 to 4
- 2 to 5
- 3 to 6

[[1, 3], [3, 6], [6, 8]]) === 1);

- 1 to 3, 3 to 6, 6 to 8

[[1, 10]]) === 1);

- input of 1 subarray will always output 1

[[1, 3], [2, 4], [4, 6]]) === 2);

- 1 to 3, could be either 4 to 6
- 3 to 4

[[1, 5], [2, 3], [4, 6], [5, 7]]) === 2);

- 1 to 5, 5 to 7
- 2 to 3, 4 to 6

[[0, 5], [1, 3], [2, 6], [4, 7], [5, 9], [8, 10]]) === 3);

- 0 to 5, 5 to 9
- 1 to 3, 4 to 7
- 2 to 6, 8 to 10

[[1, 2], [2, 3], [3, 4], [4, 5]]) === 1);

- 1 to 2, 2 to 3, 3 to 4, 4 to 5

[[1, 20], [5, 10], [11, 15], [16, 18]]) === 2);

- 1 to 20
- 5 to 10, 11 to 15, 16 to 18

[[1, 4], [1, 3], [1, 2], [1, 5]]) === 4);

1 to 4
1 to 3
1 to 2
1 to 5

D:

rooms([[20, 25], [10, 15], [0, 25]]) === 2)

Similar to the shopping till problem, but where to pointers come in?
pointers to find the next lowest start time.

A:

- create two sorted arrays for start times and end times
    - [ 0, 10, 20 ]
    - [ 15, 25, 25 ]
- initialize two pointers, start and end = 0
- initialize result as 0;

- look at the second start time (st)
- look at the first end time (en)

- If the last meeting has ended increment st

- return diff of start and end.

C:
*/

function rooms(times) {
  let startTimes = times.map((subarray) => subarray[0]).sort((a, b) => a - b);
  let endTimes = times.map((subarray) => subarray[1]).sort((a, b) => a - b);
  let st = 1;
  let en = 0;
  let roomCount = 1;


  while(st < (endTimes.length - en)) {
      if (startTimes[st] >= endTimes[en]) {
          en += 1 
        } else {
          roomCount += 1;
        };
      st += 1
    } 

  return roomCount;
}

test(rooms([[20, 25], [10, 15], [0, 25]]), 2);
test(rooms([[5, 9], [1, 3]]), 1);
test(rooms([[1, 2], [3, 4], [5, 6]]), 1);
test(rooms([[1, 4], [2, 5], [3, 6]]), 3);
test(rooms([[1, 3], [3, 6], [6, 8]]), 1);
test(rooms([[1, 10]]), 1);
test(rooms([[1, 3], [2, 4], [4, 6]]), 2);
test(rooms([[1, 5], [2, 3], [4, 6], [5, 7]]), 2);
test(rooms([[0, 5], [1, 3], [2, 6], [4, 7], [5, 9], [8, 10]]), 3);
test(rooms([[1, 2], [2, 3], [3, 4], [4, 5]]), 1);
test(rooms([[1, 20], [5, 10], [11, 15], [16, 18]]), 2);
test(rooms([[1, 4], [1, 3], [1, 2], [1, 5]]), 4);

function test(act, exp) {
  if (act === exp) {
    console.log('(-:');
  } else {
    console.log(`expected ${exp}, instead got ${act}`);
  }
}
