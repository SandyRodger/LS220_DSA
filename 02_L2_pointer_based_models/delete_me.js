/*

Input: [2, 9, 5, 10, 5, 6]
Output: 24

-------------------------
Round 1:

mostWater = 0 => 8
start = 0 => 1
end = 5
barriers[start] = 2
barriers[end] = 6
end - start = 5
waterCaught = 2 * 5 === 10

-------------------------
Round 2: [2, 9, 5, 10, 5, 6]

mostWater =  24
start =  1
end = 5
barriers[start] = 9
barriers[end] = 6
end - start = 4
waterCaught = 6 * 4 === 24
-------------------------

Round 3: [2, 9, 5, 10, 5, 6]

mostWater =  24
start =  1
end = 4
barriers[start] = 9
barriers[end] = 5
end - start = 3
waterCaught = 5 * 3 === 15, remains 24

-------------------------

Round 4: [2, 9, 5, 10, 5, 6]

mostWater =  24
start =  1
end = 3
barriers[start] = 9
barriers[end] = 10
end - start = 2
waterCaught = 9 * 2 === 18, remains 24

-------------------------

Round 5: [2, 9, 5, 10, 5, 6]

mostWater =  24
start =  2
end = 3
barriers[start] = 5
barriers[end] = 10
end - start = 1
waterCaught = 5 * 1 === 5, remains 24

-------------------------

Round 5: [2, 9, 5, 10, 5, 6]

mostWater =  24
start =  3
end = 3

start increments and is equal to end, so escape the while loop

- return the mostWater, set in round 2 as 24

*/
