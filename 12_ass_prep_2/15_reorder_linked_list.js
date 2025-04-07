/*

https://launchschool.com/lessons/6b68f0c0/assignments/49bd0fac

Write a function reorderOddEven that rearranges nodes in
a singly linked list so that all nodes at odd positions
are grouped together, followed by all nodes at even positions.

The function should take the head of the linked list as input
and return the reordered list. The first node is considered
to be at an odd position, the second node at an even position,
and so on.

Ensure that the relative order of nodes within the odd and
even groups remains the same as in the original list.
If the list is empty or contains only one node, return the
original list.

Example:
Input: head = [1, 2, 3, 4, 5]
Output: [1, 3, 5, 2, 4]
Explanation: Nodes at odd positions (1, 3, 5) are grouped
             first, followed by nodes at even positions (2, 4).

P:

- Write a function that takes 1 arg:
  - the head of a LL
- iterate through the list changing the order of the nodes, thus:
  - the first node and every subsequent other node should come first.
  - the second node and every subsequent other node should come second.

E:

[1, 2, 3, 4, 5] => [1, 3, 5, 2, 4]

- take in this order 1 ,2 ,3 ,4 ,5
- put them in 2 different LLs
  - head1 = head
  - head2  = head1.next
- then tie tail1 to head2 and return head 1; (no need for a dummy node)

[2, 1, 3, 5, 6, 4, 7] => 2 -> 3 -> 6 -> 7 -> 1 -> 5 -> 4 -> null
 O  E  O  E  O  E  O
  - HP  

[1, 2, 3, 4] => 1 -> 3 -> 2 -> 4 -> null
- HP

[1] => 1 -> null
- input of only 1 node comes out unchanged

[1, 2] 1 -> 2 -> null
- output of 2 nodes comes outunchanged

[] => null
 - empty input - > null

D:

Solve iteratively first, then convert to recursion.

Variables:
- curr

while we're not at the end of the list

jump to the next one

A:
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

// function reorderOddEven(head) {
//   if (!head || !head.next) return head;
//   const evenHead = head.next;

//   let currOdd = head;
//   let currEven = evenHead;

//   while (currOdd && currEven && currEven.next) {
//     currOdd.next = currOdd.next.next;
//     currOdd = currOdd.next;
//     currEven.next = currEven.next.next;
//     currEven = currEven.next;
//   }

//   currOdd.next = evenHead;
//   return head;
// }

// recursion:


function reorderOddEven(head) {
  if (!head || !head.next) return head;
  const evenHead = head.next;

  function helper(currOdd, currEven) {
    if (!currOdd || !currEven || !currEven.next) return currOdd;
    currOdd.next = currOdd.next.next;
    currEven.next = currEven.next.next;
    return helper(currOdd.next, currEven.next)
  }

  helper(head, evenHead).next = evenHead;
  return head;
}

// recursive without helper:

function reorderOddEven(head, currOdd = head, currEven = head ? head.next : null, evenHead = head ? head.next : null) {

  if (!head || !head.next || !head.next.next) return head;
  if (!currOdd || !currEven || !currEven.next) {
    currOdd.next = evenHead;
    return
  }

  currOdd.next = currOdd.next.next;
  currEven.next = currEven.next.next;
  reorderOddEven(head, currOdd.next, currEven.next, evenHead)
  return head;
}

// Test cases
let list1 = createLinkedList([1, 2, 3, 4, 5]);
let list2 = createLinkedList([2, 1, 3, 5, 6, 4, 7]);
let list3 = createLinkedList([1, 2, 3, 4]);
let list4 = createLinkedList([1]);
let list5 = createLinkedList([1, 2]);
let list6 = createLinkedList([]);

console.log("Original lists:");
printLinkedList(list1);
printLinkedList(list2);
printLinkedList(list3);
printLinkedList(list4);
printLinkedList(list5);
printLinkedList(list6);

console.log("\nAfter reordering odd and even positions:");
printLinkedList(reorderOddEven(list1)); // Expected: 1 -> 3 -> 5 -> 2 -> 4 -> null
printLinkedList(reorderOddEven(list2)); // Expected: 2 -> 3 -> 6 -> 7 -> 1 -> 5 -> 4 -> null
printLinkedList(reorderOddEven(list3)); // Expected: 1 -> 3 -> 2 -> 4 -> null
printLinkedList(reorderOddEven(list4)); // Expected: 1 -> null
printLinkedList(reorderOddEven(list5)); // Expected: 1 -> 2 -> null
printLinkedList(reorderOddEven(list6)); // Expected: null


