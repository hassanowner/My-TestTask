/*
===========================================================
FUNCTIONS — Practical Programming-Oriented Example
===========================================================

In this version:
- We replaced personal names with realistic programming-related names
- The concept and explanation remain the same
- The goal is to make the example closer to real-world development
===========================================================

========================================================
FUNCTION EXPRESSION — BASIC RULE / TEMPLATE
========================================================

Syntax: */

function internalFunctionName() {
    // Code block to execute
  conslo.log("Hello!");
};

internalFunctionName() // call fhe function 
// Explanation:
// - The function is called by its name 'internalFunctionName'
// - The code inside the function block runs
// - In this case, it prints "Hello!" to the console


// #OR :FUNCTION EXPRESSION — BASIC RULE / TEMPLATE
const variableName = function internalFunctionName() {
  // Code block to execute
  console.log("Hello!");
};

variableName()
/*
--------------------------------------------------------
Key Points:

A) variableName
- The **external variable** used to call the function.
- Mandatory if you want to store the function.
- Example of usage: variableName();

B) internalFunctionName
- **Optional internal name** for the function.
- Useful for:
  - Debugging (appears in stack trace)
  - Recursion (function calls itself internally)
- Cannot be called from outside the function.

C) Code block
- The statements inside `{ }` execute when function is called via `variableName`.
- Internal name can be used inside for recursion if needed.

--------------------------------------------------------
Flow / Execution:

1) Define Function Expression → store function object in variableName
2) Call function via variableName() → executes code block
3) Optionally, use internalFunctionName inside the block

======================================================== */



/*

** FUNCTION EXECUTION FLOW — OFFICIAL TECHNICAL DIAGRAM **
-----------------------------------------------------------


[ PROGRAM START ]
        |
        v
+----------------------------------------------------+
| FUNCTION DEFINITION PHASE                          |
|----------------------------------------------------|
| - Function Identifier (Function Name)              |
| - Parameter List (Formal Parameters)               |
| - Function Body (Executable Statements)            |
|                                                    |
| Example:                                           |
| function calculateSum(a, b) {                      |
|   return a + b;                                    |
| }                                                  |
+----------------------------------------------------+
        |
        v
+----------------------------------------------------+
| FUNCTION CALL (INVOCATION)                          |
|----------------------------------------------------|
| - Function Name is referenced                      |
| - Parentheses () indicate invocation               |
| - Arguments are passed inside ()                   |
|                                                    |
| Example:                                           |
| calculateSum(5, 3)                                 |
|                                                    |
| 5 → Argument #1                                    |
| 3 → Argument #2                                    |
+----------------------------------------------------+
        |
        v
+----------------------------------------------------+
| ARGUMENT BINDING PHASE                              |
|----------------------------------------------------|
| - Arguments are assigned to parameters             |
|                                                    |
| a = 5                                              |
| b = 3                                              |
|                                                    |
| This step happens before execution begins          |
+----------------------------------------------------+
        |
        v
+----------------------------------------------------+
| EXECUTION CONTEXT CREATION                          |
|----------------------------------------------------|
| - New Execution Context is created                 |
| - Local Scope is initialized                       |
| - Parameters become local variables                |
| - `this` binding is resolved                       |
+----------------------------------------------------+
        |
        v
+----------------------------------------------------+
| FUNCTION BODY EXECUTION                             |
|----------------------------------------------------|
| - Statements executed line by line                 |
| - Expressions evaluated                            |
| - Local variables exist only here                  |
|                                                    |
| Example Execution:                                 |
| return a + b;  →  return 8                         |
+----------------------------------------------------+
        |
        v
+----------------------------------------------------+
| RETURN STATEMENT                                   |
|----------------------------------------------------|
| - Ends function execution immediately              |
| - Sends value back to the caller                   |
| - Execution Context is destroyed                   |
+----------------------------------------------------+
        |
        v
+----------------------------------------------------+
| CALLER RECEIVES RETURN VALUE                       |
|----------------------------------------------------|
| Example:                                           |
| let result = calculateSum(5, 3);                   |
|                                                    |
| result = 8                                         |
+----------------------------------------------------+
        |
        v
[ PROGRAM CONTINUES EXECUTION ]

================================================================================
KEY TERMINOLOGY SUMMARY
================================================================================
- Function Definition   → Declaring the function structure
- Parameters            → Variables defined in function signature
- Arguments             → Actual values passed during invocation
- Invocation            → Calling the function using ()
- Execution Context     → Environment where the function runs
- Local Scope           → Variables accessible only inside function
- Return Value          → Output sent back to caller

================================================================================
IMPORTANT CONCEPTUAL NOTES
================================================================================
- Arguments are mapped to parameters by position
- Functions create their own execution context
- Parentheses () are mandatory to execute a function
- Without (), the function is only referenced, not executed
- Returned values can be stored, logged, or reused

================================================================================
*/








/*
-----------------------------------------------------------
Practical Example
-----------------------------------------------------------
*/

// User-defined function
function showWelcomeMessage(userRole) { //send `userRole`
  console.log(`Welcome, ${userRole}`);  // Prints a welcome message based on the system role
}

// Function calls with practical programming-related arguments
showWelcomeMessage("Admin");
showWelcomeMessage("Editor");
showWelcomeMessage("Guest");

/*
Expected console output:
Welcome, Admin
Welcome, Editor
Welcome, Guest
*/

/*
-----------------------------------------------------------
Step-by-Step Explanation
-----------------------------------------------------------

1) Function Definition:
   function showWelcomeMessage(userRole) { ... }

   - showWelcomeMessage : function name (describes what it does)
   - userRole           : parameter (placeholder for input data)

2) Parameter:
   - userRole receives a value when the function is called

3) Function Calls:
   - Each call passes a different argument

   showWelcomeMessage("Admin");
     → userRole = "Admin"
     → Output: Welcome, Admin

   showWelcomeMessage("Editor");
     → userRole = "Editor"
     → Output: Welcome, Editor

   showWelcomeMessage("Guest");
     → userRole = "Guest"
     → Output: Welcome, Guest

4) Benefit:
   - Same function logic
   - Different outputs depending on input
   - No code repetition

-----------------------------------------------------------
Why This Is More Practical?
-----------------------------------------------------------
- Uses real system roles instead of personal names
- Similar to authentication / role-based systems
- Common pattern in dashboards and web applications

-----------------------------------------------------------
Quick Summary
-----------------------------------------------------------
✓ Function names should describe behavior
✓ Parameters represent dynamic data
✓ Arguments are real values passed to the function
✓ Functions are essential for clean, reusable code

===========================================================
END
===========================================================
*/
