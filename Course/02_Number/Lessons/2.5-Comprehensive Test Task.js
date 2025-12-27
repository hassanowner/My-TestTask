/*
========================================================
OPERATORS CHALLENGE — JavaScript (With Results)
Topics:
- Arithmetic Operators
- Unary Operators
- Type Coercion
- Assignment Operators
========================================================
*/


// ======================================================
// CHALLENGE 1
// Add price and vat, then print the price with currency
// ======================================================

let price = 100;
let vat = 20;

console.log(price + vat);
/*
Result:
120
*/

console.log(price + " USD");
/*
Result:
100 USD
*/


// ======================================================
// CHALLENGE 2
// Subtract discount and test subtraction with text
// ======================================================

let total = 100;
let discount = 30;

console.log(total - discount);
/*
Result:
70
*/

console.log(total - "ABC");
/*
Result:
NaN
*/

console.log(typeof (total - "ABC"));
/*
Result:
number
*/


// ======================================================
// CHALLENGE 3
// Calculate multiplication and negative result
// ======================================================

let unitPrice = 50;
let quantity = 4;

console.log(unitPrice * quantity);
/*
Result:
200
*/

console.log(unitPrice * -1);
/*
Result:
-50
*/


// ======================================================
// CHALLENGE 4
// Divide numbers and produce decimal result
// ======================================================

let budget = 100;
let users = 5;

console.log(budget / users);
/*
Result:
20
*/

console.log(budget / 3);
/*
Result:
33.333333333333336
*/


// ======================================================
// CHALLENGE 5
// Calculate power using exponentiation operator
// ======================================================

let base = 2;
let power = 3;

console.log(base ** power);
/*
Result:
8
*/


// ======================================================
// CHALLENGE 6
// Use modulus to check even and odd numbers
// ======================================================

console.log(10 % 2);
/*
Result:
0
*/

console.log(11 % 2);
/*
Result:
1
*/


// ======================================================
// CHALLENGE 7
// Demonstrate post and pre increment
// ======================================================

let counter = 5;

console.log(counter++);
/*
Result:
5
*/

console.log(counter);
/*
Result:
6
*/

console.log(++counter);
/*
Result:
7
*/


// ======================================================
// CHALLENGE 8
// Demonstrate post and pre decrement
// ======================================================

let stock = 10;

console.log(stock--);
/*
Result:
10
*/

console.log(stock);
/*
Result:
9
*/

console.log(--stock);
/*
Result:
8
*/


// ======================================================
// CHALLENGE 9
// Convert values using unary plus
// ======================================================

console.log(+100);
/*
Result:
100
*/

console.log(+"200");
/*
Result:
200
*/

console.log(+"Invalid");
/*
Result:
NaN
*/

console.log(+true);
/*
Result:
1
*/

console.log(+false);
/*
Result:
0
*/


// ======================================================
// CHALLENGE 10
// Convert values using unary negation
// ======================================================

console.log(-"200");
/*
Result:
-200
*/

console.log(-true);
/*
Result:
-1
*/

console.log(-null);
/*
Result:
-0
*/


// ======================================================
// CHALLENGE 11
// Convert string to number using Number()
// ======================================================

console.log(Number("500"));
/*
Result:
500
*/


// ======================================================
// CHALLENGE 12
// Demonstrate type coercion
// ======================================================

let valueA = "100";
let valueB = 20;
let valueC = true;

console.log(+valueA + valueB + valueC);
/*
Result:
121
*/

console.log(valueA - valueB);
/*
Result:
80
*/

console.log("" - 2);
/*
Result:
-2
*/

console.log(false - true);
/*
Result:
-1
*/


// ======================================================
// CHALLENGE 13
// Update value using assignment operators
// ======================================================

let a = 10;

a = a + 20;
console.log(a);
/*
Result:
30
*/

a += 70;
console.log(a);
/*
Result:
100
*/

a += 100;
console.log(a);
/*
Result:
200
*/

a -= 50;
console.log(a);
/*
Result:
150
*/

a /= 50;
console.log(a);
/*
Result:
3
*/
