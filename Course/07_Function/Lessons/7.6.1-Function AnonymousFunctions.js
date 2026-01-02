/*
====================================================
JavaScript Functions — Anonymous Functions
Complete Educational Guide
====================================================

CONTENT OVERVIEW
====================================================
1) Topics That Will Be Studied
2) Basic Structure & Core Concept
3) Simple Rule Example
4) Three Practical Examples
   - Simple Example
   - Intermediate Example
   - Advanced Example
5) Final Summary
====================================================
*/



// ==================================================
// 1) TOPICS THAT WILL BE STUDIED
// ==================================================

/*
In this lesson, we will study the following topics in order:

1- What is a Function in JavaScript
2- What is an Anonymous Function
3- Difference Between Named and Anonymous Functions
4- Assigning Anonymous Functions to Variables
5- Passing Anonymous Functions as Arguments
6- Using Anonymous Functions with setTimeout
7- Using Anonymous Functions with Events
8- Practical Benefits of Anonymous Functions
*/




// ==================================================
// 2) BASIC STRUCTURE & CORE CONCEPT
// ==================================================

/*
GENERAL IDEA
----------------------------------------------------
A function in JavaScript is a block of code designed
to perform a specific task.

There are TWO important types here:
1) Named Function
2) Anonymous Function
*/

/*
NAMED FUNCTION STRUCTURE
---------------------------------------------------- */
function functionName(parameters) {
  // code to execute
}

/*
ANONYMOUS FUNCTION STRUCTURE
---------------------------------------------------- */
function (parameters) {
  // code to execute
}
/*
** Notice:
- No function name
- Must be stored in a variable or passed directly


WHY ANONYMOUS FUNCTIONS ARE USEFUL
----------------------------------------------------
- Shorter and cleaner code
- Used once without polluting the global scope
- Perfect for callbacks and events
- Common in modern JavaScript frameworks





// ==================================================
// 3) SIMPLE RULE EXAMPLE (CORE RULE)
// ==================================================

RULE:
----------------------------------------------------
An anonymous function has NO name and is usually
stored in a variable or passed as an argument.
*/

let addNumbers = function (a, b) {
  return a + b;
};

console.log(addNumbers(5, 7));
// Result:
// 12





// ==================================================
// 4) PRACTICAL EXAMPLES
// ==================================================

// --------------------------------------------------
// Example 1: SIMPLE EXAMPLE
// --------------------------------------------------

/*
Goal:
Create an anonymous function that prints a message
*/

let greet = function () {
  console.log("Hello World");
};

greet();
// Result:
// Hello World



// --------------------------------------------------
// Example 2: INTERMEDIATE EXAMPLE
// --------------------------------------------------

/*
Goal:
Pass an anonymous function as an argument
*/

function executeOperation(operation) { // --> Named function
  operation();
}

executeOperation(function () { // --> Anonymous function
  console.log("Operation Executed Successfully");
});
// Result:
// Operation Executed Successfully

/*
====================================================
BEHIND THE SCENES — EXECUTION FLOW DIAGRAM
====================================================


[ SOURCE CODE ]
----------------------------------------------------*/
function executeOperation(operation) {
  operation();
}

executeOperation( anonymousFunction )
// anonymousFunction = function () {  console.log("Operation Executed Successfully");  };
/* ----------------------------------------------------/*


STEP 1 — FUNCTION DEFINITION (PARSE PHASE)
----------------------------------------------------
Memory

| executeOperation
| └─ function (operation) {
|      operation();
|   }
----------------------------------------------------


STEP 2 — FUNCTION CALL
----------------------------------------------------
executeOperation( function )
        |
        |
        ▼
----------------------------------------------------


STEP 3 — ANONYMOUS FUNCTION CREATION
----------------------------------------------------
Heap

| anonymousFunction
| └─ function () {
|      console.log("Operation Executed Successfully");
|   }
----------------------------------------------------


STEP 4 — ARGUMENT ASSIGNMENT
----------------------------------------------------
executeOperation Scope

| operation ───────────────► anonymousFunction
----------------------------------------------------


STEP 5 — CALL STACK (EXECUTION START)
----------------------------------------------------
Call Stack (Top → Bottom)

| anonymousFunction()
| executeOperation()
----------------------------------------------------


STEP 6 — FUNCTION INVOCATION
----------------------------------------------------
Inside executeOperation

| operation();  // operation() = anonymousFunction()
|      |
|      ▼
----------------------------------------------------


STEP 7 — ANONYMOUS FUNCTION EXECUTION
----------------------------------------------------
anonymousFunction

| console.log("Operation Executed Successfully");
----------------------------------------------------


STEP 8 — OUTPUT
----------------------------------------------------
Console Output

| Operation Executed Successfully
----------------------------------------------------


STEP 9 — CALL STACK CLEANUP
----------------------------------------------------
Call Stack

| (empty)
----------------------------------------------------

====================================================
END OF EXECUTION FLOW
====================================================
*/
   
/*
!! Important NOTE:
This topic (Passing and Executing Anonymous Functions) 
will be studied in detail in Lesson 7.6.2   */






// --------------------------------------------------
// Example 3: ADVANCED EXAMPLE
// --------------------------------------------------

/*
Goal:
Use an anonymous function with setTimeout
*/

setTimeout(function () {
  console.log("This message appears after 2 seconds");
}, 2000);

// Result (after 2 seconds):
// This message appears after 2 seconds
/*
!! NOTE: ↑↑ `setTimeout`
This concept will be studied later as a main, standalone topic.
It is mentioned here only to clarify the core idea and execution flow.
The purpose is conceptual understanding, not full technical depth.
*/





// ==================================================
// 5) DIFFERENCE: NAMED vs ANONYMOUS
// ==================================================

/*
NAMED FUNCTION
----------------------------------------------------
- Has a name
- Can be reused easily
- Easier to debug
*/

function multiply(a, b) {
  return a * b;
}

console.log(multiply(4, 5));
// Result:
// 20


/*
ANONYMOUS FUNCTION
----------------------------------------------------
- No name
- Usually used once
- Common in callbacks & events
*/

let multiplyAnon = function (a, b) {
  return a * b;
};

console.log(multiplyAnon(4, 5));
// Result:
// 20



// ==================================================
// 6) EVENTS EXAMPLE (REAL WORLD)
// ==================================================

/*
This example assumes a button exists in HTML:

<button id="btn">Click Me</button>
*/

document.getElementById("btn").addEventListener("click", function () {
  console.log("Button Clicked!");
});

// Result when clicking the button:
// Button Clicked!
/*
!! NOTE: getElementById , addEventListener 
This concept will be studied later as a main, standalone topic.
It is mentioned here only to clarify the core idea and execution flow.
The purpose is conceptual understanding, not full technical depth.
*/


/*
====================================================
FINAL SUMMARY
====================================================

- Anonymous functions are functions without names
- They are stored in variables or passed as arguments
- They are widely used in:
  - Callbacks
  - Events
  - Timers (setTimeout, setInterval)
- They help keep code clean and organized
- Essential concept for modern JavaScript development

Mastering anonymous functions is a BIG step toward
understanding advanced JavaScript and frameworks
like React, Vue, and Node.js.
====================================================
*/
