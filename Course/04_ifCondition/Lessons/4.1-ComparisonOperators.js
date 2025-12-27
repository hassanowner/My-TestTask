/*
========================================================
Comparison Operators
========================================================
Covered Topics:
- == Equal
- != Not Equal

- === Identical
- !== Not Identical

- > Larger Than
- >= Larger Than Or Equal

- < Smaller Than
- <= Smaller Than Or Equal
========================================================
*/

// ======================================================
// == Equal
// - Compares value only (type is ignored)
// ======================================================

console.log(25 == "25");
/*
Result:
true
*/

console.log(-50 == "-50");
/*
Result:
true
*/


// ======================================================
// != Not Equal
// - Compares value only
// ======================================================

console.log(25 != "25");
/*
Result:
false
*/


// ======================================================
// === Identical
// - Compares value and type
// ======================================================

console.log(25 === "25");
/*
Result:
false
*/

console.log(25 === 25);
/*
Result:
true
*/


// ======================================================
// !== Not Identical
// - Checks value or type is different
// ======================================================

console.log(25 !== "25");
/*
Result:
true
*/

console.log(25 !== 25);
/*
Result:
false
*/


// ======================================================
// Greater Than / Greater Than Or Equal
// ======================================================

console.log(15 > 20);
/*
Result:
false
*/

console.log(15 >= 15);
/*
Result:
true
*/


// ======================================================
// Smaller Than / Smaller Than Or Equal
// ======================================================

console.log(15 < 20);
/*
Result:
true
*/

console.log(15 <= 15);
/*
Result:
true
*/


// ======================================================
// Comparing Types Using typeof
// ======================================================

console.log(typeof "Admin" === typeof "User");
/*
Result:
true
*/
