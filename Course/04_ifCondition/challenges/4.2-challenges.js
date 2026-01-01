/*
========================================================
JS CONTROL FLOW & TERNARY CHALLENGES
========================================================
*/

// ======================================================
// CHALLENGE 1 — IF / ELSE + COMPARISON
// ======================================================

/*
Question:
You have a variable `temperature` that stores the current temperature in Celsius.
- If temperature >= 30 → print "Hot"
- Else if temperature >= 20 → print "Warm"
- Else if temperature >= 10 → print "Cool"
- Else → print "Cold"

Set temperature = 15 and determine what is printed.
*/

let temperature = 15;

// Solution
if (temperature >= 30) {
  console.log("Hot");
} else if (temperature >= 20) {
  console.log("Warm");
} else if (temperature >= 10) {
  console.log("Cool");
} else {
  console.log("Cold");
}

// Expected Output: "Cool"
// Explanation:
// 15 >= 30 → false
// 15 >= 20 → false
// 15 >= 10 → true → executes this block

// ======================================================
// CHALLENGE 2 — NESTED IF
// ======================================================

/*
Question:
You have a subscription system:
- basePrice = 200
- isPremium = false
- hasCoupon = true

Rules:
1) If user is premium → subtract 50
2) Else if not premium:
   - If has coupon → subtract 30
   - Else → subtract 10

Print the final subscription price.
*/

let basePrice = 200;
let isPremium = false;
let hasCoupon = true;

// Solution
if (isPremium) {
  basePrice -= 50;
} else {
  if (hasCoupon) {
    basePrice -= 30;
  } else {
    basePrice -= 10;
  }
}

console.log("Challenge 2 Result:", basePrice);

// Expected Output: 170
// Explanation:
// isPremium → false → skip first if
// Nested if: hasCoupon → true → subtract 30 → 200 - 30 = 170

// ======================================================
// CHALLENGE 3 — NESTED TERNARY
// ======================================================

/*
Question:
You have a variable `score` representing a student’s exam score.
- score >= 90 → "Excellent"
- score >= 75 → "Good"
- score >= 50 → "Pass"
- score < 50 → "Fail"

Use a single nested ternary operator to assign the grade and print it.
Set score = 82.
*/

let score = 82;

// Solution
let grade = score >= 90
  ? "Excellent"
  : score >= 75
  ? "Good"
  : score >= 50
  ? "Pass"
  : "Fail";

console.log("Challenge 3 Result:", grade);

// Expected Output: "Good"
// Explanation:
// score >= 90 → false
// score >= 75 → true → "Good" is assigned

========================================================
*/
