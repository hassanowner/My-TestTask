/* =========================================================================
TOPIC: JavaScript — Array Destructuring (Professional & Practical Guide)
============================================================================

GENERAL OVERVIEW
- Array destructuring is a JavaScript syntax used to extract values
  from arrays and assign them to variables in a clean and predictable way.
- It is commonly used with:
  • API responses
  • Configuration arrays
  • Function returns
- Destructuring does NOT mutate the original array.

WHAT WILL BE COVERED
1) Basic destructuring with structured data
2) Default values for missing data
3) Skipping unused values
4) Rest operator in real scenarios
5) Nested data extraction
6) Swapping values (state update)
7) Destructuring function return values

============================================================================
*/


/* =========================================================================
EXAMPLE 1 — BASIC ARRAY DESTRUCTURING (USER DATA)
============================================================================
- Typical data returned from a backend or API
*/

let userRecord = ["USR_1021", "Hassan", "Admin", true];

let [userId, userName, userRole, isActive] = userRecord;

console.log(userId);     // RESULT: "USR_1021"
console.log(userName);   // RESULT: "Hassan"
console.log(userRole);   // RESULT: "Admin"
console.log(isActive);   // RESULT: true


/* =========================================================================
EXAMPLE 2 — DEFAULT VALUES (OPTIONAL DATA)
============================================================================
- Useful when backend data may be incomplete
*/

let systemConfig = ["production"];

let [environment, logLevel = "info", region = "EU"] = systemConfig;

console.log(environment); // RESULT: "production"
console.log(logLevel);    // RESULT: "info"
console.log(region);      // RESULT: "EU"


/* =========================================================================
EXAMPLE 3 — SKIPPING UNUSED VALUES
============================================================================
- Extract only what is needed from a dataset
*/

let serverMetrics = [75, 4321, 128, "OK"];

let [, activeUsers, , serverStatus] = serverMetrics;

console.log(activeUsers); // RESULT: 4321
console.log(serverStatus); // RESULT: "OK"


/* =========================================================================
EXAMPLE 4 — REST OPERATOR (...) IN DATA PROCESSING
============================================================================
- Common when handling variable-length datasets
*/

let monthlySales = ["January", 12000, 15000, 9800, 13400];

let [monthName, ...salesFigures] = monthlySales;

console.log(monthName);     // RESULT: "January"
console.log(salesFigures);  // RESULT: [12000, 15000, 9800, 13400]


/* =========================================================================
EXAMPLE 5 — NESTED ARRAY DESTRUCTURING (COMPLEX STRUCTURE)
============================================================================
- Typical structure from SQL or analytics engines
*/

let reportRow = [
  "REP_9001",
  ["Completed", "OK"],
  167
];

let [reportId, [status, result], responseTime] = reportRow;

console.log(reportId);     // RESULT: "REP_9001"
console.log(status);       // RESULT: "Completed"
console.log(result);       // RESULT: "OK"
console.log(responseTime); // RESULT: 167


/* =========================================================================
EXAMPLE 6 — SWAPPING VALUES (STATE MANAGEMENT)
============================================================================
- Common in UI state toggles or sorting logic
*/

let primaryTheme = "dark";
let secondaryTheme = "light";

[primaryTheme, secondaryTheme] = [secondaryTheme, primaryTheme];

console.log(primaryTheme);   // RESULT: "light"
console.log(secondaryTheme); // RESULT: "dark"


/* =========================================================================
EXAMPLE 7 — DESTRUCTURING FUNCTION RETURN VALUES
============================================================================
- Very common when functions return multiple related values
*/

function getAuthStatus() {
  return ["AUTH_OK", 200, "Token Valid"];
}

let [authCode, httpStatus, authMessage] = getAuthStatus();

console.log(authCode);    // RESULT: "AUTH_OK"
console.log(httpStatus);  // RESULT: 200
console.log(authMessage); // RESULT: "Token Valid"


/* =========================================================================
FINAL TECHNICAL NOTES
============================================================================
- Array destructuring is POSITION-based
- Defaults apply only when the value is undefined
- Rest operator (...) must be the last item
- Ideal for API responses, configs, and function outputs
- Improves readability and reduces boilerplate code
============================================================================
*/
