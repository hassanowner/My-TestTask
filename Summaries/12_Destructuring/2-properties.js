/*
===========================================================================
TOPIC: JavaScript — Swapping Variables & Object Destructuring (Professional Guide)
===========================================================================

OVERVIEW:
- Swapping variables: exchanging values between two variables efficiently.
- Object destructuring: extracting properties from objects concisely.
- Advanced destructuring: renaming variables, setting defaults, and handling nested objects.
- Real-world relevance: APIs, UI state management, component props, and dashboards.
===========================================================================
*/


/* =========================================================================
SECTION 1 — VARIABLE SWAPPING
============================================================================ */

// Traditional way using temporary variable
let primaryRole = "Admin";
let secondaryRole = "Editor";

let tempRole = primaryRole;
primaryRole = secondaryRole;
secondaryRole = tempRole;

console.log(primaryRole);   // "Editor"
console.log(secondaryRole); // "Admin"

// Modern way using array destructuring
let mainStatus = "Online";
let backupStatus = "Offline";

[mainStatus, backupStatus] = [backupStatus, mainStatus];

console.log(mainStatus);   // "Offline"
console.log(backupStatus); // "Online"

// Real-world UI state toggle example
let currentTheme = "Light";
let previousTheme = "Dark";

[currentTheme, previousTheme] = [previousTheme, currentTheme];

console.log(currentTheme);  // "Dark"
console.log(previousTheme); // "Light"

// Notes:
// - Right-hand array evaluated first
// - Left-hand variables updated simultaneously
// - No temporary variables, cleaner syntax
// - Widely used in modern frameworks


/* =========================================================================
SECTION 2 — BASIC OBJECT DESTRUCTURING
============================================================================ */

const userSession = {
  id: 4587,
  fullName: "Hassan Ali",
  permission: "admin",
  region: "Middle East",
};

// Without destructuring
console.log(userSession.fullName);   // "Hassan Ali"
console.log(userSession.permission); // "admin"

// Legacy assignment
let sessionName = userSession.fullName;
let sessionPermission = userSession.permission;
let sessionRegion = userSession.region;

console.log(sessionName, sessionPermission, sessionRegion); 
// "Hassan Ali" "admin" "Middle East"

// Modern object destructuring
const { fullName, permission, region } = userSession;

console.log(fullName, permission, region);
// "Hassan Ali" "admin" "Middle East"


/* =========================================================================
SECTION 3 — OBJECT DESTRUCTURING FROM API RESPONSE
============================================================================ */

const serverResponse = {
  success: true,
  payload: {
    userId: 9921,
    emailAddress: "hassan.ali@company.com",
    accountStatus: "active",
  },
};

// Extract only needed data
const { payload } = serverResponse;
const { emailAddress, accountStatus } = payload;

console.log(emailAddress);   // "hassan.ali@company.com"
console.log(accountStatus);  // "active"

// Notes:
// - Order does not matter
// - Missing properties yield undefined
// - Improves readability and reduces boilerplate


/* =========================================================================
SECTION 4 — ADVANCED OBJECT DESTRUCTURING
============================================================================ */

const employeeProfile = {
  fullName: "Hassan Ali",
  experienceYears: 7,
  position: "Frontend Engineer",
  location: "Iraq",
  themePreference: "Dark",
  technicalSkills: {
    javascript: 85,
    css: 90,
  },
};

// Advanced destructuring: rename variables, set defaults, extract nested objects
const {
  fullName: name,                // rename
  experienceYears: years,        // rename
  location,                       // no change
  themePreference: theme = "Light", // default value
  technicalSkills: { javascript: jsSkill, css: cssSkill }, // nested destructuring
} = employeeProfile;

console.log(name);            // "Hassan Ali"
console.log(years);           // 7
console.log(location);        // "Iraq"
console.log(theme);           // "Dark"
console.log(`JS Skill: ${jsSkill}`);  // 85
console.log(`CSS Skill: ${cssSkill}`); // 90

// Nested destructuring separately (modular approach)
const { javascript: primarySkill, css: secondarySkill } = employeeProfile.technicalSkills;
console.log(`Primary Skill: ${primarySkill}`);   // 85
console.log(`Secondary Skill: ${secondarySkill}`); // 90


/* =========================================================================
SECTION 5 — TECHNICAL NOTES
============================================================================
- Renaming improves semantic clarity
- Default values prevent undefined errors
- Nested destructuring avoids repetitive deep property access
- Order does NOT matter for object destructuring
- Destructuring is ideal for:
    • API responses
    • Component props (React / Vue)
    • Dashboard / Admin panel data
- Reduces boilerplate and improves maintainability
===========================================================================


SECTION 6 — BEST PRACTICES
============================================================================
1) Use array destructuring for swapping or sequential data
2) Use object destructuring for structured data extraction
3) Always rename variables for clarity when necessary
4) Apply default values to avoid undefined runtime errors
5) Extract nested objects selectively to improve modularity
6) Avoid unnecessary deep destructuring if it harms readability
7) Prefer destructuring in modern JS frameworks for cleaner component code
===========================================================================
*/
