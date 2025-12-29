/*
====================================================
Object — Complete Introductory Educational Example
====================================================

What is an Object?
------------------
An object in JavaScript represents a REAL-WORLD entity.
It groups related data (properties) and behavior (methods)
into a single logical unit.

Why Objects?
------------
- Organize data in a structured way
- Represent real application entities
- Combine values + functionality together

----------------------------------------------------
Testing the Global Window Object
----------------------------------------------------
In browsers, everything runs inside the `window` object.
For example:
window.console
window.document
window.alert

When we write:
console.log()
JavaScript actually uses:
window.console.log()

----------------------------------------------------
Practical Professional Example
----------------------------------------------------
Scenario:
Represent a software developer account in a system
====================================================
*/

let developerAccount = {
  // =============================
  // Properties (Data)
  // =============================
  username: "frontend_dev",
  role: "JavaScript Engineer",
  experienceYears: 5,
  isActive: true,

  // =============================
  // Methods (Behavior)
  // =============================
  getProfileSummary: function () {
    return `User: ${developerAccount.username} | Role: ${developerAccount.role}`;
  },

  canAccessDashboard: function () {
    return developerAccount.isActive === true;
  }
};


// ==================================================
// Accessing Object Properties
// ==================================================

console.log(developerAccount.username);
// Output:
// "frontend_dev"

console.log(developerAccount.experienceYears);
// Output:
// 5

console.log(developerAccount.isActive);
// Output:
// true


// ==================================================
// Calling Object Methods
// ==================================================

console.log(developerAccount.getProfileSummary());
// Output:
// "User: frontend_dev | Role: JavaScript Engineer"

console.log(developerAccount.canAccessDashboard());
// Output:
// true


// ==================================================
// Explanation Summary
// ==================================================

/*
1) Object Structure
-------------------
{
  propertyName: value,
  methodName: function() {}
}

2) Properties
-------------
- Store information
- Accessed using dot notation: object.property

3) Methods
----------
- Functions inside objects
- Called using: object.method()
- Access object data by object name directly

4) Dot Notation
---------------
developerAccount.username
developerAccount.getProfileSummary()

5) Real-World Mapping
---------------------
Object         → Developer Account
Properties     → Account Data
Methods        → Account Actions
*/

====================================================
End of Educational Object Example
====================================================
