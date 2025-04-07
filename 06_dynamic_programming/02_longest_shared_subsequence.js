/*

https://launchschool.com/lessons/6165017e/assignments/dab92647

You are given two strings. Your task is to find the length of
the longest subsequence that is shared between both strings.

A subsequence is a sequence that can be derived from another
sequence by deleting some or no elements without changing the
order of the remaining elements. For example, "ace" is a
subsequence of "abcde".

Implement a function `longestSharedSubsequence` that takes
two strings as input and returns the length of the longest
shared subsequence between them.

Example 1:
Input: str1 = "abcde", str2 = "ace"
Output: 3
Explanation: The longest shared subsequence is "ace" and its length is 3.

Example 2:
Input: str1 = "abcbdab", str2 = "bdcaba"
Output: 4
Explanation: There are three shared subsequences with length 4.
             'bcab', 'bcba', and 'bdab'.

Example 3:
Input: str1 = "xmjyauz", str2 = "mzjawxu"
Output: 4
Explanation: The longest shared subsequence is "mjau".

P:

Write a function which takes 2 strings (of lowercase chars) and returns an integer representing the length of the longest possible substring of String 2 that fulfills these conditions:
  - Only has letters from str1
  - These letters are in the same order as in str1.

  - so the largest output will be substring2's length
  - and if there is nothing of str2 in str1 then return 0

- I'll brute force it first, then try DP

E:

"abcde", "ace" => 3

  - a (not b) c (not d) e

"abcbdab", "bdcaba" => 4

  - bdab

"xmjyauz", "mzjawxu" => 4

  - mjau

"abcdgh", "aedfhr" => 3

  - adh

"aggtab", "gxtxayb" => 4

  - gtab

"aaaa", "aa" => 2

  - aa

"aaaa", "bb" => 0

  - ""

"", "abcd" => 0

  - 0

"abcd", "" => 0

  - 0

"", "" => 0

  - 0

"a", "a" => 1

  - "a"

"zyxwvutsrqp", "abcdefghijklmnop" => 1

  - "p"

"abcabcabc", "acbacbacb" => 6

  - abcbac

"aaaaabbbbb", "bbbbbaaaaa" => 5

  - aaaaa or bbbbb

"abcdabcdabcd", "abcdabcdabcd" => 12

  - "abcdabcdabcd" (str1 === str2)

D:

- save results in an empty string
- search str1 from the left, if you find a char that is included in str2 then save it in a map with the key as the char and the index as the value
- reverse string and repeat, but with characters from the end of str2
  - if you find a match save it to the cache

HELPER FUNCTION: ???

A:

VARIABLES:

result = {} 
chars1 = an array of str1
chars2 = an array of str2



while chars1 isn't empty
  targetChar= chars2.shift()
  - search chars1 from the left
    - if you find targetChar
      - save it in an object with the key as the char and the index as the value
      - chop off chars1 (inculding this char) to the left of this point.
      - quit this iteration

  - set targetChar as arr2.pop()
  - search chars 1 from the right
    - if you find targetChar
      - save it in an object with the key as the char and the index as the value
      - chop off chars1 to the left of this point.
      - quit this iteration
    - if you get to the end and there's no targetChar finish

- return however many properties are in results

C:
*/


function longestSharedSubsequence(str1, str2) {

  let result = {} 
  let chars1 = str1.split(''); // [ 'a', 'b', 'c', 'd', 'e' ]
  let chars2 = str2.split(''); // [ 'a', 'c', 'e' ]
  let counter = 10

  function searchCharsFromLeft(chars, targetChar, result) {
    // console.log('--------------------')
    // console.log(`chars is ${chars}, targetChars is ${targetChar}`)
    for (i=0; i < chars1.length; i++) {
      // console.log(`char at index is ${chars1[i]}`);
      if (chars[i] === targetChar) {
        result[targetChar] = i;
        // console.log()
        return chars.splice(i+1) // [ 'b', 'c', 'd' ]
      }
    }
  }

  function searchCharsFromRight(chars, targetChar, result) {
    
    for ( i = chars.length - 1; i > 0; i--) {
      if (chars[i] === targetChar) {
        result[targetChar] = i;
        chars.splice(i);
        return chars
      }

//     - if you get to the end and there's no targetChar finish
    }
  }

  while (!!chars1 && chars1.length > 0) {
    // console.log(chars1);
    counter--;
    // console.log(result)
    chars1 = searchCharsFromLeft(chars1, chars2.shift(), result);
    chars1 = searchCharsFromRight(chars1, chars2.pop(), result);

    if (counter < 0) {return}
    // console.log(result)
  }

// - return however many properties are in results
  return Object.keys(result).length;;
}

test(longestSharedSubsequence("abcde", "ace"), 3);
test(longestSharedSubsequence("abcbdab", "bdcaba"), 4);
test(longestSharedSubsequence("xmjyauz", "mzjawxu"), 4);
test(longestSharedSubsequence("abcdgh", "aedfhr"), 3);
test(longestSharedSubsequence("aggtab", "gxtxayb"), 4);
test(longestSharedSubsequence("aaaa", "aa"), 2);
test(longestSharedSubsequence("aaaa", "bb"), 0);
test(longestSharedSubsequence("", "abcd"), 0);
test(longestSharedSubsequence("abcd", ""), 0);
test(longestSharedSubsequence("", ""), 0);
test(longestSharedSubsequence("a", "a"), 1);
test(longestSharedSubsequence("zyxwvutsrqp", "abcdefghijklmnop"), 1);
test(longestSharedSubsequence("abcabcabc", "acbacbacb"), 6);
test(longestSharedSubsequence("aaaaabbbbb", "bbbbbaaaaa"), 5);
test(longestSharedSubsequence("abcdabcdabcd", "abcdabcdabcd"), 12);

function test(act, exp) {
  if (act === exp) {
    console.log(`(-:`);
  } else {
    console.log(`expected: ${exp}, actually got ${act}`);
  }
}

// LS solution:

function longestSharedSubsequence(s1, s2){
  const cache = new Map();

  const helper = (len1, len2) => {
    const key = `${len1}, ${len2}`;
    if (cache.has(key)) {
      return cache.get(key);
    }

    if (len1 === 0 || len2 === 0) {
      return 0;
    }

    let result;
    if (s1[s1.length - len1] === s2[s2.length - len2]) {
      result = 1 + helper(len1 - 1, len2 - 1);
    } else {
      result = Math.max(helper(len1, len2 - 1), helper(len1 - 1, len2));
    }

    cache.set(key, result);
    return result;
  };

  return helper(s1.length, s2.length);
}