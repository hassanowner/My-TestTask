/*
================================================================================
CREATING FUNCTIONS USING `new Function` IN JAVASCRIPT
================================================================================

TOPICS COVERED:
1) What is Function Constructor
2) Basic Rule (Syntax)
3) How JavaScript Executes It
4) Simple Example
5) How to Call the Function
6) Important Rules & Warnings
7) Comparison with Normal Functions

--------------------------------------------------------------------------------
1) WHAT IS `new Function` ?
--------------------------------------------------------------------------------
- `Function` is a built-in JavaScript constructor.
- Using `new Function()` creates a function dynamically at runtime.
- The function body and parameters are passed as STRINGS.
- This method is called: Function Constructor.


--------------------------------------------------------------------------------
2) BASIC RULE (SYNTAX)
-------------------------------------------------------------------------------- */
const functionName = new Function(
  "param1",
  "param2",
  "code to execute"
);

/*
RULES:
- Parameters MUST be strings
- The LAST string is the function body
- Returns a callable function



--------------------------------------------------------------------------------
3) HOW JAVASCRIPT HANDLES IT (MENTAL MODEL)
--------------------------------------------------------------------------------
JavaScript does this internally:

new Function("a", "b", "return a + b;")

↓↓ Interpreted as: */

function anonymous(a, b) {
  return a + b;
}



/*
--------------------------------------------------------------------------------
4) SIMPLE EXAMPLE
-------------------------------------------------------------------------------- */
const calculateSum = new Function(
  "x",
  "y",
  "return x + y;"
);



/*
--------------------------------------------------------------------------------
5) HOW TO CALL THE FUNCTION
-------------------------------------------------------------------------------- */
const result = calculateSum(5, 3);
console.log(result);

// OUTPUT:
// 8



/*
--------------------------------------------------------------------------------
6) IMPORTANT RULES & WARNINGS
--------------------------------------------------------------------------------
** The function is created in the GLOBAL scope
** Cannot access local variables (NO closure)
** Slower than normal functions
** Similar risk to eval() if misused

DO NOT USE:
- In performance-critical code
- When normal functions can be used

USE ONLY:
- For dynamic code generation
- When code is generated as text

--------------------------------------------------------------------------------
7) COMPARISON WITH NORMAL FUNCTIONS
-------------------------------------------------------------------------------- */
// NORMAL FUNCTION:
function add(a, b) {
  return a + b;
}

// Function Constructor:
const add = new Function("a", "b", "return a + b;");

/*
- Same result
- Different performance & safety

--------------------------------------------------------------------------------
FINAL SUMMARY
--------------------------------------------------------------------------------
- `new Function` creates functions from strings
- It executes code dynamically
- Powerful but dangerous if misused
- Prefer normal functions in real projects
================================================================================
*/
