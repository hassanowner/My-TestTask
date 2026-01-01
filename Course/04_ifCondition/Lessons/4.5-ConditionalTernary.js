/*
========================================================
CONDITIONAL (TERNARY) OPERATOR — FULL EDUCATIONAL GUIDE
========================================================

Topics Covered:
1) What is a Conditional (Ternary) Operator
2) Basic syntax and usage
3) Simple example to illustrate the concept
4) Using Ternary for inline messages
5) Nested Ternary for multiple conditions
6) Best practices and summary
========================================================

--------------------------------------------------------
1) WHAT IS THE CONDITIONAL (TERNARY) OPERATOR?
--------------------------------------------------------

- The ternary operator is a **shortcut for a simple if/else statement**.
- It evaluates a condition and returns one value if true, another if false.
- Introduced for **short, clear, inline conditional logic**.



--------------------------------------------------------
2) BASIC SYNTAX
-------------------------------------------------------- */

// Syntax:      

condition ? valueIfTrue : valueIfFalse;

//- condition: a boolean expression
//- valueIfTrue: returned or executed if the condition is true
//- valueIfFalse: returned or executed if the condition is false


/*
========================================================
TERNARY OPERATOR — VISUALIZATION
========================================================

Syntax:
condition ? valueIfTrue : valueIfFalse;

Flowchart:

            Start
              |
              v
    [Evaluate condition?]
              |
      ---------------------
     |                     |
    Yes                    No
     |                     |
     v                     v
[valueIfTrue]        [valueIfFalse]
     |                     |
      ---------------------
               |
               v
              End

========================================================
EXPLANATION:

1) condition is evaluated first.
2) If condition is true → valueIfTrue is returned.
3) If condition is false → valueIfFalse is returned.
4) Execution is **inline**, suitable for simple conditional assignments.
5) Can also be **nested**, but readability decreases if overused.
========================================================
EXAMPLE:

let score = 75;
let result = score >= 50 ? "Pass" : "Fail";
console.log(result);

/*
Flow:
- Evaluate score >= 50 → true
- Return "Pass"
- Output: "Pass"






--------------------------------------------------------
3) SIMPLE EXAMPLE
-------------------------------------------------------- */

let isLoggedIn = true;
let greeting = isLoggedIn ? "Welcome Back!" : "Please Log In";

console.log(greeting);

/*
Explanation:
- isLoggedIn is true
- ? chooses the first option "Welcome Back!"
- Output: "Welcome Back!"
*/



/*
--------------------------------------------------------
4) DETAILED EXAMPLES WITH EMPLOYEE SCENARIO
-------------------------------------------------------- */

// Employee identification and access level system
let employeeName = "Omar";
let employeeRole = "Manager";   // possible: "Manager" | "Staff"
let employeeExperience = 5;     // years

// -----------------------------------------------------
// Step 1: Using simple if/else
// -----------------------------------------------------

let roleTitle;

if (employeeRole === "Manager") {
  roleTitle = "Mr";      // assign "Mr" if employee is Manager
} else {
  roleTitle = "Employee"; // assign "Employee" otherwise
}

console.log(roleTitle);

/*
Result:
"Mr"
Explanation:
- employeeRole is "Manager" → condition true
- roleTitle = "Mr"
*/


// -----------------------------------------------------
// Step 2: Using Ternary Operator (shorter version)
// -----------------------------------------------------

roleTitle = employeeRole === "Manager" ? "Mr" : "Employee";

console.log(roleTitle);

/*
Result:
"Mr"
Explanation:
- Same logic as if/else
- Written in one line for clarity
*/


// -----------------------------------------------------
// Step 3: Using Ternary inside a message
// -----------------------------------------------------

console.log(
  `Welcome ${employeeRole === "Manager" ? "Mr" : "Employee"} ${employeeName}`
);

/*
Result:
"Welcome Mr Omar"
Explanation:
- Ternary directly inside a template literal
- Chooses "Mr" or "Employee" based on role
*/


// -----------------------------------------------------
// Step 4: Multiple conditions using Nested Ternary
// -----------------------------------------------------

employeeExperience < 2
  ? console.log("Junior Level")                     // less than 2 years
  : employeeExperience >= 2 && employeeExperience <= 7
  ? console.log("Mid Level")                        // 2-7 years
  : employeeExperience > 7
  ? console.log("Senior Level")                     // more than 7 years
  : console.log("Undefined");                       // fallback

/*
Result:
"Mid Level"
Explanation:
- Nested ternary checks multiple ranges
- condition ? valueIfTrue : valueIfFalse can be repeated
- Good for small multiple-choice logic
*/





// -----------------------------------------------------
// 5) BEST PRACTICES
// -----------------------------------------------------

/*
- Use ternary for **short, readable conditions**.
- Avoid too many nested ternaries → can reduce readability.
- For complex conditions, regular if/else is clearer.
- Ternary can be used:
  ✓ to assign a value
  ✓ directly inside console.log or template literals
- Nested ternaries are OK for 2–3 levels max.
*/


/*
========================================================
SUMMARY
========================================================

- Conditional (Ternary) Operator = shortcut for if/else
- Syntax: condition ? valueIfTrue : valueIfFalse
- Can be nested for multiple conditions
- Best for inline assignments or messages
- Example Recap:
*/

let roleTitle = employeeRole === "Manager" ? "Mr" : "Employee";
let level = employeeExperience < 2
            ? "Junior Level"
            : employeeExperience <= 7
            ? "Mid Level"
            : "Senior Level";
/*
- Always prioritize readability over brevity
========================================================
*/
