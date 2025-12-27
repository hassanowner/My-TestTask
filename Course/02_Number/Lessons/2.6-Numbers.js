/*
========================================================
Number
========================================================
Covered Topics:
- Double Precision
- Syntactic Sugar "_"
- e
- **
- With Decimal
- Number + BigInt
- Number Min Value
- Number Max Value
========================================================
*/

// ======================================================
// Double Precision
// - JavaScript numbers are stored as double-precision (64-bit)
// ======================================================

console.log(1000000);
/*
Result:
1000000
*/


// ======================================================
// Syntactic Sugar "_"
// - _ makes large numbers easier to read
// ======================================================

console.log(1_000_000);
/*
Result:
1000000
*/


// ======================================================
// e (Exponent)
// - Scientific notation for large numbers
// ======================================================

console.log(1e6);
/*
Result:
1000000
*/


// ======================================================
// ** (Exponentiation)
// - Power operator
// ======================================================

console.log(10 ** 6);
/*
Result:
1000000
*/


// ======================================================
// Repeated Multiplication
// - Another way to reach the same result
// ======================================================

console.log(10 * 10 * 10 * 10 * 10 * 10);
/*
Result:
1000000
*/


// ======================================================
// With Decimal
// - Decimal values are still numbers
// ======================================================

console.log(1000000.0);
/*
Result:
1000000
*/


// ======================================================
// Number SAFE Limits
// ======================================================

// Number Max Safe Integer
console.log(Number.MAX_SAFE_INTEGER);

/*
Result:
9007199254740991
*/


// ======================================================
// Number Max Value
// ======================================================

console.log(Number.MAX_VALUE);

/*
Result:
1.7976931348623157e+308
*/


// ======================================================
// Exceeding Max Value
// - Results in Infinity
// ======================================================

console.log(Number.MAX_VALUE + 23434343434);

/*
Result:
Infinity
*/
