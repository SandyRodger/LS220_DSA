/*

https://launchschool.com/lessons/aac32d42/assignments/38ddc9e6

You are given a string `s` consisting of lowercase English letters.
Your task is to find all possible ways to partition the string such
that each substring in the partition is a palindrome.

A palindrome is a string that reads the same backward as forward.
Return all possible palindrome partitionings of the string `s`.

Example 1:
Input: s = "x"
Output: [["x"]]
Explanation: A single character is always a palindrome.

Example 2:
Input: s = "abba"
Output: [["a","b","b","a"], ["a","bb","a"], ["abba"]]
Explanation:
The string can be partitioned as ["a","b","b","a"] where each
character is treated as a palindrome.
It can be partitioned as ["a","bb","a"] where "a" and "bb" are palindromes.
The entire string "abba" is also a palindrome, so ["abba"] is valid.

HINT:

Consider how you can make sure that partitions that are included in the candidate array are no longer a possible option in a given string. We've already done something similar when dealing with arrays in the backtracking problems we've covered so far.

P:

Write a function that takes a string ("s") of lowercase letters and returns a 2D array wherein each subarray contains a unique collection of palindromes from the input string. 

- A single string is a valid palindrome => "and" => ["a", "n", "d"];
- If the whole string is a palindrome the output can contain that string => 
  "hannah" => ["h", "a", "n", "n", "a", "h", "nn", "anna", "hannah"];

Naive steps:

  1. write it out by hand
  2. define branching logic

    - 

  3. define terminal condition
  4. define success condition
  5. Optimise pruning.

Considerations:
  - oddly lengthed strings will have a central pivot char, evenly lengthed strings will not. 

E:

Example 1:
Input: s = "x"
Output: [["x"]]
Explanation: A single character is always a palindrome.

Example 2:
Input: s = "abba"
Output: [["a","b","b","a"], ["a","bb","a"], ["abba"]]
Explanation:
The string can be partitioned as ["a","b","b","a"] where each
character is treated as a palindrome.
It can be partitioned as ["a","bb","a"] where "a" and "bb" are palindromes.
The entire string "abba" is also a palindrome, so ["abba"] is valid.

Example 3:

'aab' => [['a', 'a', 'b'], (all single letters)
          ['aa', 'b']] (starting from the left ?)

Example 4:
'aabaa' => [
    ['a', 'a', 'b', 'a', 'a'], (all single letters)
    ['a', 'a', 'b', 'aa'], (starting from the right?)
    ['a', 'aba', 'a'],
    ['aa', 'b', 'a', 'a'],
    ['aa', 'b', 'aa'],
    ['aabaa'], [Ending with the longest palindrome, which might be the whole input string]
  ])
);

console.log(
  testPartitionWithPalindromes('abcba', [
    ['a', 'b', 'c', 'b', 'a'], => repetition valid, 2 bs, 2 as
    ['a', 'bcb', 'a'],
    ['abcba'],
  ])
);

console.log(
  testPartitionWithPalindromes('racecar', [
    ['r', 'a', 'c', 'e', 'c', 'a', 'r'], 
    ['r', 'a', 'cec', 'a', 'r'],
    ['r', 'aceca', 'r'],
    ['racecar'],
  ])
);

console.log(
  testPartitionWithPalindromes('abcdefgfedcba', [
    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'f', 'e', 'd', 'c', 'b', 'a'], build from small to big
    ['a', 'b', 'c', 'd', 'e', 'fgf', 'e', 'd', 'c', 'b', 'a'],
    ['a', 'b', 'c', 'd', 'efgfe', 'd', 'c', 'b', 'a'],
    ['a', 'b', 'c', 'defgfed', 'c', 'b', 'a'],
    ['a', 'b', 'cdefgfedc', 'b', 'a'],
    ['a', 'bcdefgfedcb', 'a'],
    ['abcdefgfedcba'],
  ])
);

console.log(
  testPartitionWithPalindromes('abbaabba', [
    ['a', 'b', 'b', 'a', 'a', 'b', 'b', 'a'],
    ['a', 'b', 'b', 'a', 'a', 'bb', 'a'], -> start from the right. Why?
    ['a', 'b', 'b', 'a', 'abba'],
    ['a', 'b', 'b', 'aa', 'b', 'b', 'a'],
    ['a', 'b', 'b', 'aa', 'bb', 'a'], -> why stop the 2 letter combos here?
    ['a', 'b', 'baab', 'b', 'a'], -> why not continue to 'bbaabb' ? What is this terminal condition?
    ['a', 'bb', 'a', 'a', 'b', 'b', 'a'],
    ['a', 'bb', 'a', 'a', 'bb', 'a'],
    ['a', 'bb', 'a', 'abba'],
    ['a', 'bb', 'aa', 'b', 'b', 'a'],
    ['a', 'bb', 'aa', 'bb', 'a'],
    ['a', 'bbaabb', 'a'],
    ['abba', 'a', 'b', 'b', 'a'],
    ['abba', 'a', 'bb', 'a'],
    ['abba', 'abba'],
    ['abbaabba'],
  ])
);


D:
A:
C:
*/

