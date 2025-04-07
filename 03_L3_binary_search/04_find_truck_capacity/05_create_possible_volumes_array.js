function createPossibleVolumes(orderVolumes) {
  let totalVolume = orderVolumes.reduce((acc, val) => acc + val);
  let sortedArr = orderVolumes.toSorted((a, b) => b - a );
  let output = [];
  for (i = sortedArr[0]; i <= totalVolume; i++) {
    output.push(i);
  }
  return output;
}

test2([6, 3, 8, 2, 5, 4, 7]);
test2([3, 2, 5, 8, 4]);
test2([1, 2, 3, 4, 5]);
test2([10, 20, 30, 40, 50]);
test2([5, 5, 5, 5, 5]);
test2([7, 3, 9, 4, 2, 8, 6]);
test2([100]);
test2([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
test2([10, 20, 30, 40, 50]);
test2([50, 40, 30, 20, 10]);
test2([5, 10, 15, 20, 25]);
test2([3, 2, 4, 1, 5]);
test2([1000, 1000, 1000, 1000]);

function test2(og) {
  console.log('--------------------')
  console.log(`input: ${og}`);
  console.log(`output: ${createPossibleVolumes(og)}`);
}