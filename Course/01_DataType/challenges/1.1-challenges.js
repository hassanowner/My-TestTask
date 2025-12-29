/* ======================================================
   JAVASCRIPT FUNDAMENTALS CHALLENGES
   Topics Covered:
   - Data Types (String, Number, Boolean)
   - Variables (var, let, const)
   - Variable Declaration and Usage
======================================================== */

// ======================================================
// CHALLENGE 1: Strings
// ======================================================

/*
QUESTION:
Create two string variables for first name and last name.
Combine them into a full name and print it with a sentence.
*/

var firstName = "Lora";
var lastName = "Mohamed";

var fullName = firstName + " " + lastName;
console.log("Full Name:", fullName);

/* ANSWER:
Full Name: Lora Mohamed
*/

// ======================================================
// CHALLENGE 2: Numbers
// ======================================================

/*
QUESTION:
Create two number variables: age and year.
Print a sentence like "Your age is 17 and the year is 2025."
*/

let age = 17;
let year = 2025;

console.log("Your age is " + age + " and the year is " + year);

/* ANSWER:
Your age is 17 and the year is 2025
*/

// ======================================================
// CHALLENGE: Boolean Question
// ======================================================

/*
QUESTION:
You have a boolean variable to check if Mohamed is logged in.
Print "Mohamed is logged in" if true, or "Mohamed is not logged in" if false.
*/

const LogIn = true;

console.log("isMohamedLoggedIn" + LogIn);
/* ANSWER
Mohamed is logged in
*/

// ======================================================
// CHALLENGE 4: Var vs Let vs Const
// ======================================================

/*
QUESTION:
Test var, let, and const behavior.
*/

var product = "Table";
var product = "Chair"; // redeclare allowed
console.log("Var product:", product); // Chair

let page = "Home";
// let page = "About"; // Uncommenting will cause Error
console.log("Let page:", page);

const tax = 5;
// tax = 10; // Uncommenting will cause Error
console.log("Const tax:", tax);

/* ANSWER:
Var product: Chair
Let page: Home
Const tax: 5
*/
