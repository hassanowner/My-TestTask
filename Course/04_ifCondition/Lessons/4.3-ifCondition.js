/*
========================================================
Control Flow
========================================================
Covered Topics:
- if
- else if
- else

if (Condition) {
  // Block Of Code
}
========================================================
*/

// Scenario:
// Order pricing system based on membership and region

let orderTotal = 500;          // Original order price
let isPremiumMember = false;  // Customer membership status
let region = "EU";             // Customer region
let tax = 0;                   // Tax or discount value


// ======================================================
// Control Flow Logic
// ======================================================

// If customer is a premium member
if (isPremiumMember === true) {
  tax = 0; // No tax for premium members
  orderTotal -= 50; // Fixed discount
}

// If customer is not premium but located in EU
else if (region === "EU") {
  tax = 20;
  orderTotal += tax;
}

// If customer is located in US
else if (region === "US") {
  tax = 30;
  orderTotal += tax;
}

// Any other region
else {
  tax = 10;
  orderTotal += tax;
}


// ======================================================
// Final Result
// ======================================================

console.log(orderTotal);

/*
Result:
520
Explanation:
- User is NOT premium
- Region is EU
- Tax added = 20
- Final price = 500 + 20 = 520
*/
