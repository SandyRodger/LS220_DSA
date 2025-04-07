/*

https://launchschool.com/exercises/1bcd9eb7?track=ruby

Loop in a Linked List

Given the starting node (head) of a singly linked list, your task is to find whether the linked list contains a loop. A loop in a linked list exists when a node can be revisited by continuously following the next pointers.

You should return true if the linked list forms a loop (sometimes referred to as a circular list or a cyclic list) and false if it does not.

Example test cases:

Start: 10:47
End:

P:
E:
D:
A:
C:
*/

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function createLinkedList(arr, cyclePos) {
  let head = new ListNode(0);
  let current = head;
  let cycleNode = null;

  arr.forEach((val, index) => {
    current.next = new ListNode(val);
    current = current.next;
    if (index === cyclePos) {
      cycleNode = current;
    }
  });

  if (cycleNode) {
    current.next = cycleNode;
  }

  return head.next;
}

// function hasCycle(head) {
//   curr = head;
//   while (curr.next && curr.next.next) {
//     if (curr.seen) { return true }
//     curr.seen = true;
//     curr = curr.next;
//     // console.log(curr.val);
//   }
//   return false;
// }


function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}

let list1 = createLinkedList([3, 2, 0, -4], 1);
let list2 = createLinkedList([1, 2], 0);
let list3 = createLinkedList([1], -1);
let list4 = createLinkedList([10, 20, 30, 40, 50, 60], 3);
let list5 = createLinkedList([5, 15, 25, 35, 45], -1);

console.log(hasCycle(list1)); // true
console.log(hasCycle(list2)); // true
console.log(hasCycle(list3)); // false
console.log(hasCycle(list4)); // true
console.log(hasCycle(list5)); // false
