// Certainly! I'd be happy to generate some practice questions to help you reinforce your understanding of sets and maps in the context of LS220: Introduction to Data Structures and Algorithms. These questions will help you apply the concepts you've learned and prepare for your upcoming assessment. Remember, practice is key to mastering these concepts!

// Here are some questions to help you practice:

// 1.  Given an array of integers, write a function that returns the number of unique elements using a Set. How does the time complexity of this solution compare to using nested loops?

// let arr = [1, 2, 3, 4, 5 ,6, 6, 6, 6, 1, 1, 1];

// function uniqueElems(arr) {
//   let uniqNums = new Set();
//   for (let i = 0; i < arr.length; i++) {
//     uniqNums.add(arr[i]);
//   }
//   return uniqNums.size;
// }

// let r = uniqueElems(arr);
// console.log(r)

// 2.  Implement a function that takes two arrays and returns their intersection (common elements) using Sets. What's the benefit of using Sets for this problem?

// let arr1 = [1, 2, 2, 3, 4, 4, 5];
// let arr2 = [3, 3, 5, 5, 'a', 'a', false];

// function freqyElems(arr1, arr2) {
//   let uniq1 = new Set(arr1);
//   return new Set(arr2.filter((elem) => uniq1.has(elem)))
// }

// let r2 = freqyElems(arr1, arr2);
// console.log(r2)

// the benefit is that you can easily eliminate duplicates.

// 3.  Create a function that counts the frequency of each element in an array using a Map. How would you sort the elements by their frequency?

let arr2 = [3, 3, 5, 5, 'a', 'a', false];

function countElems(arr) {
  let myMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (myMap.has(arr[i])) {
      myMap.set(arr[i], myMap.get(arr[i]) + 1);
    } else {
      myMap.set(arr[i], 1)
    }
  }
  let mapArray = Array.from(myMap)
  return mapArray.sort((a, b) => a [1]- b[1])
}

let r = countElems(arr2)
// console.log(r)

// 4.  Implement a simple spell checker using a Set. Given a dictionary of correct words and a sentence, return all misspelled words.

let dictionary = ["goat", "barbarian", "fruit", "spanner", "a", "tasty", "and", "bent"];
let setDictionary = new Set(dictionary);
let sentence1 = "A tasty goat and a bent spanner";
let sentence2 = "bent barbarian fruit glove"
let sentence3 = "gout barbaryan"

function spellChecker(sentence) {
  let words = sentence.split(' ');
  for (let i = 0; i < words.length; i++) {
    if (!setDictionary.has(words[i])) {
      console.log(`Actually ${words[i]} is not a valid word`)
    }
  }
}

spellChecker(sentence1);
spellChecker(sentence2);
spellChecker(sentence3);
// 5.  Write a function that determines if two strings are anagrams using a Map. How does this solution compare to sorting the strings?
// 6.  Implement a cache with a maximum size using a Map. When the cache is full, remove the least recently used item before adding a new one.
// 7.  Given a string, find the first non-repeating character using a Map. What's the time complexity of your solution?
// 8.  Implement a function that removes duplicates from an array while maintaining the original order of elements. Use both a Set and a Map to solve this, and compare the two approaches.
// 9.  Create a function that groups anagrams from an array of strings using a Map. How would you handle edge cases like empty strings or non-alphabetic characters?
// 10. Implement a basic graph using a Map where the keys are nodes and the values are Sets of adjacent nodes. Write functions to add nodes, add edges, and check if a path exists between two nodes.
// Remember, when working on these problems, focus on:
// •   Choosing the appropriate data structure (Set or Map) based on the problem requirements
// •   Analyzing the time and space complexity of your solutions
// •   Considering edge cases and potential optimizations
// As you work through these questions, feel free to ask for hints or clarifications. Also, don't forget to review the practice problems provided in the LS220 course material. The "Practice Problems" assignment (https://launchschool.com/lessons/4d981d22/assignments/81b0b068) includes additional exercises on various data structures and algorithms that will be valuable for your preparation.
// Good luck with your practice, and remember that consistent effort is key to mastering these concepts!
