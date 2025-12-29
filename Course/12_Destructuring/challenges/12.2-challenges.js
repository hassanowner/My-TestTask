/* =========================================================================
CHALLENGE 1 — ADVANCED API OBJECT RESPONSE (NESTED + RENAME)
============================================================================
QUESTION:
You receive the following API response object.
- Extract:
  1) user id → rename it to `uid`
  2) email
  3) role
- Extract role from inside the nested object.
- Use object destructuring ONLY.
*/

const apiUserResponse = {
  status: "success",
  data: {
    id: 7812,
    email: "user@domain.com",
    access: {
      role: "manager",
      level: 4,
    },
  },
};

// ANSWER:
const {
  data: {
    id: uid,
    email,
    access: { role },
  },
} = apiUserResponse;

console.log(uid);    // RESULT: 7812
console.log(email);  // RESULT: "user@domain.com"
console.log(role);   // RESULT: "manager"


/* =========================================================================
CHALLENGE 2 — DEFAULT VALUES + NESTED OBJECT EXTRACTION
============================================================================
QUESTION:
You receive a system configuration object.
- Extract:
  1) appName
  2) mode (default to "development" if missing)
  3) timeout value from inside network config
- Use object destructuring with defaults.
*/

const systemSettings = {
  appName: "ControlPanel",
  network: {
    timeout: 3000,
    retries: 5,
  },
};

// ANSWER:
const {
  appName,
  mode = "development",
  network: { timeout },
} = systemSettings;

console.log(appName); // RESULT: "ControlPanel"
console.log(mode);    // RESULT: "development"
console.log(timeout); // RESULT: 3000


/* =========================================================================
CHALLENGE 3 — REAL-WORLD PROFILE OBJECT (RENAME + ISOLATE)
============================================================================
QUESTION:
You are given a user profile object.
- Extract:
  1) fullName → rename to `name`
  2) themePreference → rename to `theme` with default "Light"
  3) Extract skills object separately and then destructure:
     - javascript → js
     - css → css
- Do not access properties manually.
*/

const userProfile = {
  fullName: "Hassan Ali",
  themePreference: "Dark",
  skills: {
    javascript: 90,
    css: 88,
  },
};

// ANSWER:
const {
  fullName: name,
  themePreference: theme = "Light",
  skills,
} = userProfile;

const { javascript: js, css } = skills;

console.log(name);  // RESULT: "Hassan Ali"
console.log(theme); // RESULT: "Dark"
console.log(js);    // RESULT: 90
console.log(css);   // RESULT: 88
