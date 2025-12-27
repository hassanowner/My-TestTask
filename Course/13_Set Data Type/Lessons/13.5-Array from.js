/*
Array.from is a built-in method that creates a new, 
  real Array from any iterable or array-like value (strings, Sets, Maps, NodeLists, arguments, typed arrays, etc.). 
  It’s useful for converting non-array objects into arrays, 
  making a shallow copy of an existing array-like structure,
  and optionally transforming each item during conversion via a mapping function.
  The optional thisArg lets you bind a context for the mapping callback. 
  Array.from preserves insertion/order and returns an actual Array instance you can use with all array methods. */

 /*
  Array.from( iterable , mapFunction , thisArg )

  1) iterable
     - Any iterable or array-like value.
     - Examples: string, Set, Map (keys/values), arguments, NodeList, typed arrays.
     - Array.from() converts this iterable into a real array.

  2) mapFunction (optional)
     - A function applied to every element while converting.
     - Works exactly like Array.prototype.map().
     - Useful for transforming values during creation.

  3) thisArg (optional)
     - A value used as "this" inside the mapFunction.
     - Lets you bind a context to the mapping process.
*/


/*
===============================================
  1) Basic Example — Using Array.from() on an Array
  - Purpose:
    Convert an existing array into a new array (copying it).
  - Features used:
    ✔ iterable (array)
    ✖ mapFunction
    ✖ thisArg
===============================================
*/

const numbers = [1, 2, 3, 4];

// Array.from() creates a NEW array from the iterable
const copiedArray = Array.from(numbers);

console.log(numbers);     // [1, 2, 3, 4]
console.log(copiedArray); // [1, 2, 3, 4]



/*
===============================================
  2) Using Array.from() with iterable + mapFunction
  - Purpose:
    Convert an iterable AND transform its elements at the same time.
  - Features used:
    ✔ iterable (array)
    ✔ mapFunction (doubles values)
    ✖ thisArg
===============================================
*/

const numbers2 = [1, 2, 3, 4];

// mapFunction runs on every element and returns the modified value
const doubled = Array.from(numbers2, function (value) {
  return value * 2;
});

console.log(doubled); // [2, 4, 6, 8]




/*
===============================================
  3) Using Set + Array.from() + Arrow Function
  - Purpose:
    Convert a Set to an array (duplicates removed automatically)
    and transform each item using an arrow function.
  - Features used:
    ✔ iterable (Set)
    ✔ mapFunction (arrow)
    ✖ thisArg
===============================================
*/

const numbersSet = new Set([1, 2, 2, 3, 3, 3, 4]);
// Set → [1, 2, 3, 4]

const setResult = Array.from(numbersSet, n => n * 10);

console.log(setResult); // [10, 20, 30, 40]





/*
===============================================
  4) Using thisArg — Binding "this" Inside mapFunction
  - Purpose:
    Show how Array.from() allows passing a "this" context.
  - Notes:
    - "thisArg" is the third parameter of Array.from().
    - Here we pass a normal variable (not an object).
    - Inside mapFunction, "this" refers to the variable.
  - Features used:
    ✔ iterable (array)
    ✔ mapFunction
    ✔ thisArg (simple variable)
===============================================
*/

const multiplier = 2; // we will used it as thisArg 
const numbers3 = [1, 2, 3];

// "this" inside the function === multiplier (value: 2)
const withThis = Array.from(
  numbers3, //iterable (array)
  function (n) {
    return n * this;  //mapFunction
  },
  multiplier // thisArg
);

console.log(withThis); // [2, 4, 6]
