/*
========================================================
Number Methods
========================================================
Covered Topics:
- Two Dots To Call A Methods
- toString()
- toFixed()
- parseInt()
- parseFloat()
- isInteger() [ES6]
- isNaN() [ES6]
========================================================
*/

// ======================================================
// Two Dots To Call A Method
// - Used when calling methods on numbers
// ======================================================

console.log((250).toString());
/*
Result:
"250"
*/


// ======================================================
// toString()
// - Converts number to string
// ======================================================

console.log(99.5.toString());
/*
Result:
"99.5"
*/


// ======================================================
// toFixed()
// - Formats number with fixed decimal places
// ======================================================

console.log(123.4567.toFixed(2));
/*
Result:
"123.46"
*/


// ======================================================
// Number()
// - Tries to convert value to a number
// ======================================================

console.log(Number("350 USD"));
/*
Result:
NaN
*/


console.log(+"350 USD");
/*
Result:
NaN
*/


// ======================================================
// parseInt()
// - Extracts integer number from string
// ======================================================

console.log(parseInt("350 USD"));
/*
Result:
350
*/


console.log(parseInt("USD 350"));
/*
Result:
NaN
*/


console.log(parseInt("350.75 USD"));
/*
Result:
350
*/


// ======================================================
// parseFloat()
// - Extracts floating-point number from string
// ======================================================

console.log(parseFloat("350.75 USD"));
/*
Result:
350.75
*/


// ======================================================
// Number.isInteger() [ES6]
// - Checks if value is an integer number
// ======================================================

console.log(Number.isInteger("350"));
/*
Result:
false
*/


console.log(Number.isInteger(350.75));
/*
Result:
false
*/


console.log(Number.isInteger(350));
/*
Result:
true
*/


// ======================================================
// Number.isNaN() [ES6]
// - Checks if value is NaN
// ======================================================

console.log(Number.isNaN("Text" / 10));
/*
Result:
true
*/
