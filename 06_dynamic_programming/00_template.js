/*

My steps

TOP DOWN

- solve without a cache first (AKA brute force)

- define cache
- define function
  - guard for base-case(s)
  - guard for cache.has
  - recursive case
  - return result
-  return recursiveFunction call.

BOTTOM UP

-  Bottom up (my template):
  - guard clauses
  - create a cache called dp (usually an array mirroring the input, filled with 0)
  - Use for loops to set the values in dp, building on previous answers
  - return the last element in dp
    
*/