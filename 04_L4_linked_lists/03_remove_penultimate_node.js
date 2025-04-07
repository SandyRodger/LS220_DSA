/*

Write a function removeSecondToLast that removes the
second-to-last node from a linked list. The function
should take the head of the linked list as input and
return the head of the modified list. The list is
guaranteed to have at least two nodes. Implement the
solution using only one pass through the list. If
the list has exactly two nodes, the function should
remove the head node and return the second node as
the new head.

Example 1:
Input: 1 -> 2 -> 3 -> 4 -> 5
Output: 1 -> 2 -> 3 -> 5

Example 2:
Input: 1 -> 2
Output: 2

Example 3:
Input: 3 -> 2 -> 1
Output: 3 -> 1

P:

Write a function that takes the head of a linked list (min length 2), iteratres through the list once and returns the LL with the penultimate node removed. If the LL has only 2 elements, return the last node as the head.

E:

[1, 2, 3, 4, 5] => 1 -> 2 -> 3 -> 5 -> null

- happy path

[1, 2] => 2 -> null

- remove head (you'll need a dummy Node)

[3, 2, 1] => 3 -> 1 -> null

- HP

[1, 2, 3, 4] => 1 -> 2 -> 4 -> null

- HP

[10, 20, 30, 40, 50, 60] => 10 -> 20 -> 30 -> 40 -> 60 -> null

- Values of nodes are imaterial.

D:

 (0) [10, 20, 30, 40, 50, 60] => 10 -> 20 -> 30 -> 40 -> 60 -> null

- dummy node
- prev
- curr
- next (with next.next a possibility)


A:
 
(0) [10, 20, 30, 40, 50, 60] => 10 -> 20 -> 30 -> 40 -> 60 -> null

VARIABLES:

dummyNode = new node
prev = dummyNode
curr = head
next = curr.next
afterNext = next.next



- Iterate through LL, moving the variables along the LL (afterNext.next is NOT null)

- when afterNext.next is null
  - link prev and next
- return dummyNode.next


C:
*/

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function printLinkedList(head) {
  let currentNode = head;
  let listStr = '';
  while (currentNode !== null) {
    listStr += currentNode.val + ' -> ';
    currentNode = currentNode.next;
  }
  listStr += 'null';
  console.log(listStr);
}

function createLinkedList(arr) {
  let head = new ListNode(0);
  let current = head;
  arr.forEach(val => {
    current.next = new ListNode(val);
    current = current.next;
  });
  return head.next;
}

function removeSecondToLast(head) {

  let dummyNode = new ListNode(0);
  dummyNode.next = head;
  let prev = dummyNode;
  let curr = head;
  let next = curr.next;
  let afterNext = next.next;

  while (!Object.is(afterNext, null)) {
    prev = prev.next;
    curr = curr.next;
    next = next.next;
    afterNext = afterNext.next;
  }

  prev.next = next;

  return dummyNode.next
}

// Test cases
let list1 = createLinkedList([1, 2, 3, 4, 5]);
let list2 = createLinkedList([1, 2]);
let list3 = createLinkedList([3, 2, 1]);
let list4 = createLinkedList([1, 2, 3, 4]);
let list5 = createLinkedList([10, 20, 30, 40, 50, 60]);

console.log("Original lists:");
printLinkedList(list1);
printLinkedList(list2);
printLinkedList(list3);
printLinkedList(list4);
printLinkedList(list5);

console.log("\nAfter removing second-to-last node:");
printLinkedList(removeSecondToLast(list1)); // Expected: 1 -> 2 -> 3 -> 5 -> null
printLinkedList(removeSecondToLast(list2)); // Expected: 2 -> null
printLinkedList(removeSecondToLast(list3)); // Expected: 3 -> 1 -> null
printLinkedList(removeSecondToLast(list4)); // Expected: 1 -> 2 -> 4 -> null
printLinkedList(removeSecondToLast(list5)); // Expected: 10 -> 20 -> 30 -> 40 -> 60 -> null

// LS solution:

function removeSecondToLast(head) {
  let dummy = new ListNode(0);
  dummy.next = head;

  let slow = dummy;
  let fast = head;

  for (let i = 0; i < 2; i++) {
    fast = fast.next;
  }
  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;

  return dummy.next;
}