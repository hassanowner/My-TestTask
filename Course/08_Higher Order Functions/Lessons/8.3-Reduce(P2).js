/*
====================================================
Reduce — Practical Use Cases (Extended)
- Find Longest Identifier
- Build Clean String Using Reduce
- Filter + Reduce Combined Example
====================================================
*/


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
  console.log(
    currentLongest.length > currentItem.length
      ? currentLongest
      : currentItem
  );
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
- We have a list of values coming from an API
- Some values are invalid (strings or negative numbers)
- Goal:
  1) Keep only positive numbers (filter)
  2) Calculate the total sum (reduce)
*/

let rawPrices = [100, "error", 250, -50, 75, null, 300];

// Step 1: Filter valid prices
let validPrices = rawPrices.filter(function (item) {
  return typeof item === "number" && item > 0;
});

console.log(validPrices);
/*
Output:
[100, 250, 75, 300]
*/

// Step 2: Calculate total price
let totalPrice = validPrices.reduce(function (sum, price) {
  return sum + price;
}, 0);

console.log(totalPrice);
/*
Output:
725
*/


// ==================================================
// Why Combine filter() + reduce()
// ==================================================

/*
- filter() decides WHAT data is allowed
- reduce() decides HOW that data is combined
- This pattern is very common in real projects
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
// Key Takeaways
// ==================================================

/*
- filter() returns a NEW array
- reduce() returns ONE final value
- Together they create clean, readable logic
====================================================
End of Lesson
====================================================
*/
