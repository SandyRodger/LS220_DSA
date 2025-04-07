/*

https://launchschool.com/exercises/fe54d04b?track=ruby

Create a function that computes the power of a number using recursion. The function should take two parameters: the base x and the exponent n, and return the result of x raised to the power of n (x^n). For example, if x is 2 and n is 3, the function should return 8, since 2^3 is 8. The exponent will always be a positive number.

Any number to the power of 0 is 1
Any number to the power of 1 is the number itself


Start: 10:33
End: 10:44

P:

Write a function that takes two integers and returns the arg1 multiplied by itself arg2 times.

- If arg2 is 0, return 1
- if arg2 is 1 return 0
- the problem implies that arg1 could be a negative number.

E:

console.log(power(2, 3) === 8);

- 2 * 2 = 4, * 2  = 8

console.log(power(5, 0) === 1);

- arg 2 is 0, return 1

console.log(power(3, 4) === 81);

- 3 * 3 = 9, * 3 = 27, * 3 = 81

console.log(power(7, 2) === 49);

7 * 7 = 49

console.log(power(10, 1) === 10);


D:

recursion
Base case: arg 2 will act as a counter, if arg2 is 1, return arg1
recursive definition: return arg 1 * return value of function(arg1)

A:



C:

*/

function power(arg1, arg2) {
  if (arg2 === 0) { return 1 };
  if (arg2 === 1) {
    return arg1;
  };
  return arg1 * power(arg1, arg2 - 1);
}
console.log(power(2, 3) === 8);
console.log(power(5, 0) === 1);
console.log(power(3, 4) === 81);
console.log(power(7, 2) === 49);
console.log(power(10, 1) === 10);

