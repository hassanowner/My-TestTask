/*
========================================================
 Array Methods — some()
========================================================

General Topic:
--------------
Array.some()
"Tests whether at least ONE element in the array passes
 the callback function's condition."

Core Syntax (Basic Form):
-------------------------
array.some(callbackFn(element, index, array), thisArg)

Where:
------
1) callbackFn (required)
   - A function executed on each element until:
       • it returns true  → some() stops and returns true
       • all elements tested and none returned true → returns false

   Callback Receives:
   ------------------
   • element  → current element  
   • index    → index of current element  
   • array    → the array being processed

2) thisArg (optional)
   - A value used as "this" inside callbackFn.
   - Useful when the condition depends on external values.

Important Notes:
----------------
- some() does NOT modify the original array.
- It stops immediately when the callback returns true.
- Returns:
   • true  → at least one element matches the condition
   • false → no elements match the condition
*/


/*
========================================================
 Practical Examples
========================================================
*/


/*
========================================================
1) Basic Example — Check for a simple condition
========================================================
- We check if ANY number in the array is greater than 5.
- Callback stops as soon as it finds a match.
*/

let ex1 = [1, 2, 3, 4, 6];

let check1 = ex1.some(function(element) {
  return element > 5;   // becomes true when element = 6
});

// Result: true (because 6 > 5)
console.log("Example 1:", check1);




/*
========================================================
2) Using "thisArg"
========================================================
- We use "this" to compare every element with an external value.
*/

let numberLimit = 10;

let ex2 = [3, 4, 12, 1];

let check2 = ex2.some(function(element) {
  return element > this;   // "this" refers to numberLimit
}, numberLimit);

// Result: true (because 12 > 10)
console.log("Example 2:", check2);




/*
========================================================
3) Checking if a value EXISTS inside the array
========================================================
- A practical reusable function.
*/

function existsInArray(arr, value) {
  return arr.some(function(element) {
    return element === value;  // true if element equals value
  });
}

console.log("Example 3.1:", existsInArray([1, 2, 3], 2));  // true
console.log("Example 3.2:", existsInArray([1, 2, 3], 9));  // false




/*
========================================================
4) Using an object as "this" to check a RANGE
========================================================
- Useful for validations (age range, score range, etc.)
*/

let range = {
  min: 50,
  max: 80
};

let scores = [10, 25, 40, 55, 100];

let checkRange = scores.some(function(element) {
  // true when element is between 50 and 80
  return element >= this.min && element <= this.max;
}, range);

// Result: true (because 55 is inside the range)
console.log("Example 4:", checkRange);
