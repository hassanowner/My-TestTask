/*
===========================================================================
TOPIC: JavaScript — Function Parameter & Mixed Destructuring (Professional Guide)
===========================================================================

OVERVIEW:
- JavaScript often passes objects or arrays to functions.
- Instead of accessing nested properties inside the function body,
  we can destructure them directly in the function parameters.
- Mixed destructuring handles complex real-world structures:
  • Objects with arrays
  • Objects with nested objects
  • Arrays containing objects
- Benefits: cleaner code, safer defaults, readable functions, modularity.
===========================================================================
*/


/* =========================================================================
SECTION 1 — FUNCTION PARAMETERS WITHOUT DESTRUCTURING
============================================================================ */
const beginnerUser = { name: "Hassan", age: 28 };

function showUserInfo(user) {
  console.log(`Name: ${user.name}`);
  console.log(`Age: ${user.age}`);
}

showUserInfo(beginnerUser);
// OUTPUT:
// Name: Hassan
// Age: 28

/*
  Notes:
  - Simple but repetitive
  - Works for beginners
*/


/* =========================================================================
SECTION 2 — DESTRUCTURING INSIDE FUNCTION BODY
============================================================================ */
function showUserInfoBetter(user) {
  const { name, age } = user;
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
}

showUserInfoBetter(beginnerUser);
// OUTPUT: same as above

/*
  Notes:
  - Reduces repeated object.property access
  - Keeps function body cleaner
*/


/* =========================================================================
SECTION 3 — DESTRUCTURING IN FUNCTION PARAMETERS (PROFESSIONAL)
============================================================================ */
function showUserInfoPro({ name, age }) {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
}

showUserInfoPro(beginnerUser);
// OUTPUT: same as above

/*
  Notes:
  - Direct extraction in function signature
  - Clean, modern, widely used in React, Vue, Node.js
*/


/* =========================================================================
SECTION 4 — FUNCTION PARAMETER DESTRUCTURING WITH RENAMING, NESTING, AND DEFAULTS
============================================================================ */
const accountData = {
  fullName: "Hassan Ali",
  age: 28,
  permissions: { admin: false, editor: true },
};

// Destructure with advanced features
function renderUserInfo(
  {
    fullName: name,                     // rename
    age,
    permissions: { editor: isEditor },  // nested destructuring
  } = {}                                // default parameter to prevent errors
) {
  console.log(`User Name: ${name}`);
  console.log(`User Age: ${age}`);
  console.log(`Editor Access: ${isEditor}`);
}

renderUserInfo(accountData);
// OUTPUT:
// User Name: Hassan Ali
// User Age: 28
// Editor Access: true

/*
  Notes:
  - Renaming improves readability
  - Nested extraction avoids deep access chains
  - Default {} prevents runtime errors if function is called without argument
*/


/* =========================================================================
SECTION 5 — MIXED DESTRUCTURING (OBJECTS + ARRAYS + NESTED OBJECTS)
============================================================================ */
const userProfile = {
  fullName: "Hassan Ali",
  age: 29,
  skills: ["HTML", "CSS", "JavaScript"],
  locations: { primary: "Baghdad", secondary: "Dubai" },
};

// Professional mixed destructuring
const {
  fullName: name,
  age: userAge,
  skills: [, , mainSkill],               // get third skill
  locations: { primary: city },          // nested object
} = userProfile;

console.log(`User Name: ${name}`);
console.log(`User Age: ${userAge}`);
console.log(`Main Skill: ${mainSkill}`);
console.log(`City: ${city}`);

// OUTPUT:
// User Name: Hassan Ali
// User Age: 29
// Main Skill: JavaScript
// City: Baghdad


/* =========================================================================
SECTION 6 — FUNCTION WITH MIXED DESTRUCTURING PARAMETERS
============================================================================ */
const order = {
  orderId: 5401,
  customer: { name: "Hassan", city: "Baghdad" },
  payment: { method: "Credit Card", amount: 120 },
};

function printOrder({
  orderId: id,
  customer: { name: customerName },
  payment: { amount: total },
}) {
  console.log(`Order ID: ${id}`);
  console.log(`Customer Name: ${customerName}`);
  console.log(`Total Amount: $${total}`);
}

printOrder(order);
// OUTPUT:
// Order ID: 5401
// Customer Name: Hassan
// Total Amount: $120


/* =========================================================================
SECTION 7 — MIXED DESCTRUCTURING EXAMPLE: EMPLOYEE OBJECT
============================================================================ */
const employee = {
  fullName: "Lina Ahmed",
  experience: 5,
  tools: ["Git", "Docker", "AWS"],
  location: { country: "Iraq", city: "Basra" },
};

// Extract nested object and array simultaneously
const {
  fullName: name2,
  experience: years,
  tools: [, secondTool],        // second element of array
  location: { city: c },        // nested object
} = employee;

console.log(`Employee Name: ${name2}`);
console.log(`Experience: ${years} years`);
console.log(`Main Tool: ${secondTool}`);
console.log(`City: ${c}`);

// OUTPUT:
// Employee Name: Lina Ahmed
// Experience: 5 years
// Main Tool: Docker
// City: Basra


/* =========================================================================
SECTION 8 — BEST PRACTICES SUMMARY
============================================================================
- Arrays: use [a, b, ...rest] for sequential extraction & rest collection
- Objects: use { prop, prop2: alias, missing = default } for clean access
- Nested: destructure nested arrays/objects in one statement when readable
- Rest for objects: { a, b, ...others } collects remaining properties
- Function parameters: destructuring directly gives clean and readable code
- Always prefer const when you do not need reassignment
- Use defaults and renaming to prevent undefined and improve clarity
- Ideal for APIs, configuration objects, component props, state objects
=========================================================================== 
*/
