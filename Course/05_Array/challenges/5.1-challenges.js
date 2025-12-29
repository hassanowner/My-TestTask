/*
========================================================
ARRAYS — SIMPLE CHALLENGES (BEGINNER)
========================================================
*/

// ======================================================
// CHALLENGE 1: Create And Access Array
// ======================================================

/*
QUESTION:
1. Create an array with 3 names
2. Print the first name
3. Print the last name
*/

let names = ["Ali", "Hassan", "Omar"];

console.log(names[0]);
/*
Result:
Ali
*/

console.log(names[2]);
/*
Result:
Omar
*/


// ======================================================
// CHALLENGE 2: Change Array Elements
// ======================================================

/*
QUESTION:
1. Change the second name to "Salem"
2. Print the updated array
*/

names[1] = "Salem";

console.log(names);
/*
Result:
["Ali", "Salem", "Omar"]
*/


// ======================================================
// CHALLENGE 3: Add And Remove Elements
// ======================================================

/*
QUESTION:
1. Add a name to the end of the array
2. Remove the first name
3. Print the final array
*/

names.push("Yousef");
console.log(names);
/*
Result:
["Ali", "Salem", "Omar", "Yousef"]
*/

names.shift();
console.log(names);
/*
Result:
["Salem", "Omar", "Yousef"]
*/


// ======================================================
// CHALLENGE 4: Array Length And Check
// ======================================================

/*
QUESTION:
1. Print the array length
2. Check if the variable is an array
*/

console.log(names.length);
/*
Result:
3
*/

console.log(Array.isArray(names));
/*
Result:
true
*/
