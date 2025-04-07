/*

https://launchschool.com/exercises/f536aef3

Implement a recursive function that reverses a given string. The function should take a string as input and return its reverse. For example, if the input is "hello", the function should return "olleh". Solve the problem using recursion.

*/

function reverseString(str, pointer = 0, output = "") {
  if (str[pointer] === undefined) return "";
  return reverseString(str, pointer+1, output) + str[pointer];
}

console.log(reverseString("hello") === "olleh");
console.log(reverseString("world") === "dlrow");
console.log(reverseString("a") === "a");
console.log(reverseString("") === "");
console.log(reverseString("recursion") === "noisrucer");
