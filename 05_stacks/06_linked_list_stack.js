/*
https://launchschool.com/books/dsa/read/implement_stack_with_linked_list
*/

class ListNode {
  constructor(val = 0, next = null, prev = null) {
    this.val = val;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  peek() {
    return this.top ? this.top.val : null;
  }

  push(value) {
    if (this.top) {
      let newNode = new ListNode(value);
      newNode.next = this.top;
      this.top = newNode
    } else {
      this.top = new ListNode(value);
    }    
  }

  pop() {
    // Removes the item from the stack and returns it
    if (!this.top) { return null };
    let returnVal = this.top;
    this.top = this.top.next;
    return returnVal;

    // If the stack is empty, it returns `null`.
  }
}

const myStack = new Stack();
myStack.push(1);
console.log('Top element:', myStack.peek());  // logs 'Top element: 1'
myStack.push(2);
console.log('Top element:', myStack.peek());  // logs 'Top element: 2'
myStack.push(3);
console.log('Top element:', myStack.peek());  // logs 'Top element: 3'
myStack.pop();
console.log('Top element after pop:', myStack.peek());  // logs 'Top element after pop: 2'
myStack.pop();
console.log('Top element after pop:', myStack.peek());  // logs 'Top element after pop: 1'
myStack.pop();
console.log('Peek on empty stack:', myStack.peek());    // logs 'Peek on empty stack: null'