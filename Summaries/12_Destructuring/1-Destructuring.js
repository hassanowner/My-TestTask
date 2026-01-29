/*
===========================================================================
TOPIC: JavaScript — Array Destructuring (Comprehensive Professional Guide)
===========================================================================

OVERVIEW:
- Array destructuring allows concise extraction of values from arrays into variables.
- Useful for:
  • API responses
  • Function returns
  • Configuration arrays
- Does NOT mutate the original array.
- Supports:
  • Default values
  • Skipping unwanted values
  • Rest operator (...)
  • Nested arrays
  • Swapping variables
=========================================================================== 
*/


/* =========================================================================
SECTION 1 — BASIC DESTRUCTURING
============================================================================ */

let userRecord = ["USR_1021", "Hassan", "Admin", true];

let [userId, userName, userRole, isActive] = userRecord;

console.log(userId);     // "USR_1021"
console.log(userName);   // "Hassan"
console.log(userRole);   // "Admin"
console.log(isActive);   // true


/* =========================================================================
SECTION 2 — DEFAULT VALUES (OPTIONAL / MISSING ELEMENTS)
============================================================================ */

let systemConfig = ["production"];

let [environment, logLevel = "info", region = "EU"] = systemConfig;

console.log(environment); // "production"
console.log(logLevel);    // "info" → default applied
console.log(region);      // "EU" → default applied

// Notes:
// - Default values are used only if the element is undefined or missing
// - Existing elements are never overridden


/* =========================================================================
SECTION 3 — SKIPPING ELEMENTS
============================================================================ */

let serverMetrics = [75, 4321, 128, "OK"];

let [, activeUsers, , serverStatus] = serverMetrics;

console.log(activeUsers);  // 4321
console.log(serverStatus); // "OK"


/* =========================================================================
SECTION 4 — REST OPERATOR (...)
============================================================================ */

let monthlySales = ["January", 12000, 15000, 9800, 13400];

let [monthName, ...salesFigures] = monthlySales;

console.log(monthName);    // "January"
console.log(salesFigures); // [12000, 15000, 9800, 13400]


/* =========================================================================
SECTION 5 — NESTED DESTRUCTURING
============================================================================ */

let reportRow = ["REP_9001", ["Completed", "OK"], 167];

let [reportId, [status, result], responseTime] = reportRow;

console.log(reportId);     // "REP_9001"
console.log(status);       // "Completed"
console.log(result);       // "OK"
console.log(responseTime); // 167

// Skipping unnecessary values is achieved with commas
// Example:
let [, , onlyTime] = reportRow;
console.log(onlyTime); // 167


/* =========================================================================
SECTION 6 — SWAPPING VARIABLES
============================================================================ */

let primaryTheme = "dark";
let secondaryTheme = "light";

[primaryTheme, secondaryTheme] = [secondaryTheme, primaryTheme];

console.log(primaryTheme);   // "light"
console.log(secondaryTheme); // "dark"


/* =========================================================================
SECTION 7 — DESTRUCTURING FUNCTION RETURNS
============================================================================ */

function getAuthStatus() {
  return ["AUTH_OK", 200, "Token Valid"];
}

let [authCode, httpStatus, authMessage] = getAuthStatus();

console.log(authCode);    // "AUTH_OK"
console.log(httpStatus);  // 200
console.log(authMessage); // "Token Valid"


/* =========================================================================
SECTION 8 — DEFAULT VALUES EXAMPLES
============================================================================ */

// Single element with missing second
const arr = [10];
const [a = 1, b = 2] = arr;
console.log(a); // 10
console.log(b); // 2 → default applied

// Mix of existing, undefined, missing
const fruits = ["Apple", undefined, "Cherry"];
const [first = "Banana", second = "Mango", third = "Orange", fourth = "Grapes"] = fruits;

console.log(first);  // "Apple"
console.log(second); // "Mango" → default applied
console.log(third);  // "Cherry"
console.log(fourth); // "Grapes" → default applied

// Function return with missing elements
function getScores() {
    return [85, , 92];
}
const [math = 0, physics = 0, chemistry = 0, biology = 0] = getScores();

console.log(math);     // 85
console.log(physics);  // 0 → default applied
console.log(chemistry);// 92
console.log(biology);  // 0 → default applied


/* =========================================================================
SECTION 9 — ADVANCED NESTED DESTRUCTURING
============================================================================ */

let organizationData = [
  "TechNova Inc",
  "Berlin",
  2015,
  [
    "Engineering",
    "Omar Hassan",
    ["Lina Ahmed", "Youssef Adel"]
  ]
];

let [, , , [departmentName, , [, juniorEngineer]]] = organizationData;

console.log(departmentName);  // "Engineering"
console.log(juniorEngineer);  // "Youssef Adel"


// Permissions tree example
let permissionsResponse = ["USR_7781", "Active", ["Dashboard", "Settings", ["Read", "Write", "Delete"]]];

let [, , [moduleName, , [, , lastPermission]]] = permissionsResponse;

console.log(moduleName);     // "Dashboard"
console.log(lastPermission); // "Delete"


/* =========================================================================
FINAL TECHNICAL NOTES
============================================================================
- Destructuring is POSITION-based
- Defaults applied only for undefined or missing
- Rest operator (...) must be last
- Commas (,) skip unwanted elements
- Nested destructuring requires exact order
- Ideal for:
  • API responses
  • Config arrays
  • Function returns
  • Hierarchical / nested data
- Improves readability, reduces boilerplate, and avoids undefined checks
===========================================================================
*/
