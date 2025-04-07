/*
https://launchschool.com/lessons/dd8751d3/assignments/96fecb5c

Write a function `longestSubstringLength` that finds the
length of the longest substring without duplicates in a
given string. The function should take a string as input
and return an integer representing the length of the longest
substring without any repeating characters. The input
string will only contain lowercase characters.

Example:
Input: s = "helloworld"
Output: 5
Explanation: The longest substring without repeating characters is "world",
which has a length of 5.

P:

Write a function that takes a string containing lowercase chars and uses a pointer-based model to determine how long the longest part of the string is, that does not contain the same char more than once. 

E:

console.log(longestSubstringLength("a") === 1);
  - min output must be 1, cannot be 0
console.log(longestSubstringLength("aa") === 1);
console.log(longestSubstringLength("ab") === 2);
- max output is going to be the length of the string
console.log(longestSubstringLength("abba") === 2);
console.log(longestSubstringLength("abc") === 3);
console.log(longestSubstringLength("helloworld") === 5);
console.log(longestSubstringLength("dvdf") === 3);
console.log(longestSubstringLength("tmmzuxt") === 5);
console.log(longestSubstringLength("thisishowwedoit") === 6);
console.log(longestSubstringLength("longestsubstring") === 8);
console.log(longestSubstringLength("aabbccddeffghijklmno") === 10);
console.log(longestSubstringLength("abcdefghijklmnopqrstuvwxyz") === 26);

D:

- anchor runner 
- as soon as a dup is detected anchor increments to the next char (index+1)
- every iteration runner increments

"helloworld" === 5 (world)

5 Anc/Run Qs:
  1. when does anc move?
    - when a duplicate is detected, anc moves to the second of the duplicates
  2. when does run move?
    - every iteration, run moves one index to the right
  3. does anc do anything else?
    - it's used to calculate the length of the substring
  4. does Run do anything else:
    - used to calculate the length of the substring
  5. When do we stop iterating?
    - when runner gets to the end

- use a map to scan for duplicates.

A:

VARIABLES:

- an object called "seen" that records letter and the indexes at which they have been found
- a runner = 1
- an anchor called "a" = 0
- longestSubString = 1;

ALGO:

"helloworld" === 5 (world)

- while runner < string.length (10)
  - if the char at runner is included in "seen"
    - set anchor to anchor + 1
    - set runner to anchor;
    - reset "seen"
    - add the letter at anchor to "seen"
  - otherwise:
    - longest Substring = Math.max(prev, curr)
  - increment runner

- return longestSubstring
C:
*/

function longestSubstringLength(string) {

  let seen = {[string[0]]: 0};
  let runner = 1;
  let anchor  = 0
  let longestSubstring = 1

  while (runner <= string.length) {
    if (Object.hasOwn(seen, string[runner])) {
      anchor = seen[string[runner]] + 1;
      runner = anchor;
      seen = {};
      seen[string[runner]] = runner;
    } else {
      seen[string[runner]] = runner;
      longestSubstring = Math.max(longestSubstring, (runner - anchor))
    }
    runner++;
  }

  return longestSubstring;
}

console.log(longestSubstringLength("a") === 1);
console.log(longestSubstringLength("aa") === 1);
console.log(longestSubstringLength("ab") === 2);
console.log(longestSubstringLength("abba") === 2);
console.log(longestSubstringLength("abc") === 3);
console.log(longestSubstringLength("helloworld") === 5);
console.log(longestSubstringLength("dvdf") === 3);
console.log(longestSubstringLength("tmmzuxt") === 5);
console.log(longestSubstringLength("thisishowwedoit") === 6);
console.log(longestSubstringLength("longestsubstring") === 8);
console.log(longestSubstringLength("aabbccddeffghijklmno") === 10);
console.log(longestSubstringLength("abcdefghijklmnopqrstuvwxyz") === 26);
