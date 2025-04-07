/*

Problem: Generate All Interleavings of Two Strings

Write a backtrackrsive function that takes two strings as input and returns an array of all possible interleavings of the two strings while maintaining their relative order.

P:

- Write a function that takes two strings and returns an array containing all permutations of the two strings that follow the following rules:
  - same length as str1 length and str2 length.
  - If a char comes after another char in the input, then it must come somewhere after that char in the output.
- The function must use backtrackrsion

Key-points:

- "relative order" means in string 1 a is before b, a must always be before b. 
-                        in string 2 c is before d, c must always be before d. 
- So once a pointer moves right it cannot move back?

E:

"ab", "cd" // ["abcd", "acbd", "acdb", "cabd", "cadb", "cdab"]

"a"s
  "abcd"
    - [a + b] + [c + d] => smush both together
    - [0][0] + [0][1] + [1][0] + [1][1]
  "acbd"
    - [0][0] + [1][0] + [0][1] + [1][1]
  "acdb"
    - [0][1] + [1][0] + [1][1] + [0][1]

"c"s
  "cabd"
    - [1][0] + [0][0] + [0][1] + [1][1]
  "cadb"
    - [1][0] + [0][0] + [1][1] + [0][1]
  "cdab"
    - [1][0] + [1][1] + [0][0] + [0][1]
    - last iteration is the opposite of the first



4 letters = > 6 permutations:

index 1 pointer (i1)
index 2 pointer (i2)

Question: how do I build the string iteratively without mutating the other strings in the other backtrackrsive calls? Back tracking? str -> array then push/call/pop.

["abcd", "acbd", "acdb", "cabd", "cadb", "cdab"]

i1:0                         backtrackrsiveFunc(string, 0, 0)
  i1:1                       backtrackrsiveFunc(0, 0), backtrackrsiveFunc(0, 0)
    i2:0
      i2:1 => "abcd"
  i2: 0
    i1:1
      i2:1 => "acbd"
    i2:2
      i1:2 => "acdb"
i2:0
  i1:0
    i1:1
      i2:1 => "cabd"
    i2:1
      i1:1 => "cadb"
  i2:1
    i1:0
      i1:1 => "cdab"


------------------------------------------------------------------------

["abcd", "acbd", "acdb", "cabd", "cadb", "cdab"]

- Deal with strings that have "a" at index 0

String = "a"
i1 = 0
i2 = 0

  - Deal with strings that have "b" at index 1 

  String = "ab"
  i1 = 1
  i2 = 0

    - Deal with strings that have "c" at index 2

      String = "abc"
      i1 = 1
      i2 = 0

      -  Deal with strings that have "d" at index 3 => "abcd"

            String = "abcd"
            i1 = 1
            i2 = 1

  - Deal with strings that have "c" at index 1

            String = "ac"
            i1 = 1
            i2 = 0

    - Deal with strings that have "b" at index 2
      - Deal with strings that have "d" at index 3 => "acbd"
    - Deal with strings that have "d" at index 2
      - Deal with strings that have "b" at index 3 => "acdb"
- Deal with strings that have "c" at index 0
  - Deal with strings that have "a" at index 1
    - Deal with strings that have "b" at index 2
      -  Deal with strings that have "d" at index 3 => "cabd"
  - Deal with strings that have "a" at index 1
    - Deal with strings that have "d" at index 2
      - Deal with strings that have "b" at index 3 => "cadb"
    - Deal with strings that have "a" at index 2
      - Deal with strings that have "b" at index 3 => "cdab"

D:

- pointers ? Or just shift() from the left hand side

backtrackrsion:
  - base case:
    -  when the string has the right number of chars in it (when it's full)
    OR when I've emptied the arrays of all available chars.
  - backtrackrsive definition
    - pass in sorted chars ( ie candidate) and unsorted chars (ie candidates)

generateInterleavings("ab", "cd"); // ["abcd", "acbd", "acdb", "cabd", "cadb", "cdab"]

---------------------------------------------------------------------
sortedChars = []
chars1 = ["a", "b"];
chars2 = ["c", "d"]

clipping1 = chars1.shift()
backtrack(sortedChars+clipping1, [...chars1], [...chars2])
chars1.unshift(clipping1)

clipping2 = chars2.shift()
backtrack(sortedChars+"c", chars1, chars2)
---------------------------------------------------------------------
sortedChars = ["a"]
chars1 = ["b"];
chars2 = ["c", "d"]

clipping1 = chars1.shift() => "b"
backtrack(sortedChars+clipping1, [...chars1], [...chars2])
chars1.unshift(clipping1)

clipping2 = chars2.shift() => "c"
backtrack(sortedChars+"c", chars1, chars2)


Index 0:

  - recursive method(index 0 of string 1) "a"
    - remove that from the potential chars ([b], [c, d])
  
  Index 1:

    - recursive method(index 1 of string 1) "b"
      - remove that from the potential chars ([c, d])

    Index 2:

      - recursive method(index 0 of string 2) "c"
        - remove that from the potential chars ([d])

      Index 3:

        - recursive method(index 1 of string 2) "d"
          - remove that from the potential chars ()

    - recursive method(index 1 of string 2) "d"
      - remove that from the potential chars ([a, b], [d])
  - recursive method(index 0 of string 2) "c"
    - remove that from the potential chars ([a, b], [d])

A:

VARIABLES:

candidates1 ->   let chars1 = Array.from(s1);
candidates2 ->   let chars2 = Array.from(s2);
targetLength -> s1.length + s2.length;

- On each iteration start a recursive method for both possible chars at next index:
- base case: when you have targetLength
- otherwise
  - store next char in candidate
  - call recursive function with leftmost char in candidates1
    - candidates1 will be candidates1 from index 1 onwards
    - candidates2 will be all chars2
  - call recursive function with leftmost candidate in chars2
    - candidates2 will be candidates2 from index 1 onwards
    - candidates1 will be all chars1

generateInterleavings("ab", "cd"); // ["abcd", "acbd", "acdb", "cabd", "cadb", "cdab"]

C:
*/

function generateInterleavings(s1, s2) {

  let candidates1 = Array.from(s1);
  let candidates2 = Array.from(s2);
  const targetLength = s1.length + s2.length;

  function backtrack(candidates1, candidates2, candidate, result) {
    if (candidate.length === targetLength) {
      result.push(candidate.join(''));
      return;
    }

    if (candidates1.length) {
      candidate.push(candidates1[0])
      backtrack(candidates1.slice(1), [...candidates2], [...candidate], result)
      candidate.pop();
    }

    if (candidates2.length) {
      candidate.push(candidates2[0])
      backtrack([...candidates1], candidates2.slice(1), [...candidate], result)
      candidate.pop();
    }
  }

  const result = [];
  const candidate = [];
  backtrack(candidates1, candidates2, candidate, result);
  return result;
}


// let r = generateInterleavings("ab", "cd"); // ["abcd", "acbd", "acdb", "cabd", "cadb", "cdab"]
let r2 = generateInterleavings("log", "jam"); // 
console.log(r2)