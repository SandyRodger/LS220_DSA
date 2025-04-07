function recursiveFactorial(n) {
  if (n === 1) {
    return n
  } else {
    return n * recursiveFactorial(n - 1);
  }
}

console.log(recursiveFactorial(4))
/*
1st function call:

Is n equal to 1?
  - No, it's 4
- Ok pass (n - 1) into the recursiveFactorial function
  - Is n equal to 1 ?
    - No it's 3
    - Ok, pass (n - 1) into the recursiveFactorial function
      - Is n equal to 1?
        - No it's 2
          -Ok, pass (n-1) into the recursiveFactorial function
            - is n equal to 1?
              - yes!
                - ok, I will return that number (1)
              - I will take your 1 and multiply it by my n (2), returning 2
            - I will take your 2 and multiply it by my n (3), returning 6
          - I will take your 6 and multiply it by my n (4), returning 24

*/