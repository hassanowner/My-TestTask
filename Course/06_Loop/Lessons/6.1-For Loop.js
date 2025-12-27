/*
========================================================
FOR LOOP — COMPLETE EDUCATIONAL EXPLANATION
========================================================

The "for" loop is used to repeat a block of code
a specific number of times when the number of
iterations is known in advance.

General Syntax:
for (initialization; condition; update) {
  // code to be executed on each iteration
}

--------------------------------------------------------
1) Initialization
- Executed ONCE before the loop starts
- Usually used to declare a counter variable

2) Condition
- Checked BEFORE every iteration
- If it is true → loop continues
- If it is false → loop stops

3) Update
- Executed AFTER each iteration
- Usually increments or decrements the counter
========================================================
*/


/*
========================================================
EXAMPLE 1: Basic Counting (0 to 9)
========================================================
*/

for (let i = 0; i < 10; i++) {
  console.log(i);
}

/*
Output:
0
1
2
3
4
5
6
7
8
9
*/


/*
========================================================
EXAMPLE 2: Counting With Step (Increase by 2)
========================================================
*/

for (let i = 0; i < 10; i += 2) {
  console.log(i);
}

/*
Output:
0
2
4
6
8
*/


/*
========================================================
EXAMPLE 3: Counting Backwards
========================================================
*/

for (let i = 5; i >= 1; i--) {
  console.log(i);
}

/*
Output:
5
4
3
2
1
*/


/*
========================================================
EXAMPLE 4: Loop Through Array Using Index
========================================================
*/

let users = ["Ali", "Hassan", "Mona"];

for (let i = 0; i < users.length; i++) {
  console.log(users[i]);
}

/*
Output:
Ali
Hassan
Mona
*/


/*
========================================================
EXAMPLE 5: Accumulating Values (Total Calculation)
========================================================
*/

let numbers = [10, 20, 30];
let total = 0;

for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}

console.log(total);

/*
Output:
60
*/


/*
========================================================
IMPORTANT NOTES
========================================================
- The loop variable (i) starts from 0 by convention
- "i < array.length" prevents accessing invalid indexes
- Always ensure the condition will become false
  to avoid infinite loops
========================================================
*/
