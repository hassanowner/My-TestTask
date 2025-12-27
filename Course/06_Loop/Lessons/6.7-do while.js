/*
===========================================================
DO / WHILE LOOP — Simple & Practical Guide (Single text block)
===========================================================

What is a do / while loop?
- A "do / while" loop executes the block of code FIRST,
  then checks the condition AFTER the execution.
- This means the code inside the loop runs AT LEAST ONCE
  even if the condition is false.

Syntax:
  do {
    // code to execute
  } while (condition);

Key difference vs while:
- while    -> checks condition first, then runs code
- do/while -> runs code first, then checks condition

This file contains:
  1) Basic do/while example (runs at least once)
  2) Practical example with array iteration
  3) Comparison with while behavior
  4) Common use cases and safety notes

All examples include explanations and expected results as comments.
*/

/* =========================
   1) Basic do/while — runs once even if condition is false
   ========================= */

let i = 0;

do {
  console.log(i); // executed BEFORE checking the condition
  i++;
} while (false);  // condition is false

console.log(i);

/*
Expected console output:
0
1
*/

/* Explanation:
 - The code inside do { } runs first without checking the condition.
 - console.log(i) prints 0.
 - i is incremented to 1.
 - while(false) is checked -> condition is false.
 - Loop stops immediately after the first run.
 - Final value of i is 1.
 - This proves that do/while always runs at least once.
*/

/* =========================
   2) Practical example — iterating an array with do/while
   ========================= */

let products = ["Keyboard", "Mouse", "Pen"];
let index = 0;

do {
  console.log(products[index]);
  index++;
} while (index < products.length);

/*
Expected console output:
Keyboard
Mouse
Pen
*/

/* Explanation:
 - First iteration:
   index = 0 -> prints "Keyboard"
 - index increases after each iteration
 - Condition is checked AFTER the loop body
 - Loop continues until index < products.length is false
 - Behavior is similar to while, but safer if you want at least one execution.
*/

/* =========================
   3) do/while vs while (important comparison)
   ========================= */

// while version
let a = 5;

while (a < 3) {
  console.log("This will NOT run");
}

/*
Result:
(No output)
*/

// do/while version
let b = 5;

do {
  console.log("This WILL run once");
} while (b < 3);

/*
Expected console output:
This WILL run once
*/

/* Explanation:
 - while checks condition first -> 5 < 3 is false -> loop body skipped
 - do/while runs body first, then checks condition
 - Useful when at least one execution is required
*/

/* =========================
   4) Common use cases for do/while
   ========================= */

/*
Use do/while when:
 - You must execute an action at least once
 - Showing a menu at least once
 - Validating user input (run once, then check validity)
 - Reading data until a condition becomes false

Avoid do/while when:
 - You should NEVER run unless condition is true
 - A for or while loop is clearer for simple array iteration
*/

/* =========================
   Safety Note — Infinite Loop
   ========================= */

/*
 BAD example (infinite loop):
 let x = 0;
 do {
   console.log(x);
 } while (x < 3); // x never changes

 GOOD example:
 let x = 0;
 do {
   console.log(x);
   x++;
 } while (x < 3);
*/

/*
Expected output (good example):
0
1
2
*/

/* =========================
   Quick Summary
   =========================
 - do/while always runs once before checking condition
 - Condition is checked AFTER loop execution
 - Be careful to update loop variables inside the loop
 - Use it when "at least one run" is required
===========================================================
END
===========================================================
*/
