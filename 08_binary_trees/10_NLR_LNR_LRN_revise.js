function preOrderTrav(root) { // NLR
  let stack = [root];
  let output = [];
  while (stack.length) {
    let curr = stack.pop();
    output.push(curr.val);
    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);
  }
  return output;
}

function inOrderTrav(root) { // LNR
  let stack = [root];
  let output = [];
  let curr = root;
  while (stack.length || curr) {
    while (curr) { 
      stack.push(curr);
      curr = curr.left;
    };
    curr = stack.pop()
    output.push(curr.val);
    curr = curr.right;
  }
  return output
}

function postOrderTrav(root) { // LRN
  let stack = [root];
  let output = []
  while (stack.length) {
    let curr = stack.pop()
    output.push(curr.val);
    if (curr.left) stack.push(curr.left);
    if (curr.right) stack.push(curr.right);
  }
  return output.reverse;
}