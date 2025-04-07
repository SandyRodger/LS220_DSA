/*

https://launchschool.com/lessons/d95e376a/assignments/fd6e317c

Create a function `calculator` that evaluates arithmetic
expressions given as strings. The function should support
basic arithmetic operations: addition (+), subtraction (-),
multiplication (*), and division (/).

The function should:
1. Accept a string input representing a valid arithmetic expression.
   The input will consist of non-negative integers, arithmetic
   operator(+, -, *, /), and may contain whitespace characters.
2. Evaluate the expression following the standard order of operations
   (multiplication and division before addition and subtraction).
3. Return the result as an integer.

For division operations, the result should be rounded down to
the nearest integer (floor division).

You can assume that the input will never contain division by zero.

Note: Implement the calculation logic yourself without using
any built-in expression evaluation functions.

Examples:

1. Input: "4 + 3 * 2"
   Output: 10
   Explanation: 3*2 is evaluated first (6), then added to 4.

2. Input: "15 / 3 - 2"
   Output: 3
   Explanation: 15/3 is 5, then 2 is subtracted.

3. Input: "10 + 8 / 3"
   Output: 12
   Explanation: 8/3 is 2 (rounded down), then added to 10.


P: 

Write a function that takes a string containing characters that represent a mathematical sum. Interpret the sum and return the result of it.

- The function will be able to do the following operations: +, -, *, /
- Some inputs will have whitespace, some won't
- * and / will have to happen before + and - ("standard order of operations")
- Input is a string, but output is an integer
- for /s, round down

E:
Examples:

1. Input: "4 + 3 * 2"
   Output: 10
   Explanation: 3*2 is evaluated first (6), then added to 4.

2. Input: "15 / 3 - 2"
   Output: 3
   Explanation: 15/3 is 5, then 2 is subtracted.

3. Input: "10 + 8 / 3"
   Output: 12
   Explanation: 8/3 is 2 (rounded down), then added to 10.


4. 
- input: "6 - 2")
- Output: 4
- HP

5.
- input: " 8 / 3"
- output: 2 
- floored

6. calculator("2+3*4") === 14

7. calculator("10 - 2 * 3 + 4 ") === 8
  - this only works if the - happens before the +
  - so the order is *, -, +, AKA * then linear reading of operations

8. calculator(" 20 / 4 * 2 + 7") === 17
  - linear * and / and then linear + and -

9. calculator("5 + 3 * 2 - 8 / 4") === 9
  - ("9")

10. calculator("10+5/4-3*2+2") === 7
 - ("10+5/4-3*2+2")
  - ("10+1-3*2+2")
    - ("10+1-6+2")
        - ("11-6+2")
                - ("5+2")
                - ("7")

11. calculator(" 30 / 3 * 2 - 4 * 2 / 4 + 1 ") === 19
 - strip whitespace
 - (" 30 / 3 * 2 - 4 * 2 / 4 + 1 ")
  - (" 10 * 2 - 4 * 2 / 4 + 1 ")
    - (" 20 - 4 * 2 / 4 + 1 ")
        - (" 20 - 8 / 4 + 1 ")
        - (" 20 - 2 + 1 ")
                - (" 18 + 1 ")
                - (" 19 ")


12. calculator("100 - 20 * 3 / 2 + 5 * 4 - 10 / 2 * 3") === 75
- "100 - 20 * 3 / 2 + 5 * 4 - 10 / 2 * 3"
- "100 - 60 / 2 + 5 * 4 - 10 / 2 * 3"
- "100 - 30 + 5 * 4 - 10 / 2 * 3"
- "100 - 30 + 20 - 10 / 2 * 3"
- "100 - 30 + 20 - 5 * 3"
- "100 - 30 + 20 - 15"
- "70 + 20 - 15"
- "90 - 15"
- "75"

D:

- regex to strip whitespace
- regex to split input into chars

- search cleanInput for * and /
- search cleanInput for + and -

return sum


A:

- regex to strip whitespace
- regex to split input into chars

- search cleanInput for * and /
- search cleanInput for + and -

return sum

C:
*/

function calculator(expression) {

  let cleanInput = expression.replaceAll(' ', '').split(/([*/+-])/g)
  
  for (i = 0; i <= cleanInput.length; i += 1) {
    if (cleanInput[i] === '*') {
      cleanInput[i-1] = Number(cleanInput[i-1]) * Number(cleanInput[i+1]);
      cleanInput.splice(i, 2);
      i = 0
    } else if (cleanInput[i] === '/') {
      cleanInput[i-1] = Math.floor(Number(cleanInput[i-1]) / Number(cleanInput[i+1]));
      cleanInput.splice(i, 2);
      i = 0
    }
  }

  for (i = 0; i <= cleanInput.length; i += 1) {
    if (cleanInput[i] === '+') {
      cleanInput[i-1] = Number(cleanInput[i-1]) + Number(cleanInput[i+1]);
      cleanInput.splice(i, 2);
      i = 0
    } else if (cleanInput[i] === '-') {
      cleanInput[i-1] = Number(cleanInput[i-1] - Number(cleanInput[i+1]));
      cleanInput.splice(i, 2);
      i = 0
    }
  }

  return cleanInput[0];
}

test(calculator("6 - 2"), 4);
test(calculator(" 8 / 3"), 2);
test(calculator("2+3*4"), 14);
test(calculator("10 - 2 * 3 + 4 "), 8);
test(calculator(" 20 / 4 * 2 + 7"), 17);
test(calculator("5 + 3 * 2 - 8 / 4"), 9);
test(calculator("10+5/4-3*2+2"), 7);
test(calculator(" 30 / 3 * 2 - 4 * 2 / 4 + 1 "), 19);
test(calculator("100 - 20 * 3 / 2 + 5 * 4 - 10 / 2 * 3"), 75);

function test(act, exp) {
  if (exp === act) {
    console.log('(-:');
  } else {
    console.log(`expected: ${exp}, instead got ${act}`);
  }
}
