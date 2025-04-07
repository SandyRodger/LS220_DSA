class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

let head = new ListNode(1, new ListNode(2, new ListNode(3)));

let arr = []
arr.unshift(head.next);

console.log(arr)
