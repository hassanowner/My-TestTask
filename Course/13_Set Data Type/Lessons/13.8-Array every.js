/*
========================================================
 Array Methods — every()
========================================================

General Topic:
--------------
Array.every()
"Checks if ALL elements in the array pass a provided test (callback function)."

Core Syntax (Basic Form):
-------------------------
array.every( callbackFunction(element, index, array) , thisArg )

Where:
------
1) callbackFunction (required)
   - Runs on every element.
   - Must return true/false.
   - Stops immediately when ANY element fails.

2) thisArg (optional)
   - The value used as "this" inside the callback.
*/



/*
========================================================
 Practical Examples (NEW & Completely Different)
========================================================
*/



/*
========================================================
1) Example: Check if all numbers are positive
========================================================
*/
let ex1 = [3, 5, 7, 9];

let check1 = ex1.every(function (el) {
  // Check if element is > 0
  return el > 0;
});

console.log("Example 1:", check1);
// true → because all numbers are positive





/*
========================================================
2) Example: Check if all strings contain 3+ characters
========================================================
*/
let ex2 = ["dog", "cat", "cow", "bee"];

let check2 = ex2.every(function (el) {
  // Check string length
  return el.length >= 3;
});

console.log("Example 2:", check2);
// true → all strings have length >= 3





/*
========================================================
3) Example Using thisArg
========================================================
 Purpose:
 --------
 - We want to check if ALL ages are above a "minimumAge".
 - The minimumAge will be passed as thisArg.
*/
let ages = [22, 30, 18, 25];

// thisArg is a **simple number** (not an object)
let minimumAge = 18;

let check3 = ages.every(function (el) {
  // this = minimumAge (18)
  return el >= this;
}, minimumAge);

console.log("Example 3:", check3);
// true → because all ages are >= 18





/*
========================================================
4) Example: Validate ALL prices are within a range
========================================================
 Purpose:
 --------
 - Use thisArg to store min/max range.
*/
let prices = [50, 80, 120, 60];

let priceRange = {
  min: 40,
  max: 150
};

let check4 = prices.every(function (el) {
  return el >= this.min && el <= this.max;
}, priceRange);

console.log("Example 4:", check4);
// true → all prices fall within the range





/*
========================================================
5) Example: Check if ALL values are even numbers
========================================================
*/
let ex5 = [2, 4, 6, 8, 10];

let check5 = ex5.every(function (el) {
  return el % 2 === 0;
});

console.log("Example 5:", check5);
// true → every element is even





/*
========================================================
 Example 6 — Result SHOULD be false
========================================================
*/
let ex6 = [10, 20, 5, 30];
let check6 = ex6.every(n => n > 10);
// 10 is NOT > 10 → failure → false
console.log("Example 6:", check6);

