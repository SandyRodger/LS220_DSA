/*

Implement a function called `removeNodes` that modifies
a given linked list according to specific rules. The
function should take three parameters:

1. `head`: The head of the linked list
2. `m`: An integer representing the number of nodes to keep
3. `n`: An integer representing the number of nodes to remove

The function should traverse the linked list and modify it as follows:
1. Starting from the head, keep the first `m` nodes.
2. Remove the next `n` nodes.
3. Repeat steps 1 and 2 until the end of the list is reached.

The function should return the head of the modified linked list.

P:

- Write a function that takes 3 arguments:
  - "head" : the head of a linked list
  - "keep" : an integer representing how many nodes to keep.
  - "cut" : an integer representing how many nodes to cut.
- The function should modify the linekd list as follows:
  - keep the first "keep" nodes
  - cut out the next "cut" nodes
  - repeat this sequence until you get to the end of the list. 
- return the head of the modified input (even if all the nodes have been cut)

E:

#1:

[1,2,3,4,5,6,7,8,9,10], 3, 2)) => [1,2,3,6,7,8]
  - keep 123
  - cut 45
  - keep 678
  - cut 9 10
  - tie 8 to a null

#2:

[1,2,3,4,5], 1, 1 => [1,3,5]

- keep: 1
- cut: 2
- keep: 3
- cut: 4
- keep: 5
- tie 5 to null
- return 1

#3

[1,1,1,1,1], 1, 1 =>  [1, 1, 1]

- keep 1
- cut 1
- keep 1
- cut 1
- keep 1
- tie 1 to null
- return head

#4

[false, true, false], 1, 1 => [false, false]

- keep false (1st)
- cut true (2nd)
- keep false (3rd)
- tie false to null
-return head

#5

[1,2,3,4,5,6,7,8,9,10], 10, 2) => [1,2,3,4,5,6,7,8,9,10]

- keep 10
- poi basta.
- return LL as is.

[1,2,3,4,5,6,7,8,9,10], 0, 10 => []

- Even though we keep NOTHING, we still need to return a modified version of the input 
- so dummy node 
- return dummynode.next

console.log(testRemoveNodes([1], 1, 10)); // [1]

- cut is larger than the size of the input. It's also never used

D:
[1,2,3,4,5,6,7,8,9,10], 3, 2)) => [1,2,3,6,7,8]

- dummynode
- while loops
- variables to keep track of :
  - the current end of the modified list (3)

A:

Function variables: "head", "keep", "cut"
VARIABLES:

dummyhead = dummy node pointing to head
curr = dummyNode

[D,1,2,3,4,5,6,7,8,9,10], 3, 2)) => [1,2,3,6,7,8]

while (There are nodes left)
- curr is the first of the keeps
  - TRAVERSE THE KEEPS => return the last of the keeps
    - for (i = keep; i > 0; i--) (i = 3, 2, 1) (curr = 1, 2, 3)
      - curr = curr.next
      - curr is last of the keeps after this for loop
  - save leftTail as curr

  - TRAVERSE THE CUTS 
  - curr is whatever comes after the cuts.

  - return dummynode.next

*/

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function removeNodes(head, keep, cut) {
  let dummyHead = new ListNode("_", head);
  let curr = dummyHead;

  while (curr.next) {
    // TRAVERSE KEEPS
    for (let i = keep; i > 0; i--) curr = curr.next;

    let end = curr;
    if (!end.next) return dummyHead.next;

    // TRAVERSE CUTS
    for (let i = cut; i > 0; i--) curr = curr.next;
    end.next = curr ? curr.next : curr;
    
  }
  
  return dummyHead.next;
}

// Example 1
console.log(testRemoveNodes([1,2,3,4,5,6,7,8,9,10], 3, 2));
// Expected output: [1,2,3,6,7,8]

// Example 2
console.log(testRemoveNodes([1,2,3,4,5], 1, 1));
// // Expected output: [1,3,5]

console.log(testRemoveNodes([1,1,1,1,1], 1, 1)); // [1, 1, 1]
console.log(testRemoveNodes([false, true, false], 1, 1)); // [false, false]
console.log(testRemoveNodes([1,2,3,4,5,6,7,8,9,10], 10, 2)); // [1,2,3,4,5,6,7,8,9,10]
console.log(testRemoveNodes([1,2,3,4,5,6,7,8,9,10], 0, 10)); // []
console.log(testRemoveNodes([1], 1, 10)); // [1]

// Helper functions for testing

function createLinkedList(arr) {
  if (arr.length === 0) return null;
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

function linkedListToArray(head) {
  let arr = [];
  let current = head;
  while (current) {
    arr.push(current.val);
    current = current.next;
  }
  return arr;
}

function testRemoveNodes(arr, m, n) {
  let head = createLinkedList(arr);
  let result = removeNodes(head, m, n);
  return linkedListToArray(result);
}