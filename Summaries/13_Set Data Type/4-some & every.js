/* =========================================================================
TOPIC: JavaScript — Array Methods: some(), every(), Spread Operator (...)
============================================================================
*/

/* =========================================================================
1 Array.some() — Check if at least ONE element passes a test
============================================================================
OVERVIEW:
- Tests if at least one element in an array meets the condition in a callback.
- Returns true immediately upon finding a match; false otherwise.
- Does NOT mutate the original array.

SYNTAX:
array.some(callbackFn(element, index, array), thisArg)

PARAMETERS:
1) callbackFn (required)
   • element → current element
   • index   → index of current element
   • array   → the array being processed
2) thisArg (optional) → value used as "this" inside callbackFn

RETURN VALUE:
- true → at least one element passes
- false → no elements pass
============================================================================
*/

/* =========================================================================
EXAMPLES: Array.some()
============================================================================
1) Basic Example
*/
let ex1 = [1, 2, 3, 4, 6];
console.log(ex1.some(el => el > 5)); // true (6 > 5)

/* =========================================================================
2) Using thisArg
*/
let limit = 10;
let ex2 = [3, 4, 12, 1];
console.log(ex2.some(function(el) { return el > this; }, limit)); // true

/* =========================================================================
3) Check if a value exists in an array
*/
function existsInArray(arr, value) {
  return arr.some(el => el === value);
}

console.log(existsInArray([1, 2, 3], 2)); // true
console.log(existsInArray([1, 2, 3], 9)); // false

/* =========================================================================
4) Using object as thisArg (range check)
*/
let range = { min: 50, max: 80 };
let scores = [10, 25, 40, 55, 100];
let checkRange = scores.some(function(el) {
  return el >= this.min && el <= this.max;
}, range);

console.log(checkRange); // true (55 in range)
/* ============================================================================
*/

  

/*
=========================================================================
2) Array.every() — Check if ALL elements pass a test
============================================================================
OVERVIEW:
- Tests whether all elements in an array satisfy a condition.
- Stops immediately if ANY element fails.
- Does NOT mutate the original array.

SYNTAX:
array.every(callbackFn(element, index, array), thisArg)

PARAMETERS:
1) callbackFn (required)
   • element → current element
   • index   → index of current element
   • array   → array being processed
2) thisArg (optional) → value used as "this" inside callbackFn

RETURN VALUE:
- true → all elements pass
- false → at least one element fails
============================================================================
*/

/* =========================================================================
EXAMPLES: Array.every()
============================================================================
1) Check all numbers are positive
*/
let allPositive = [3, 5, 7, 9].every(el => el > 0);
console.log(allPositive); // true

/* =========================================================================
2) Check string length >= 3
*/
let strings = ["dog", "cat", "cow", "bee"];
console.log(strings.every(el => el.length >= 3)); // true

/* =========================================================================
3) Using thisArg — minimum age check
*/
let ages = [22, 30, 18, 25];
let minimumAge = 18;
console.log(ages.every(function(el) { return el >= this; }, minimumAge)); // true

/* =========================================================================
4) Using object as thisArg — price range check
*/
let prices = [50, 80, 120, 60];
let priceRange = { min: 40, max: 150 };
console.log(prices.every(function(el) { return el >= this.min && el <= this.max; }, priceRange)); // true

/* =========================================================================
5) Check if all elements are even
*/
let numbers = [2, 4, 6, 8, 10];
console.log(numbers.every(el => el % 2 === 0)); // true

/* =========================================================================
6) Example returning false
*/
let exFail = [10, 20, 5, 30];
console.log(exFail.every(n => n > 10)); // false
============================================================================
*/


  
/* =========================================================================
3) Spread Operator — ...Iterable
============================================================================
OVERVIEW:
- Expands elements of an iterable (array, string, set, map, arguments, object).
- Can be used for array copy, merge, or function arguments.
- Does NOT mutate original iterable (except in certain in-place operations like push).

SYNTAX:
...[iterable]

USES:
1) Copy arrays
2) Merge arrays
3) Spread strings into characters
4) Expand array elements into function arguments
5) Merge objects or add properties
============================================================================
*/

/* =========================================================================
EXAMPLES: Spread Operator
============================================================================
1) Spread string → array of characters
*/
console.log([..."Hello"]); // ['H', 'e', 'l', 'l', 'o']
console.log(... "Hello");  // H e l l o

/* =========================================================================
2) Concatenate arrays
*/
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let merged = [...arr1, ...arr2];
console.log(merged); // [1,2,3,4,5,6]

/* =========================================================================
3) Copy array (shallow)
*/
let original = [10, 20, 30];
let copy = [...original];
console.log(copy); // [10, 20, 30]

/* =========================================================================
4) Spread in push()
*/
let friends = ["Ali", "Zaid"];
let newFriends = ["Sara", "Nour"];
friends.push(...newFriends);
console.log(friends); // ["Ali", "Zaid", "Sara", "Nour"]

/* =========================================================================
5) Spread in Math functions
*/
let nums = [50, 2, -10, 500, 23];
console.log(Math.max(...nums)); // 500

/* =========================================================================
6) Spread with objects — merge and add properties
*/
let objA = { x: 1, y: 2 };
let objB = { z: 3 };
let mergedObj = { ...objA, ...objB, w: 99 };
console.log(mergedObj); // { x: 1, y: 2, z: 3, w: 99 }

============================================================================
