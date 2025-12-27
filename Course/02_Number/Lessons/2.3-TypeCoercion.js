/*
========================================================
Type Coercion (Type Casting)
Covered Topics:
- +
- -
- "" - 2
- false - true
========================================================
*/

// ======================================================
// Type Coercion
// - JavaScript automatically converts data types when needed
// ======================================================


// ======================================================
// Using + Operator
// - + can convert strings to numbers when possible
// ======================================================

let valueA = "100";
let valueB = 20;
let valueC = true;

console.log(+valueA + valueB + valueC);

/*
Result:
121
*/



// ======================================================
// Using - Operator
// - - always tries to convert values to numbers
// ======================================================

console.log(valueA - valueB);

/*
Result:
80
*/


// ======================================================
// "" - 2
// - Empty string is treated as number 0
// ======================================================

console.log("" - 2);

/*
Result:
-2
*/


// ======================================================
// false - true
// - false is converted to 0
// - true is converted to 1
// ======================================================

console.log(false - true);

/*
Result:
-1
*/
