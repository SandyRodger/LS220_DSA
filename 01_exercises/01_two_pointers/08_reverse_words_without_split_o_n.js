/*

https://launchschool.com/exercises/cbbd946c?track=ruby


You are given a sentence represented by a string str. Your objective is to reverse all the characters in each word of the sentence while ensuring that the case of each character remains unchanged. The spaces between words should be preserved as they are, and the overall order of the words in the sentence must not be altered.

You should solve the problem without using the Array.prototype.reverse method.
Also, don't use the Array.prototype.split method.
Solve it in O(n) time

P:

Write a function that takes a sentence in a string and reverses the words of the string without altering the order of the words. 

Constraints:

- don't use split or reverse
- function must execute in o(n) time

key:

- strings are immutable

E:

"Hello World") === "olleH dlroW"

- preserve case

"JavaScript is fun") === "tpircSavaJ si nuf"
"Coding in the sun") === "gnidoC ni eht nus"
"Launch School") === "hcnuaL loohcS"

D:

"JavaScript is fun") === "tpircSavaJ si nuf"
              A   B

set pointerA as 0 -> keep track of the beginnings of words
set pointerB as 1 -> Sout out the next space (or undefined for the last word)
set counter -> will trace back from B to C

find all the spaces
  - pointer B crawls forward
work through them backwards 
do the last word (which has no space to the right of it)

A:

"JavaScript is fun") === "tpircSavaJ si nuf"
 01234567890123456
           1111111  
            AB

Varaibles:

a = 14
b = 17
output = "tpircSavaJ si nuf "
counter = 2

while -> output.length is less than input.length
  - increment b until it points to a space or undefined
    - while b !== " "
      - b++
  - set counter as b - a - 1
  - take the letters from b, backwards until the counter runs out.
    - while counter >= 0
      - add input[a+counter]
  - if b >= input.length
    - return output
  - b++
  - a = b
C:
*/

function reverseWords(sentence) {

  let a = 0;
  let b = 1;
  let output = "";

  while (output.length < sentence.length) {
    while ( sentence[b] !== ' ' && sentence[b] !== undefined) b++;
    let counter = b - a - 1;
    while (counter >= 0) {
      output += sentence[a+counter];
      counter--;
    }
    if (b >= sentence.length) return output;
    output += " ";
    b++;
    a = b;
  }
}

console.log(reverseWords("Hello World") === "olleH dlroW");
console.log(reverseWords("JavaScript is fun") === "tpircSavaJ si nuf");
console.log(reverseWords("Coding in the sun") === "gnidoC ni eht nus");
console.log(reverseWords("Launch School") === "hcnuaL loohcS");