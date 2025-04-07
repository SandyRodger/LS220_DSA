/*

https://launchschool.com/exercises/69dac946

Given two sorted singly linked lists, your task is to combine them into a single sorted linked list. The new list should be composed of the nodes from the two original lists and should also be sorted in ascending order (where node values are equal to or increase as you move through the linked list).

P:

- write a function that takes 2 head nodes for Linked lists:
  - "head1"
  - "head2"
- merge the two lists into a new list.
  - the new list is comprised of the nodes from the input 2 lists.
  - this list will be in ascending order according to the numbers stored in each node's 'value' property
- return the head of the new list

E:

let list1 = createLinkedList([1, 3, 5]);
let list2 = createLinkedList([2, 4, 6]);
printLinkedList(mergeSortedLists(list1, list2)); // Expected: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null

- Possible to take 1 or 2, we take the smaller: take 1
- Possible to take 2 or 3, we take the smaller: take 2
- Possible to take 3 or 4, we take the smaller: take 3
- Possible to take 4 or 5, we take the smaller: take 2
  - in this example I'm alternating between taking from L1 and L2, but it might not always be thus.

let list3 = createLinkedList([1, 2, 3]);

let list4 = createLinkedList([]);
printLinkedList(mergeSortedLists(list3, list4)); // Expected: 1 -> 2 -> 3 -> null
  - L2 is empty
  - output looks like L1, and is L1 (guard clause?)

let list5 = createLinkedList([]);
let list6 = createLinkedList([1]);
printLinkedList(mergeSortedLists(list5, list6)); // Expected: 1 -> null
- L1 is empty
- L2 has only one node. 
- output is L2 (guard clause)

let list7 = createLinkedList([1, 5, 9]);
let list8 = createLinkedList([2, 4, 6, 8, 10]);
printLinkedList(mergeSortedLists(list7, list8)); // Expected: 1 -> 2 -> 4 -> 5 -> 6 -> 8 -> 9 -> 10 -> null
- Take from L1, L2, L2, L1, L2, L1, L2, L2
- L2 is longer


let list9 = createLinkedList([1, 2, 5]);
let list10 = createLinkedList([3, 6, 7]);
printLinkedList(mergeSortedLists(list9, list10)); // Expected: 1 -> 2 -> 3 -> 5 -> 6 -> 7 -> null
- Take 2 from L1, then 1 from L2, then 1 from L1,  then one from L2

D:

[1, 2, 5], [3, 6, 7] 
 1 -> 2 -> 3 -> 5 -> 6 -> 7 -> null

traverse each LL simultaneously (curr1, curr2)
Comparison
Dummy node 
While curr1.next && curr2.next

A:

[1, 2, 5], [3, 6, 7] 
1 -> 2 -> 3 -> 5 -> 6 -> 7 -> null

Variables:

- dummyNode -> dummy node
- outputTail = dummyNode
- curr1 = head1
- curr2 = head2

[], [7] 
1 -> 2 -> 3 -> 5 -> 6 -> 7 -> null
----------------------
curr1 = null
curr2 = null
output = D -> 1 -> 2 -> 3 -> 5 -> 6 -> 7 -> null
-----------------
While: curr1 && curr2 (point to nodes)

  - If there is no curr1:
    - currTail.next = curr2
    - currTail = curr2
    - curr2 = curr2.next
  - if there is no curr2 OR curr1 > curr 2:
    - currTail.next = curr1
    - currTail = curr1
    - curr1 = curr1.next
  - in all other cases
    - currTail.next = curr2
    - currTail = curr2
    - curr2 = curr2.next

Return:
-dummy node.next
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
  let current = head;
  let listStr = '';
  while (current !== null) {
    listStr += current.val + ' -> ';
    current = current.next;
  }
  listStr += 'null';
  console.log(listStr);
}

// My solution: 50 minutes

// function mergeSortedLists(curr1, curr2) {
//   let dummyNode = new ListNode("D");
//   let currTail = dummyNode;

//   while (curr1 || curr2) {
//     if (!curr1) {
//       currTail.next = curr2;
//       currTail = curr2;
//       curr2 = curr2.next;
//     } else if (!curr2 || curr1.val < curr2.val) {
//       currTail.next = curr1
//       currTail = curr1
//       curr1 = curr1.next
//     } else {
//       currTail.next = curr2;
//       currTail = curr2;
//       curr2 = curr2.next;
//     }
//   }

//   return dummyNode.next;
// }

// LS solution

function mergeSortedLists(list1, list2) {
  let dummy = new ListNode(0);
  let curr = dummy;


  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }
    curr = curr.next;
  }

  curr.next = list1 === null ? list2 : list1;

  return dummy.next;
}

let list1 = createLinkedList([1, 3, 5]);
let list2 = createLinkedList([2, 4, 6]);
printLinkedList(mergeSortedLists(list1, list2)); // Expected: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null

let list3 = createLinkedList([1, 2, 3]);
let list4 = createLinkedList([]);
printLinkedList(mergeSortedLists(list3, list4)); // Expected: 1 -> 2 -> 3 -> null

let list5 = createLinkedList([]);
let list6 = createLinkedList([1]);
printLinkedList(mergeSortedLists(list5, list6)); // Expected: 1 -> null

let list7 = createLinkedList([1, 5, 9]);
let list8 = createLinkedList([2, 4, 6, 8, 10]);
printLinkedList(mergeSortedLists(list7, list8)); // Expected: 1 -> 2 -> 4 -> 5 -> 6 -> 8 -> 9 -> 10 -> null

let list9 = createLinkedList([1, 2, 5]);
let list10 = createLinkedList([3, 6, 7]);
printLinkedList(mergeSortedLists(list9, list10)); // Expected: 1 -> 2 -> 3 -> 5 -> 6 -> 7 -> null
