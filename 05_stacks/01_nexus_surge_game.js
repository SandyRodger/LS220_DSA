/*

https://launchschool.com/lessons/d95e376a/assignments/da4b5436

You're keeping score for a futuristic game called "Nexus Surge."
In this game, players accumulate points in unusual ways. At the
start of each round, you begin with an empty scoreboard.

You receive a sequence of scoring actions as an array of strings.
Each action in the sequence is one of the following:

 -  An integer x:
     - Add a new score of x points to the scoreboard.
 - '+':
     - Add a new score that is the sum of the two most recent scores.
 - '*':
     - Add a new score that is double the most recent score.
 - '-':
     - Remove the most recent score from the scoreboard.

Create a function `nexusSurge` that calculates and returns the sum
 of all scores on the scoreboard after applying all the given actions.

The input will be an array of valid operations.

For operation "+", there will always be at least two previous scores on the record.
For operations "*" and "-", there will always be at least one previous score on the record.

Example 1:

Input: actions = ["7","3","-","*","+"]
Output: 42
Explanation:
"7" - Add 7 to the scoreboard, scoreboard is now [7].
"3" - Add 3 to the scoreboard, scoreboard is now [7, 3].
"-" - Remove the previous score, scoreboard is now [7].
"*" - Add 2 * 7 = 14 to the scoreboard, scoreboard is now [7, 14].
"+" - Add 7 + 14 = 21 to the scoreboard, scoreboard is now [7, 14, 21].
The total sum is 7 + 14 + 21 = 42.

Example 2:

Input: actions = ["8","-3","6","-","*","12","+","+"]
Output: 35
Explanation:
"8" - Add 8 to the scoreboard, scoreboard is now [8].
"-3" - Add -3 to the scoreboard, scoreboard is now [8, -3].
"6" - Add 6 to the scoreboard, scoreboard is now [8, -3, 6].
"-" - Remove the previous score, scoreboard is now [8, -3].
"*" - Add 2 * -3 = -6 to the scoreboard, scoreboard is now [8, -3, -6].
"12" - Add 12 to the scoreboard, scoreboard is now [8, -3, -6, 12].
"+" - Add -6 + 12 = 6 to the scoreboard, scoreboard is now [8, -3, -6, 12, 6].
"+" - Add 12 + 6 = 18 to the scoreboard, scoreboard is now [8, -3, -6, 12, 6, 18].
The total sum is 8 + (-3) + (-6) + 12 + 6 + 18 = 35.

Example 3:

Input: actions = ["4","-"]
Output: 0
Explanation:
"4" - Add 4 to the scoreboard, scoreboard is now [4].
"-" - Remove the previous score, scoreboard is now [].
Since the scoreboard is empty, the total sum is 0.

P:

- write a function that takes an array of strings and returns an integer.
- the function will take the first element of the input and interpret it as a command
- the command will change the score.
- when all elements in input have been interpreted, return the score.

E:

Example 1:

Input: actions = ["7","3","-","*","+"]
Output: 42
Explanation:
"7" - Add 7 to the scoreboard, scoreboard is now [7].
"3" - Add 3 to the scoreboard, scoreboard is now [7, 3].
"-" - Remove the previous score, scoreboard is now [7].
"*" - Add 2 * 7 = 14 to the scoreboard, scoreboard is now [7, 14].
"+" - Add 7 + 14 = 21 to the scoreboard, scoreboard is now [7, 14, 21].
The total sum is 7 + 14 + 21 = 42.

Example 2:

Input: actions = ["8","-3","6","-","*","12","+","+"]
Output: 35
Explanation:
"8" - Add 8 to the scoreboard, scoreboard is now [8].
"-3" - Add -3 to the scoreboard, scoreboard is now [8, -3].
"6" - Add 6 to the scoreboard, scoreboard is now [8, -3, 6].
"-" - Remove the previous score, scoreboard is now [8, -3].
"*" - Add 2 * -3 = -6 to the scoreboard, scoreboard is now [8, -3, -6].
"12" - Add 12 to the scoreboard, scoreboard is now [8, -3, -6, 12].
"+" - Add -6 + 12 = 6 to the scoreboard, scoreboard is now [8, -3, -6, 12, 6].
"+" - Add 12 + 6 = 18 to the scoreboard, scoreboard is now [8, -3, -6, 12, 6, 18].
The total sum is 8 + (-3) + (-6) + 12 + 6 + 18 = 35.

Example 3:

Input: actions = ["4","-"]
Output: 0
Explanation:
"4" - Add 4 to the scoreboard, scoreboard is now [4].
"-" - Remove the previous score, scoreboard is now [].
Since the scoreboard is empty, the total sum is 0.


D:

- take the commands from the left (shift)
- Have an empty array where score figures are put into the right (push)
- at the end sum the score array

A:

VARIABLES:

scores = [Number(actions.shift())]; // [8, -3, -6, 12, 6, 18]

iterate through actions
  - If command is "-"
    - remove last score from scores (pop)
  - elseif command is "+"
    - push into scores (scores.at(-2) + scores.at(-1))
  - elseif command is "*"
    - multiply score.at(-1) by 2, push it into scores
  - otherwise it's a number, so
    - add it as a number to scores

- return sum of scores (reduce)
 
C:

*/

