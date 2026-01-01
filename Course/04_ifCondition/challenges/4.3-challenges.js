/*
========================================================
5 JS CONTROL FLOW & NULLISH COALESCING CHALLENGES
========================================================
*/

// ======================================================
// CHALLENGE 1 — IF / ELSE
// ======================================================
/*
Question:
A shop applies discounts based on membership status:
- isMember = true → discount 15%
- isMember = false → discount 5%

Calculate the discountAmount for purchaseTotal = 400.
*/

let purchaseTotal = 400;
let isMember = true;
let discountAmount;

// Solution:
if (isMember) {
  discountAmount = purchaseTotal * 0.15;
} else {
  discountAmount = purchaseTotal * 0.05;
}

console.log("Challenge 1:", discountAmount); // Expected: 60



// ======================================================
// CHALLENGE 2 — NESTED IF
// ======================================================
/*
Question:
A user subscription system:
- basePrice = 250
- hasPromo = false
- isStudent = true

Rules:
1) If hasPromo → subtract 50
2) Else if not hasPromo:
   - If isStudent → subtract 40
   - Else → subtract 20

Calculate final subscription price.
*/

let basePrice2 = 250;
let hasPromo = false;
let isStudent = true;

if (hasPromo) {
  basePrice2 -= 50;
} else if (!hasPromo) {
  if (isStudent) {
    basePrice2 -= 40;
  } else {
    basePrice2 -= 20;
  }
}

console.log("Challenge 2:", basePrice2); // Expected: 210



// ======================================================
// CHALLENGE 3 — TERNARY OPERATOR
// ======================================================
/*
Question:
Assign a message based on login status:
- isLoggedIn = false → "Please Login"
- isLoggedIn = true → "Welcome Back"

Use a ternary operator.
*/

let isLoggedIn2 = false;

// Solution:
let loginMessage = isLoggedIn2 ? "Welcome Back" : "Please Login";

console.log("Challenge 3:", loginMessage); // Expected: "Please Login"




// ======================================================
// CHALLENGE 4 — NULLISH COALESCING (??)
// ======================================================
/*
Question:
A user profile may or may not have an age set.
- userAge = undefined

Use ?? to assign defaultAge = 18 if userAge is null or undefined.
*/

let userAge; // undefined
let defaultAge = userAge ?? 18;

console.log("Challenge 4:", defaultAge); // Expected: 18



// ======================================================
// CHALLENGE 5 — LOGICAL OR (||) VS NULLISH COALESCING (??)
// ======================================================
/*
Question:
A productPrice comes from database, might be 0.
- productPrice = 0

Use || and ?? to set finalPrice fallback 100, and see the difference.
*/

let productPrice = 0;

let finalPriceOR = productPrice || 100;  // || treats 0 as falsy
let finalPriceNullish = productPrice ?? 100; // ?? treats 0 as valid

console.log("Challenge 5 OR:", finalPriceOR);        // Expected: 100
console.log("Challenge 5 Nullish:", finalPriceNullish); // Expected: 0

/*
========================================================
Summary of Challenges:

1) Simple if/else → discount based on membership
2) Nested if → dependent conditions for subscription price
3) Ternary operator → assign message inline
4) Nullish coalescing ?? → default value for null/undefined
5) Logical OR || vs ?? → difference when value is falsy but valid
========================================================
*/
