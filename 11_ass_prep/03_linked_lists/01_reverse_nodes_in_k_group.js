/*

Given a singly linked list, reverse every k consecutive nodes and return the modified list. If the number of nodes in the last group is less than k, leave them as they are.

Input: head = [1,2,3,4,5,6,7,8], k = 3
Output: [3,2,1,6,5,4,7,8]

Input: head = [1,2,3,4,5], k = 2
Output: [2,1,4,3,5]

Input: head = [1,2,3,4,5], k = 3
Output: [3,2,1,4,5]

P:

Write a function that takes the head of a Singly Linked List, and a number ("k") and reverses every k nodes in the LL until there are less than k nodes left, which can be returned unchanged.

Input : head of a LL
output: the head of a LL containing the same nodes as input, but in a different order.

E:

Example 1:

[1, 2, 3, 4, 5, 6, 7, 8], k: 3 , => [3, 2, 1, 6, 5, 4, 7, 8] },

- first 3: 1, 2, 3 => 3, 2, 1
- 2nd 3: 456 => 654
- 3rd part unchanged: 78
  - 3, 2, 1, 6, 5, 4, 7, 8

[1, 2, 3, 4, 5], k: 2 , => [2, 1, 4, 3, 5] },

- 21 + 43 + 5

[1, 2, 3, 4, 5], k: 3 , => [3, 2, 1, 4, 5] },

- 321 + 45

D:

- dummy node to switch the head to the kth node
- counter
- save prev node
- helper method to reverse?

[1, 2, 3, 4, 5], k: 3 , => [3, 2, 1, 4, 5] },
newOrder2 = []
newOrder1 = [3,2, 1]

- iterate through LL k times unshifting onto a stack
- once k iterations have passed, start collecting the next k nodes:
  - pot these in a new array
- at the end this will produce an array of individual nodes and I can just tie them together.

A:

VARIABLES:

- dummy node (0)
- newOrder = []
- let curr = Node:1
- let right = null

[1, 2, 3, 4, 5], k: 3 , => [3, 2, 1, 4, 5] },

while curr.next is not null
  - let kSubSection = []
  - for (counter = 0; while counter is < k; increment counter)
    - save curr into kSubSection using unshift
    - if curr.next is null then continue
    - save curr as curr.next
  - save right as curr.next
  - push kSubSection's elems into newOrder

- attach dummy to the first node in newOrder
- iterate through newOrder attaching nodes
- at the end attach right
- return dummy.next

C:

*/

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function reverseKGroup(head, k) {

  let dummyNode = new ListNode(0);
  let curr = head;
  
  function collectSubLists(curr) {
    let kSubSection = [];
    let output = [];
    while (curr.next) {
      for (counter = 0; counter < k; counter++) {
        kSubSection.unshift(curr)
        if (!curr.next) { return output };
        curr = curr.next; 
      }
      if (curr) {
        output.push(...kSubSection);
      } else {
        output.push(curr)
        return output;
      }
    }
    return output;
  }

  let newOrder = collectSubLists(curr);
  // console.log(newOrder);
  curr = dummyNode

  while (newOrder.length) {
    curr.next = newOrder.shift()
    curr = curr.next;
  }

  // curr.next = right;
  return dummyNode.next;  
}

// working test case 1

let list = arrayToLinkedList([1, 2, 3, 4, 5]);
let testResult = reverseKGroup(list, 2);

// let resultAsArray = linkedListToArray(testResult);
// console.log(resultAsArray); //=> [2, 1, 4, 3, 5]

// working test case 2

// let list2 = arrayToLinkedList([1, 2, 3, 4, 5, 6, 7, 8]);
// let testResult2 = reverseKGroup(list2, 3);
// console.log(testResult2.val)
// console.log(testResult2.next.val)
// console.log(testResult2.next.next.val)
// console.log(testResult2.next.next.next.val)
// console.log(testResult2.next.next.next.next.val)
// console.log(testResult2.next.next.next.next.next.val)
// console.log(testResult2.next.next.next.next.next.next.val)
// console.log(testResult2.next.next.next.next.next.next.next.val)
// console.log(testResult2.next.next.next.next.next.next.next.next.val)
// console.log(testResult2.next.next.next.next.next.next.next.next.next.val)
// let resultAsArray2 = linkedListToArray(testResult2);
// console.log(resultAsArray2); //=> [3, 2, 1, 6, 5, 4, 7, 8]

// working test case 3

// let list3 = arrayToLinkedList([1, 2, 3, 4, 5]);
// let testResult3 = reverseKGroup(list3, 3);
// let resultAsArray3 = linkedListToArray(testResult3);
// console.log(resultAsArray3); //=> [3, 2, 1, 4, 5]

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

// // Test cases
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

// runTests();
