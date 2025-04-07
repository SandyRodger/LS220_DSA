/*

https://launchschool.com/exercises/620def00

Write a function that checks whether a given positive integer num is the result of an integer multiplied by itself, which is typically referred to as a square integer. The function should return true if num is a square integer, otherwise false. The implementation should not rely on any square root computation provided by built-in Math library.

*/

function isSquareInteger(n) {
  let left = 0;
  let right = n;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2 );
    let square = mid ** 2;
    if (square === n) {
      return true;
    } else if (square > n) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
}

console.log(isSquareInteger(1)  === true);
console.log(isSquareInteger(4)  === true);
console.log(isSquareInteger(16) === true);
console.log(isSquareInteger(14) === false);
console.log(isSquareInteger(25) === true);
console.log(isSquareInteger(26) === false);

