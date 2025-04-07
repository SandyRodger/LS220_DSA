/*

https://launchschool.com/lessons/6b68f0c0/assignments/1253dd81

Write a function `reverseSegment` that reverses a segment
of a singly linked list between two given positions,
`start` and `end`. The function should take the head of
the linked list and two integers, `start` and `end`, as
input and return the modified list.

The positions `start` and `end` are 1-idxed, and `start`
is guaranteed to be less than or equal to `end`.

The list is guaranteed to have at least one node, and `start`
and `end` are guaranteed to be within the bounds of the list.

Example:
Input: head = [1, 3, 5, 7, 9], start = 2, end = 4
Output: [1, 7, 5, 3, 9]
Explanation: The segment from position 2 to 4 (3 -> 5 -> 7)
             is reversed to (7 -> 5 -> 3).

P:
E:

[1, 3, 5, 7, 9], 2, 4) => 1 -> 7 -> 5 -> 3 -> 9 -> null
[1, 2, 3], 1, 3) => 3 -> 2 -> 1 -> null
[1], 1, 1) => 1 -> null
[1, 2, 3, 4, 5, 6], 3, 5) => 1 -> 2 -> 5 -> 4 -> 3 -> 6 -> null
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4, 7) => 1 -> 2 -> 3 -> 7 -> 6 -> 5 -> 4 -> 8 -> 9 -> 10 -> null

D:

- save the nodes that need to be reversed into an object, with stringified numbers as keys.
- work backwards through the object connecting the nodes to the left section of the LL
- Use a dummy node so that the first node can move places

A:

[1], 1, 1) => 1 -> null

Variables:

- initialize a variable called "segment" as an empty object
- initialize a dummy node called dummy node
- set idx as 0

Pointers:

- initialize left pointing to dummy node
- initialize right pointing to null
- initialize curr pointing to dummy node .

- saved calbacks:
  - SAVE NODE INTO OBJECT
  - LOOK AT THE NEXT NODE
  - DECREMENT_idx

While loop: while curr.next is not null
  -  if idx is start:
    - while idx <= end
      - SAVE NODE INTO OBJECT:
        - key is String[idx]
        - save curr into "segment" with key
      - LOOK AT THE NEXT NODE (idx += 1; / curr = curr.next)
    - initialize rightSection as curr
    - decrement idx
    - while idx >= start
      - key is String[idx]
      - save segment[key] as left.next
      - save left as  segment[key]
      - idx -= 1
    - link left.next to rightMost
    - return dummyNode.next
  - if idx +1 = start (left = curr)
  - LOOK AT THE NEXT NODE (idx += 1; / curr = curr.next)
  


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

function reverseSegment(head, start, end) {
  // variables:
  let segment = {};
  let dummyNode = new ListNode(0);
  let idx = 0

  // pointers:

  let left = dummyNode;
  let right = null;
  let curr = dummyNode;

  const saveNodeIntoSegment = (segment, curr, idx) =>  {
    let key = String(idx);
    segment[key] = curr;
   }

   const lookAtNextNode = (idx, curr) => {
    idx += 1;
    curr = curr.next;
   }

   const nodeAtidx = (idx) => segment[String(idx)];

   const linkLeftToSegmentAtidx = (left, idx) => {
    left.next = nodeAtidx(idx);
    left = left.next;
   }

  const decrementidx = (idx) => { idx -= 1 }

  while (curr.next) {
    if (idx === start) {
      while (idx <= end) {
        saveNodeIntoSegment(segment, curr, idx);
        lookAtNextNode(idx, curr);
      }
      right = curr;
      decrementidx(idx);
      while (idx >= start) {
        linkLeftToSegmentAtidx(left, idx)
        decrementidx(idx)
      }
      left.next = right;
      return dummyNode.next
    }
    if ((idx + 1) === start) { left = curr };
    lookAtNextNode(idx, curr);
  }
}

let list1 = createLinkedList([1, 3, 5, 7, 9]);
// let list2 = createLinkedList([1, 2, 3]);
// let list3 = createLinkedList([1]);
// let list4 = createLinkedList([1, 2, 3, 4, 5, 6]);
// let list5 = createLinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// printLinkedList(reverseSegment(list1, 2, 4)); // Expected: 1 -> 7 -> 5 -> 3 -> 9 -> null
// printLinkedList(reverseSegment(list2, 1, 3)); // Expected: 3 -> 2 -> 1 -> null
printLinkedList(reverseSegment(list3, 1, 1)); // Expected: 1 -> null
printLinkedList(reverseSegment(list4, 3, 5)); // Expected: 1 -> 2 -> 5 -> 4 -> 3 -> 6 -> null
printLinkedList(reverseSegment(list5, 4, 7)); // Expected: 1 -> 2 -> 3 -> 7 -> 6 -> 5 -> 4 -> 8 -> 9 -> 10 -> null