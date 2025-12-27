/*
  General Idea:
  ----------------
  These tasks demonstrate the usage of JavaScript's filter() method.
  Each task selects elements from an array based on a specific condition:
  1. Task 1 – Filter adults from ages array
  2. Task 2 – Filter even numbers from numbers array
  3. Task 3 – Filter words starting with "S" from words array
  The output is always a new array containing only the elements that meet the criteria.
*/


/* ================================
   Task 1 – Filter Adults
   --------------------------------
   Goal:
   - Filter out only the ages that are 18 or older
   - Return a new array of adult ages
   Notes:
   - The original array remains unchanged
   - filter() creates a new array based on the condition
*/
let ages = [12, 17, 18, 25, 30, 15, 40];

let adults = ages.filter(function(age) {
  // If age is 18 or higher, include it in the new array
  return age >= 18;
});

console.log("Task 1 – Adults Only:");
console.log(adults); 
// Expected output: [18, 25, 30, 40]
console.log("---------------------------------------------------");





/* ================================
   Task 2 – Filter Even Numbers
   --------------------------------
   Goal:
   - Select only even numbers from the array
   - Return a new array with even numbers
   Notes:
   - Use modulus operator % to check if a number is even
   - filter() tests each element and includes only those meeting the condition
*/
let numbers = [11, 20, 2, 5, 17, 10, 8];

let evenNumbers = numbers.filter(function(num) {
  // If remainder of num divided by 2 is 0, it's even
  return num % 2 === 0;
});

console.log("Task 2 – Even Numbers:");
console.log(evenNumbers); 
// Expected output: [20, 2, 10, 8]
console.log("---------------------------------------------------");





/* ================================
   Task 3 – Filter Words Starting with S
   --------------------------------
   Goal:
   - Filter only the words that start with the letter "S"
   - Return a new array of words
   Notes:
   - startsWith() method checks the first character of each word
   - filter() keeps elements that satisfy the condition
*/
let words = ["Sun", "Moon", "Star", "Sky", "Earth", "Sea"];

let wordsWithS = words.filter(function(word) {
  // Include word if it starts with "S"
  return word.startsWith("S");
});

console.log("Task 3 – Words Starting with S:");
console.log(wordsWithS); 
// Expected output: ["Sun", "Star", "Sky", "Sea"]
console.log("---------------------------------------------------");
