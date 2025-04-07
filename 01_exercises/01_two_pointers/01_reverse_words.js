/*

https://launchschool.com/exercises/cbbd946c?track=ruby

You are given a sentence represented by a string str. Your objective is to reverse all the characters in each word of the sentence while ensuring that the case of each character remains unchanged. The spaces between words should be preserved as they are, and the overall order of the words in the sentence must not be altered.

You should solve the problem without using the Array.prototype.reverse method.

Start: 11:40
End: 12:09 - I forgot that JS strings are immutable )-:



P:

Write a function that takes a string which is a sentence of lower and uppercase letters forming words seperated by single spaces.

Your funtion will reverse each word, but leave unaltered its position in the string and the Upper/lower case of each char.

You cannot use .reverse()

Question:

- If I split the string what does that do to time complexity?
  - I think it's acceptable, but I'll try both with and without.

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

- split using build in method
- start end pointers to reverse letters
"Launch" === "hcnuaL"

start = 0 (L)
end = 5 (h)
after swap = "hauncL"
-------Inc/Dec pointers---------
start = 1 (a)
end = 4 (c))
after swap = "hcunaL"
-------Inc/Dec pointers---------
start = 2 (u)
end = 3 (n))
after swap = "hcnuaL"
-------Inc/Dec pointers---------
start = 3
end = 2 
break condition - end is less than (or equal to) start

A

"Hello World") === "olleH dlroW"
(even number of chars: Launch)

- save an array of words ("words") by splitting the input at the spaces. ["Hello, World"]
- iterate over "words" performing a reversal on each word
"Hello"
  - initialize start/ end pointers (start = 0, end is word.length - 1 (4))
  - while start < (not equal to) end do this:
    - save start character (startChar) and endChar (startChar = "H", endChar = "o")
    - assign them to their swapped places
      word[start] = endChar ("oello")
      word[end] = startChar ("oellH")
    - Increment start by 1
    - decrement end by 1.
- return a joined up string

C
*/

function reverseWords(sentence) {
  let words = sentence.split(" ");
  return words.map((word) => {
    let start = 0;
    let end = word.length - 1;
    let newWord = []
    while (start <= end) {
      newWord[start] = word[end];
      newWord[end] = word[start];
      start++;
      end--;
    }
    return newWord.join('');
  }).join(" ");
}
console.log(reverseWords("Hello World"))// === "olleH dlroW");
// console.log(reverseWords("JavaScript is fun") === "tpircSavaJ si nuf");
// console.log(reverseWords("Coding in the sun") === "gnidoC ni eht nus");
// console.log(reverseWords("Launch School") === "hcnuaL loohcS");