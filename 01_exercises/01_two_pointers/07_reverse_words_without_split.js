/*

https://launchschool.com/exercises/cbbd946c?track=ruby

** This is not the right way to do it. The launch school solution uses split. This method has a high time-complexity. But I wanted to see what it would look like without split. There's surely a more efficient way of doing this without split...

You are given a sentence represented by a string str. Your objective is to reverse all the characters in each word of the sentence while ensuring that the case of each character remains unchanged. The spaces between words should be preserved as they are, and the overall order of the words in the sentence must not be altered.

You should solve the problem without using the Array.prototype.reverse method.

firstSpace: 
secondSpace: 

P:

Write a function that takes a string which is a sentence of lower and uppercase letters forming words seperated by single spaces.

Your funtion will reverse each word, but leave unaltered its position in the string and the Upper/lower case of each char.

You cannot use .reverse()


E

"Hello World" === "olleH dlroW"
  - happy path

"JavaScript is fun" === "tpircSavaJ si nuf"

  - note the preservation of letter case.

"Coding in the sun" === "gnidoC ni eht nus"
  - HP

"Launch School" === "hcnuaL loohcS"
  - Happy path

D:

- split by using a firstSpace secondSpace model to find successive spaces.
- firstSpace secondSpace pointers to reverse letters
"Launch" === "hcnuaL"

firstSpace = 0 (L)
secondSpace = 5 (h)
after swap = "hauncL"
-------Inc/Dec pointers---------
firstSpace = 1 (a)
secondSpace = 4 (c))
after swap = "hcunaL"
-------Inc/Dec pointers---------
firstSpace = 2 (u)
secondSpace = 3 (n))
after swap = "hcnuaL"
-------Inc/Dec pointers---------
firstSpace = 3
secondSpace = 2 
break condition - secondSpace is less than (or equal to) firstSpace

A

"Hello World" === "olleH dlroW");
VARIABLES:

- anchor = 0
- runner = 1


- add a space to the beginning and secondSpace of the input " Hello World "
- Use anchor/runner pointers to find successive spaces.
  - anchor = 0
  - runner = 1?
  - while runner is not pointing at a space
    - increment the runner
  - then set firstSpace to anchor + 1, and secondSpace to runner - 1.
    - firstSpace harvesting the characters into an array.
    - once that's done save the reversed word somewhere
  - set anchor to where runner is
  - use the while loop to find the next space
  - do it again
  - if there is no next space then join the results and return them



- iterate over "words" performing a reversal on each word
"Hello"
  - initialize firstSpace/ secondSpace pointers (firstSpace = 0, secondSpace is word.length - 1 (4))
  - while firstSpace < (not equal to) secondSpace do this:
    - save firstSpace character (firstSpaceChar) and secondSpaceChar (firstSpaceChar = "H", secondSpaceChar = "o")
    - assign them to their swapped places
      word[firstSpace] = secondSpaceChar ("oello")
      word[secondSpace] = firstSpaceChar ("oellH")
    - Increment firstSpace by 1
    - decrement secondSpace by 1.
- return a joined up string

C
*/

function reverseWords(sentence) {
  let output = "";
  let index = 0;

  while (index < sentence.length) {
    while (index < sentence.length && sentence[index] === ' ') {
      output += ' ';
      index++;
    }
    let wordStart = index;
    while (index < sentence.length && sentence[index] !== ' ') {
      index++;
    }
    let wordEnd = index - 1;
    for (let i = wordEnd; i >= wordStart; i--) {
      output += sentence[i];
    }
  }
  return output;
}

console.log(reverseWords("Hello World"))// === "olleH dlroW");
console.log(reverseWords("JavaScript is fun") === "tpircSavaJ si nuf");
console.log(reverseWords("Coding in the sun") === "gnidoC ni eht nus");
console.log(reverseWords("Launch School") === "hcnuaL loohcS");