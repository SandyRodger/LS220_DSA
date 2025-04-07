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

Write a function that takes a string of lowercase chars (str) and returns an integer representing the length of the longest part of str without using any character twice.

E:

"a") === 1

- if the input has only one character, the output will always be 1.

"aa") === 1

- If the input contains the same character repeated, length is irrelevant - the output will be 1.

"ab") === 2

- HP: 2 chars, output === str.length

"abba") === 2

- "ab"

"abc") === 3

- "abc"

"helloworld") === 5

- "world"

"dvdf") === 3

- "vdf"

"tmmzuxt") === 5

- "mzuxt"

"thisishowwedoit") === 6

- "wedoit"

"longestsubstring") === 8

- "ubstring"

"aabbccddeffghijklmno") === 10

- "fghijklmno"

"abcdefghijklmnopqrstuvwxyz") === 26

- "abcdefghijklmnopqrstuvwxyz"

D:

2 pointers

A:

"thisishowwedoit") === 6

- "wedoit"

- initialize start pointer = 0
- initialize end pointer = 1
- initialize length of longest substring  (LOLS)= 1
- initialize seen as array with just string[start] in it

- while start pointer < string length - longest substring
  - if seen array includes? (for now) letter then:
    - set start to end
    - set seen to str[end]
  - else:
    - set LOLS to end - start.

- return LOLS


C:
*/


function longestSubstringLength(string) {
  let start = 0;
  let end = 1;
  let lols = 1;
  let seen = {
    
  };
// "longestsubstring") === 8

// - "ubstring"
  while (end <= string.length) {
    if (seen.includes(string[end])) {
      start++;
      seen = [string[start]];
      end = start;
    } else {
      lols = Math.max(lols, seen.length);
      seen.push(string[end])
    }
    end++;
  }
  
  return lols;
}

function test(act, exp) {
  if (act === exp) {
    console.log('(-:');
  } else {
    console.log(`expected ${exp}, instead got ${act}`);
  }
}

test(longestSubstringLength("a"), 1);
test(longestSubstringLength("aa"), 1);
test(longestSubstringLength("ab"), 2);
test(longestSubstringLength("abba"), 2);
test(longestSubstringLength("abc"), 3);
test(longestSubstringLength("helloworld"), 5);
test(longestSubstringLength("dvdf"), 3);
test(longestSubstringLength("tmmzuxt"), 5);
test(longestSubstringLength("thisishowwedoit"), 6);
test(longestSubstringLength("longestsubstring"), 8);
test(longestSubstringLength("aabbccddeffghijklmno"), 10);
test(longestSubstringLength("abcdefghijklmnopqrstuvwxyz"), 26);
