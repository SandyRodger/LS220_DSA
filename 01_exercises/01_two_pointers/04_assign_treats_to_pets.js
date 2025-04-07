/*

https://launchschool.com/exercises/dffe6d4c?track=ruby

Imagine you're a pet owner wanting to give treats to your pets. Each pet has a specific appetite level represented by an array appetite[i], which is the minimum size of a treat the pet will be happy with. Each treat has a size represented by an array treats[j]. A pet will be satisfied if the size of the treat treats[j] is greater than or equal to its appetite level appetite[i]. Your goal is to maximize the number of satisfied pets and output the number of satisfied pets in the end.

time complexity:

We are looking for O(AlogA + TlogT) solution where A is the length of the appetite array and T is the length of the treats array.

console.log(assignTreats([3, 4, 2], [1, 2, 3]) === 2);

P:

Write a function that takes 2 unsorted arrays (arr1, and arr2), filled by numbers. and returns the highest possible quantity of numbers in arr1 that are can be matched to equal or lower numbers in arr2.

also:
- Use 2 pointers
- time complexity must be O(AlogA + TlogT)

E:

#1

[3, 4, 2], [1, 2, 3]) === 2

2 - 2, 3 - 3. 
pet 4 can never be satisfied
meal 1 can never satisfy a pet


[1, 5], [5, 5, 6]) === 2

pet 1 is easily satisfied by 5
pet 5 is satisfied by 5 or 6

[1, 2, 3], [3]) === 1

pet 3 is satisfied by 3

[2], [1, 2, 1, 1]) === 1

pet 2 is satisfied by 2

[4, 3, 1], [2, 1, 3]) === 2

- pet 4 is too hungry
- pet 3 is satisfied by 3
- pet 1 is satisfied by 2 or 1

[1,2,3], [1,2,3]) === 3

- perfect match

[4, 5, 6], [1,2,3]) === 0

- perfect unmatch.

D:

2 pointers
O(AlogA + TlogT)
  - iterate through A once  -> sort ?
  - iterate through A logarithmicly base 2 once
  - iterate through B once
  - iterate through B logarithmicly base 2 once

A:

sortedPets = [2, 3, 4]
sortedMeals =  [1, 2, 3]
petPointer = 1
mealsPointer = 2
result = 2

sort each array
have a pointer for each array
- if sortedMeals is less than sortedPets, inc sortedMeals
- otherwise increment result and both counters

C:

*/

function assignTreats(pets, meals) {
  pets.sort((a, b) => a - b);
  meals.sort((a, b) => a - b);
  let petPointer = 0;
  let mealPointer = 0;
  let result = 0;

  while (petPointer < pets.length && mealPointer < meals.length) {
    if (meals[mealPointer] < pets[petPointer]) {
      mealPointer++;
    } else {
      result++;
      petPointer++
      mealPointer++
    }
  }

  return result;
}
console.log(assignTreats([3, 4, 2], [1, 2, 3]) === 2);
console.log(assignTreats([1, 5], [5, 5, 6]) === 2);
console.log(assignTreats([1, 2, 3], [3]) === 1);
console.log(assignTreats([2], [1, 2, 1, 1]) === 1);
console.log(assignTreats([4, 3, 1], [2, 1, 3]) === 2);
console.log(assignTreats([1,2,3], [1,2,3]) === 3);
console.log(assignTreats([4, 5, 6], [1,2,3]) === 0);