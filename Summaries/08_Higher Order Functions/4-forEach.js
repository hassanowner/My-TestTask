/*
====================================================
forEach — Complete Educational Guide (Single File)
====================================================

What is forEach?
- forEach is an array method
- Executes a function once for EACH array element
- Used for actions (printing, logging, UI updates)
- DOES NOT return a new array
- ALWAYS returns undefined

Syntax:
array.forEach(function (element, index, array) {
  // code to execute
});

Parameters:
- element => current item
- index   => index of current item
- array   => original array

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

let doubledWithMap = numbers.map(function (num) {
  return num * 2;
});

console.log(doubledWithMap);
/*
Output:
[2, 4, 6]
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
// Key Rules
// ==================================================

/*
1) forEach cannot break or return
2) Best for side effects (print, UI, counters)
3) Not suitable for transformations
4) Cleaner than for-loop for simple actions
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
// Combining forEach with filter & reduce
// ==================================================


// ==================================================
// Example 1: filter + forEach
// Scenario: Display only active users
// ==================================================

let users = [
  "ACTIVE_Admin",
  "INACTIVE_Guest",
  "ACTIVE_Editor",
  "INACTIVE_Test",
  "ACTIVE_User"
];

let activeUsers = users.filter(function (user) {
  return user.startsWith("ACTIVE");
});

activeUsers.forEach(function (user, index) {
  console.log(`[${index + 1}] ${user}`);
});

/*
Output:
[1] ACTIVE_Admin
[2] ACTIVE_Editor
[3] ACTIVE_User
*/


// ==================================================
// Example 2: reduce + forEach
// Scenario: Calculate total sales, then print report
// ==================================================

let dailySales = [120, 300, 250, 100];

let totalSales = dailySales.reduce(function (acc, current) {
  return acc + current;
}, 0);

dailySales.forEach(function (sale, index) {
  console.log(`Day ${index + 1} Sale: $${sale}`);
});

console.log(`Total Sales: $${totalSales}`);

/*
Output:
Day 1 Sale: $120
Day 2 Sale: $300
Day 3 Sale: $250
Day 4 Sale: $100
Total Sales: $770
*/


// ==================================================
// Example 3: filter + reduce + forEach
// Scenario: Process performance metrics
// ==================================================

let performanceScores = [95, 60, 88, 45, 77, 30, 90];

let passedScores = performanceScores.filter(function (score) {
  return score >= 70;
});

let totalScore = passedScores.reduce(function (acc, score) {
  return acc + score;
}, 0);

let averageScore = totalScore / passedScores.length;

passedScores.forEach(function (score, index) {
  console.log(`Passed Student ${index + 1}: ${score}`);
});

console.log(`Average Passing Score: ${averageScore}`);

/*
Output:
Passed Student 1: 95
Passed Student 2: 88
Passed Student 3: 77
Passed Student 4: 90
Average Passing Score: 87.5
*/


// ==================================================
// Final Learning Model
// ==================================================

/*
filter  → selects data
reduce  → calculates data
forEach → executes actions

Best Pattern:
filter → reduce → forEach
Selection → Calculation → Execution

====================================================
End of File
====================================================
*/
