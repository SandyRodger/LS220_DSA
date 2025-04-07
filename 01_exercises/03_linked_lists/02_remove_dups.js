/*

https://launchschool.com/exercises/6d116de4

Given the head of a sorted singly linked list, eliminate any duplicate elements, ensuring each value in the list is unique. The resulting linked list must remain sorted. Modify the linked list and return the head of the revised, duplicate-free list.

P:

- Write a function which takes the head of a linked list
- Traverse this LL connecting (or preserving the existing connections of) unique nodes.
- return the head of the original list

E:

([1, 1, 2] => "1 -> 2 -> null"

- cut out the 1

[1, 1, 2, 3, 3] => "1 -> 2 -> 3 -> null"

- cut out (the 2nd) 1 and (the 2nd) 3

[1, 2, 3, 3, 4] => "1 -> 2 -> 3 -> 4 -> null"

- cut out the 2nd 3

[2, 2, 2, 3, 3] => "2 -> 3 -> null"

- cut out the 2nd 2 2s and the 2nd 3
- tie first node to 4th node
- tie 4th node to null

[5] => "5 -> null"

- change nothing

D:

[2, 3, 3] => "2 -> 3 -> null"
    C     N
- keep track of last unique number:
- keep track of next link:
  - next unique number
  - null

A:

VARIABLES:

curr = head
next = head.next

- while next is not null
  - if curr.val === next.val
    - inc next
  - otherwise
    - curr.next = next
    - curr = next
    - next = next.next
- tie curr to null
-return head

C:
*/

function ListNode(val) {
  this.val = val;
  this.next = null;
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

function printLinkedList(head) {
  let currentNode = head;
  let listStr = '';
  while (currentNode !== null) {
      listStr += currentNode.val + ' -> ';
      currentNode = currentNode.next;
  }
  listStr += 'null'; // Indicate the end of the list
  console.log(listStr);
}

// function deleteDuplicates(head) {

//   let curr = head;
//   let next = head.next;

//   while (next) {
//     if (curr.val === next.val) {
//       next = next.next;
//     } else {
//       curr.next = next;
//       curr = next;
//       next = next.next;
//     }
//   }

//   curr.next = null;
//   return head
// }

// LS solution:

function deleteDuplicates(head) {
  let curr = head;
  while (curr && curr.next) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return head;
}

let list1 = createLinkedList([1, 1, 2]);
let list2 = createLinkedList([1, 1, 2, 3, 3]);
let list3 = createLinkedList([1, 2, 3, 3, 4]);
let list4 = createLinkedList([2, 2, 2, 3, 3]);
let list5 = createLinkedList([5]);

printLinkedList(deleteDuplicates(list1)); // Expected: "1 -> 2 -> null"
printLinkedList(deleteDuplicates(list2)); // Expected: "1 -> 2 -> 3 -> null"
printLinkedList(deleteDuplicates(list3)); // Expected: "1 -> 2 -> 3 -> 4 -> null"
printLinkedList(deleteDuplicates(list4)); // Expected: "2 -> 3 -> null"
printLinkedList(deleteDuplicates(list5)); // Expected: "5 -> null"