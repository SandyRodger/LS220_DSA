/*

https://launchschool.com/lessons/c10716a1/assignments/90c2f26e


Write a function named findTruckCapacity that determines
the optimal capacity for a delivery truck to transport
a series of orders within a given number of trips.

The function takes two parameters:
1. An array of positive integers orderVolumes, where each
element represents the volume of an order in cubic meters.
2. A positive integer targetTrips, representing the maximum
number of trips the truck can make.

The truck must deliver orders in the sequence they appear
in the orderVolumes array. On each trip, the truck is
loaded with as many consecutive orders as possible without
exceeding its capacity. The function should return the
minimum truck capacity in cubic meters.

Example:
Input: orderVolumes = [6, 3, 8, 2, 5, 4, 5], targetTrips = 3
Output: 14
Explanation: A truck with 14 cubic meters capacity can
             deliver all orders in 3 trips:
Trip 1: 6 + 3 = 9 cubic meters
Trip 2: 8 + 2 = 10 cubic meters
Trip 3: 5 + 4 + 5 = 14 cubic meters

P:

Write a function that takes 2 arguments:
  - an array of number representing volumes of orders to be delivered ("orderVolumes")
  - a single integer representing the maximum number of trips a truck will do. ("targetTrips")

- The function will determine how big the truck would need to be in order to fit in the orders within targetTrips
- despite being called MAX trips, you cannot do the deliveries in less than targetTrips
- Orders have the be taken in the order the appear in orderVolumes
- You have to use binary search. 

E:

[6, 3, 8, 2, 5, 4, 7], 3) === 15);

- total 35

  - 35 / 3 = 11.6 (round up to 12)
  - 6,3,8 = 17 + 2, 5, 7 = 14
  - = 2 trips

- possTruckVolumes = [1.. 35]?
  - mid = 17
  - fill it up till 17 then move on.
  - 17 leads to 2 trips, too few trips, so right  = mid -1
  - mid = 8
  - [6, 3, 8, [2, 5], 4, 7] => 6 trips
    - too many, left = mid + 1
    - l = 9, r = 16, (l+r = 25) mid is 12
      - [[6,3], [8, 2], [5,4], [7]] => 4 trips
      - too many trips, right = mid -1
      - l = 9, r = 11 (mid = 10)
    - [ [6,3], [8,2], [5,4], [7]] = > 4 trips
      - too many trips, right = mid -1
      - l = 9, r = 9

[3, 2, 5, 8, 4], 3) === 10);
[1, 2, 3, 4, 5], 1) === 15);
[10, 20, 30, 40, 50], 5) === 50);
[5, 5, 5, 5, 5], 2) === 15);
[7, 3, 9, 4, 2, 8, 6], 2) === 20);
[100], 1) === 100);
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 3) === 4);
[10, 20, 30, 40, 50], 2) === 90);
[50, 40, 30, 20, 10], 3) === 60);
[5, 10, 15, 20, 25], 1) === 75);
[3, 2, 4, 1, 5], 10) === 5);
[1000, 1000, 1000, 1000], 3) === 2000);

- At first glance you might think that with 2000 you can deliver this in 2 trips. And you could. but that is not the problem you have been given. Your problem is - you must take 3 trips. you must deliver these volumes. What's the smallest truck that could do it. 

- with 2000, i can take 1000 + 1000, 1000, 1000 => correct answer
- with 1000, its 4 trips
- with 3000, it's 2 trips
- with 

D:
A:

SUCCESSS CONDITION:

1. THE TRUCK HAS DONE TARGETTRIPS, WITHOUT BEING EMPTY.
2. THE PACKAGES HAVE BEEN DELIVERED.

HELPER FUNCTION: totalTrips(orderVolumes, possTruckCapacity) => numberOfTrips

Instead of a total trips method I need a thisSizeTruckCanDeliverTheGoodsInThisNumberOfTrips => boolean

HELPER FUNCTION createPossibleVolumes:


MAIN FUNCTION: function findTruckCapacity(orderVolumes, targetTrips) => truckVolume

- minTruckVolume = biggest item in orderVolumes (8)
- Maximum number of trips is orderVolumes.length
- output = 0 

- create a range of possible truck sizes (possTruckVolumes) ranging from minTruckVolume to orderVolumes.length.

- binary search possTruckVolumes

while left is less that right
  - for each mid, pass it to totalTrips, save that as "numberOfTrips";
  - if numberOfTrips === targetTrips, save it as output
  - if numberOfTrips > targetTrips
    - truck needs to be bigger: 
      - left = mid + 1
    - otherwise (tuck is the right size or too big) try smaller
      - right = mid - 1

C:

*/

// function createPossibleVolumes(orderVolumes) {
//   let totalVolume = orderVolumes.reduce((acc, val) => acc + val);
//   let sortedArr = orderVolumes.toSorted((a, b) => b - a );
//   let output = [];
//   for (i = sortedArr[0]; i <= totalVolume; i += sortedArr.at(-1)) {
//     output.push(i);
//   }
//   return output;
// }

