/*
====================================================
Reduce — Complete Practical Guide (Single File)
====================================================

reduce() is used to transform a collection (array)
into ONE single value.

This value can be:
- a number (sum, total, average)
- a string
- a boolean
- a new structure

====================================================
*/


// ==================================================
// Example: Calculate Total API Response Time
// ==================================================

let responseTimes = [120, 80, 200, 150]; // milliseconds

let totalTime = responseTimes.reduce(
  function (accumulator, currentValue, index, sourceArray) {

    console.log(`Accumulator => ${accumulator}`);
    console.log(`Current Value => ${currentValue}`);
    console.log(`Index => ${index}`);
    console.log(`Source Array => ${sourceArray}`);
    console.log(`New Accumulator => ${accumulator + currentValue}`);
    console.log("----------------------");

    return accumulator + currentValue;

  },
  0 // Initial Value
);

console.log(totalTime);
/*
Output:
550
*/


// ==================================================
// How reduce() Works Internally
// ==================================================

/*
Initial accumulator = 0

Iteration 1:
acc = 0
current = 120
result = 120

Iteration 2:
acc = 120
current = 80
result = 200

Iteration 3:
acc = 200
current = 200
result = 400

Iteration 4:
acc = 400
current = 150
result = 550
*/


// ==================================================
// Why Initial Value Is Important
// ==================================================

/*
With initial value:
- reduce() starts from index 0
- accumulator is predictable

Without initial value:
- accumulator = first array element
- iteration starts from index 1
*/


// ==================================================
// Example Without Initial Value
// ==================================================

let maxLoad = responseTimes.reduce(function (acc, curr) {
  return acc > curr ? acc : curr;
});

console.log(maxLoad);
/*
Output:
200
*/


// ==================================================
// When to Use reduce()
// ==================================================

/*
Use reduce() when:
- You need ONE final result
- You want to aggregate data
- You want to replace complex loops
*/


// ==================================================
// Common Real-World Use Cases
// ==================================================

/*
- Calculating totals (prices, time, scores)
- Finding max / min values
- Building summaries
- Transforming arrays into single values
*/


// ==================================================
// Key Takeaways
// ==================================================

/*
reduce():
- loops internally
- accumulator grows step by step
- returns ONE value only

If map() transforms and filter() selects,
reduce() finalizes.
*/


// ==================================================
// Extended Practical Use Cases
// ==================================================


// ==================================================
// Example 1: Find Longest Function Name
// ==================================================

let functionNames = [
  "init",
  "handleSubmit",
  "renderComponent",
  "log",
  "fetchUserData",
  "update"
];

let longestName = functionNames.reduce(function (currentLongest, currentItem) {

  console.log(`Current Longest => ${currentLongest}`);
  console.log(`Current Item => ${currentItem}`);
  console.log("----------------------");

  return currentLongest.length > currentItem.length
    ? currentLongest
    : currentItem;
});

console.log(longestName);
/*
Output:
fetchUserData
*/


// ==================================================
// Example 2: Remove Invalid Characters & Build String
// ==================================================

let rawChars = ["C", "O", "_", "_", "D", "E", "_", "_", "J", "S"];

let cleanResult = rawChars.reduce(function (accumulator, currentChar) {

  if (currentChar === "_") {
    return accumulator;
  }

  return accumulator + currentChar;

}, "");

console.log(cleanResult);
/*
Output:
CODEJS
*/


// ==================================================
// Example 3: Filter + Reduce (Total Valid Prices)
// ==================================================

/*
Scenario:
- API returns mixed values
- Some values are invalid
- Goal:
  1) Keep only positive numbers
  2) Calculate total sum
*/

let rawPrices = [100, "error", 250, -50, 75, null, 300];

let validPrices = rawPrices.filter(function (item) {
  return typeof item === "number" && item > 0;
});

console.log(validPrices);
/*
Output:
[100, 250, 75, 300]
*/

let totalPrice = validPrices.reduce(function (sum, price) {
  return sum + price;
}, 0);

console.log(totalPrice);
/*
Output:
725
*/


// ==================================================
// Processing Flow
// ==================================================

/*
rawPrices
   ↓ filter
validPrices
   ↓ reduce
totalPrice
*/


// ==================================================
// Final Summary
// ==================================================

/*
- filter() returns a NEW array
- reduce() returns ONE final value
- Together they produce clean, readable logic

====================================================
End of File
====================================================
*/
