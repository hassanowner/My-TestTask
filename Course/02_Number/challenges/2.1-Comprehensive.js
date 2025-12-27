/*
========================================================
JAVASCRIPT NUMBER & MATH — CHALLENGE (With Results)
Read the task carefully, then check the output
========================================================
*/


// ======================================================
// CHALLENGE 1
// Create the number 1,000,000 using 5 DIFFERENT ways
// ======================================================

console.log(1000000);
/*
Result:
1000000
*/

console.log(1_000_000);
/*
Result:
1000000
*/

console.log(1e6);
/*
Result:
1000000
*/

console.log(10 ** 6);
/*
Result:
1000000
*/

console.log(10 * 10 * 10 * 10 * 10 * 10);
/*
Result:
1000000
*/


// ======================================================
// CHALLENGE 2
// Print the largest safe integer in JavaScript
// ======================================================

console.log(Number.MAX_SAFE_INTEGER);
/*
Result:
9007199254740991
*/


// ======================================================
// CHALLENGE 3
// Print the largest possible number in JavaScript
// then try to exceed it
// ======================================================

console.log(Number.MAX_VALUE);
/*
Result:
1.7976931348623157e+308
*/

console.log(Number.MAX_VALUE + 1);
/*
Result:
Infinity
*/


// ======================================================
// CHALLENGE 4
// Convert the following values to numbers
// If conversion fails, print NaN
// ======================================================

console.log(Number("350 USD"));
/*
Result:
NaN
*/

console.log(+"350 USD");
/*
Result:
NaN
*/

console.log(parseInt("350 USD"));
/*
Result:
350
*/

console.log(parseFloat("350.75 USD"));
/*
Result:
350.75
*/


// ======================================================
// CHALLENGE 5
// Check which of the following values is an integer
// ======================================================

console.log(Number.isInteger("350"));
/*
Result:
false
*/

console.log(Number.isInteger(350.5));
/*
Result:
false
*/

console.log(Number.isInteger(350));
/*
Result:
true
*/


// ======================================================
// CHALLENGE 6
// Use Math methods to round the number
// ======================================================

let num = 24.6;

console.log(Math.round(num));
/*
Result:
25
*/

console.log(Math.ceil(num));
/*
Result:
25
*/

console.log(Math.floor(num));
/*
Result:
24
*/


// ======================================================
// CHALLENGE 7
// Find the minimum and maximum number from the list
// ======================================================

console.log(Math.min(50, -10, 200, 0, 75));
/*
Result:
-10
*/

console.log(Math.max(50, -10, 200, 0, 75));
/*
Result:
200
*/


// ======================================================
// CHALLENGE 8
// Generate a random number between 0 and 1
// ======================================================

console.log(Math.random());
/*
Result:
Random number between 0 and 1
*/


// ======================================================
// CHALLENGE 9
// Remove the decimal part WITHOUT rounding
// ======================================================

console.log(Math.trunc(24.9));
/*
Result:
24
*/
