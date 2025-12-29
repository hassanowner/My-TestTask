/* =========================================================================
CHALLENGE 1 — ADVANCED API RESPONSE DESTRUCTURING
============================================================================
QUESTION:
You receive a fixed API response array with nested data.
- Extract:
  1) userId
  2) user role
  3) last login device
- Ignore all other values.
- Use array destructuring ONLY.
*/

const apiResponse = [
  "USR_5544",
  "Active",
  [
    "Profile",
    "Security",
    ["Mobile", "Chrome", "Firefox"]
  ],
  169
];

// ANSWER:
let [userId, , [, userRole, [, , lastLoginDevice]]] = apiResponse;

console.log(userId);            // RESULT: "USR_5544"
console.log(userRole);          // RESULT: "Security"
console.log(lastLoginDevice);   // RESULT: "Firefox"


/* =========================================================================
CHALLENGE 2 — CONFIGURATION HANDLING WITH DEFAULTS & REST
============================================================================
QUESTION:
You are given a configuration array where some values may be missing.
- Extract:
  1) appName
  2) environment (default: "development")
  3) all remaining plugins into one array
- Use array destructuring with defaults and rest operator.
*/

const appConfig = ["MyApp", undefined, "Auth", "Payments", "Analytics"];

// ANSWER:
let [appName, environment = "development", ...plugins] = appConfig;

console.log(appName);      // RESULT: "MyApp"
console.log(environment);  // RESULT: "development"
console.log(plugins);      // RESULT: ["Auth", "Payments", "Analytics"]


/* =========================================================================
CHALLENGE 3 — FUNCTION RETURN + SWAPPING (STATE LOGIC)
============================================================================
QUESTION:
A function returns system state information.
- Destructure the returned array to get:
  1) currentState
  2) backupState
- Then swap their values using array destructuring.
*/

function getSystemState() {
  return ["RUNNING", "STOPPED"];
}

// ANSWER:
let [currentState, backupState] = getSystemState();

[currentState, backupState] = [backupState, currentState];

console.log(currentState); // RESULT: "STOPPED"
console.log(backupState);  // RESULT: "RUNNING"
