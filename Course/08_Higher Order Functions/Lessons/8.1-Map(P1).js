
/*
====================================================
Higher Order Functions — map() Method
====================================================

This lesson explains:
- What Higher Order Functions are
- What map() does
- How map() works internally
- Difference between for loop and map()
- Using map() with:
  - Anonymous function
  - Arrow function
  - Named function
====================================================
*/


// ==================================================
// 1) What Is a Higher Order Function?
// ==================================================

/*
A Higher Order Function is a function that:
- Accepts another function as an argument
OR
- Returns a function

map() is a Higher Order Function because:
- It takes a callback function
- That callback runs on each array element
*/


// ==================================================
// 2) Problem BEFORE Using map()
// ==================================================

let numbers = [1, 2, 3, 4, 5, 6];
let doubledNumbers = [];

// Using a traditional for loop
for (let i = 0; i < numbers.length; i++) {
  doubledNumbers.push(numbers[i] * 2);
}

console.log(doubledNumbers);
/*
Result:
[2, 4, 6, 8, 10, 12]
*/

/*
Explanation:
- We manually loop through the array
- We manually push values
- More code, less readability
*/


// ==================================================
// 3) Solving the Same Problem Using map()
// ==================================================

let doubledWithMap = numbers.map(function (element) {
  return element * 2;
});

console.log(doubledWithMap);
/*
Result:
[2, 4, 6, 8, 10, 12]
*/

/*
Explanation:
- map() loops automatically
- Callback receives each array element
- map() returns a NEW array
- Original array remains unchanged
*/


// ==================================================
// 4) map() Using Arrow Function (Clean Style)
// ==================================================

let doubledArrow = numbers.map(num => num * 2);

console.log(doubledArrow);
/*
Result:
[2, 4, 6, 8, 10, 12]
*/

/*
Explanation:
- Arrow functions make map() very readable
- Best practice for short operations
*/


// ==================================================
// 5) map() Using Named Function
// ==================================================

function multiplyByTwo(value) {
  return value * 2;
}

let doubledNamed = numbers.map(multiplyByTwo);

console.log(doubledNamed);
/*
Result:
[2, 4, 6, 8, 10, 12]
*/

/*
Explanation:
- Named functions are reusable
- Cleaner for complex logic
*/


// ==================================================
// 6) Understanding map() Parameters
// ==================================================

let detailedMap = numbers.map(function (element, index, array) {
  return `Index ${index}: ${element} (From array: ${array})`;
});

console.log(detailedMap);
/*
Result:
[
  "Index 0: 1 (From array: 1,2,3,4,5,6)",
  "Index 1: 2 (From array: 1,2,3,4,5,6)",
  "Index 2: 3 (From array: 1,2,3,4,5,6)",
  "Index 3: 4 (From array: 1,2,3,4,5,6)",
  "Index 4: 5 (From array: 1,2,3,4,5,6)",
  "Index 5: 6 (From array: 1,2,3,4,5,6)"
]
*/


// ==================================================
// 7) Important Notes About map()
// ==================================================

/*
- map():
  ✅ Returns a NEW array
  ✅ Does NOT modify original array
  ✅ Always same length as original
  ❌ Not used for filtering
  ❌ Not used for side effects
*/


// ==================================================
// Summary
// ==================================================

/*
Higher Order Functions:
- Functions that work with other functions

map():
- Transforms each element
- Returns a new array
- Cleaner than traditional loops
- Essential for modern JavaScript

Use map() when:
- You want to transform data
- You need a new array
- You prefer readable and functional code
*/