// function nexusSurge(actions) {

//   let scores = [Number(actions.shift())]; 

//   for (i = 0; i < actions.length; i++) {
//     let a = actions[i];
//     if (a === "-") {
//       scores.pop();
//     } else if (a === "+") {
//       scores.push(Number(scores.at(-1)) + Number(scores.at(-2)));
//     } else if (a === "*") {
//       scores.push(Number(scores.at(-1)) * 2);
//     } else {
//       scores.push(Number(a));
//     }
//   }  
  
//   return scores.reduce((acc, val) => acc + val);
   
// }

// test(nexusSurge(["3", "4", "+"]), 14);
// test(nexusSurge(["5", "-", "-2"]), -2);
// test(nexusSurge(["1", "-", "-3", "*"]), -9);
// test(nexusSurge(["5", "-2", "+", "-", "7", "*"]), 24);
// test(nexusSurge(["-3", "-", "4", "8", "+", "*"]), 48);
// test(nexusSurge(["1", "-2", "3", "-", "+", "-"]), -1);
// test(nexusSurge(["-10", "*", "-", "5", "+", "7"]), -3);
// test(nexusSurge(["6", "-", "-8", "*", "2", "+"]), -36);
// test(nexusSurge(["1", "-", "2", "*", "+", "-10", "-", "*"]), 24);

// function test(act, exp) {
//   if (exp === act) {
//     console.log('(-:');
//   } else {
//     console.log(`expected: ${exp}, instead got ${act}`);
//   }
// }

/* 

2nd try 3.2.25

You're keeping score for a futuristic game called "Nexus Surge."
In this game, players accumulate points in unusual ways. At the
start of each round, you begin with an empty scoreboard.

You receive a sequence of scoring actions as an array of strings.
Each action in the sequence is one of the following:

 -  An integer x:
     - Add a new score of x points to the scoreboard.
 - '+':
     - Add a new score that is the sum of the two most recent scores.
 - '*':
     - Add a new score that is double the most recent score.
 - '-':
     - Remove the most recent score from the scoreboard.

Create a function `nexusSurge` that calculates and returns the sum
 of all scores on the scoreboard after applying all the given actions.

The input will be an array of valid operations.

For operation "+", there will always be at least two previous scores on the record.
For operations "*" and "-", there will always be at least one previous score on the record.

Example 1:

Input: actions = ["7","3","-","*","+"]
Output: 42
Explanation:
"7" - Add 7 to the scoreboard, scoreboard is now [7].
"3" - Add 3 to the scoreboard, scoreboard is now [7, 3].
"-" - Remove the previous score, scoreboard is now [7].
"*" - Add 2 * 7 = 14 to the scoreboard, scoreboard is now [7, 14].
"+" - Add 7 + 14 = 21 to the scoreboard, scoreboard is now [7, 14, 21].
The total sum is 7 + 14 + 21 = 42.

Example 2:

Input: actions = ["8","-3","6","-","*","12","+","+"]
Output: 35
Explanation:
"8" - Add 8 to the scoreboard, scoreboard is now [8].
"-3" - Add -3 to the scoreboard, scoreboard is now [8, -3].
"6" - Add 6 to the scoreboard, scoreboard is now [8, -3, 6].
"-" - Remove the previous score, scoreboard is now [8, -3].
"*" - Add 2 * -3 = -6 to the scoreboard, scoreboard is now [8, -3, -6].
"12" - Add 12 to the scoreboard, scoreboard is now [8, -3, -6, 12].
"+" - Add -6 + 12 = 6 to the scoreboard, scoreboard is now [8, -3, -6, 12, 6].
"+" - Add 12 + 6 = 18 to the scoreboard, scoreboard is now [8, -3, -6, 12, 6, 18].
The total sum is 8 + (-3) + (-6) + 12 + 6 + 18 = 35.

Example 3:

Input: actions = ["4","-"]
Output: 0
Explanation:
"4" - Add 4 to the scoreboard, scoreboard is now [4].
"-" - Remove the previous score, scoreboard is now [].
Since the scoreboard is empty, the total sum is 0.

*/

function nexusSurge(actions) {
  let stack = [];
  while (actions.length) {
    let a = actions.shift();

    if (a === "*") {
      stack.push(stack.at(-1) * 2);
    } else if (a === "-") {
      stack.pop();
    } else if (a === "+") {
      stack.push(stack.at(-1) + stack.at(-2))
    } else {
      stack.push(Number(a));
    }
  }
  return stack.reduce((acc, val) => acc + val);
}

console.log(nexusSurge(["3", "4", "+"]) === 14);
console.log(nexusSurge(["5", "-", "-2"]) === -2);
console.log(nexusSurge(["1", "-", "-3", "*"]) === -9);
console.log(nexusSurge(["5", "-2", "+", "-", "7", "*"]) === 24);
console.log(nexusSurge(["-3", "-", "4", "8", "+", "*"]) === 48);
console.log(nexusSurge(["1", "-2", "3", "-", "+", "-"]) === -1);
console.log(nexusSurge(["-10", "*", "-", "5", "+", "7"]) === -3);
console.log(nexusSurge(["6", "-", "-8", "*", "2", "+"]) === -36);
console.log(nexusSurge(["1", "-", "2", "*", "+", "-10", "-", "*"]) === 24);
