/*
========================================================
Var vs Let vs Const — Simple Explanation
Covered Topics (FULL original titles and explanations):
--------------------------------------------------------

Var
- Redeclare (Yes)
- Access Before Declare (Undefined)
- Variable Scope Drama [Added To Window]
- Block Or Scope Function

Let
- Redeclare (No => Error)
- Access Before Declare (Error)
- Variable Scope Drama
- Block Or Scope Function

Const
- Redeclare (No => Error)
- Access Before Declare (Error)
- Variable Scope Drama
- Block Or Scope Function
========================================================
*/

// ======================================================
// VAR
// ======================================================

// Redeclare (Yes)
// - var allows redeclaring the same variable

var productName = "Table";
var productName = "Chair";

console.log(productName);

/*
Result:
Chair
*/


// Access Before Declare (Undefined)
// - Using var before declaring gives undefined

console.log(orderVar);
var orderVar = 100;

/*
Result:
undefined
*/


// Variable Scope Drama [Added To Window]
// - var variables are added to the window object

var layout = "Grid";

console.log(window.layout);

/*
Result:
Grid
*/


// Block Or Scope Function
// - var does NOT respect block scope
// - The variable is available everywhere

/*
Result:
var ignores block scope
*/


// ======================================================
// LET
// ======================================================

// Redeclare (No => Error)
// - let does NOT allow redeclaring the same variable

// let page = "Home";
// let page = "About"; // Error


// Access Before Declare (Error)
// - let cannot be used before declaration

// console.log(countLet);
// let countLet = 5; // Error


// Variable Scope Drama
// - let is NOT added to window

let themeName = "Dark";

console.log(window.themeName);

/*
Result:
undefined
*/


// Block Or Scope Function
// - let respects block scope

/*
Result:
let works inside its block only
*/


// ======================================================
// CONST
// ======================================================

// Redeclare (No => Error)
// - const does NOT allow redeclaration

// const tax = 5;
// const tax = 10; // Error


// Access Before Declare (Error)
// - const cannot be used before declaration

// console.log(statusConst);
// const statusConst = "Active"; // Error


// Variable Scope Drama
// - const is NOT added to window

const appVersion = "1.0.0";

console.log(window.appVersion);

/*
Result:
undefined
*/


// Block Or Scope Function
// - const respects block scope

/*
Result:
const works inside its block only
*/
