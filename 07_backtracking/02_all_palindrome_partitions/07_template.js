function someProblem(candidates) {
  function backtrack(candidates, candidate, result) {
    if (/* you run out of right chars*/) {
      result.push([...candidate]);
      return;
    }

    for (let elem of candidates) {
      if (/*chars to the right are not a palindrone*/) {
        continue;
      }

      candidate.push(elem);  // take
      backtrack(candidates, candidate, result);  // explore
      candidate.pop();  // clean up
    }
  }

  const result = [];
  const candidate = [];
  backtrack(candidates, candidate, result);
  return result;
}