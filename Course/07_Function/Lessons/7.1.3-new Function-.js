/*
!! Note: IMPORTANT NOTE — About using `new` with Functions !!

* -The keyword `new` will be studied later as a separate and main topic.

However, it is important at this stage to:
- Be aware that a function can be created using `new Function()`
- Understand how this form works at a basic level
- Know how it differs from a normal function declaration

Key Differences:
--------------------------------------------------------------------------------
1) Normal Function
   - Written directly in the code
   - Created at compile time
   - Can access the surrounding scope (closures)

2) Function created with `new Function`
   - Created dynamically at runtime
   - Function body is written as strings
   - Does NOT access outer variables (no closure)
   - Behaves similarly to evaluated code

Purpose of this introduction:
--------------------------------------------------------------------------------
- Awareness only, not mastery
- To recognize this syntax when encountered
- To understand why it exists and how it behaves differently
- Not recommended for regular use in real applications

Recommendation:
--------------------------------------------------------------------------------
For now:
✔ Use normal functions
✔ Understand the basic concept of `new Function`
✘ Do not rely on it in production code

The `new` keyword and its full power will be explained in detail
in upcoming dedicated topics.
-------------
-------------


// Now :
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
JavaScript does this internally: */

new Function("a", "b", "return a + b;")

// ↓↓ Interpreted as:
function anonymous(a, b) {
  return a + b;
}



/*
--------------------------------------------------------------------------------
4) SIMPLE EXAMPLE
-------------------------------------------------------------------------------- */
let calculateSum = new Function(
  "x",
  "y",
  "return x + y;"
);



/*
--------------------------------------------------------------------------------
5) HOW TO CALL THE FUNCTION
-------------------------------------------------------------------------------- */
let result = calculateSum(5, 3);
console.log(result);

// OUTPUT:
// 8


/*
** WHY `result()` DOES NOT WORK — FUNCTION vs VALUE **
======================================================

CODE:
-------------------------------------------------------------------------------- */
let newfun = new Function(
  "x",
  "y",
  "return x + y;"
);

let result = newfun(5, 3);
console.log(result);
/*


================================================================================
a) WHAT `newfun` IS
================================================================================
- `newfun` IS A FUNCTION
- Created using Function Constructor
- You CAN use parentheses with it:

newfun(5, 3);   // ✔ Correct

Because:
- Parentheses () are used to CALL FUNCTIONS

================================================================================
b) WHAT `result` IS
================================================================================
let result = newfun(5, 3);

AFTER EXECUTION:
- newfun(5, 3) is executed
- The function RETURNS a VALUE
- That value is stored in `result`

So now:

result === 8

IMPORTANT:
- `result` is NOT a function
- `result` is a NUMBER

================================================================================
c) WHY `result()` FAILS
================================================================================
Parentheses () mean:
→ "EXECUTE THIS AS A FUNCTION"

But:

result = 8

Trying:
result();

Is interpreted as:
8();

** ERROR:
TypeError: result is not a function

================================================================================
d) MENTAL MODEL (VERY IMPORTANT)
================================================================================
FUNCTION CALL:
newfun(5, 3)
    ↓
EXECUTION
    ↓
RETURN VALUE (8)
    ↓
STORE VALUE IN VARIABLE
    ↓
result = 8

At this point:
- The function is GONE
- Only the RETURNED VALUE remains

================================================================================
e) WHEN CAN YOU USE result() ?
================================================================================
ONLY if the function RETURNS ANOTHER FUNCTION

EXAMPLE:
--------------------------------------------------------------------------------
const outer = new Function(
  "return function() { return 'Hello'; }"
);

let result = outer();

result(); // ✔ Works
--------------------------------------------------------------------------------

Because:
- result is now a FUNCTION

================================================================================
f) FINAL RULE (MEMORIZE THIS)
================================================================================
() CAN ONLY BE USED ON FUNCTIONS

Function → Yes ()
Value    → No ()

================================================================================
FINAL SUMMARY
================================================================================
- `newfun` is a function → can be called with ()
- `result` stores the RETURNED VALUE
- Returned value is a number → not callable
- Parentheses execute functions, NOT values
================================================================================








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
