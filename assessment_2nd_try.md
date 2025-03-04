### What went wrong with the LS221 assessment

#### In preparation:

-	I rushed in because Caleb, who had been behind me took the assessment and passed.
-	I didn’t have a clear plan of what I needed to do before I took the assessment,
-	I booked the assessment too early in the day, meaning I had to wake before my alarm, which I know from experience disturbs my night of sleep.
-	I did not consider that I would need to pee after 40 minutes. In the end the assessment took 80 minutes and by the end I was in considerable pain, compounding the stress of not being able to complete the problem.
-	I’m not sure if swimming in the sea stressed me out too much. It was definitely a good idea for 216, but the sea was warmer then.
-	The above reasons, while true, are excuses that deflect from the fact that my analysis of the problem was rushed and my preparation insufficient.

#### During:

-	The first big fault was that I failed to read the problem properly. The problem said I must always return a modified version of the input. And all of my test cases did this, with one exception. This was the edge case for when we cut all elements out of the linked-list and return an empty array. I simply included a guard clause that returned an empty array, but this would not be fulfilling the condition that the output must be a modified version of the input.  This one edge case meant my whole function logic needed to be re-done. When I realised this I was already past the 60 minute mark, so the idea of re-doing my algorithm and starting from scratch was not possible. But that’s what I needed to do.
-	The second big fault was trying to blindly tweak little things when my test cases didn’t come out as I expected. This came at about the 40 minute mark and if I had returned to the algorithm then I probably would have been able to fix the code and pass the assessment. As it was I got super stuck in a coding spiral which was extremely distressing and ineffective. 
-	I remember inwardly giving up under the pressure of A) knowing I needed to scorched earth, but had no time B) the physical pain. This is why I hacked and slashed, because inside I had already crumpled.

#### Official feedback:

Hi, Sandy. After discussing your performance with Victor, we've concluded that you would benefit from a retake of this assessment. Your grade, therefore, is Not Yet. Please see our Assessment Rules for information on what a Not Yet means for you.
You started off well. You were structured and intentional while going through the project requirements. You made it a point to test your idea against the test cases to validate and confirm your understanding of the problem. You also asked insightful questions that helped solidify your grasp of the requirements. Additionally, you came up with a solid algorithm, which served as a strong foundation for your initial implementation.
Your initial working solution came together within the 60-minute mark, but at that point, not all test cases were passing. The next challenge was debugging the two failing cases. You focused first on diagnosing the first test case and used log statements, which was a good approach. However, your logs were limited in scope, mostly covering the first half of your implementation. Expanding logging to capture more points in your code would have provided clearer insights. More importantly, taking a step back to revisit your algorithm before continuing to tweak the code could have led to a more structured approach to solving the issue. Instead, much of the debugging time was spent making incremental changes without a clear understanding of the underlying logic gap. After passing the 60-minute mark, Victor prompted you to add a log statement after your second inner loop and consider expected values at key points. This helped you pinpoint the issue, but a more deliberate re-evaluation of your algorithm earlier in the process might have led you to the same realization without external hints.
Once the first failing test case was resolved, you moved on to the second. At this point, Victor reminded you of the requirement to modify the given linked list rather than returning an entirely new one. You correctly considered introducing a dummy node, but as you neared the 70-minute mark, you didn’t have enough time to fully work through the necessary logic. Instead, you made small tweaks without a clear structured plan. By the 75-minute mark, with no concrete resolution in sight, Victor had to wrap up the interview. Since you exceeded the 60-minute allotted time and were unable to fully resolve the remaining issues, your grade was lowered from a "B" to a "C+".
Hopefully, this feedback helps you focus your preparation moving forward. In addition to reviewing these insights, we also have a document with more resources, including general guidance and experiences shared by students who received a 'Not Yet' and later passed. You can find that document here.



#### Takeaways:

-	Make sure to tie your test cases in to the problem definition, so that even edge cases are conforming to the conditions.
-	Have a piss plan. Either for-warn the assessor that you will take a toilet break at the half time mark, or have a piss bottle under the desk, or don’t drink anything before the assessment. My preference is in that order. The pee break will act as a way of unclenching your brain also. 
-	Have a set prep plan including collections of problems you want to go through and a set date for the exam.
-	Have a set PEDAC process. You had this for LS216 and since then you’ve gotten more relaxed with it.
-	Re-commit to the 30 second eye-close. You can do it twice.

## Prep plan:

### List of problems solved since the first attempt

- 01_binary_tree_eddie_1.js
- 02_recursive_interleavings.js
- 03_bin_tree_with_eddie.js
- 04_sum_even_nodes_in_bin_tree.js
- 05_celebrity_problem.js
- 06_build_a_tree.js

### List of problems to solve

### List of techniques

- Linked Lists
- Binary trees
- Two Pointers
  1. How to reverse words in a string sentence without .split()
    - while index is less than string length
      - when `index` is reaches a space. Save that as word end
      - Then decrement index back to the last wordStart with a 2nd while loop, pushing those chars into `output`
      - Then increment back to `wordEnd` with a 3rd while loop
  2. calculating the sum of a moving window in an array
      -  find the sum
      -  each incrementation of start end you subtract start and add end, without having to recalculate the numbers in between.
  3. Two sum less than target
    - You had to sort it. You had to bloody well sort it. The lesson it to methodically and assiduously challenge your first suppositions.
  4. Count pairs. Here there is a counter intuitive while loop which increments the result every single iteration and if the right meets the left resets the right back to the length - 1:

```javascript
function countPairs(array, target) {
  let right = array.length - 1;
  let left = array.length - 2;
  let counter = 0;

  while (array[left] + array[right] > target) {
    counter++;
    right--;
    if (left === right) {
      left--;
      right = array.length - 1;
    }
  }

  return counter
}
```

- Binary Search

1.  Search in a sorted nested array -> Demonstrates the importance of modelling each iteratiion down to the niceest detail, even though it feels like a slower way of doing things. Control yourself.
  - also one of the bugs was (in fact it happened more than once) was having more than one name for variables. There was l1 and left. There was nums and input. Be consistent with name.s In fact you may even want to have a names section wihtin the P part of the pedac. Also maybe as a part of D : where can I test this?

- Stack

Common traps:
  - linked lists:
    - you might need a dummy node
    - Nodes next properties could point backwards.
  - 2 pointers:
    - you might need to sort it
  - Binary search:
    - you might be binary searching something other than the collection they've given you
  - Stack & queues