// test2([6, 3, 8, 2, 5, 4, 7]);
// test2([3, 2, 5, 8, 4]);
// test2([1, 2, 3, 4, 5]);
// test2([10, 20, 30, 40, 50]);
// test2([5, 5, 5, 5, 5]);
// test2([7, 3, 9, 4, 2, 8, 6]);
// test2([100]);
// test2([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
// test2([10, 20, 30, 40, 50]);
// test2([50, 40, 30, 20, 10]);
// test2([5, 10, 15, 20, 25]);
// test2([3, 2, 4, 1, 5]);
// test2([1000, 1000, 1000, 1000]);



function thisNumberOfTripsEqualsTargetNumberOfTrips(tripsTaken, targetTrips) {
  return tripsTaken === targetTrips;
}

console.log(thisSizeTruckCanDeliverTheGoodsInThisNumberOfTrips([50, 40, 30, 20, 10], 60, 3));

// test(totalTrips([6, 3, 8, 2, 5, 4, 7], 15), 3);
// test(totalTrips([3, 2, 5, 8, 4], 10), 3);
// test(totalTrips([1, 2, 3, 4, 5], 15), 1);
// test(totalTrips([10, 20, 30, 40, 50], 50), 5);
// test(totalTrips([5, 5, 5, 5, 5], 15), 2);
// test(totalTrips([7, 3, 9, 4, 2, 8, 6], 20), 2);
// test(totalTrips([100], 100), 1);
// test(totalTrips([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 4), 3);
// test(totalTrips([10, 20, 30, 40, 50], 90), 2);
// test(totalTrips([50, 40, 30, 20, 10], 60), 3);
// test(totalTrips([5, 10, 15, 20, 25], 75), 1);
// test(totalTrips([3, 2, 4, 1, 5], 5), 10);
// test(totalTrips([1000, 1000, 1000, 1000], 2000), 3);

function totalTrips(orderVolumes, possTruckCapacity) {
  // console.log(orderVolumes)
  let totalTrips = 0;
  let currentTrip = 0;
  let trips = [];
  // console.log(`------------------------------------`)
  // console.log(`My truck is ${possTruckCapacity} size`)
  for (i = 0; i < orderVolumes.length; i++) {
    if ((currentTrip + orderVolumes[i]) > possTruckCapacity) {
      // console.log(`TRUCK FULL: ${currentTrip} / ${possTruckCapacity}`)
      // console.log(`The next item (${orderVolumes[i]}) would exceed my capacity. So I empty the truck`)
      trips.push(currentTrip)
      totalTrips++;
      // console.log(`I have now made ${totalTrips} trips`)
      currentTrip = 0;
    } 
    // console.log(`LOAD: ${orderVolumes[i]}`)
    currentTrip += orderVolumes[i];
  }
  totalTrips += 1;
  // console.log(`My work is done and I have made ${totalTrips} trips`)
  // console.log(`----------------------------------`)
  return totalTrips; 
}

function findTruckCapacity(orderVolumes, targetTrips) {


    let trips = totalTrips(orderVolumes, mid);
    // console.log(orderVolumes)
    if (thisSizeTruckCanDeliverTheGoodsInThisNumberOfTrips(orderVolumes, mid, targetTrips)) {
      console.log('!!!!!!!!!!!!!!!!!!!')
      output = mid;
    }
    // console.log(`____________________________.`)
    // console.log(`left: ${left} | ${right} right.`)
    // console.log(`truck size: ${mid} can do it in ${trips} trips.`)
    if (trips < targetTrips) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return output;
}

// test(findTruckCapacity([6, 3, 8, 2, 5, 4, 7], 3), 15);
// test(findTruckCapacity([3, 2, 5, 8, 4], 3), 10);
// test(findTruckCapacity([1, 2, 3, 4, 5], 1), 15);
// test(findTruckCapacity([10, 20, 30, 40, 50], 5), 50);
// test(findTruckCapacity([5, 5, 5, 5, 5], 2), 15);
// test(findTruckCapacity([7, 3, 9, 4, 2, 8, 6], 2), 20);
// test(findTruckCapacity([100], 1), 100);
// test(findTruckCapacity([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 3), 4);
// test(findTruckCapacity([10, 20, 30, 40, 50], 2), 90);
// test(findTruckCapacity([50, 40, 30, 20, 10], 3), 60);
// test(findTruckCapacity([5, 10, 15, 20, 25], 1), 75);
// test(findTruckCapacity([3, 2, 4, 1, 5], 10), 5);
test(findTruckCapacity([1000, 1000, 1000, 1000], 3), 2000);

function test(act, exp) {
  if (act === exp) {
    console.log('(-:');
  } else {
    console.log(`expected ${exp}, instead got ${act}`);
  }
}

function test2(og) {
  console.log('--------------------')
  console.log(`input: ${og}`);
  console.log(`output: ${createPossibleVolumes(og)}`);
}
