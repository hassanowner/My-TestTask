/*
====================================================
forEach — Educational Explanation
====================================================

What is forEach?
- forEach is an array method
- It executes a function once for EACH array element
- It is used for performing actions (printing, updating UI, logging)
- It DOES NOT return a new array
- It ALWAYS returns undefined

Syntax:
array.forEach(function (element, index, array) {
  // code to execute
});

Parameters:
- element => current item
- index   => index of current item
- array   => the original array
====================================================
*/


// ==================================================
// Example 1: Basic Iteration Over Data
// ==================================================

let services = ["Auth", "Database", "Cache", "API"];

services.forEach(function (service) {
  console.log(`Service Loaded: ${service}`);
});

/*
Output:
Service Loaded: Auth
Service Loaded: Database
Service Loaded: Cache
Service Loaded: API
*/


// ==================================================
// Example 2: Using Index Parameter
// ==================================================

services.forEach(function (service, index) {
  console.log(`[${index}] ${service}`);
});

/*
Output:
[0] Auth
[1] Database
[2] Cache
[3] API
*/


// ==================================================
// Example 3: Accessing the Original Array
// ==================================================

services.forEach(function (service, index, array) {
  console.log(`Item: ${service}`);
  console.log(`Index: ${index}`);
  console.log(`Total Services: ${array.length}`);
  console.log("--------------------");
});

/*
Output (repeated per element):
Item: Auth
Index: 0
Total Services: 4
--------------------
*/


// ==================================================
// Example 4: forEach For Calculations (Side Effects)
// ==================================================

let responseTimes = [120, 200, 150, 180];
let totalTime = 0;

responseTimes.forEach(function (time) {
  totalTime += time;
});

console.log(totalTime);

/*
Output:
650
*/


// ==================================================
// Example 5: forEach vs map (Important Difference)
// ==================================================

let numbers = [1, 2, 3];

/*
map RETURNS a new array
*/
let doubledWithMap = numbers.map(function (num) {
  return num * 2;
});

console.log(doubledWithMap);
/*
Output:
[2, 4, 6]
*/

/*
forEach DOES NOT return anything
*/
let doubledWithForEach = numbers.forEach(function (num) {
  return num * 2;
});

console.log(doubledWithForEach);
/*
Output:
undefined
*/


// ==================================================
// Example 6: Practical Real-World Use (Logging System)
// ==================================================

let logs = ["INFO: App Started", "WARN: Low Memory", "ERROR: Connection Failed"];

logs.forEach(function (log, index) {
  console.log(`Log ${index + 1}: ${log}`);
});

/*
Output:
Log 1: INFO: App Started
Log 2: WARN: Low Memory
Log 3: ERROR: Connection Failed
*/


// ==================================================
// Key Rules You Must Remember
// ==================================================

/*
1) forEach cannot break or return
2) Best for side effects (print, update UI, counters)
3) Not suitable for transformations
4) Cleaner than for loop for simple actions
*/


// ==================================================
// Comparison Summary
// ==================================================

/*
map     => transforms data, returns new array
filter  => selects data, returns new array
reduce  => combines data, returns one value
forEach => performs action, returns NOTHING
*/


// ==================================================
// Execution Flow
// ==================================================

/*
Array
  ↓
Element 1 → callback
Element 2 → callback
Element 3 → callback
...
*/


// ==================================================
End of forEach Lesson
====================================================
