/*

https://launchschool.com/lessons/c10716a1/assignments/90c2f26e

Write a function named findTruckCapacity that determines
the optimal capacity for a delivery truck to transport
a series of orders within a given number of trips.

The function takes two parameters:

1. An array of positive integers orderVolumes, where each
element represents the volume of an order in cubic meters.
2. A positive integer maxTrips, representing the maximum
number of trips the truck can make.

The truck must deliver orders in the sequence they appear
in the orderVolumes array. On each trip, the truck is
loaded with as many consecutive orders as possible without
exceeding its capacity. The function should return the
minimum truck capacity in cubic meters.

Example:
Input: orderVolumes = [6, 3, 8, 2, 5, 4, 5], maxTrips = 3
Output: 14
Explanation: A truck with 14 cubic meters capacity can
             deliver all orders in 3 trips:
Trip 1: 6 + 3 = 9 cubic meters
Trip 2: 8 + 2 = 10 cubic meters
Trip 3: 5 + 4 + 5 = 14 cubic meters

start: 11:27
end: 13:03 - quagmire

P:

Write a function that takes 2 arguments: an array of positive integers (nums) and a positive integer (max). Your function must determine the lowest number possible ("output") which can sum to a subSection of nums, such that nums can be summed to less than or equal to "output".

- Your solution must use binary search.

E:

Example 1 :

Input: orderVolumes = [6, 3, 8, 2, 5, 4, 5], maxTrips = 3

Output: 14
Explanation: A truck with 14 cubic meters capacity can
             deliver all orders in 3 trips:
Trip 1: 6 + 3 = 9 cubic meters
Trip 2: 8 + 2 = 10 cubic meters
Trip 3: 5 + 4 + 5 = 14 cubic meters

Example 2:

[6, 3, 8, 2, 5, 4, 7], 3) === 15

  - biggest truck would be sum of the whole array (35)
  - smallest truck would be the highest num in the array (8)

[3, 2, 5, 8, 4], 3) === 10
[1, 2, 3, 4, 5], 1) === 15
[10, 20, 30, 40, 50], 5) === 50
[5, 5, 5, 5, 5], 2) === 15
[7, 3, 9, 4, 2, 8, 6], 2) === 20
[100], 1) === 100
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 3) === 4
[10, 20, 30, 40, 50], 2) === 90
[50, 40, 30, 20, 10], 3) === 60
[5, 10, 15, 20, 25], 1) === 75
[3, 2, 4, 1, 5], 10) === 5
[1000, 1000, 1000, 1000], 3) === 2000

D:

- create a range of capacities and binary search that.
- helper function: totalTrips => BOOLEAN

A:

totalTrips: orderVolumes, truckSize, maxTrips

VARS:

ALGO:

Helper function: validTruckSize(orders, truckSize, maxTripsc) => boolean

- 

Main function:

[10, 20, 30, 40, 50], 5), 50);

- initialize left as 0
- initialize right as sum of input
- Binary seach:
  - pass mid into validTruckSize
    - if true => right = mid - 1 (go left)
    - if false => left = mid + 1 (go right)

C:
*/

function findTruckCapacity(orderVolumes, maxTrips) {
  let right = orderVolumes.reduce((acc, val) => acc + val);
  let left = 0;
  let smallestTruck;
  function validTruckSize(orderVolumes, truckSize, trips) {
    let index = 0;
    let currentVolume = 0;

    while (trips && index < orderVolumes.length) {

    }
    
  }

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    // console.log(`trips: ${trips} | truck-size: ${mid}`);
    // [10, 20, 30, 40, 50], 5), 50);
    if () {

    } else if () {

    }
  }

  return smallestTruck;
}

test(findTruckCapacity([6, 3, 8, 2, 5, 4, 7], 3), 15);
test(findTruckCapacity([3, 2, 5, 8, 4], 3), 10);
test(findTruckCapacity([1, 2, 3, 4, 5], 1), 15);
test(findTruckCapacity([10, 20, 30, 40, 50], 5), 50);
test(findTruckCapacity([5, 5, 5, 5, 5], 2), 15);
test(findTruckCapacity([7, 3, 9, 4, 2, 8, 6], 2), 20);
test(findTruckCapacity([100], 1), 100);
test(findTruckCapacity([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 3), 4);
test(findTruckCapacity([10, 20, 30, 40, 50], 2), 90);
test(findTruckCapacity([50, 40, 30, 20, 10], 3), 60);
test(findTruckCapacity([5, 10, 15, 20, 25], 1), 75);
test(findTruckCapacity([3, 2, 4, 1, 5], 10), 5);
test(findTruckCapacity([1000, 1000, 1000, 1000], 3), 2000);

function test(act, exp) {
  if (exp === act) {
    console.log('(-:');
  } else {
    console.log(`expected: ${exp} | actual output: ${act}`)
  }
}