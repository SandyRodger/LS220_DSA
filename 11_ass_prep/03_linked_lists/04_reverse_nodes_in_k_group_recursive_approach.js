/*

https://www.geeksforgeeks.org/reverse-a-singly-linked-list-in-groups-of-given-size-set-4-space-efficient-approach/

Algorithm:

HELPER FUNC: reverseSegment(head, k) => groupHead

- iterate through the group, pointing each node to its prev
- if curr becomes null return early
- at the end if the last node has a next, pass that to recursive function
-

*/

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function reverseKNodes(head, k) {

}

function reverseKGroup(head, k) {

}

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