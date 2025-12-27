/*
====================================================
Object — Dig Deeper
Dot Notation vs Bracket Notation
Dynamic Property Names
====================================================

This example focuses on:
- The difference between Dot Notation and Bracket Notation
- How to access object properties dynamically
- When each notation should be used
====================================================
*/

// A variable holding a property name as a STRING
let propertyKey = "country";

// Object representing user profile data
let userProfile = {
  userName: "backend_engineer",
  country: "Germany",
};

// ==================================================
// Dot Notation (Static Access)
// ==================================================

console.log(userProfile.userName);
// Output:
// "backend_engineer"

console.log(userProfile.country);
// Output:
// "Germany"

// This does NOT work as expected
console.log(userProfile.propertyKey);
// Output:
// undefined
/*
Reason:
- JavaScript looks for a property literally named "propertyKey"
- Such a property does not exist in the object
*/


// ==================================================
// Bracket Notation (Dynamic Access)
// ==================================================

console.log(userProfile[propertyKey]);
// Output:
// "Germany"
/*
Reason:
- propertyKey contains the string "country"
- userProfile["country"] is evaluated at runtime
*/


// ==================================================
// Key Differences Explained
// ==================================================

/*
1) Dot Notation
---------------
Syntax:
object.propertyName

Characteristics:
- Simple and readable
- Property name MUST be written directly
- Cannot use variables
- Cannot handle spaces or special characters

Example:
userProfile.country


2) Bracket Notation
-------------------
Syntax:
object["propertyName"]
object[variable]

Characteristics:
- Works with variables
- Allows dynamic property access
- Required for property names with spaces or symbols

Example:
userProfile[propertyKey]


3) Dynamic Property Access
--------------------------
Dynamic means the property name is NOT known at write-time,
but determined at runtime using variables.

This is essential for:
- Loops
- Config-based access
- User-driven keys
- API responses


4) Practical Rule
-----------------
- Use DOT notation when the property name is fixed and known.
- Use BRACKET notation when the property name comes from a variable.
*/

====================================================
End of Object Access Explanation
====================================================
