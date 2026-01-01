/*
========================================================
Arrays
========================================================
Covered Topics:
- Create Arrays [Two Methods] new Array() + []
- Access Arrays Elements
- Nested Arrays
- Change Arrays Elements
- Check For Array Array.isArray(arr)
========================================================
*/

// ======================================================
// Create Arrays
// ======================================================

// Method 1: Using square brackets []
let teamMembers = ["Ali", "Omar", "Hassan", ["Yousef", "Kareem"]];

// Method 2: Using new Array()
let departments = new Array("HR", "IT", "Finance");

console.log(teamMembers);
/*
Result:
["Ali", "Omar", "Hassan", ["Yousef", "Kareem"]]
*/


// ======================================================
// Access Array Elements
// ======================================================

console.log(`Welcome ${teamMembers[0]}`);
/*
Result:
"Welcome Ali"
*/

console.log(`Welcome ${teamMembers[2]}`);
/*
Result:
"Welcome Hassan"
*/


// ======================================================
// Nested Arrays
// ======================================================

console.log(teamMembers[3]);
/*
Result:
["Yousef", "Kareem"]
*/

console.log(`Nested Member: ${teamMembers[3][1]}`);
/*
Result:
"Nested Member: Kareem"
*/

console.log(teamMembers[3][1][2]);
/*
Result:
"r"
*/


// ======================================================
// Change Array Elements
// ======================================================

teamMembers[1] = "Salem";
console.log(teamMembers);

/*
Result:
["Ali", "Salem", "Hassan", ["Yousef", "Kareem"]]
*/

teamMembers[3] = ["Adel", "Mahmoud"];
console.log(teamMembers);

/*
Result:
["Ali", "Salem", "Hassan", ["Adel", "Mahmoud"]]
*/


// ======================================================
// Check If Variable Is Array
// ======================================================

console.log(Array.isArray(teamMembers));

/*
Result:
true
*/
