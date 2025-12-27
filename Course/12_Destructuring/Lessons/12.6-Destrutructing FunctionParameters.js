/* =========================================================================
TOPIC: JavaScript — Destructuring Function Parameters
============================================================================

GENERAL IDEA
- JavaScript functions often receive objects as parameters.
- Instead of accessing properties inside the function body,
  we can destructure them directly in the function parameters.

LEARNING PROGRESSION
1) Passing objects to functions
2) Basic destructuring inside the function
3) Professional destructuring in function parameters
4) Renaming variables
5) Nested object destructuring
6) Default parameter behavior
============================================================================
*/


/* =========================================================================
EXAMPLE 1 — BEGINNER LEVEL (NO DESTRUCTURING)
============================================================================
- This is the most basic and beginner-friendly approach
- Object is accessed directly using dot notation
*/

const beginnerUser = {
  name: "Hassan",
  age: 28,
};

function showUserInfo(user) {
  console.log(`Name: ${user.name}`);
  console.log(`Age: ${user.age}`);
}

showUserInfo(beginnerUser);

// RESULT:
// "Name: Hassan"
// "Age: 28"


/* =========================================================================
EXAMPLE 2 — INTERMEDIATE LEVEL (DESTRUCTURING INSIDE FUNCTION BODY)
============================================================================
- Destructuring is applied inside the function
- Reduces repeated object.property usage
*/

function showUserInfoBetter(user) {
  const { name, age } = user;

  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
}

showUserInfoBetter(beginnerUser);

// RESULT:
// "Name: Hassan"
// "Age: 28"


/* =========================================================================
EXAMPLE 3 — PROFESSIONAL LEVEL (DESTRUCTURING FUNCTION PARAMETERS)
============================================================================
- Destructuring happens directly in the function signature
- Clean, modern, and widely used in real projects
*/

function showUserInfoPro({ name, age }) {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
}

showUserInfoPro(beginnerUser);

// RESULT:
// "Name: Hassan"
// "Age: 28"


/* =========================================================================
EXAMPLE 4 — REAL-WORLD DATA (USER ACCOUNT OBJECT)
============================================================================
- Simulates a backend API response
*/

const accountData = {
  fullName: "Hassan Ali",
  age: 28,
  permissions: {
    admin: false,
    editor: true,
  },
};


/* =========================================================================
EXAMPLE 5 — PROFESSIONAL DESTRUCTURING WITH ADVANCED FEATURES
============================================================================
- Renaming variables
- Nested object destructuring
- Default parameter to prevent runtime errors
*/

function renderUserInfo(
  {
    fullName: name,
    age,
    permissions: { editor: isEditor },
  } = {}
) {
  console.log(`User Name: ${name}`);
  console.log(`User Age: ${age}`);
  console.log(`Editor Access: ${isEditor}`);
}

renderUserInfo(accountData);

// RESULT:
// "User Name: Hassan Ali"
// "User Age: 28"
// "Editor Access: true"


/* =========================================================================
WHY THIS PROGRESSION MATTERS
============================================================================
- Beginners understand the problem first
- Intermediate users reduce repetition
- Professionals write clean, scalable code
============================================================================
*/


/* =========================================================================
TECHNICAL NOTES
============================================================================
- Destructuring happens immediately when the function is called
- Object property order does NOT matter
- Default parameters protect against undefined arguments
- Nested destructuring avoids deep property access
============================================================================
*/


/* =========================================================================
REAL-WORLD USE CASES
============================================================================
- API response handlers
- Service layer functions
- Frontend component props
- Configuration and options objects
============================================================================
*/
