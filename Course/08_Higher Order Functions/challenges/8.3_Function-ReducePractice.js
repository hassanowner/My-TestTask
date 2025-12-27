/*
  General Idea:
  ----------------
  These tasks demonstrate the usage of JavaScript's reduce() method.
  The reduce() method executes a reducer function on each element of the array,
  resulting in a single output value. 
  Each task shows a practical usage:
  1. Task 1 – Sum all numbers
  2. Task 2 – Trace reduce steps
  3. Task 3 – Find the longest word
  4. Task 4 – Remove unwanted characters and join into a string
*/


/* ================================
   Task 1 – Total Sum of Numbers
   --------------------------------
*/
var numbers = [10, 20, 5, 15, 50];

// Reduce to calculate total sum
var totalSum = numbers.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0); // Start accumulator with 0

console.log("Task 1 – Total Sum of Numbers:");
console.log(totalSum); 
// Expected output: 100
console.log("---------------------------------------------------");





/* ================================
   Task 2 – Trace Reduce Steps
   --------------------------------
*/
let nums = [10, 20, 15, 30];

// Reduce with console logging to see each step
let add = nums.reduce(function(acc, current, index, arr) {
  console.log(`Acc => ${acc}`); // Current accumulated value
  console.log(`Current Element => ${current}`); // Current element
  console.log(`Current Element Index => ${index}`); // Index of current element
  console.log(`Array => ${arr}`); // Original array
  console.log(`Sum => ${acc + current}`); // Sum at this step
  console.log("#############");
  return acc + current; // Return for next iteration
}, 5); // Initial accumulator value

console.log("Task 2 – Final Sum with Initial Value 5:");
console.log(add); 
console.log("---------------------------------------------------");





/* ================================
   Task 3 – Find Longest Word
   --------------------------------
*/
let words = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test", "Propaganda_Two"];

// Reduce to find the longest word
let longestWord = words.reduce(function(acc, current) {
  console.log(`Acc => ${acc}`); // Current longest word
  console.log(`Current Element => ${current}`); // Current word
  console.log(`Longest so far => ${acc.length > current.length ? acc : current}`);
  console.log("#############");
  return acc.length > current.length ? acc : current;
});

console.log("Task 3 – Longest Word:");
console.log(longestWord); 
// Expected output: "Propaganda_Two"
console.log("---------------------------------------------------");





/* ================================
   Task 4 – Remove Characters + Join
   --------------------------------
*/
let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

// Step 1: Filter out unwanted character "@"
// Step 2: Reduce to join the remaining characters into a string
let finalString = removeChars
  .filter(function(ele) {
    return ele !== "@";
  })
  .reduce(function(acc, current) {
    return acc + current; // Concatenate each element
  });

console.log("Task 4 – Final String after Removing '@':");
console.log(finalString); 
// Expected output: "ELZERO"
console.log("---------------------------------------------------");
