/* =========================================================================
REGEX CHALLENGES — Character Classes, Word Boundaries, and test() Method
Advanced Practice Tasks
=========================================================================
Each challenge:
1) Starts with a QUESTION (real-world scenario)
2) Then the ANSWER (regex + code)
3) Result shown as a comment
=========================================================================
*/



/* =========================================================================
CHALLENGE 1 — Extract All Valid Usernames
============================================================================
QUESTION:
You have a list of usernames separated by spaces.
Rules for valid usernames:
- Must contain only letters, digits, or underscores
- Must be at least 3 characters long
- Must NOT contain spaces or special characters
Use a regex to extract all valid usernames.
============================================================================
*/

let users = "Alice 1Bob Bob! _Charlie D@ve Eve_123";

// ANSWER
let validUsernameRegex = /\b\w{3,}\b/g;  // word characters only, 3+ length

let validUsers = users.match(validUsernameRegex);

console.log(validUsers);
// RESULT:
// ["Alice","1Bob","_Charlie","Eve_123"]



/* =========================================================================
CHALLENGE 2 — Match All Digits and Ignore Letters
============================================================================
QUESTION:
You have a string containing text and numbers like "Room 101, Floor 2, ID 305".
Extract ONLY the digits (numbers) using regex character classes.
============================================================================
*/

let roomInfo = "Room 101, Floor 2, ID 305, Code A1B2";

// ANSWER
let digitsOnlyRegex = /\d+/g; // \d matches digits

let numbersFound = roomInfo.match(digitsOnlyRegex);

console.log(numbersFound);
// RESULT:
// ["101","2","305","1","2"]



/* =========================================================================
CHALLENGE 3 — Detect Words Inside Text But Not Substrings
============================================================================
QUESTION:
Given a paragraph, detect if the word "cat" exists as a whole word,
but do NOT match "concatenate" or "catapult".
Use word boundaries and test() method.
============================================================================
*/

let paragraph = "The cat sat on the mat. Concatenate words and catapult objects.";

// ANSWER
let wholeCatRegex = /\bcat\b/;

console.log(wholeCatRegex.test(paragraph));   // true
console.log(paragraph.match(/\bcat\b/g));     // ["cat"]

// RESULT:
// true
// ["cat"]
