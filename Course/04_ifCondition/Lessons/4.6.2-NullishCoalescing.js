/*
========================================================
Logical OR ||  &  Nullish Coalescing Operator ??
========================================================
Covered Topics:
- Logical OR ||
  -- Works with Null + Undefined + Any Falsy Value
- Nullish Coalescing Operator ??
  -- Works only with Null + Undefined
========================================================
*/

// ======================================================
// Boolean Conversion (Falsy & Truthy Values)
// ======================================================

console.log(Boolean(150));
/*
Result:
true
*/

console.log(Boolean(-50));
/*
Result:
true
*/

console.log(Boolean(0));
/*
Result:
false
*/

console.log(Boolean(""));
/*
Result:
false
*/

console.log(Boolean(null));
/*
Result:
false
*/


// ======================================================
// Practical Scenario
// Product pricing system
// ======================================================

let productPrice = 0; // Price fetched from database


// ======================================================
// Logical OR ||
// - Uses fallback for ANY falsy value
// ======================================================

console.log(`Final Price Is ${productPrice || 200}`);

/*
Result:
"Final Price Is 200"

Explanation:
- productPrice = 0 (Falsy)
- || replaces it with 200
*/


// ======================================================
// Nullish Coalescing Operator ??
// - Uses fallback ONLY for null or undefined
// ======================================================

console.log(`Final Price Is ${productPrice ?? 200}`);

/*
Result:
"Final Price Is 0"

Explanation:
- productPrice = 0 (Valid number)
- ?? does NOT replace it
*/
