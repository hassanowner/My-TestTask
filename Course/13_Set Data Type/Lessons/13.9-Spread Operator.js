/*
========================================================
 Spread Operator — ...
========================================================

General Topic:
--------------
Spread Operator (...Iterable)
"Allows any iterable (array, string, set, object…) to expand in place."

Core Syntax (Basic Form):
-------------------------
...[iterable]

Where:
------
1) iterable
   - Any iterable value: array, string, set, map, arguments, or even an object.
   - Spread expands the iterable into individual elements.

Important Notes:
----------------
- Spread does NOT mutate the original value (except when used inside push()).
- Spread is often used to:
  -- Copy arrays
  -- Merge arrays
  -- Expand strings
  -- Pass array elements as separate arguments
  -- Merge objects
*/


/*
========================================================
1) Spread With Strings — Expanding Characters
========================================================
*/

console.log("Example 1 — Spread String:");
console.log("Hello");
console.log(... "Hello");       // Expands characters individually
console.log([..."Hello"]);      // Converts string → array of characters





/*
========================================================
2) Concatenating Arrays Using Spread
========================================================
*/

console.log("\nExample 2 — Concatenate Arrays:");

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// Instead of arr1.concat(arr2)
let merged = [...arr1, ...arr2];

console.log(merged);
// Explanation:
// [...arr1, ...arr2]
// → expands each array into individual elements → creates one combined array





/*
========================================================
3) Copying Arrays (Shallow Copy)
========================================================
*/

console.log("\nExample 3 — Copy Array:");

let original = [10, 20, 30];
let copy = [...original];

console.log(copy);
// Spread creates a NEW array independent from the original





/*
========================================================
4) Using Spread Inside push()
========================================================
*/

console.log("\nExample 4 — Push With Spread:");

let friends = ["Ali", "Zaid"];
let newFriends = ["Sara", "Nour"];

// Push all elements individually
friends.push(...newFriends);

console.log(friends);
// Same as: friends.push("Sara", "Nour");





/*
========================================================
5) Using Spread With Math Functions
========================================================
*/

console.log("\nExample 5 — Math.max With Spread:");

let nums = [50, 2, -10, 500, 23];

console.log(Math.max(...nums));
// Spread passes array items as individual arguments
// math.max(50, 2, -10, 500, 23);





/*
========================================================
6) Spread With Objects — Merging & Adding Properties
========================================================
*/

console.log("\nExample 6 — Spread With Objects:");

let objA = { x: 1, y: 2 };
let objB = { z: 3 };

// Merge + add new property
let mergedObj = {
  ...objA,    // spread properties of objA
  ...objB,    // spread properties of objB
  w: 99       // add new key-value
};

console.log(mergedObj);
// Result:
// { x: 1, y: 2, z: 3, w: 99 }
