/*
========================================================
Switch Statement
========================================================
switch(expression) {
  case value:
    // Code Block
    break;
  default:
    // Code Block
}
--------------------------------------------------------
Covered Topics:
- Default Ordering
- Multiple Match
- Uses === (Strict Comparison)
========================================================
*/

// Scenario:
// System access day classification

let accessLevel = 2; // Numeric value received from system


// ======================================================
// Switch Statement Logic
// ======================================================

switch (accessLevel) {

  // Default can be placed anywhere in switch
  default:
    console.log("Access Level Unknown");
    break;

  // Case values use strict comparison (===)
  case 0:
    console.log("Guest Access");
    break;

  case 1:
    console.log("User Access");
    break;

  // Multiple Match
  // Same code for different values
  case 2:
  case 3:
    console.log("Administrator Access");
    break;
}

/*
Result:
"Administrator Access"

Explanation:
- accessLevel = 2
- Matched case 2
- case 2 and 3 share the same output
*/
