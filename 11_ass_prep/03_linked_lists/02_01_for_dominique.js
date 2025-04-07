/*

Given a singly linked list, reverse every k consecutive nodes and return the modified list. If the number of nodes in the last group is less than k, leave them as they are.

Input: head = [1,2,3,4,5,6,7,8], k = 3
Output: [3,2,1,6,5,4,7,8]

Input: head = [1,2,3,4,5], k = 2
Output: [2,1,4,3,5]

Input: head = [1,2,3,4,5], k = 3
Output: [3,2,1,4,5]


*/

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function reverseKGroup(head, k) {
  // Implement your solution here
}

// working test case

let list = arrayToLinkedList([1, 2, 3, 4, 5, 6, 7, 8]);
let key = 3;
let testResult = reverseKGroup(list, key);
let resultAsArray = linkedListToArray(testResult);
console.log(resultAsArray); //=> [3, 2, 1, 6, 5, 4, 7, 8]

// Helper function to create a linked list from an array
function arrayToLinkedList(arr) {
  let dummy = new ListNode(0);
  let current = dummy;
  for (let num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }
  return dummy.next;
}

// Helper function to convert a linked list to an array
function linkedListToArray(head) {
  let result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

// Test cases
function runTests() {
  let testCases = [
    { input: { arr: [1, 2, 3, 4, 5, 6, 7, 8], k: 3 }, expected: [3, 2, 1, 6, 5, 4, 7, 8] },
    { input: { arr: [1, 2, 3, 4, 5], k: 2 }, expected: [2, 1, 4, 3, 5] },
    { input: { arr: [1, 2, 3, 4, 5], k: 3 }, expected: [3, 2, 1, 4, 5] },
  ];

  testCases.forEach(({ input, expected }, index) => {
    let head = arrayToLinkedList(input.arr);
    let result = linkedListToArray(reverseKGroup(head, input.k));
    console.log(`Test ${index + 1}:`, JSON.stringify(result) === JSON.stringify(expected) ? "Passed" : "Failed");
  });
}

runTests();
