/*
https://launchschool.com/exercises/60d5219c

Given the head of a singly linked list containing integers, create a new linked list where each node represents the frequency of a unique element from the original list. The order of nodes in the new list doesn't matter. Return the head of this new frequency list.

P:

Write a function that takes the head of a LL ("head")
Traverse this list and count how many times each value occurs
Return a new LL where each value is the frequency of the values from the input.

E:

console.log(testFrequencyList([1, 1, 2, 1, 3], [3, 1, 1]));

- distinct numbers in input : 3
- 1 X 3, 2 X 1, 3 X 1

console.log(testFrequencyList([1, 1, 2, 2, 2], [2, 3]));

- 1 X 2
- 2 X 3


console.log(testFrequencyList([6, 5, 4, 3, 2, 1], [1, 1, 1, 1, 1, 1]));

- each elem occurs once

console.log(testFrequencyList([4, 4, 4, 4], [4]));

- 4 occurs 4 times

console.log(testFrequencyList([1, 2, 3, 4, 5], [1, 1, 1, 1, 1]));

- basically the same as the example 2 up

console.log(testFrequencyList([], []));

- empty input -> empty output

console.log(testFrequencyList([1, 1, 1], [3]));

- all elems in input ca be the same -> output of length 1

console.log(testFrequencyList([1, 2, 1, 2, 1, 2], [3, 3]));

-  interleaved nums

D:

- Map

A:

VAriabkles:

curr = head
freq = new map

([1, 2, 1, 2, 1, 2], [3, 3]));
curr = 1
freq = {
  1 -> 3,
  2 -> 3,
}

- Traverse the LL figuring out the counts
  - While curr
    - if curr val is in the map, then increment it
      - if !freq.has(curr.val)
        - freq.set(curr.val, 1)
    - if it isn't then add it
      - freq.set(i, freq.get(i) + 1);

- set dummy node
- set curr -> dummy node

- while freq isn't empty (for loop with .size)
  - make the counts into a LL
    - iterate through the map creating nodes and linking them

    tie curr to null
    return dummy node.next

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

function linkedListToArray(head) {
  let result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

function testFrequencyList(input, expected) {
  let result = linkedListToArray(createFrequencyList(createLinkedList(input)));
  if (result.length !== expected.length) return false;
  let freq1 = new Map(), freq2 = new Map();
  for (let num of result) freq1.set(num, (freq1.get(num) || 0) + 1);
  for (let num of expected) freq2.set(num, (freq2.get(num) || 0) + 1);
  if (freq1.size !== freq2.size) return false;
  for (let [key, value] of freq1) {
    if (freq2.get(key) !== value) return false;
  }
  return true;
}

function createFrequencyList(curr) {
  let freq = new Map;

  while (curr) {
    if (!freq.has(curr.val)) {
      freq.set(curr.val, 1);
    } else {
      freq.set(curr.val, freq.get(curr.val) + 1);
    }
    curr = curr.next
  }

  let dummyNode = new ListNode(0);
  curr = dummyNode;

  freq.forEach((elem) => {
    let next = new ListNode(elem);
    curr.next = next;
    curr = next;
  })

  return dummyNode.next;

}

console.log(testFrequencyList([1, 1, 2, 1, 3], [3, 1, 1]));
console.log(testFrequencyList([1, 1, 2, 2, 2], [2, 3]));
console.log(testFrequencyList([6, 5, 4, 3, 2, 1], [1, 1, 1, 1, 1, 1]));
console.log(testFrequencyList([4, 4, 4, 4], [4]));
console.log(testFrequencyList([1, 2, 3, 4, 5], [1, 1, 1, 1, 1]));
console.log(testFrequencyList([], []));
console.log(testFrequencyList([1, 1, 1], [3]));
console.log(testFrequencyList([1, 2, 1, 2, 1, 2], [3, 3]));