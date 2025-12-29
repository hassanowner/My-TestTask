/* ======================================================
   JAVASCRIPT NUMBER CHALLENGES
   Topics Covered:
   - Arithmetic Operators (+, -, *, /, %, **, ++, --)
   - Unary Operators (+, -)
   - Type Coercion
======================================================== */

// ======================================================
// CHALLENGE 1: Basic Arithmetic Operators
// ======================================================

/*
QUESTION:
1. Add 100 + 20
2. Subtract 30 from 100
3. Multiply 50 by 4
4. Divide 100 by 5
5. Calculate 2 to the power of 3
6. Modulus: 11 % 2
*/

console.log("Addition:", 100 + 20);      // Result: 120
console.log("Subtraction:", 100 - 30);   // Result: 70
console.log("Multiplication:", 50 * 4);  // Result: 200
console.log("Division:", 100 / 5);       // Result: 20
console.log("Exponentiation:", 2 ** 3);  // Result: 8
console.log("Modulus:", 11 % 2);         // Result: 1

// ======================================================
// CHALLENGE 2: Increment and Decrement
// ======================================================

/*
QUESTION:
1. Start with counter = 5, apply post-increment and print
2. Apply pre-increment and print
3. Start with stock = 10, apply post-decrement and print
4. Apply pre-decrement and print
*/

let counter = 5;
console.log("Post-increment:", counter++); // Result: 5
console.log("After increment:", counter);  // Result: 6
console.log("Pre-increment:", ++counter);  // Result: 7

let stock = 10;
console.log("Post-decrement:", stock--);   // Result: 10
console.log("After decrement:", stock);    // Result: 9
console.log("Pre-decrement:", --stock);    // Result: 8

// ======================================================
// CHALLENGE 3: Unary Operators
// ======================================================

/*
QUESTION:
Use unary plus and minus to convert values.
1. Convert string "200" to number
2. Convert string "-300" to number
3. Negate 100
4. Negate string "15.75"
5. Convert true and false to number
*/

console.log("Unary Plus:", +"200");        // Result: 200
console.log("Unary Plus Negative:", +"-300"); // Result: -300
console.log("Unary Minus:", -100);         // Result: -100
console.log("Unary Minus Float:", -"15.75");  // Result: -15.75
console.log("True to Number:", +true);     // Result: 1
console.log("False to Number:", +false);   // Result: 0

// ======================================================
// CHALLENGE 4: Type Coercion
// ======================================================

/*
QUESTION:
Predict the output of the following expressions
1. "100" + 20 + true
2. "100" - 20
3. "" - 2
4. false - true
*/

console.log("Coercion 1:", +"100" + 20 + 1); // Result: 121
console.log("Coercion 2:", "100" - 20);      // Result: 80
console.log("Coercion 3:", "" - 2);          // Result: -2
console.log("Coercion 4:", false - true);    // Result: -1
