/*
========================================================
Arithmetic Operators
Covered Topics:
+ Addition
- Subtraction
* Multiplication
/ Division
** Exponentiation (ES7)
% Modulus (Division Remainder)
++ Increment [ Post / Pre ]
-- Decrement [ Post / Pre ]
========================================================
*/

// ======================================================
// + Addition
// - Used to add numbers or join text
// ======================================================

let basePrice = 100;
let tax = 20;

console.log(basePrice + tax);

/*
Result:
120
*/

console.log(basePrice + " USD");

/*
Result:
100 USD
*/


// ======================================================
// - Subtraction
// - Used to subtract values
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

console.log(typeof NaN);

/*
Result:
number
*/


// ======================================================
// * Multiplication
// - Used to calculate totals
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
// / Division
// - Used to split values
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
// ** Exponentiation (ES7)
// - Used to calculate power values
// ======================================================

let base = 2;
let power = 3;

console.log(base ** power);

/*
Result:
8
*/

console.log(base * base * base);

/*
Result:
8
*/


// ======================================================
// % Modulus (Division Remainder)
// - Returns the remainder after division
// - Commonly used to check even / odd numbers
// ======================================================

let evenCheck = 10;
let oddCheck = 11;

console.log(evenCheck % 2);

/*
Result:
0
*/

console.log(oddCheck % 2);

/*
Result:
1
*/


// ======================================================
// ++ Increment [ Post / Pre ]
// - Increases value by 1
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
// -- Decrement [ Post / Pre ]
// - Decreases value by 1
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
