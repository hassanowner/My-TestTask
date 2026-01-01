/*
========================================================
NESTED IF — FULL EDUCATIONAL GUIDE
========================================================

Topics Covered:
1) What is a Nested If statement
2) Basic syntax and principle
3) Simple example to illustrate the concept
4) Detailed scenario with multiple nested conditions
5) Explanation of final result and logic
========================================================


--------------------------------------------------------
1) WHAT IS A NESTED IF STATEMENT?
--------------------------------------------------------

- A Nested If is an **if statement inside another if or else if block**.
- Allows you to **check additional conditions** only when a previous condition is true or false.
- Useful for **complex decision-making** where one condition depends on another.



--------------------------------------------------------
2) BASIC SYNTAX
--------------------------------------------------------

if (condition1) {
  // Executes if condition1 is true
  if (condition2) {
    // Executes if condition2 is also true
  } else {
    // Executes if condition2 is false
  }
} else {
  // Executes if condition1 is false
}


========================================================
NESTED IF — BASIC CONCEPT & CONTROL FLOW
========================================================

Start
  |
  v
[Check condition1?]                  <-- Outer if
  |
  |-- Yes --> [Execute Block1]
  |               |
  |               v
  |              End
  |
  |-- No --> [Check condition2?]      <-- Else if (optional)
                  |
                  |-- Yes --> [Execute Block2]
                  |                |
                  |                v
                  |               End
                  |
                  |-- No --> [Check condition3?]  <-- Another else if (optional)
                                  |
                                  |-- Yes --> [Execute Block3]
                                  |                 |
                                  |                 v
                                  |                End
                                  |
                                  |-- No --> [Else Block]   <-- Optional
                                                 |
                                                 v
                                                End

========================================================
GENERAL LOGIC EXPLANATION

1) Nested if = an if statement **inside another if or else if**.
   - Outer condition is evaluated first.
   - Inner conditions are only checked if the outer condition allows it.
   
2) Execution rules:
   - Evaluate top-down from outermost if to inner nested ifs.
   - Only the **first true condition** executes its block.
   - After executing a true block, **all remaining conditions are skipped**.

3) Structure overview:

if (condition1) {
    // Outer block
    if (condition2) {
        // Inner block executed only if condition1 is true
    } else {
        // Inner else block
    }
} else if (condition3) {
    // Outer else if block executed if condition1 is false
} else {
    // Outer else block executed if all previous outer conditions are false
}

4) Key points:

- Nested ifs allow **hierarchical decision-making**.
- Inner conditions depend on the **outer condition being true or false**.
- Avoid excessive nesting to maintain readability.
- For very complex conditions, consider **breaking logic into functions** or **using switch statements**.
- Nested ifs are ideal when a decision **depends on another decision**.

========================================================
VISUAL SUMMARY (FLOWCHART)

Start
  |
  v
[Condition1?]
  |-- Yes --> [Block1]
  |             |
  |             v
  |           End
  |
  |-- No --> [Condition2?]
                  |
                  |-- Yes --> [Block2]
                  |             |
                  |             v
                  |           End
                  |
                  |-- No --> [Condition3?]
                                  |
                                  |-- Yes --> [Block3]
                                  |             |
                                  |             v
                                  |           End
                                  |
                                  |-- No --> [Else Block]
                                                |
                                                v
                                              End

========================================================






--------------------------------------------------------
3) SIMPLE EXAMPLE
--------------------------------------------------------

let score = 85;
let grade;

if (score >= 50) {
  if (score >= 90) {
    grade = "A";
  } else {
    grade = "B";
  }
} else {
  grade = "F";
}

console.log(grade);

/*
Explanation:
- score = 85 → first if true (>=50)
- second nested if (>=90) → false → else branch executed
- grade = "B"
*/



/*
--------------------------------------------------------
4) DETAILED EXAMPLE: SUBSCRIPTION PRICING
-------------------------------------------------------- */

// Scenario:
// Calculate subscription price based on promo codes, region, and student status

let subscriptionPrice = 300;      // Base subscription price
let hasPromoCode = false;         // Promo code availability
let userRegion = "Local";         // User region
let isStudentUser = true;         // Student status

// ======================================================
// Nested If Logic
// ======================================================

// Step 1: Check for promo code
if (hasPromoCode === true) {
  // Promo code exists → apply direct discount
  subscriptionPrice -= 50;
} 

// Step 2: Check for local region if no promo code
else if (userRegion === "Local") {

  // Nested condition: check student status
  if (isStudentUser === true) {
    // Student in local region → extra discount
    subscriptionPrice -= 80;
  } else {
    // Non-student local user → normal discount
    subscriptionPrice -= 30;
  }

} 

// Step 3: Default discount for other regions
else {
  subscriptionPrice -= 20;
}

// ======================================================
// Final Price
// ======================================================

console.log(subscriptionPrice);

/*
Result:
220

Step-by-step Explanation:
1) hasPromoCode === false → skip first if
2) userRegion === "Local" → second else if true → enter block
3) Nested if: isStudentUser === true → apply student discount
4) subscriptionPrice = 300 - 80 = 220
5) Final output: 220
*/


/*
--------------------------------------------------------
5) KEY CONCEPTS OF NESTED IF
--------------------------------------------------------

1) Nested ifs allow **hierarchical checks**:
   - Outer condition must pass for inner conditions to be checked.
2) Only the **matching branch executes**; all others are skipped.
3) Can combine multiple else if and nested ifs for **complex rules**.
4) Avoid too deep nesting → can reduce readability.
5) Use nested ifs for **dependent conditions** (e.g., student discount applies only if region is Local).

========================================================
SUMMARY
========================================================

- Nested if = if inside another if/else if
- Ideal for conditional logic that depends on previous conditions
- Syntax is:
  if(condition1){
      if(condition2){
          // inner block
      } else {
          // alternative
      }
  } else if(condition3){
      // other branch
  } else {
      // fallback
  }
- Evaluates **top-down**, **first matching branch executes**, rest are skipped
- Example: Subscription system final price calculated correctly based on promo code, region, and student status
========================================================
*/
