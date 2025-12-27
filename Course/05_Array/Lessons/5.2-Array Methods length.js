/*
========================================================
Array Methods
========================================================
Covered Topic:
- length
========================================================
*/

// Index starts from 0
// [ 0, 1, 2, 3, ... ]

let teamUsers = ["Ali", "Omar", "Hassan", "Salman"];


// ======================================================
// Original Array
// ======================================================

console.log(teamUsers);
/*
Result:
["Ali", "Omar", "Hassan", "Salman"]
*/


// ======================================================
// Using length to control array size
// ======================================================

// Reducing the length removes elements from the end
teamUsers.length = 2;

console.log(teamUsers);
/*
Result:
["Ali", "Omar"]
*/


// ======================================================
// Notes
// - length can be used to remove elements
// - Array indexes always start from 0
// ======================================================
