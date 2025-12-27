/*
========================================================
Conditional (Ternary) Operator — Educational Example
========================================================
*/

// Scenario:
// Employee identification and access level system

let employeeName = "Omar";
let employeeRole = "Manager";   // Manager | Staff
let employeeExperience = 5;     // years


// ======================================================
// Step 1: Basic if / else logic
// ======================================================

let roleTitle;

if (employeeRole === "Manager") {
  roleTitle = "Mr";
} else {
  roleTitle = "Employee";
}

console.log(roleTitle);

/*
Result:
"Mr"
*/


// ======================================================
// Step 2: Same logic using Ternary Operator
// ======================================================

roleTitle = employeeRole === "Manager" ? "Mr" : "Employee";
console.log(roleTitle);

/*
Result:
"Mr"
*/


// ======================================================
// Step 3: Ternary inside a message
// ======================================================

console.log(
  `Welcome ${employeeRole === "Manager" ? "Mr" : "Employee"} ${employeeName}`
);

/*
Result:
"Welcome Mr Omar"
*/


// ======================================================
// Step 4: Multiple conditions using Nested Ternary
// ======================================================

employeeExperience < 2
  ? console.log("Junior Level")
  : employeeExperience >= 2 && employeeExperience <= 7
  ? console.log("Mid Level")
  : employeeExperience > 7
  ? console.log("Senior Level")
  : console.log("Undefined");

/*
Result:
"Mid Level"
*/


// ======================================================
// Summary
// - Ternary replaces simple if / else
// - Best for short and clear conditions
// ======================================================
