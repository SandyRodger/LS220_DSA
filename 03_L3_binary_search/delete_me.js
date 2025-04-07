function truckCanDoItInTrips(orderVolumes, possTruckCapacity, targetTrips) {
  let load = 0;
  let trips = 1;

  let disposableOrders = Array.from(orderVolumes);

  while (disposableOrders.length > 0) {

    if ((disposableOrders[0] + load) > possTruckCapacity) {
      trips += 1;
      load = 0;
    } else {
      load += disposableOrders.shift();
    }
  }
  // console.log(trips)
  return trips <= targetTrips;
}

test([6, 3, 8, 2, 5, 4, 7], 3, 15);
test([3, 2, 5, 8, 4], 3, 10);
test([1, 2, 3, 4, 5], 1, 15);
test([10, 20, 30, 40, 50], 5, 50);
test([5, 5, 5, 5, 5], 2, 15);
test([7, 3, 9, 4, 2, 8, 6], 2, 20);
test([100], 1, 100);
test([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 3, 4);
test([10, 20, 30, 40, 50], 2, 90);
test([50, 40, 30, 20, 10], 3, 60);
test([5, 10, 15, 20, 25], 1, 75);
test([3, 2, 4, 1, 5], 10, 5);
test([1000, 1000, 1000, 1000], 3, 2000);

function test(packages, targetTrips, expectedTruckSize) {
  let result = truckCanDoItInTrips(packages, expectedTruckSize, targetTrips);
  console.log(result);
}