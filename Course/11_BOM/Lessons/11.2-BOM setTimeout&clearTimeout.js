/*
====================================================================
TOPIC: BOM (Browser Object Model)
setTimeout() and clearTimeout()
====================================================================

GENERAL OVERVIEW
- This lesson introduces time-based code execution in JavaScript.
- We will learn how to delay code execution and how to cancel it.

WHAT WILL BE STUDIED
- Basic usage of setTimeout()
- Understanding delay in milliseconds
- Cancelling delayed execution with clearTimeout()
- Difference between beginner and practical examples
====================================================================
*/


/*
====================================================================
HTML STRUCTURE (FOR REFERENCE ONLY)
====================================================================

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Timeout Lesson</title>
</head>

<body>
  <button id="stop">Stop Timeout</button>
  <button id="cancel">Cancel Message</button>
</body>
</html>

NOTE:
- HTML is commented because this is a JavaScript file
====================================================================
*/


/*
====================================================================
EXAMPLE 1 — BEGINNER LEVEL (VERY BASIC)
====================================================================
- Simplest possible use of setTimeout()
- No parameters
- No user interaction
- Beginner friendly
====================================================================
*/

setTimeout(function () {
  console.log("Hello After 3 Seconds");
}, 3000);

/*
RESULT:
- Message appears after 3 seconds
*/


/*
====================================================================
EXAMPLE 2 — INTERMEDIATE PRACTICE
====================================================================
- Named function
- Passing parameters
- Storing timeout identifier
- Cancelling with clearTimeout()
====================================================================
*/

function displayUser(name, age) {
  console.log(`User Name: ${name}`);
  console.log(`User Age: ${age}`);
}

let timeoutId = setTimeout(
  displayUser,
  5000,
  "Hassan",
  25
);

let stopBtn = document.getElementById("stop");

if (stopBtn) {
  stopBtn.onclick = function () {
    clearTimeout(timeoutId);
    console.log("Timeout Stopped");
  };
}


/*
====================================================================
ADDITIONAL EXAMPLES — ADVANCED & DETAILED (NEW)
====================================================================
*/


/*
====================================================================
TOPIC RECAP & EXTENDED OVERVIEW
====================================================================
- Focus on time-based execution using BOM
- Main functions:
  1) setTimeout()
  2) clearTimeout()
- Useful for:
  - Notifications
  - Delayed actions
  - User interaction timing
====================================================================
*/


/*
====================================================================
EXAMPLE 3 — DETAILED STRUCTURE WITH ROLE LOGIC
====================================================================
- Shows structured explanation
- Uses meaningful variables
- Educational clarity
====================================================================
*/

/*
Function definition
- Receives user data
- Executed after delay
*/

function showMessage(name, role) {
  console.log(`Welcome ${name}`);
  console.log(`Your Role Is ${role}`);
}

/*
Schedule the function
- Delay: 4 seconds
- Parameters passed directly
*/

let timerId = setTimeout(
  showMessage,
  4000,
  "Ali",
  "Admin"
);

/*
Timeout identifier explanation
*/

console.log("Timeout ID:", timerId);


/*
====================================================================
EXAMPLE 4 — CANCEL TIMEOUT USING BUTTON
====================================================================
- Real-world scenario
- User control
- Cancellation before execution
====================================================================
*/

let cancelBtn = document.getElementById("cancel");

if (cancelBtn) {
  cancelBtn.onclick = function () {
    clearTimeout(timerId);
    console.log("Timeout Was Cancelled By User");
  };
}


/*
====================================================================
FINAL BEHAVIOR SUMMARY
====================================================================
- Example 1:
  → Executes automatically after delay

- Example 2:
  → Executes unless user cancels

- Example 3:
  → Demonstrates data injection with structured output

- Example 4:
  → Shows full control over delayed execution
====================================================================
*/
