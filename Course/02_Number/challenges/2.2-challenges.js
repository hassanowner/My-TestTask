/* ======================================================
   JAVASCRIPT NUMBER & MATH CHALLENGES
   Topics Covered:
   - Arithmetic Operators
   - Unary Operators
   - Assignment Operators
   - Number Methods
   - Math Object
======================================================== */

// ======================================================
// CHALLENGE 1: Arithmetic & Assignment
// ======================================================

/*
QUESTION:
1. Start with a = 10
2. Add 20 using a = a + 20
3. Then add 50 using +=
4. Subtract 30 using -=
5. Divide the result by 5 using /=
Print the final result.
*/

let a = 10;
a = a + 20;
a += 50;
a -= 30;
a /= 5;

console.log("Final result:", a); // Answer: 10

// ======================================================
// CHALLENGE 2: Unary Operators
// ======================================================

/*
QUESTION:
Use unary operators to convert values:
1. Convert string "100" to number
2. Negate 50
3. Convert true to number
4. Convert false to number
*/

console.log("Unary 1:", +"100"); // 100
console.log("Unary 2:", -50);    // -50
console.log("Unary 3:", +true);  // 1
console.log("Unary 4:", +false); // 0

// ======================================================
// CHALLENGE 3: Number Methods
// ======================================================

/*
QUESTION:
1. Convert number 250 to string using toString()
2. Format 123.4567 to 2 decimal places using toFixed()
3. Extract integer from string "350.75 USD" using parseInt()
4. Extract float from string "350.75 USD" using parseFloat()
*/

console.log((250).toString());         // "250"
console.log((123.4567).toFixed(2));    // "123.46"
console.log(parseInt("350.75 USD"));   // 350
console.log(parseFloat("350.75 USD")); // 350.75

// ======================================================
// CHALLENGE 4: Type Checking
// ======================================================

/*
QUESTION:
Check the type of the following:
1. Number 100
2. String "100"
3. Is 350 an integer?
4. Is "Text"/10 NaN?
*/

console.log("Type of 100:", typeof 100);                  // number
console.log("Type of '100':", typeof "100");              // string
console.log("Is 350 integer?:", Number.isInteger(350));   // true
console.log("Is 'Text'/10 NaN?:", Number.isNaN("Text"/10)); // true

// ======================================================
// CHALLENGE 5: Math Object
// ======================================================

/*
QUESTION:
Use Math methods to:
1. Round 24.5
2. Round up 24.1
3. Round down 24.9
4. Get min and max from numbers 50, -10, 200, 0, 75
5. Remove decimal part from 24.8
*/

console.log("Round:", Math.round(24.5));       // 25
console.log("Ceil:", Math.ceil(24.1));         // 25
console.log("Floor:", Math.floor(24.9));       // 24
console.log("Min:", Math.min(50, -10, 200, 0, 75)); // -10
console.log("Max:", Math.max(50, -10, 200, 0, 75)); // 200
console.log("Trunc:", Math.trunc(24.8));       // 24
