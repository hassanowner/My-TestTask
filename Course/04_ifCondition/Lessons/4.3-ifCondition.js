/*
========================================================
CONTROL FLOW IN JAVASCRIPT — FULL EDUCATIONAL GUIDE
========================================================

Topics Covered:
1) if statement
2) else if statement
3) else statement
4) Combining multiple conditions


========================================================
1) BASIC CONCEPT OF CONTROL FLOW
========================================================

- Control flow determines **which block of code runs** based on conditions.
- Syntax:      */

if (condition) {
  // Code executes if condition is true
} else if (anotherCondition) {
  // Code executes if first condition is false and anotherCondition is true
} else {
  // Code executes if all previous conditions are false
}
/*
- Conditions are evaluated **top-down**.
- Only the first true condition's block executes; others are skipped.


========================================================
IF / ELSE IF / ELSE — CONTROL FLOW VISUALIZATION
========================================================

Start
  |
  v
[Check condition1: if (condition1)]
  |
  |-- Yes --> [Execute Block 1]
  |                 |
  |                 v
  |                End
  |
  |-- No --> [Check condition2: else if (condition2)]
                  |
                  |-- Yes --> [Execute Block 2]
                  |                 |
                  |                 v
                  |                End
                  |
                  |-- No --> [Check condition3: else if (condition3)]
                                  |
                                  |-- Yes --> [Execute Block 3]
                                  |                 |
                                  |                 v
                                  |                End
                                  |
                                  |-- No --> [Else Block]
                                                  |
                                                  v
                                                 End

========================================================
Key Notes:

1) Conditions are evaluated **top to bottom**.
2) The first true condition **executes its block** and skips the rest.
3) else acts as a **catch-all** if all previous conditions are false.
4) Visualizing like this helps understand **decision flow and nesting**.
========================================================




========================================================
2) SIMPLE EXAMPLE
======================================================== */

let isMember = true;
let discount;

if (isMember) {
  discount = 10;
} else {
  discount = 0;
}

console.log(discount);

/*
Explanation:
- isMember = true → first if block runs
- discount = 10
- Output: 10
*/




/*
========================================================
3) DETAILED EXAMPLE: ORDER PRICING SYSTEM
========================================================

// Scenario:
// Calculate order price based on membership and region */

let orderTotal = 500;          // Base order price
let isPremiumMember = false;   // Customer membership
let region = "EU";             // Customer region: EU, US, others
let tax = 0;                   // Tax or discount value

// -----------------------------------------------------
// Step 1: Check premium membership
// -----------------------------------------------------
if (isPremiumMember === true) {
  tax = 0;              // Premium members pay no tax
  orderTotal -= 50;     // Premium discount
}

// -----------------------------------------------------
// Step 2: Non-premium member in EU
// -----------------------------------------------------
else if (region === "EU") {
  tax = 20;             // EU tax
  orderTotal += tax;
}

// -----------------------------------------------------
// Step 3: Non-premium member in US
// -----------------------------------------------------
else if (region === "US") {
  tax = 30;             // US tax
  orderTotal += tax;
}

// -----------------------------------------------------
// Step 4: Any other region
// -----------------------------------------------------
else {
  tax = 10;             // Default tax
  orderTotal += tax;
}

// -----------------------------------------------------
// Step 5: Final result
// -----------------------------------------------------
console.log(orderTotal);


/*
========================================================
EXAMPLE SCENARIO: ORDER PRICING

Start
  |
  v
[isPremiumMember === true?]
  |
  |-- Yes --> [Apply Premium Discount, Tax = 0]
  |                        |
  |                        v
  |                       End
  |
  |-- No --> [region === "EU"?]
                  |
                  |-- Yes --> [Add EU Tax 20]
                  |                  |
                  |                  v
                  |                 End
                  |
                  |-- No --> [region === "US"?]
                                  |
                                  |-- Yes --> [Add US Tax 30]
                                  |                |
                                  |                v
                                  |               End
                                  |
                                  |-- No --> [Add Default Tax 10]
                                                    |
                                                    v
                                                   End

/*
Result:
520
Explanation:
1) isPremiumMember = false → skip first if
2) region = "EU" → second else if block runs
3) Tax added = 20
4) Final price = 500 + 20 = 520
*/




/*
========================================================
4) KEY NOTES AND BEST PRACTICES
========================================================

- if / else if / else allows **branching logic**.
- Conditions are evaluated in order from top to bottom.
- Only the first true condition executes; the rest are skipped.
- else is optional but useful as a fallback for unmatched cases.
- Use clear and simple conditions for readability.
- For complex branching, consider using **switch** for multiple discrete values.



  
========================================================
5) EXAMPLE RECAP: INLINE LOGIC
======================================================== */

// Using ternary for simple assignment (optional)
let regionTax = region === "EU" ? 20 : region === "US" ? 30 : 10;
console.log(regionTax);

/*
Explanation:
- Same logic as above
- Ternary works for simple inline assignments
- For multiple branches with more complexity, use if / else if / else
*/