function allPalindromePartitions(str) {
  return []
}

function testPartitionWithPalindromes(s, expected) {
    const result = allPalindromePartitions(s);
    if (result.length !== expected.length) return false;

    const stringifyPartition = partition => partition.map(subset => subset.join(',')).sort().join('|');
    const resultSet = new Set(stringifyPartition(result));
    const expectedSet = new Set(stringifyPartition(expected));

    return resultSet.size === expectedSet.size &&
           [...resultSet].every(item => expectedSet.has(item));
}

console.log(
  testPartitionWithPalindromes('aab', [
    ['a', 'a', 'b'],
    ['aa', 'b'],
  ])
);

console.log(
  testPartitionWithPalindromes('aabaa', [
    ['a', 'a', 'b', 'a', 'a'],
    ['a', 'a', 'b', 'aa'],
    ['a', 'aba', 'a'],
    ['aa', 'b', 'a', 'a'],
    ['aa', 'b', 'aa'],
    ['aabaa'],
  ])
);

console.log(
  testPartitionWithPalindromes('abcba', [
    ['a', 'b', 'c', 'b', 'a'],
    ['a', 'bcb', 'a'],
    ['abcba'],
  ])
);

console.log(
  testPartitionWithPalindromes('racecar', [
    ['r', 'a', 'c', 'e', 'c', 'a', 'r'],
    ['r', 'a', 'cec', 'a', 'r'],
    ['r', 'aceca', 'r'],
    ['racecar'],
  ])
);

console.log(
  testPartitionWithPalindromes('abcdefgfedcba', [
    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'f', 'e', 'd', 'c', 'b', 'a'],
    ['a', 'b', 'c', 'd', 'e', 'fgf', 'e', 'd', 'c', 'b', 'a'],
    ['a', 'b', 'c', 'd', 'efgfe', 'd', 'c', 'b', 'a'],
    ['a', 'b', 'c', 'defgfed', 'c', 'b', 'a'],
    ['a', 'b', 'cdefgfedc', 'b', 'a'],
    ['a', 'bcdefgfedcb', 'a'],
    ['abcdefgfedcba'],
  ])
);

console.log(
  testPartitionWithPalindromes('abbaabba', [
    ['a', 'b', 'b', 'a', 'a', 'b', 'b', 'a'],
    ['a', 'b', 'b', 'a', 'a', 'bb', 'a'],
    ['a', 'b', 'b', 'a', 'abba'],
    ['a', 'b', 'b', 'aa', 'b', 'b', 'a'],
    ['a', 'b', 'b', 'aa', 'bb', 'a'],
    ['a', 'b', 'baab', 'b', 'a'],
    ['a', 'bb', 'a', 'a', 'b', 'b', 'a'],
    ['a', 'bb', 'a', 'a', 'bb', 'a'],
    ['a', 'bb', 'a', 'abba'],
    ['a', 'bb', 'aa', 'b', 'b', 'a'],
    ['a', 'bb', 'aa', 'bb', 'a'],
    ['a', 'bbaabb', 'a'],
    ['abba', 'a', 'b', 'b', 'a'],
    ['abba', 'a', 'bb', 'a'],
    ['abba', 'abba'],
    ['abbaabba'],
  ])
);

