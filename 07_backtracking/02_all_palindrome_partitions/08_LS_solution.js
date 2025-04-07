function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

function allPalindromePartitions(str) {
function backtrack(str, candidate, result) {
  if (str.length === 0) {
    result.push([...candidate]);
    return;
  }

  for (let idx = 0; idx < str.length; idx++) {
    let substring = str.substring(0, idx + 1)
    if (isPalindrome(substring)) {
      candidate.push(substring);
      backtrack(str.slice(idx + 1), candidate, result);
      candidate.pop();
    }
  }
}

const result = [];
const candidate = [];
backtrack(str, candidate, result);
return result;
}