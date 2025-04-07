/*

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

Time, start: 14:39 (29.1.25) - 15:37 just trying to poke holes in the logic. (waste of time) 
Time, end:

P:

Write a function that takes an array of positive integers.



Conceptual problem:

We have a flat field (with water-tight walls of limitless height) - fine
We have barriers of different heights crossing the field horizontally - fine
After a period of rain, water is trapped between the barriers
My task is to calculate the maximum rainwater that can be captured between two barriers so that the following examples are true:

Example 1:
Input: [1, 2, 1]
Output: 2

Explanation: The distance between the first and
third barrier is 2, and the height is 1, so
the maximum amount of rainfall is 2 * 1 = 2

  |    =>    |
|_|_|      |*|*|

- fine

Example 2:
Input: [2, 3, 4, 2]
Output: 6
Explanation: The distance between the first and
fourth barrier is 3, and the height is 2, so the
maximum amount of rainfall is 3 * 2 = 6

    |            |
  | |    =>    | |
| | | |      |*|*|*|
|_|_|_|      |*|*|*|


Example 3:

[2, 3, 4, 2]) === 6

1st unit of rain falls:

    |            |
  | |    =>    | |
| | | |      | | | |
|_|_|_|      |*|*|*|

2nd unit of rain falls:

    |            |
  | |    =>    | |
| | | |      |*|*|*|
|*|*|*|      |*|*|*|

Example 4:

[2, 9, 5, 10, 5, 6]) === 24
 
      |
  |   |
  |   |
  |   |
  |* *|* *|
  |*|*|*|*|
  |*|*|*|*|   
  |*|*|*|*| 
| |*|*|*|*|   
| |*|*|*|*|   

E:
D:
A:
C:

*/

function maxRainwater(heights) {

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

/*

My complaint:

The logic of when water is blocked by a barrier and when it isn't is inconsistent:

In this example the water can flow freely around the 4th barrier, but not the 1st

```javascript
[2, 9, 5, 10, 5, 6]) === 24
 
      |
  |   |
  |   |
  |   |
  |* *|* *|
  |*|*|*|*|
  |*|*|*|*|   
  |*|*|*|*| 
| |*|*|*|*|   
| |*|*|*|*|   
```


If the water can't escape between boundaries then the 2nd example should return:

```javascript
    |            |
  | |    =>    |*|
| | | |      |*|*|*|
|_|_|_|      |*|*|*|
```

I may be being overly pedantic. I was able to solve the problem with the examples and instructions given.

Example 5(?):

[5, 4, 3, 2, 9, 10, 3, 4, 5]) === 40
         
          |
        | |
        | |
        | |
        | |
|* * * *|*|* * *|
|*|* * *|*|* *|*|
|*|*|* *|*|*|*|*|
|*|*|*|*|*|*|*|*|
|*|*|*|*|*|*|*|*|

*/