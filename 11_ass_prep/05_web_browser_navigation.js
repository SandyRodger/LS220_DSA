/*

Problem: Design a Browser History

You are building a browser history navigation system. Implement a class BrowserHistory that supports the following operations:

visit(url: string)
  Visits a new URL, clearing forward history.
back(steps: number): string
  Moves steps back in history. If there aren’t enough pages, go back as far as possible and return the earliest URL.
forward(steps: number): string
  Moves steps forward in history. If there aren’t enough pages, go forward as far as possible and return the latest URL.

Constraints:

You start on a homepage (homepage).
You can visit multiple pages, but visiting a new page clears any forward history.
You must implement O(1) for visit() and O(k) for back() / forward().

Examples:

let browser = new BrowserHistory("google.com");
browser.visit("facebook.com");
browser.visit("youtube.com");
console.log(browser.back(1));       // "facebook.com"
console.log(browser.back(1));       // "google.com"
console.log(browser.forward(1));    // "facebook.com"
browser.visit("twitter.com");      
console.log(browser.forward(1));    // "twitter.com" (no forward history)
console.log(browser.back(2));       // "google.com"
console.log(browser.back(5));       // "google.com" (can't go back further)

*/

class BrowserHistory {
  constructor(string) {
    this.domain = string;
  }
}

// Test Cases

let browser = new BrowserHistory("leetcode.com");

browser.visit("google.com");
browser.visit("facebook.com");
browser.visit("youtube.com");

console.log(browser.back(1) === "facebook.com");
console.log(browser.back(1) === "google.com");
console.log(browser.forward(1) === "facebook.com")
browser.visit("twitter.com");
console.log(browser.forward(2) === "twitter.com")
console.log(browser.back(3) === "leetcode.com"); 
console.log(browser.back(1) === "leetcode.com"); 

// Hints:

// Use two stacks: One for the backward history and one for the forward history.
// When visiting a new page, clear the forward stack.
// When going back, pop from the back stack and push to the forward stack.
// When going forward, pop from the forward stack and push to the back stack.
