/*

Given the starting node (head) of a singly linked list, your task is to find whether the linked list contains a loop. A loop in a linked list exists when a node can be revisited by continuously following the next pointers.

You should return true if the linked list forms a loop (sometimes referred to as a circular list or a cyclic list) and false if it does not.

P:

- Write a function that takes the head of a linked list
- It should return a boolean describing whether the LL is circular
- circular means whether any of the nodes point back to a previois node, thus making any traversal infinite.

E:

[3, 2, 0, -4], 1) => true
[1, 2], 0) => true
[1], -1) => false
[10, 20, 30, 40, 50, 60], 3) => true
[5, 15, 25, 35, 45], -1) => false

D:


Floyd's tortoise & Hare algorithm

anchor - > tortoise - incs one node
runner - > hare-     incs two node
if they meet it's circular

A:

VARIABLES:

t = head
h = head

while (t)
  - if (t == h) return true
  - t = t.next
  -h = h.next.next

- return false


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

function hasCycle(head) {
  let t = head;
  let h = head;

  while (t && h) {
    if (t.val === h.val) return true;
    // if (!h.next) return false
    t = t.next;
    h = h.next.next;
  }

  return false

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
