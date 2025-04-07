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

Consider how you can make sure that subStrings that are included in the candidate array are no longer a possible option in a given string. We've already done something similar when dealing with arrays in the backtracking problems we've covered so far.

P:

Write a function that takes a string (inputStr) and returns a 2D array. In each subArray there will be subStrings from inputStr. 

Each subArray must:
  - contain every letter from inputStr as:
    - minimum 1 subString (where the string is just the input)
    - Maximum inputString.length substrings (where each substring is a single char)
  - contain only palindromes:
    - a single char is considered a palindrome.

CONFUSINGLY: 

- this problem uses the word "partition" to describe individual subStrings, the subArray containing the subStrings and the gaps between subStrings.

- you can repeat palindromes, but you can't use the same chars more than once in a subArray.

Naive Problem solving steps:

Step 1: Solve a Simple Version by Hand:

input : "racecar"

index (length) :

- iterate through starting lengths, inputStr.length down to 1 (n)
- 
          


Step 2: Define Naive Branching Logic:



Step 3: Define the Dead-End Conditions:



Step 4: Define the Success Conditions

- When the candidate array has the same number of elements as the input string

A:

- 

*/

function allPalindromesubStrings(str) {

  const chars = str.split('');

  function isPali(left, right) {
    while (left <= right) {
      if (chars[left] !== chars[right]) {return false}
      left++;
      right--;
    }
    return true;
  }

  function backtrack(candidate, l, r) {

    console.log(`r: ${r}`)
    console.log(`l: ${l}`)
    console.log(`candidate: ${candidate}`)
    console.log('-----------')

    if (r > chars.length || (r - l) === chars.len) {
      result.push([...candidate]);
      return;
    }

    for (partition = l; partition < r; partition++) {

      if (!isPali(partition, r)) { // if the chars to the right of partition are not a palindrome
        // console.log('nooob')
        continue;
      }

      candidate.push(chars.slice(partition, r).join(''));  // take a copy
      // console.log(candidate);
      backtrack(candidate, 0, partition);  // explore left
      backtrack(candidate, r, chars.length - 1);  // explore right
    }
  }

  const result = [];
  const candidate = [];
  let l = 0;
  r = chars.length;
  backtrack(candidate, l, r);
  return result;
}

// console.log(
//   allPalindromesubStrings('aabaa', [
//     ['a', 'a', 'b', 'a', 'a'],
//     ['a', 'a', 'b', 'aa'],
//     ['a', 'aba', 'a'],
//     ['aa', 'b', 'a', 'a'],
//     ['aa', 'b', 'aa'],
//     ['aabaa'],
//   ])
// );

console.log(allPalindromesubStrings('racecar'));

function testPartitionWithPalindromes(s, expected) {
    const result = allPalindromesubStrings(s);
    if (result.length !== expected.length) return false;

    const stringifyPartition = partition => partition.map(subset => subset.join(',')).sort().join('|');
    const resultSet = new Set(stringifyPartition(result));
    const expectedSet = new Set(stringifyPartition(expected));

    return resultSet.size === expectedSet.size &&
           [...resultSet].every(item => expectedSet.has(item));
}

// console.log(
//   testPartitionWithPalindromes('aab', [
//     ['a', 'a', 'b'],
//     ['aa', 'b'],
//   ])
// );

// console.log(
//   testPartitionWithPalindromes('aabaa', [
//     ['a', 'a', 'b', 'a', 'a'],
//     ['a', 'a', 'b', 'aa'],
//     ['a', 'aba', 'a'],
//     ['aa', 'b', 'a', 'a'],
//     ['aa', 'b', 'aa'],
//     ['aabaa'],
//   ])
// );

// console.log(
//   testPartitionWithPalindromes('abcba', [
//     ['a', 'b', 'c', 'b', 'a'],
//     ['a', 'bcb', 'a'],
//     ['abcba'],
//   ])
// );

// console.log(
//   testPartitionWithPalindromes('racecar', [
//     ['r', 'a', 'c', 'e', 'c', 'a', 'r'],
//     ['r', 'a', 'cec', 'a', 'r'],
//     ['r', 'aceca', 'r'],
//     ['racecar'],
//   ])
// );

// console.log(
//   testPartitionWithPalindromes('abcdefgfedcba', [
//     ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'f', 'e', 'd', 'c', 'b', 'a'],
//     ['a', 'b', 'c', 'd', 'e', 'fgf', 'e', 'd', 'c', 'b', 'a'],
//     ['a', 'b', 'c', 'd', 'efgfe', 'd', 'c', 'b', 'a'],
//     ['a', 'b', 'c', 'defgfed', 'c', 'b', 'a'],
//     ['a', 'b', 'cdefgfedc', 'b', 'a'],
//     ['a', 'bcdefgfedcb', 'a'],
//     ['abcdefgfedcba'],
//   ])
// );

// console.log(
//   testPartitionWithPalindromes('abbaabba', [
//     ['a', 'b', 'b', 'a', 'a', 'b', 'b', 'a'],
//     ['a', 'b', 'b', 'a', 'a', 'bb', 'a'],
//     ['a', 'b', 'b', 'a', 'abba'],
//     ['a', 'b', 'b', 'aa', 'b', 'b', 'a'],
//     ['a', 'b', 'b', 'aa', 'bb', 'a'],
//     ['a', 'b', 'baab', 'b', 'a'],
//     ['a', 'bb', 'a', 'a', 'b', 'b', 'a'],
//     ['a', 'bb', 'a', 'a', 'bb', 'a'],
//     ['a', 'bb', 'a', 'abba'],
//     ['a', 'bb', 'aa', 'b', 'b', 'a'],
//     ['a', 'bb', 'aa', 'bb', 'a'],
//     ['a', 'bbaabb', 'a'],
//     ['abba', 'a', 'b', 'b', 'a'],
//     ['abba', 'a', 'bb', 'a'],
//     ['abba', 'abba'],
//     ['abbaabba'],
//   ])
// );

