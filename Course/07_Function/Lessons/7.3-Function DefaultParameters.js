/*
====================================================
Function — Default Parameters (Complete Guide)
====================================================

Goal:
Explain what Default Function Parameters are,
why they exist, and how JavaScript handled defaults
BEFORE ES6 vs AFTER ES6.

This example is educational, clean, and practical.
====================================================
*/


// ==================================================
// Example 1: Function WITHOUT Default Parameters
// ==================================================

function createUserProfile(username, role) {
  return `User: ${username}, Role: ${role}`;
}

console.log(createUserProfile("dev_admin", "Administrator"));
console.log(createUserProfile());

/*
Output:
User: dev_admin, Role: Administrator
User: undefined, Role: undefined

Explanation:
- If arguments are NOT passed,
  parameters become `undefined`.
- This can produce incorrect or ugly output.
*/


// ==================================================
// Old Strategy #1: Using Condition (Before ES6)
// ==================================================

function createUserWithCheck(username, role) {
  if (username === undefined) {
    username = "Guest";
  }

  if (role === undefined) {
    role = "Viewer";
  }

  return `User: ${username}, Role: ${role}`;
}

console.log(createUserWithCheck());
console.log(createUserWithCheck("api_user"));

/*
Output:
User: Guest, Role: Viewer
User: api_user, Role: Viewer

Explanation:
- We manually check if parameters are undefined.
- This works, but adds extra code.
*/


// ==================================================
// Old Strategy #2: Logical OR (||) Trick
// ==================================================

function createUserWithOr(username, role) {
  username = username || "Guest";
  role = role || "Viewer";

  return `User: ${username}, Role: ${role}`;
}

console.log(createUserWithOr("", ""));
console.log(createUserWithOr("backend_dev"));

/*
Output:
User: Guest, Role: Viewer
User: backend_dev, Role: Viewer

Explanation:
- `||` assigns a default if value is falsy.
- PROBLEM: Empty string "", 0, false are treated as missing.
- This can cause unintended behavior.
*/


// ==================================================
// Modern ES6 Method: Default Parameters
// ==================================================

function createUserES6(
  username = "Guest",
  role = "Viewer"
) {
  return `User: ${username}, Role: ${role}`;
}

console.log(createUserES6());
console.log(createUserES6("frontend_dev"));
console.log(createUserES6("sys_admin", "Admin"));

/*
Output:
User: Guest, Role: Viewer
User: frontend_dev, Role: Viewer
User: sys_admin, Role: Admin

Explanation:
- Default values are assigned ONLY if argument is undefined.
- This is clean, readable, and safe.
- Recommended modern JavaScript approach.
*/


// ==================================================
// Example: Mixing Passed & Default Values
// ==================================================

function deployApplication(
  appName = "MyApp",
  environment = "production",
  version = "1.0.0"
) {
  return `${appName} deployed to ${environment} with version ${version}`;
}

console.log(deployApplication());
console.log(deployApplication("AuthService", "staging"));
console.log(deployApplication("PaymentAPI", "production", "2.3.1"));

/*
Output:
MyApp deployed to production with version 1.0.0
AuthService deployed to staging with version 1.0.0
PaymentAPI deployed to production with version 2.3.1
*/


/*
====================================================
Key Takeaways:
====================================================

1) Function parameters become `undefined` if not passed
2) Old solutions used conditions or logical OR
3) Logical OR fails with valid falsy values
4) ES6 Default Parameters are clean and reliable
5) Use default parameters in modern JavaScript
====================================================
*/
