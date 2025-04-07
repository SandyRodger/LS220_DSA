// Implement a function called `removeNodes` that modifies
// a given linked list according to specific rules. The
// function should take three parameters:

// 1. `head`: The head of the linked list
// 2. `m`: An integer representing the number of nodes to keep
// 3. `n`: An integer representing the number of nodes to remove

// The function should traverse the linked list and modify it as follows:
// 1. Starting from the head, keep the first `m` nodes.
// 2. Remove the next `n` nodes.
// 3. Repeat steps 1 and 2 until the end of the list is reached.

// The function should return the head of the modified linked list.

/*

P: 

 write a function that takes the head of a linked list and two integers (keep, cut). Iterate through the linked list keeeping each 'keep' nodes and then skipping 'cut' nodes, connecting the previous chain of 'keep' to the following chain of keep'. Repeat this for teh length of the linked list.

E:

// Example 1
console.log(testRemoveNodes([1,2,3,4,5,6,7,8,9,10], 3, 2));

- keep 1, 2, 3
- cut 4, 5
- keep 6, 7, 8
- cut, 9, 10

// Expected output: [1,2,3,6,7,8]

// Example 2
console.log(testRemoveNodes([1,2,3,4,5], 1, 1));

- keep 1
- cut 2
- keep 3
- cut 4
- keep 5 

// Expected output: [1,3,5]

D:

console.log(testRemoveNodes([1,2,3,4,5], 1, 1));

- keep 1
- cut 2
- keep 3
- cut 4
- keep 5 

// Expected output: [1,3,5]

- key: always return original head.
- key: keep a variable called currTail to which we can connect future keep sections

- while the end of the list isn't pointing to null. 

- guard for keeping 0

A:

- guard for "keep" = 0
- guard for list being only a head

VARIABLES:
- currTail = head.next;
- curr = head

// Example 1
console.log(testRemoveNodes([1,2,3,4,5,6,7,8,9,10], 3, 2));

- keep 1, 2, 3
- cut 4, 5
- keep 6, 7, 8
- cut, 9, 10

// Expected output: [1,3,5]

WHILE: curr is truthy && curr.next is truthy
  - let keepCounter = keep;

  - WHILE keep counter > 0 && curr.next
    - set curr to curr.next
    - keepCounter -= 1

  - save curr node as currTail
  - let cutCounter = cut

  - WHILE cut > 0 && curr.next
    - curr = curr.next
    - cutCounter -= 1

  - prevTail.next = curr.next


return head

*/

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function removeNodes(head, keep, cut) {

  if (!head.next) return head;
  let dummyNode = new ListNode(0);
  dummyNode.next = head
  
  let currTail = dummyNode.next;
  let curr = head;

// [1,2,3,4,5,6,7,8,9,10], 3, 2));
// [1,2,3,6,7,8]
  while (curr && curr.next) {
    let keepCounter = keep - 1;

    while (keepCounter > 0 && curr.next) {
      curr = curr.next;
      keepCounter -= 1;
    }
    // curr
    if (!curr) {
      return
    }
    // currTail.next  = curr;
    // console.log(curr.val)
    let cutCounter = cut;

    while (cutCounter > 0 && curr.next) {
      curr = curr.next;
      cutCounter -= 1;
    }


    curr = curr.next;
    currTail.next = curr;
    // if (!curr) return head;
    

  }

  return dummyNode.next;
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