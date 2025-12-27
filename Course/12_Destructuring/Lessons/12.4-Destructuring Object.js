/* =========================================================================
TOPIC: JavaScript — Object Destructuring (Professional Usage)
============================================================================

GENERAL IDEA
- Object Destructuring is used to extract specific properties
  from structured objects such as configuration files,
  user sessions, and API responses.
- It reduces verbosity and improves maintainability.
- Heavily used in production-level JavaScript applications.

WHAT IS COVERED
1) Accessing object properties directly (baseline)
2) Legacy variable assignment approach
3) Modern object destructuring
4) Real production-style API response example
5) Why object destructuring is a professional best practice
============================================================================
*/


/* =========================================================================
EXAMPLE 1 — OBJECT STRUCTURE (APPLICATION USER MODEL)
============================================================================
- Represents a logged-in user session from a backend system
*/

const userSession = {
  id: 4587,
  fullName: "Hassan Ali",
  permission: "admin",
  region: "Middle East",
};


/* =========================================================================
EXAMPLE 2 — DIRECT PROPERTY ACCESS (WITHOUT DESTRUCTURING)
============================================================================
- Uses dot notation repeatedly
- Becomes inefficient in large codebases
*/

console.log(userSession.fullName);
console.log(userSession.permission);
console.log(userSession.region);

// RESULT:
// "Hassan Ali"
// "admin"
// "Middle East"


/* =========================================================================
EXAMPLE 3 — LEGACY VARIABLE ASSIGNMENT (OLD PRACTICE)
============================================================================
- Manual property-to-variable mapping
- Not scalable for enterprise applications
*/

let sessionName = userSession.fullName;
let sessionPermission = userSession.permission;
let sessionRegion = userSession.region;

console.log(sessionName);
console.log(sessionPermission);
console.log(sessionRegion);

// RESULT:
// "Hassan Ali"
// "admin"
// "Middle East"


/* =========================================================================
EXAMPLE 4 — MODERN OBJECT DESTRUCTURING (RECOMMENDED)
============================================================================
- Extracts required data in a single statement
- Clean and maintainable
*/

const { fullName, permission, region } = userSession;

console.log(fullName);
console.log(permission);
console.log(region);

// RESULT:
// "Hassan Ali"
// "admin"
// "Middle East"


/* =========================================================================
EXAMPLE 5 — REAL-WORLD API RESPONSE STRUCTURE
============================================================================
- Common structure returned from REST or GraphQL APIs
*/

const serverResponse = {
  success: true,
  payload: {
    userId: 9921,
    emailAddress: "hassan.ali@company.com",
    accountStatus: "active",
  },
};

/*
Extract only the needed fields from the response
*/

const { payload } = serverResponse;
const { emailAddress, accountStatus } = payload;

console.log(emailAddress);
console.log(accountStatus);

// RESULT:
// "hassan.ali@company.com"
// "active"


/* =========================================================================
TECHNICAL NOTES
============================================================================
- Variable names must match object keys unless renamed
- Order does NOT matter in object destructuring
- Undefined is returned for missing properties
- Destructuring improves readability in complex data flows
============================================================================
*/


/* =========================================================================
WHY OBJECT DESTRUCTURING IS A BEST PRACTICE
============================================================================
- Reduces boilerplate code
- Improves clarity in large applications
- Makes refactoring safer and faster
- Standard usage in React, Vue, Node.js, and APIs
============================================================================
*/
