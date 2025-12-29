/*
========================================================
JavaScript Variables — Simple Introduction
Covered Topics (ONLY the original ones):
- What Is Variable ?
- Why We Use Variables ?
- Declare A Variable And Use
- Syntax (Keyword | Variable Name | Assignment Operator | Variable Value)
- Variable Without Var
- Multiple Variables In The Same Line
- Local And Global Variable (Simple idea, NO functions)
- Loosely Typed vs Strongly Typed
========================================================
*/

// ======================================================
// What Is Variable ?
// - A variable is a place to store a value
// ======================================================

var user = "Sayed";

console.log(user);

/*
Result:
Sayed
*/


// ======================================================
// Why We Use Variables ?
// - To store values and reuse them
// ======================================================

var siteName = "My Website";

console.log(siteName);

/*
Result:
My Website
*/


// ======================================================
// Declare A Variable And Use
// ======================================================

var age = 25;

console.log(age);

/*
Result:
25
*/


// ======================================================
// Variable Syntax
// Keyword        => var
// Variable Name  => email
// Assignment     => =
// Variable Value => "test@mail.com"
// ======================================================

var email = "test@mail.com";

console.log(email);

/*
Result:
test@mail.com
*/


// ======================================================
// Variable Without Var
// - Works, but creates variable directly
// ======================================================

country = "Iraq";

console.log(country);

/*
Result:
Iraq
*/


// ======================================================
// Multiple Variables In The Same Line
// ======================================================

var x = 5, y = 10, z = 15;

console.log(x);
console.log(y);
console.log(z);

/*
Result:
5
10
15
*/


// ======================================================
// Local And Global Variable (Simple Concept)
// - Global variable: accessible everywhere
// - Local variable: limited to a specific place
// (Concept only, no function used)
// ======================================================

var globalValue = "Global";

/*
Result:
Global
*/


// ======================================================
// Loosely Typed vs Strongly Typed
// - JavaScript is loosely typed
// - Variable type can change
// ======================================================

var data = "Hello";

console.log(data);
console.log(typeof data);

data = 100;

console.log(data);
console.log(typeof data);

/*
Result:
Hello
"string"
100
"number"
*/
