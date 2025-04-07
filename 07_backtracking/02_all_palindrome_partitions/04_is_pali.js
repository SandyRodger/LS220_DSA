// function isPali(str) {
//   for (i = 0; i < str.length; i++) {
//     if (str[i] != str.at(-(i+1))) { return false }
//   }
//   return true;
// }

const chars = [ 'r', 'a', 'c', 'e', 'c', 'a', 'r' ];

function isPali(left, right) {
  while (left <= right) {
    if (chars[left] !== chars[right]) {return false}
    left++;
    right--;
  }
  return true;
}

console.log(isPali(0, 6) === true);
console.log(isPali(1, 5) === true);
console.log(isPali(2, 4) === true);
console.log(isPali(3, 3) === true);
console.log(isPali(3, 6) === false);
console.log(isPali(1, 2) === false);