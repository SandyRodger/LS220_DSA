/*

https://www.geeksforgeeks.org/reverse-a-linked-list-in-groups-of-given-size/#expected-approach-using-iterative-method-on-time-and-o1-space

Given a singly linked list, reverse every k consecutive nodes and return the modified list. If the number of nodes in the last group is less than k, reverse them.

Input: head = [1,2,3,4,5,6,7,8], k = 3
Output: [3,2,1,6,5,4,8,7]

Input: head = [1,2,3,4,5], k = 2
Output: [2,1,4,3,5]

Input: head = [1,2,3,4,5], k = 3
Output: [3,2,1,5,4]

P:

Write a function that takes the head of a Singly Linked List, and a number ("k") and reverses every k nodes in the LL until there are less than k nodes left, which must also be reversed.

Input : head of a LL
output: the head of a LL containing the same nodes as input, but in a different order.

E:

Example 1:

[1, 2, 3, 4, 5, 6, 7, 8], k: 3 , => [3, 2, 1, 6, 5, 4, 8, 7] },

- first 3: 1, 2, 3 => 3, 2, 1
- 2nd 3: 456 => 654
- 3rd part: 87
  - 3, 2, 1, 6, 5, 4, 8, 7

[1, 2, 3, 4, 5], k: 2 , => [2, 1, 4, 3, 5] },

- 21 + 43 + 5

[1, 2, 3, 4, 5], k: 3 , => [3, 2, 1, 5, 4] },

- 321 + 54

D:

[Expected Approach] Using Iterative Method – O(n) Time and O(1) Space:


To reverse a linked list in groups k nodes, iterate through the list, reversing each group by updating the next pointers. Track the tail of the previous group to link it with the head of the newly reversed group. After reversing each group, update the prev node and move to the start of the next group. Continue this until the entire list is processed. Return the head of the first reversed group as the new head of the list.

next pointer
tail => last node in previous group
head => first node in next group

A:

Initialize pointers:
Set curr to the head of the list to start traversing.
Set newHead to NULL to track the new head after the first group reversal.
Set tail to NULL to connect the previous group to the current reversed group.
Traverse the list in groups of k:
For each group of k nodes, set groupHead to curr.
Reverse the nodes in the group by updating the next pointers, using prev and nextNode.
Connect the reversed group to the previous one:
After reversing, if tail is not nullptr, connect the previous group’s end to the current reversed group’s head.
Update tail to point to the last node of the current group.
Repeat the process until all nodes in the list are processed, and return newHead, which points to the head of the fully reversed list

C:

*/

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function reverseKGroup(head, k) {
  if (!head) { return head };

  let curr = head;
  let newHead = null;
  let tail = null;

  while (curr) {

  let groupHead = curr;
  let nextNode = null;
  let prev = null;
  let count = 0;

 
    while (curr && count < k) {
      nextNode = curr.next;;
      curr.next = prev;
      prev = curr;
      curr = nextNode;
      count++;
    }

    if (!newHead) { newHead = prev }
    if (tail) { tail.next = prev }

    tail = groupHead;
  }
  return newHead;
}

// working test case 1

let list = arrayToLinkedList([1, 2, 3, 4, 5]);
let testResult = reverseKGroup(list, 2);

let resultAsArray = linkedListToArray(testResult);
console.log(resultAsArray); //=> [2, 1, 4, 3, 5]

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
// console.log(resultAsArray2); //=> [3, 2, 1, 6, 5, 4, 8, 7]

// working test case 3

// let list3 = arrayToLinkedList([1, 2, 3, 4, 5]);
// let testResult3 = reverseKGroup(list3, 3);
// let resultAsArray3 = linkedListToArray(testResult3);
// console.log(resultAsArray3); //=> [3, 2, 1, 5, 4]

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
    { input: { arr: [1, 2, 3, 4, 5, 6, 7, 8], k: 3 }, expected: [3, 2, 1, 6, 5, 4, 8, 7] },
    { input: { arr: [1, 2, 3, 4, 5], k: 2 }, expected: [2, 1, 4, 3, 5] },
    { input: { arr: [1, 2, 3, 4, 5], k: 3 }, expected: [3, 2, 1, 5, 4] },
  ];

  testCases.forEach(({ input, expected }, index) => {
    let head = arrayToLinkedList(input.arr);
    let result = linkedListToArray(reverseKGroup(head, input.k));
    console.log(`Test ${index + 1}:`, JSON.stringify(result) === JSON.stringify(expected) ? "Passed" : "Failed");
  });
}

runTests();
