/*
========================================================
Concatenation
========================================================
*/

// ======================================================
// Concatenation
// - Concatenation means joining strings together
// - The + operator is used to combine strings
// ======================================================

// Example 1: Joining two text values
let partOne = "Welcome";
let partTwo = "User";

document.write(partOne + " " + partTwo);

/*
Result (on page):
Welcome User
*/


// ======================================================
// Example 2: Concatenation with dynamic text
// - Commonly used for messages and UI text
// ======================================================

let action = "Loading";
let resource = "Data";

console.log(action + " " + resource);

/*
Result:
Loading Data
*/


// ======================================================
// Example 3: Using comma in console.log
// - Comma separates values
// - JavaScript adds space automatically
// ======================================================

console.log(partOne, partTwo);

/*
Result:
Welcome User
*/
