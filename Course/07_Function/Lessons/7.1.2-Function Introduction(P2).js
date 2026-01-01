/*
===========================================================
FUNCTIONS — Advanced Examples (Educational & Practical)
===========================================================

In this lesson we cover:
- Functions with multiple parameters
- Using conditions (if / else) inside functions
- Controlling function behavior with arguments
- Using loops and continue inside functions
- Writing realistic and practical function examples

All explanations and results are included as comments.
Everything is explained step by step in ONE block.
===========================================================
*/

/* =========================================================
   Example 1: Conditional Logic Inside a Function
   ========================================================= */

/*
Scenario:
- We want to validate if a user is allowed to use an application
- The decision depends on the user's age
*/

// Function definition
function checkUserEligibility(userName, age) {

  // Check age condition
  if (age < 20) {
    console.log("App is not suitable for you");
  } else {
    console.log(`Hello ${userName}, your age is ${age}`);
  }
}

// Function calls with different arguments
checkUserEligibility("SystemUser", 38);
checkUserEligibility("PowerUser", 40);
checkUserEligibility("TrialUser", 18);

/*
Expected console output:
Hello SystemUser, your age is 38
Hello PowerUser, your age is 40
App is not suitable for you
*/

/*
Explanation:
1) The function receives TWO parameters:
   - userName
   - age

2) The if condition checks the value of age:
   - If age is less than 20 → block access
   - Otherwise → print a welcome message

3) Every function call sends different arguments,
   but the same logic is reused.

-----------------------------------------------------------
Why this is practical?
-----------------------------------------------------------
- Age validation
- Access control
- Feature restrictions
- Common in real applications
*/


/* =========================================================
   Example 2: Loop Inside a Function (with continue)
   ========================================================= */

/*
Scenario:
- Generate a range of years
- Skip (exclude) a specific year
- Useful for reports, logs, timelines
*/

// Function definition
function generateYears(startYear, endYear, excludedYear) {

  for (let year = startYear; year <= endYear; year++) {

    // Skip the excluded year
    if (year === excludedYear) {
      continue;
    }

    console.log(year);
  }
}

// Function call
generateYears(2018, 2023, 2021);

/*
Expected console output:
2018
2019
2020
2022
2023
*/

/*
Explanation step-by-step:
1) The function receives three parameters:
   - startYear   → where the loop begins
   - endYear     → where the loop ends
   - excludedYear → year to skip

2) The for loop runs from startYear to endYear (inclusive)

3) When year === excludedYear:
   - continue is executed
   - current iteration is skipped
   - loop moves to the next year

4) All other years are printed

-----------------------------------------------------------
Why this is practical?
-----------------------------------------------------------
- Filtering data
- Ignoring invalid records
- Generating logs or reports
- Date and time-based operations
*/

/* =========================================================
   Key Concepts Summary
   =========================================================
✓ Functions can accept multiple parameters
✓ Arguments control function behavior
✓ if / else adds decision-making logic
✓ Loops inside functions allow repetition
✓ continue skips specific iterations
✓ One function = reusable, clean logic

===========================================================
END
===========================================================
*/
