/*

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

P:

- write a function that takes 2 args:
  - "orderVolumes" : the size of a package to be delivered
  - "maxTrips" : the maximum number of trips a truck can make
    - (Is the implication that in some solutions it will take less than this number of trips? - no because we're finding the smallest possible van size)
- The function should use binary search to determine the smallest possible truck size that can deliver all the packages without exceeding maxTrips


Examples:

Input: orderVolumes = [6, 3, 8, 2, 5, 4, 5], maxTrips = 3
Output: 14
Explanation: A truck with 14 cubic meters capacity can
             deliver all orders in 3 trips:
Trip 1: 6 + 3 = 9 cubic meters
Trip 2: 8 + 2 = 10 cubic meters
Trip 3: 5 + 4 + 5 = 14 cubic meters

# 2

[3, 2, 5, 8, 4], 3) === 10
  - 3 + 2 + 5
  - 8
  - 4
[1, 2, 3, 4, 5], 1) === 15

# 3

[10, 20, 30, 40, 50], 5) === 50

- 10 + 20 
- 30 
- 40
- 50

[5, 5, 5, 5, 5], 2) === 15

- all the same
- 5, 5, 5 (15)
- 5, 5

[7, 3, 9, 4, 2, 8, 6], 2) === 20
[100], 1) === 100
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 3) === 4
[10, 20, 30, 40, 50], 2) === 90
[50, 40, 30, 20, 10], 3) === 60
[5, 10, 15, 20, 25], 1) === 75
[3, 2, 4, 1, 5], 10) === 5
[1000, 1000, 1000, 1000], 3) === 2000

D:

helper method -> this truck can do it in this number of trips -> "tripsPerTruck" (orders, size)

A: tripsPerTruck(orders, size)
[7, 3, 9, 4, 2, 8, 6], 2) === 20
Variables:
  - trips = 2
  - truckFilled = 20

For loop
- iterate through orders (i)
  - If the truck is full:
    - do another trip
    - truck is now Empty

  - if it can fit in the truck
    - put it in the truck
  - if it would exceed truckSpace
    - do another trip
    - put this order in the next truck

  return trips

A: 

if the truck size delivers the packages in less than maxTrips:
  - it's too big
  - mid = right - 1
if the truck size delivers the packages in more than maxTrips:
  - it's too small
  - mid. = left + 1
if the truck size delivers the packages in exactly maxTrips:
  - save that size (math.min truck size and mid)
  - go smaller
  - mid = right - 1

*/
function findTruckCapacity(orders, maxTrips) {
  let left = Math.min(...orders);
  let right = orders.reduce((a, v) => a + v);
  let truckSize = right;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let t = tripsPerTruck(orders, mid);
    if (!t || t > maxTrips) {
      left = mid + 1;
    } else if (t < maxTrips) {
      truckSize = Math.min(truckSize, mid);
      right = mid - 1; 
    } else if (t === maxTrips) {
      truckSize = Math.min(truckSize, mid);
      right = mid - 1;
    }
  }
  return truckSize;
}

function tripsPerTruck(orders, size) {
  let trips = 1;
  let truckFilled = 0;

  for (let i = 0; i < orders.length; i++) {
    if (truckFilled === size) {
      trips += 1;
      truckFilled = 0;
    }

    if (size < orders[i]) {
      return false;
    } else if ((orders[i] + truckFilled) <= size) {
      truckFilled += orders[i];
    } else {
      trips += 1;
      truckFilled = orders[i];
    }
  }

  return trips
}

function test(act, exp) {
  
  if (act === exp) {
    console.log(`(-:`);
  } else {
    console.log(`----------------------`)
    console.log(`expected ${exp}`);
    console.log(`actual output: ${act}`);
  }
}

// test(tripsPerTruck([6, 3, 8, 2, 5, 4, 7], 15), 3);
// test(tripsPerTruck([3, 2, 5, 8, 4], 10), 3)
// test(tripsPerTruck([1, 2, 3, 4, 5], 15), 1)
// test(tripsPerTruck([10, 20, 30, 40, 50], 50), 5)
// test(tripsPerTruck([5, 5, 5, 5, 5], 15), 2)
// test(tripsPerTruck([7, 3, 9, 4, 2, 8, 6], 20), 2)
// test(tripsPerTruck([100], 100), 1)
// test(tripsPerTruck([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 4), 3)
// test(tripsPerTruck([10, 20, 30, 40, 50], 90), 2)
// test(tripsPerTruck([50, 40, 30, 20, 10], 60), 3)
// test(tripsPerTruck([5, 10, 15, 20, 25], 75), 1)
// test(tripsPerTruck([3, 2, 4, 1, 5], 5), 10)
// test(tripsPerTruck([1000, 1000, 1000, 1000], 2000), 3)

test(findTruckCapacity([6, 3, 8, 2, 5, 4, 7], 3),15);
test(findTruckCapacity([3, 2, 5, 8, 4], 3),10);
test(findTruckCapacity([1, 2, 3, 4, 5], 1),15);
test(findTruckCapacity([10, 20, 30, 40, 50], 5),50);
test(findTruckCapacity([5, 5, 5, 5, 5], 2),15);
test(findTruckCapacity([7, 3, 9, 4, 2, 8, 6], 2),20);
test(findTruckCapacity([100], 1),100);
test(findTruckCapacity([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 3),4);
test(findTruckCapacity([10, 20, 30, 40, 50], 2),90);
test(findTruckCapacity([50, 40, 30, 20, 10], 3),60);
test(findTruckCapacity([5, 10, 15, 20, 25], 1),75);
test(findTruckCapacity([3, 2, 4, 1, 5], 10),5);
test(findTruckCapacity([1000, 1000, 1000, 1000], 3),2000);