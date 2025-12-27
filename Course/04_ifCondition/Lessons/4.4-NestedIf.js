/*
========================================================
Nested If
========================================================
*/

// Scenario:
// Subscription pricing system based on plan and user status

let subscriptionPrice = 300;      // Base subscription price
let hasPromoCode = false;         // Promo code availability
let userRegion = "Local";         // User region
let isStudentUser = true;         // Student status


// ======================================================
// Nested If Logic
// ======================================================

if (hasPromoCode === true) {

  // Apply promo discount directly
  subscriptionPrice -= 50;

} else if (userRegion === "Local") {

  // Nested condition based on student status
  if (isStudentUser === true) {

    // Student in local region gets extra discount
    subscriptionPrice -= 80;

  } else {

    // Normal local user discount
    subscriptionPrice -= 30;

  }

} else {

  // Default discount for other regions
  subscriptionPrice -= 20;

}


// ======================================================
// Final Price
// ======================================================

console.log(subscriptionPrice);

/*
Result:
220

Explanation:
- No promo code
- User region is Local
- User is a student
- Student discount applied = 80
- Final price = 300 - 80 = 220
*/
