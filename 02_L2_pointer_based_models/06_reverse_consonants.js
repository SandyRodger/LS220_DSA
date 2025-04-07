/*
// Given a string `str`, reverse all the consonants in the string and return it.
// Consonants are all alphabetic characters except for the vowels `'a'`, `'e'`, `'i'`,
// `'o'`, and `'u'`, which can appear in both lower and upper cases.
// The consonants can appear more than once in the string.

*/

function reverseConsonants(str) {
  let chars = str.split('')
  const CONS = /[bcdfghjklmnpqrstvwxyz]/i
  const isCons = (char) => CONS.test(char);
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    while (!isCons(chars[start]) && start < end) { start++ };
    let leftChar = chars[start];
    while (!isCons(chars[end]) && start < end) { end-- };
    let rightChar = chars[end];
    chars[start] = rightChar;
    chars[end] = leftChar;
    start++;
    end--;
  }
  return chars.join('');
}


console.log(reverseConsonants("") === "");
console.log(reverseConsonants("s") === "s");
console.log(reverseConsonants("HELLO") === "LELHO");
console.log(reverseConsonants("leetcode") === "deectole");
console.log(reverseConsonants("example") === "elapmxe");
console.log(reverseConsonants("Consonants") === "sotnonasnC");

// All test cases should log true