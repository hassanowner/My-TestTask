/* =========================================================================
CHALLENGE 1 — some() + Spread Operator (Real Validation Scenario)
============================================================================
QUESTION:
You receive two arrays of numbers representing test scores from two systems.
Merge them into one array, then check if AT LEAST ONE score is considered
a "critical failure" (less than 40).

Requirements:
- Use the spread operator to merge arrays
- Use Array.some() to perform the check
============================================================================
*/

// GIVEN DATA
let systemAResults = [78, 85, 92];
let systemBResults = [66, 39, 88];

// ANSWER
let allResults = [...systemAResults, ...systemBResults];

let hasCriticalFailure = allResults.some(function (score) {
  return score < 40;
});

console.log(hasCriticalFailure);
// RESULT: true   (because 39 < 40)



/* =========================================================================
CHALLENGE 2 — every() + thisArg (Policy Enforcement)
============================================================================
QUESTION:
You are validating product prices before publishing them to a store.
All prices must be within an allowed range defined by a policy object.

Requirements:
- Use Array.every()
- Use thisArg to access min and max limits
- Do NOT hardcode min/max inside the callback
============================================================================
*/

// GIVEN DATA
let productPrices = [120, 200, 150, 180];

let pricingPolicy = {
  min: 100,
  max: 250
};

// ANSWER
let isPricingValid = productPrices.every(function (price) {
  return price >= this.min && price <= this.max;
}, pricingPolicy);

console.log(isPricingValid);
// RESULT: true   (all prices fall within 100–250)



/* =========================================================================
CHALLENGE 3 — some() vs every() + Spread (Access Control Logic)
============================================================================
QUESTION:
You have a list of required permissions and a list of user permissions.
1) Check if the user has AT LEAST ONE required permission.
2) Check if the user has ALL required permissions.

Requirements:
- Use the spread operator to copy arrays safely
- Use Array.some() for condition (1)
- Use Array.every() for condition (2)
============================================================================
*/

// GIVEN DATA
let requiredPermissions = ["read", "write", "delete"];
let userPermissions = ["read", "write"];

// ANSWER

// Safe copies using spread
let required = [...requiredPermissions];
let user = [...userPermissions];

// 1) At least one required permission exists
let hasAnyPermission = required.some(function (perm) {
  return user.includes(perm);
});

// 2) All required permissions exist
let hasAllPermissions = required.every(function (perm) {
  return user.includes(perm);
});

console.log(hasAnyPermission);
console.log(hasAllPermissions);

// RESULT:
// true   (user has "read" and "write")
// false  (user does NOT have "delete")
