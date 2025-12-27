/*
========================================================
CHALLENGE 1 — Login Validation System
========================================================
Task:
- User must be 18 or older
- Username must NOT be empty
- Use Logical AND + Comparison
- Display result using Ternary Operator
========================================================
*/

let userAge = 21;
let userName = "Hassan";

console.log(
  userAge >= 18 && userName !== ""
    ? "Login Successful"
    : "Login Failed"
);

/*
Result:
"Login Successful"
*/
/*





========================================================
CHALLENGE 2 — Order Price Calculator
========================================================
Task:
- Apply default price if orderPrice is undefined (??)
- If user is premium OR order price > 500, apply discount
- Use Comparison + Logical OR + Nullish Coalescing
========================================================
*/

let orderPrice;
let isPremiumUser = true;

let finalPrice = (orderPrice ?? 300) - 
  (isPremiumUser || (orderPrice ?? 300) > 500 ? 50 : 0);

console.log(finalPrice);
/*
Result:
250
*/






/*
========================================================
CHALLENGE 3 — Region Tax System
========================================================
Task:
- Use default tax if tax value is falsy (||)
- Apply tax based on region using if / else if
- Final price must be printed
========================================================
*/

let basePrice = 400;
let region = "EU";
let tax = 0;

tax = tax || (region === "EU" ? 20 : region === "US" ? 30 : 10);

console.log(basePrice + tax);

/*
Result:
420
*/




/*
========================================================
CHALLENGE 4 — Employee Level & Access
========================================================
Task:
- Determine employee level using experience
- Check if employee is active
- Combine Nested Ternary + Logical AND
========================================================
*/

let experience = 3;
let isActive = true;

console.log(
  isActive && experience >= 1
    ? experience < 2
      ? "Junior"
      : experience <= 5
      ? "Mid"
      : "Senior"
    : "No Access"
);

/*
Result:
"Mid"
*/






/*
========================================================
CHALLENGE 5 — Safe Price Display
========================================================
Task:
- If price exists (not null or undefined), display it
- Otherwise show fallback message
- Use Nullish Coalescing + Logical NOT
========================================================
*/

let productPrice = null;

console.log(
  productPrice ?? "Price Not Available"
);

/*
Result:
"Price Not Available"
*/
