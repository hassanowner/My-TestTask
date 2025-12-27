/*
========================================================
JavaScript Data Types — Complete & Formal Explanation
Covered Topics (ONLY the ones you provided):
1) String
2) Number
3) Array (Object)
4) Object
5) Boolean
========================================================
*/

// ======================================================
// 1) STRING
// - Used to represent text
// - Created using single quotes, double quotes, or backticks
// ======================================================

let firstName = "Osama";
let lastName = "Mohamed";
let fullName = firstName + " " + lastName; // String concatenation

console.log(fullName);
console.log(typeof fullName);

/*
Result:
Osama Mohamed
"string"
*/


// ======================================================
// 2) NUMBER
// - Used to represent all numeric values (integers & decimals)
// - JavaScript does NOT separate integers from floats
// ======================================================

let year = 2025;        // integer number
let salary = 5000.99;  // floating-point number

console.log(year);
console.log(typeof year);

console.log(salary);
console.log(typeof salary);

/*
Result:
2025
"number"
5000.99
"number"
*/


// ======================================================
// 3) ARRAY (Object)
// - Array is a special type of Object
// - Used to store ordered collections of values
// ======================================================

let scores = [10, 15, 17];

console.log(scores);
console.log(typeof scores);            // Arrays are objects
console.log(scores.length);            // Number of elements
console.log(scores[0]);                // Access by index

/*
Result:
[10, 15, 17]
"object"
3
10
*/


// ======================================================
// 4) OBJECT
// - Used to store data in key-value pairs
// - Keys describe values (properties)
// ======================================================

let user = {
  name: "Osama",
  age: 17,
  country: "Eg"
};

console.log(user);
console.log(typeof user);
console.log(user.name);    // Access property using dot notation
console.log(user["age"]);  // Access property using bracket notation

/*
Result:
{ name: "Osama", age: 17, country: "Eg" }
"object"
Osama
17
*/


// ======================================================
// 5) BOOLEAN
// - Represents logical values: true or false
// - Commonly used in conditions and decisions
// ======================================================

let isLoggedIn = true;
let hasPermission = false;

console.log(isLoggedIn);
console.log(typeof isLoggedIn);

console.log(hasPermission);
console.log(typeof hasPermission);

/*
Result:
true
"boolean"
false
"boolean"
*/
