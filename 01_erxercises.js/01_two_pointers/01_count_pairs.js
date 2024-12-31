/*

In this problem, you are provided with an ascending order array of integers, nums. Your task is to count the number of pairs in this array whose sum is greater than a given target value, target.

Constraints:

The array nums is sorted in ascending order.
No duplicate pairs should be counted. For instance, if nums contains [1, 2] and target is 2, then (1, 2) is a valid pair since 1 + 2 > 2. You shouldn't include (2, 1).

P:

Write a function that takes an array of sorted integers and a target number and uses a 2-pointer system to return the quantity of pairs that sum to greater than the target number.

NO DUPS:

1, 2 yes, but not 2, 1 

but you may reuse individual numbers:

(2, 5),
(3, 4), 
(3, 5), 
(4, 5) => reuses 3 and 4 and 5

E:

#1:

[1, 2, 3, 4, 5], 6) == 4);

(2, 5), = 7
(3, 4),  = 7
(3, 5), = 8
(4, 5) = 9

#2:

[1, 2, 3, 4, 5], 8) == 1;
(4, 5)

#3

[1, 3, 5, 7], 6) == 4;
(1, 7), => 8
(3, 5), => 8
(3, 7),  => 10
(5, 7) => 12

# 4

[1, 2, 3, 4], 5) == 2;

(2, 4), => 6
(3, 4) => 7

# 5

[1, 2, 3, 4, 5], 10) == 0);
// No pairs

D:

start both pointers from the right side, because that's the largest and we want larger sums
once the left pointer and the right points (which will start at the extreme right) equal less than targer we can stop

A:
console.log(countPairs([1, 2, 3, 4, 5], 6) == 4);
// Pairs: (2, 5), (3, 4), (3, 5), (4, 5)

- initialize right pointer as array.length - 1
- initialize left pointer as array.length - 2
- initialize a counter as 0

while (array[left] + array[right] > target)
  - increment counter
  - right decrease
  - if left === right then:
    - left decrease
    - right reassign to array.length - 1

  - return count

C:
*/


function countPairs(array, target) {
  let right = array.length - 1;
  let left = array.length - 2;
  let counter = 0;

  while (array[left] + array[right] > target) {
    counter++;
    right--;
    if (left === right) {
      left--;
      right = array.length - 1;
    }
  }

  return counter
}

console.log(countPairs([1, 2, 3, 4, 5], 6) == 4);
// Pairs: (2, 5), (3, 4), (3, 5), (4, 5)

console.log(countPairs([1, 2, 3, 4, 5], 8) == 1);
// Pair: (4, 5)

console.log(countPairs([1, 3, 5, 7], 6) == 4);
// Pairs: (1, 7), (3, 5), (3, 7), (5, 7)

console.log(countPairs([1, 2, 3, 4], 5) == 2);
// Pairs: (2, 4), (3, 4)

console.log(countPairs([1, 2, 3, 4, 5], 10) == 0);
// No pairs