/*
========================================================
LOGICAL ASSIGNMENT OPERATORS (||=, &&=, ??=)
========================================================

Logical assignment operators are a shorthand
introduced in ES2021 that combine:
- A logical operation (OR, AND, Nullish Coalescing)
- With assignment

They are useful for:
- Setting defaults
- Conditional updates
- Cleaner, shorter code
*/

/*
--------------------------------------------------------
1) LOGICAL OR ASSIGNMENT ( ||= )
--------------------------------------------------------

Syntax:  variable ||= value

Behavior:
- If variable is falsy → assign the right-hand value
- If variable is truthy → keep the current value
- Falsy values: false, 0, "", null, undefined, NaN
*/

let a1 = 5;    // truthy
let a2 = null; // falsy
let a3 = false; // falsy

a1 ||= 7; // a1 is truthy → stays 5
a2 ||= 7; // a2 is null (falsy) → becomes 7
a3 ||= 7; // a3 is false (falsy) → becomes 7

console.log(`a1: ${a1}`); // "a1: 5"
console.log(`a2: ${a2}`); // "a2: 7"
console.log(`a3: ${a3}`); // "a3: 7"

/*
Explanation:
- ||= acts like: variable = variable || value
- If variable is falsy, it takes the new value
- Otherwise, it stays the same
*/


/*
--------------------------------------------------------
2) LOGICAL AND ASSIGNMENT ( &&= )
--------------------------------------------------------

Syntax:  variable &&= value

Behavior:
- If variable is truthy → assign the right-hand value
- If variable is falsy → keep the current value
- Falsy values: false, 0, "", null, undefined, NaN
*/

let b1 = 5;     // truthy
let b2 = null;  // falsy
let b3 = false; // falsy

b1 &&= 7; // b1 is truthy → becomes 7
b2 &&= 7; // b2 is falsy → stays null
b3 &&= 7; // b3 is falsy → stays false

console.log(`b1: ${b1}`); // "b1: 7"
console.log(`b2: ${b2}`); // "b2: null"
console.log(`b3: ${b3}`); // "b3: false"

/*
Explanation:
- &&= acts like: variable = variable && value
- Only updates the variable if it is truthy
*/


/*
--------------------------------------------------------
3) LOGICAL NULLISH ASSIGNMENT ( ??= )
--------------------------------------------------------

Syntax:  variable ??= value

Behavior:
- If variable is null or undefined → assign the right-hand value
- Otherwise → keep the current value
- Unlike ||=, it does NOT consider 0, "", or false as nullish
*/

let c1 = 5;     // not nullish → stays 5
let c2 = null;  // null → becomes 7
let c3 = false; // not nullish → stays false

c1 ??= 7;
c2 ??= 7;
c3 ??= 7;

console.log(`c1: ${c1}`); // "c1: 5"
console.log(`c2: ${c2}`); // "c2: 7"
console.log(`c3: ${c3}`); // "c3: false"

/*
Explanation:
- ??= acts like: variable = variable ?? value
- Only updates the variable if it is null or undefined
- Useful to set defaults safely without overwriting falsy values
*/


/*
========================================================
SUMMARY OF LOGICAL ASSIGNMENTS
========================================================

| Operator | Update Condition                  | Example Result       |
|----------|----------------------------------|--------------------|
| ||=      | variable is falsy                 | false → value      |
| &&=      | variable is truthy                | true → value       |
| ??=      | variable is null or undefined     | null/undefined → value |

** Key Notes:
- ||= treats 0, "", false, null, undefined as falsy
- &&= updates only when truthy
- ??= updates only when nullish (null or undefined)
- They are shorthand for combining logical checks + assignment
========================================================
*/
