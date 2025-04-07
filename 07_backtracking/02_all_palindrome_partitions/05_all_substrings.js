// Write a function that prints all substrings of a string.

let string = 'abc' // 'a','b', 'c', 'ab', 'bc', 'abc

function subStrings(str) {
  let result = [];

  function recursive(str, i) {
    if (str.length === 1) {
      result.push(str[0]);
    } else {
      result.push(str.slice(0, i+1));
      i++;
      recursive(str.slice(0, i))
    }
  }

  for (i = 0; i < str.length; i++) {
    recursive(str, i);
  }

  return result;
}

let r = subStrings(string);
console.log(r)