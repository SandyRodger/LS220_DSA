let r = [1, [2, 3], [[4], [5], 6, 7, 8]].map((elem) => {
  return typeof elem === 'number' ? elem * 2 : elem.length
  });
  
  console.log(r) // [ 2, 2, 5 ]