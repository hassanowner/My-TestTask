/*
  Map Practice - Extended Test Task
  ==================================
  Task 1 – Convert Student Scores to Pass/Fail
  Task 2 – Double Numbers
  Task 3 – Capitalize Words
  Task 4 – Remove Numbers from String
  Task 5 – Invert Boolean Values
*/

/* ================================
   Task 1 – Convert Student Scores to Pass/Fail
   --------------------------------
*/
var scores = [95, 12, 77, 49, 50, 100];

var passFail = scores.map(function(score) {
  return score < 50 ? "Fail" : "Pass";
});

console.log("Task 1 – Scores Pass/Fail:");
console.log(passFail);
// Expected: ["Pass", "Fail", "Pass", "Fail", "Pass", "Pass"]
console.log("---------------------------------------------------");





/* ================================
   Task 2 – Double Numbers
   --------------------------------
*/
let numbers = [1, 2, 3, 4, 5, 6];

function doubleNum(n) {
  return n * 2;
}

let doubled = numbers.map(doubleNum);

console.log("Task 2 – Doubled Numbers:");
console.log(doubled); // [2, 4, 6, 8, 10, 12]
console.log("---------------------------------------------------");






/* ================================
   Task 3 – Capitalize Words
   --------------------------------
*/
let words = ["hello", "world", "javascript"];

let capitalized = words.map(function(word) {
  return word[0].toUpperCase() + word.slice(1);
});

console.log("Task 3 – Capitalized Words:");
console.log(capitalized); // ["Hello", "World", "Javascript"]
console.log("---------------------------------------------------");






/* ================================
   Task 4 – Remove Numbers from String
   --------------------------------
*/
let mixedChars = "AbC123xYz";

let lettersOnly = mixedChars
  .split("")
  .map((ch) => (isNaN(parseInt(ch)) ? ch : "")) // Remove numbers
  .join("");

console.log("Task 4 – Letters Only:");
console.log(lettersOnly); // "AbCxYz"
console.log("---------------------------------------------------");







/* ================================
   Task 5 – Invert Boolean Values
   --------------------------------
*/
let boolArray = [true, false, true, true, false];

let inverted = boolArray.map((val) => !val);

console.log("Task 5 – Inverted Booleans:");
console.log(inverted); // [false, true, false, false, true]
console.log("---------------------------------------------------");

