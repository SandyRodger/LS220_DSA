/*

https://launchschool.com/lessons/6b68f0c0/assignments/e8a18b60

Write a function `removeDuplicates` that removes all
nodes with duplicate values from a sorted linked list,
leaving only distinct values from the original list.
The function should take the head of the sorted linked
list as input and return the modified list. The list
should remain sorted after removing duplicates. If the
list becomes empty after removing all duplicates,
return null.

Example:
Input: head = [1, 2, 2, 3, 3, 4, 5, 5]
Output: [1, 4]
Explanation: The values 2, 3, and 5 appear multiple times, so
             they are removed. Only 1 and 4 remain as unique
             values.

P:

write a function that takes a node head as an argument, which links to a sorted linked list. THe function then traverses  the LL and if a number is found to be duplicated, removes all instances of that number. The function returns the head of the modified list. If the list becomes empty, it returns null.

E:

[1, 2, 2, 3, 3, 4, 5, 5] => 1 -> 4 -> null

- the head remains the same
- 1 remains the head.
- dups are 2, 3, 5. 
- we don't leave a single instance of a dup.

[1, 1, 1, 2, 3] => 2 -> 3 -> null

- dups = 1 (3 of them)

[1, 2, 3, 4, 5] => 1 -> 2 -> 3 -> 4 -> 5 -> null

- no dups, no modifications

[1, 1, 1, 1, 1] => null

- all dups, return  null

[1, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5] => 1 -> null

- only is not a dup

D:

traverse the LL
collection of alreadySeen, but because the LL is sorted, all dups will be together. So you don't need a collection, you only need to know the previous node's value.

A:

input: head

Variables:
  - prev
  - curr
  - next

look at the nodes one by one.
  - prev = null
  - curr = head
  - next = head.next
WHILE LOOP (while next is a truthy value):
  - if (curr.val === next.val) (if curr is the same as next)
    - let potential = next.next; (find the subsequent node which is not)
      - while (curr.val === potential.val) {
        - potential = potential.next
        - if (!potential)  (if potential is null)
          - set curr.next to null
          - return head
        - otherwise, if potential is different
          - current.next = potential (link current to potential)
update prev, curr and next
return head;

C:
*/

// class ListNode {
//   constructor(val = 0, next = null) {
//     this.val = val;
//     this.next = next;
//   }
// }

// function printLinkedList(head) {
//   let currentNode = head;
//   let listStr = '';
//   while (currentNode !== null) {
//     listStr += currentNode.val + ' -> ';
//     currentNode = currentNode.next;
//   }
//   listStr += 'null';
//   console.log(listStr);
// }

// function createLinkedList(arr) {
//   let head = new ListNode(0);
//   let current = head;
//   arr.forEach(val => {
//     current.next = new ListNode(val);
//     current = current.next;
//   });
//   return head.next;
// }

// function removeDuplicates(head) {

//   let curr = head;
//   let lastValidNode;
  
//   while (!Object.is(curr.next, null)) {
//     if (curr.val === curr.next.val) {
//       let potential = curr.next.next;
//       while (potential && (curr.val === potential.val)) {
//         if (!potential.next && !lastValidNode) {return null}
//         potential = potential.next;
//       }
//       if (!potential) {
//         lastValidNode.next = null;
//         return head;
//       } else {
//         if (lastValidNode) {
//           lastValidNode.next = potential;
//         } else {
//           head = potential;
//         }
//         curr = potential
//       }
//     } else {
//       lastValidNode = curr;
//       curr = curr.next;
//     }
//   }

//   return head
// }

// let list1 = createLinkedList([1, 2, 2, 3, 3, 4, 5, 5]);
// let list2 = createLinkedList([1, 1, 1, 2, 3]);
// let list3 = createLinkedList([1, 2, 3, 4, 5]);
// let list4 = createLinkedList([1, 1, 1, 1, 1]);
// let list5 = createLinkedList([1, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5]);

// printLinkedList(removeDuplicates(list1)); // Expected: 1 -> 4 -> null
// printLinkedList(removeDuplicates(list2)); // Expected: 2 -> 3 -> null
// printLinkedList(removeDuplicates(list3)); // Expected: 1 -> 2 -> 3 -> 4 -> 5 -> null
// printLinkedList(removeDuplicates(list4)); // Expected: null
// printLinkedList(removeDuplicates(list5)); // Expected: 1 -> null

/*

2nd go (3.2.25)

https://launchschool.com/lessons/6b68f0c0/assignments/e8a18b60

Write a function `removeDuplicates` that removes all
nodes with duplicate values from a sorted linked list,
leaving only distinct values from the original list.
The function should take the head of the sorted linked
list as input and return the modified list. The list
should remain sorted after removing duplicates. If the
list becomes empty after removing all duplicates,
return null.

Example:
Input: head = [1, 2, 2, 3, 3, 4, 5, 5]
Output: [1, 4]
Explanation: The values 2, 3, and 5 appear multiple times, so
             they are removed. Only 1 and 4 remain as unique
             values.


P:
E:
D:
A:

- set dummy node.next to head
- set curr as head
- set prev as dummy

while curr.next and curr are not null ( because curr can be null right at the end )

  - if curr and curr.next are the same
    - while CURR is the same as CURR.next
      - increment CURR
    - After the while loop has broken, it means that curr.next is a new number, so
      - set prev.next to curr.next (but prev stays where it is)
      - and set curr to curr.next
  - else they are not the same, so:
    - increment prev to curr and curr to curr.next

[0, 1, 2, 2, 3, 3, 4, 5, 5]

R1: (pr: 0@0, cu: 1@1) => R2:(pr: 1@1, cu: 2@2) => R3: pr: 1@1, cu: 2@3) => 
R4: (pr: 1@1, cu: 3@4) => R5:(pr: 1@1, cu:3@5) 
(AT THIS POINT PREV.NEXT POINTS TO THE 3, BUT PREV ITSELF IS NOT REASSIGNED, SO WE ARE NOT FOOLED BY THE 3 NOT BEING A 2) 
R6: (pr: 1@1, cu:4@6) => R7: (pr:4@6, cu: 5@7) => R8: (pr:4@6, cu: 5@8)
R9: (pr: 4@6, curr: null)

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

let list1 = createLinkedList([1, 2, 2, 3, 3, 4, 5, 5]);
let list2 = createLinkedList([1, 1, 1, 2, 3]);
let list3 = createLinkedList([1, 2, 3, 4, 5]);
let list4 = createLinkedList([1, 1, 1, 1, 1]);
let list5 = createLinkedList([1, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5]);

function removeDuplicates(head) {

  let dummyNode = new ListNode(0, head);
  let curr = head;
  let prev = dummyNode;
  
  while (curr && curr.next) {
    if (curr.val === curr.next.val) {
      while (curr.next && curr.val === curr.next.val) {
        curr = curr.next;
      }
      prev.next = curr.next;
      curr = curr.next;
    } else {
      prev = curr;
      curr = curr.next;
    }
  }
  return dummyNode.next;
}

printLinkedList(removeDuplicates(list1)); // Expected: 1 -> 4 -> null
printLinkedList(removeDuplicates(list2)); // Expected: 2 -> 3 -> null
printLinkedList(removeDuplicates(list3)); // Expected: 1 -> 2 -> 3 -> 4 -> 5 -> null
printLinkedList(removeDuplicates(list4)); // Expected: null
printLinkedList(removeDuplicates(list5)); // Expected: 1 -> null
