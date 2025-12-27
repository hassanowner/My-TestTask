/*
========================================================
📌 Difference Between switch and if (Practical Summary)
========================================================

switch:
- Best for comparing ONE value against multiple fixed cases
- More readable and cleaner when there are many options
- Does NOT support complex conditions directly

if:
- More powerful for complex logical conditions
- Supports comparisons like (>, <, &&, ||)
- Best choice for validation and checks

Best Practice:
** Use if for validation and complex logic
** Use switch for clear multiple choices
*/



/*
========================================================
CHALLENGE 1 — User Role System (switch)
========================================================
Task:
- Determine user permissions based on role
- Use switch statement only
========================================================
*/

let role = "Admin";
let permission;

switch (role) {
  case "Admin":
    permission = "Full Access";
    break;

  case "Moderator":
    permission = "Limited Access";
    break;

  case "User":
    permission = "Basic Access";
    break;

  default:
    permission = "No Access";
}

console.log(permission);

/*
Result:
"Full Access"
*/




/*
========================================================
CHALLENGE 2 — Weekday Checker (switch)
========================================================
Task:
- Check if the day is a weekday or weekend
- Use switch statement only
========================================================
*/

let day = "Friday";
let dayType;

switch (day) {
  case "Saturday":
  case "Sunday":
    dayType = "Weekend";
    break;

  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    dayType = "Weekday";
    break;

  default:
    dayType = "Invalid Day";
}

console.log(dayType);

/*
Result:
"Weekday"
*/




/*
========================================================
CHALLENGE 3 — Payment System (switch + if)
========================================================
Task:
- Use if to validate amount
- Use switch to determine payment method fee
- Print final amount
========================================================
*/

let paymentMethod = "Card";
let amount = 200;
let fee = 0;

// Validation using if
if (amount > 0) {

  // Method handling using switch
  switch (paymentMethod) {
    case "Card":
      fee = 5;
      break;

    case "PayPal":
      fee = 10;
      break;

    case "Cash":
      fee = 0;
      break;

    default:
      fee = 20;
  }

}

console.log(amount + fee);

/*
Result:
205
*/


