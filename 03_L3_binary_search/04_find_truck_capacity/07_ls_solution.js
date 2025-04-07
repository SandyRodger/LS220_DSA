function canTransport(trips, capacity, orderVolumes) {
  let idx = 0;
  let currVolume = 0;

  while (trips > 0 && idx < orderVolumes.length) {
    if (currVolume + orderVolumes[idx] <= capacity) {
      currVolume += orderVolumes[idx];
      idx += 1;
    } else {
      currVolume = 0;
      trips -= 1;
    }
  }
  return idx === orderVolumes.length;
}

function findTruckCapacity(orderVolumes, maxTrips) {
  let left = 1;
  let right = orderVolumes.reduce((accumulator, current) => accumulator + current);
  let result = 0;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (canTransport(maxTrips, mid, orderVolumes)) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return result;
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