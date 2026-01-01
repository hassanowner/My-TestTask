/*
========================================================
JS ADVANCED CHALLENGES — TEST YOUR UNDERSTANDING
========================================================
*/

// ======================================================
// CHALLENGE 1 — Comparison + Logical
// ======================================================

/*
Question:
You have two variables representing user scores:
- userScore = 75 (number)
- bonusScore = "75" (string)

Check if:
1) The scores are equal in value but NOT identical in type.
2) Then, use a logical NOT (!) to reverse the result of the comparison.

Write the final result to the console.
*/

let userScore = 75;
let bonusScore = "75";

// Solution
let result1 = !(userScore == bonusScore && userScore !== bonusScore);

console.log("Challenge 1 Result:", result1); 
// Expected Output: false
// Explanation:
// userScore == bonusScore → true (values are equal)
// userScore !== bonusScore → true (types are different)
// AND → true && true → true
// !true → false

// ======================================================
// CHALLENGE 2 — Logical Assignment with Numbers
// ======================================================

/*
Question:
You have three variables representing account balances:
- balance1 = 0
- balance2 = 150
- balance3 = null

Apply these rules:
1) balance1 should get a default of 100 if it's falsy.
2) balance2 should be doubled only if it is truthy.
3) balance3 should get a default of 50 only if it's nullish.

Print all three balances.
*/

let balance1 = 0;
let balance2 = 150;
let balance3 = null;

// Solution
balance1 ||= 100;    // 0 is falsy → becomes 100
balance2 &&= balance2 * 2; // 150 is truthy → becomes 300
balance3 ??= 50;     // null → becomes 50

console.log("Challenge 2 Results:", balance1, balance2, balance3);
// Expected Output: 100 300 50

// ======================================================
// CHALLENGE 3 — Strings + Logical + Comparison
// ======================================================

/*
Question:
You have the following string values:
- title1 = ""
- title2 = "Developer"
- title3 = undefined

Tasks:
1) Use a logical OR (||) to assign a default "Untitled" to title1 if empty.
2) Use a logical AND (&&) to uppercase title2 only if it's truthy.
3) Use logical nullish assignment (??=) to set "Unknown" to title3 if nullish.

Print all titles.
*/

let title1 = "";
let title2 = "Developer";
let title3 = undefined;

// Solution
title1 ||= "Untitled";        // "" → falsy → becomes "Untitled"
title2 &&= title2.toUpperCase(); // "Developer" → truthy → becomes "DEVELOPER"
title3 ??= "Unknown";          // undefined → nullish → becomes "Unknown"

console.log("Challenge 3 Results:", title1, title2, title3);
// Expected Output: "Untitled" "DEVELOPER" "Unknown"

========================================================
*/
