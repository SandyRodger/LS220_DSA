/*

https://www.geeksforgeeks.org/the-celebrity-problem/

Given a square matrix mat[][] of size n x n, such that mat[row][column] = 1 means rowth person knows columnth person, the task is to find the celebrity. A celebrity is a person who is known to all but does not know anyone. Return the index of the celebrity, if there is no celebrity return -1.

Do this in O(n) time and O(n) space.

Note: Follow 0-based indexing and mat[i][i] will always be 1.

Examples:  

Input: mat[][] = [[1, 1, 0],    
                  [0, 1, 0], 
                  [0, 1, 1]]
Output: 1
Explanation: 0th and 2nd person both know 1. Therefore, 1 is the celebrity.


Input: mat[][] = [[1, 1], 
                            [1, 1]]
Output: -1
Explanation: The two people at the party both know each other. None of them is a celebrity.


Input: mat[][] = [[1]]
Output: 0

P:

Write a function that takes a 2D array containing 0s and 1s. Analyse each position in the array and return the number that coresponds to a row and column which fulfill the following conditions:

Input: mat[][] = [[1, 1, 0],    
                  [0, 1, 0], 
                  [0, 1, 1]]
- Each index number represents a person. Because we know that the input matrix will have equal height and breadth we know that each person will appear once in every colum and once in every row.
- the row number represents the knower
- the column number represents the known

- They know no-one:
  - this column contains only 1s
- They are known by all:
  - with the exception of themselves, their row contains only 0s.

E:

people = 0, 1, 2 (3 people at the party)

Input: mat[][] = [[1, 1, 0],    
                  [0, 1, 0], 
                  [0, 1, 1]]

[[0][0]] is 1 meaning person 0 knows person 0, so if row and columna are the same it means nothing because it's saying a person knows themselves. (so I'll skip [1][1] and [2][2]).

[0][1] (1) means person 0 knows person 1
[0][2] (0) means person 0 does not know person 2
[1][0] (0) person 1 does not know person 0
[1][2] (0) person 1 does not now person 2
[2][0] (0) person 2 doesn't know 0
[2][1] (1) person 2 knows person 1

person0 
  -knows:
    - 1
  - is known by:
    - 2
person1
  - knows
    - nobody
  - is known by
    - 1 and 2
person2
  - knows
    - 1
  - is known by
    - no one

const matrix1 = [[1, 1, 0],    
                 [0, 1, 0], 
                 [0, 1, 1]];
test(1, 1, findCelebrity(matrix1))

const matrix2 = [[1, 1, 0, 1, 1],    
                 [0, 1, 0, 0, 0], 
                 [0, 1, 1, 0, 0], 
                 [0, 1, 0, 1, 0], 
                 [0, 1, 1, 0, 1]];
test(2, 1, findCelebrity(matrix2))

- same as example 1, but bigger

const matrix3 = [[1, 1, 0, 1, 1],    
                 [0, 1, 0, 0, 0], 
                 [0, 0, 1, 0, 0], 
                 [0, 1, 0, 1, 0], 
                 [0, 1, 1, 0, 1]];
test(3, -1, findCelebrity(matrix3));

- if there's no celebrity return -1

const matrix4 = [[1, 0, 1, 1, 1],    
                 [0, 1, 1, 0, 0], 
                 [0, 0, 1, 0, 0], 
                 [0, 0, 1, 1, 0], 
                 [0, 0, 1, 0, 1]];
test(4, 2, findCelebrity(matrix4))

  - there can only ever be 1

D:

- I need to find the index coresponding to:
  - a column full of ones and 
  - a row with row-length - 1 0s
- I know I need to use a (or multiple) stack

(we ignore the diagonals)

iteration 1: check row 0 and column 0
  - if 
    - [0][1] is 0 and [0][2] is 0 AND [1][0] is a 1 and [2][0] is a 1 -> bingo
iteration 2:
  - if 
    - [1][0] is 0 and [1][2] is 0 AND [0][1] is a 1 and [2][1] is a 1 -> bingo 
Iteration 3:
  - if 
    - [2][0] is 0 and [2][1] is 0 AND [0][2] is a 1 and [1][2] is a 1 -> bingo 

What if I pop off the rows

---------------------------------------------------
Iteration 1:
- i = 0
- row = [1, 1, 0]

----- having peeked at the algorithm---------

If A knows B, then A can’t be a celebrity. Discard A, and B may be celebrity.
If A doesn’t know B, then B can’t be a celebrity. Discard B, and A may be celebrity.
Repeat above two steps till there is only one person.
Ensure the remained person is a celebrity. 

const matrix1 = [[1, 1, 0],    
                 [0, 1, 0], 
                 [0, 1, 1]];

test(1, 1, findCelebrity(matrix1))

[[0][1]] ->  person 0 knows person 1, so person 0 can't be a celebrity
[[1][2] -> person 1 knows does not know person 2, so person 2 can't be a celebrity
[1 is the only person left]

A:

- create an array of candidates ( [0, 1, 2] )
- pop off each number and check it against the number before

----------------------------

[0, 1, 2]
let a = stack.pop()
let b = stack.pop()

if matrix[a][b] is 1
  - a can't be a celebrity
  - b can, so push b back on
else
  - b cannot be a celebrity
  - push a back on

when the stack has only one elem left, that's it.


C:

*/

function findCelebrity(matrix) {
  let candidates = Array.from({length: matrix.length}, (_, i) => i);

  while (candidates.length > 1) {

    let a = candidates.pop();
    let b = candidates.pop();

    if (matrix[a][b] === 1) candidates.push(b)
    if (matrix[b][a] === 1) candidates.push(a)
  }

  let lastCandidate = candidates.pop()

  if (matrix[lastCandidate].filter((num) => num === 0).length !== matrix.length - 1 ||
      !matrix.every((row) => row[lastCandidate] === 1)) {
      return -1
  } else {
    return lastCandidate;
  }
  
}

function test(num, exp, act) {
  if (exp !== act) {
    console.log('----------------')
    console.log(`example: ${num}`)
    console.log(`expected ${exp}`)
    console.log(`actually got: ${act}`)
  } else {
    console.log(`(-:`)
  }
}

const matrix1 = [[1, 1, 0],    
                 [0, 1, 0], 
                 [0, 1, 1]];
test(1, 1, findCelebrity(matrix1))

const matrix2 = [[1, 1, 0, 1, 1],    
                 [0, 1, 0, 0, 0], 
                 [0, 1, 1, 0, 0], 
                 [0, 1, 0, 1, 0], 
                 [0, 1, 1, 0, 1]];
test(2, 1, findCelebrity(matrix2))

const matrix3 = [[1, 1, 0, 1, 1],    
                 [0, 1, 0, 0, 0], 
                 [0, 0, 1, 0, 0], 
                 [0, 1, 0, 1, 0], 
                 [0, 1, 1, 0, 1]];
test(3, -1, findCelebrity(matrix3));

const matrix4 = [[1, 0, 1, 1, 1],    
                 [0, 1, 1, 0, 0], 
                 [0, 0, 1, 0, 0], 
                 [0, 0, 1, 1, 0], 
                 [0, 0, 1, 0, 1]];
test(4, 2, findCelebrity(matrix4))
