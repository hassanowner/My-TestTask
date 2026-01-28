/*
================================================================================
JAVASCRIPT — FUNCTIONS (COMPLETE SINGLE-FILE EDUCATIONAL GUIDE)
================================================================================

This file covers:

1) Function Declaration
2) Function Expression
3) Parameters & Arguments
4) Execution Flow
5) Return Values
6) Conditional Logic inside Functions
7) Loops inside Functions
8) continue / break inside Functions
9) Advanced Loop Control
10) Function Constructor (new Function)
11) Why result() sometimes fails
12) Comparison with Normal Functions

Everything is explained step by step inside ONE FILE.

================================================================================
*/


/* =============================================================================
1) FUNCTION DECLARATION
============================================================================= */

function greet() {
  console.log("Hello!");
}

greet();

/*
Explanation:
- Function is defined using the function keyword
- Function name: greet
- Called using greet()
*/


/* =============================================================================
2) FUNCTION EXPRESSION
============================================================================= */

const greetUser = function internalName() {
  console.log("Hello from function expression");
};

greetUser();

/*
Key Points:
- greetUser is the variable used to call the function
- internalName is optional and used only internally
- Function expression is stored in a variable
*/


/* =============================================================================
3) PARAMETERS & ARGUMENTS
============================================================================= */

function showWelcomeMessage(userRole) {
  console.log(`Welcome, ${userRole}`);
}

showWelcomeMessage("Admin");
showWelcomeMessage("Editor");
showWelcomeMessage("Guest");

/*
- userRole is a parameter
- "Admin", "Editor", "Guest" are arguments
*/


/* =============================================================================
4) FUNCTION EXECUTION FLOW (IMPORTANT)
=============================================================================

1) Function definition
2) Function call
3) Arguments bound to parameters
4) Execution context created
5) Code runs line by line
6) Return value (if exists)
7) Execution context destroyed
*/


/* =============================================================================
5) RETURN VALUES
============================================================================= */

function add(a, b) {
  return a + b;
}

let sumResult = add(5, 3);
console.log(sumResult);

/*
- return sends value back to caller
- sumResult stores the returned value
*/


/* =============================================================================
6) CONDITIONAL LOGIC INSIDE FUNCTIONS
============================================================================= */

function checkUserEligibility(userName, age) {
  if (age < 20) {
    console.log("App is not suitable for you");
  } else {
    console.log(`Hello ${userName}, your age is ${age}`);
  }
}

checkUserEligibility("SystemUser", 38);
checkUserEligibility("TrialUser", 18);


/* =============================================================================
7) LOOP INSIDE FUNCTION
============================================================================= */

function generateYears(startYear, endYear) {
  for (let year = startYear; year <= endYear; year++) {
    console.log(year);
  }
}

generateYears(2020, 2023);


/* =============================================================================
8) LOOP WITH continue INSIDE FUNCTION
============================================================================= */

function generateYearsSkipping(startYear, endYear, excludedYear) {
  for (let year = startYear; year <= endYear; year++) {
    if (year === excludedYear) continue;
    console.log(year);
  }
}

generateYearsSkipping(2018, 2023, 2021);


/* =============================================================================
9) ADVANCED LOOP CONTROL (MANUAL for LOOP)
============================================================================= */

let items = ["Laptop", "Tablet", "Printer", "Camera"];
let index = 0;

for (;;) {
  if (index >= items.length) break;
  console.log(items[index]);
  index++;
}


/* =============================================================================
10) FUNCTION CONSTRUCTOR — new Function
=============================================================================

WARNING:
- Created at runtime
- Code written as strings
- No access to outer scope
- Similar risk to eval()
- NOT recommended for regular use
*/


const calculateSum = new Function(
  "x",
  "y",
  "return x + y;"
);

let result = calculateSum(5, 3);
console.log(result);


/* =============================================================================
11) WHY result() DOES NOT WORK
============================================================================= */

let newfun = new Function("a", "b", "return a + b;");
let value = newfun(2, 4);

console.log(value);

/*
value is a NUMBER, not a function
Calling value() causes TypeError
*/


/* =============================================================================
12) FUNCTION RETURNING A FUNCTION
============================================================================= */

const outer = new Function(
  "return function() { return 'Hello'; }"
);

let innerFunction = outer();
console.log(innerFunction());


/* =============================================================================
13) NORMAL FUNCTION vs FUNCTION CONSTRUCTOR
============================================================================= */

// Normal function
function multiply(a, b) {
  return a * b;
}

// Function constructor
const multiplyDynamic = new Function(
  "a",
  "b",
  "return a * b;"
);

console.log(multiply(3, 4));
console.log(multiplyDynamic(3, 4));


/* =============================================================================
FINAL SUMMARY
=============================================================================

- Functions are reusable blocks of code
- Parameters receive data, arguments send data
- return sends values back to the caller
- Loops and conditions inside functions add logic
- continue skips iteration, break stops loops
- new Function creates functions dynamically
- Prefer normal functions in real applications

================================================================================
END OF FILE
================================================================================
*/
