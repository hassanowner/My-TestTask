/*
====================================================================
TOPIC: BOM (Browser Object Model)
setInterval() and clearInterval()
====================================================================

GENERAL OVERVIEW
- This lesson explains repeated time-based execution in JavaScript.
- Unlike setTimeout(), setInterval() runs code repeatedly.
- We will also learn how to stop repeated execution using clearInterval().

WHAT WILL BE STUDIED
- What setInterval() is and how it works
- Difference between setTimeout() and setInterval()
- Passing parameters to setInterval()
- Storing interval identifiers
- Stopping execution using clearInterval()
- Real countdown example
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
  <title>setInterval Lesson</title>
</head>

<body>
  <div>5</div>
</body>
</html>

NOTE:
- HTML is commented because this is a JavaScript file.
- The div element is used in the countdown example.
====================================================================
*/


/*
====================================================================
INTRODUCTION TO setInterval()
====================================================================
- setInterval() is part of the Browser Object Model (BOM)
- It executes a function repeatedly
- Code runs every specified time interval
- Time is measured in milliseconds
  (1000 ms = 1 second)

SYNTAX:
setInterval(function, delay, optionalParams)
====================================================================
*/


/*
====================================================================
EXAMPLE 1 — BEGINNER LEVEL (VERY BASIC)
====================================================================
- Simplest possible setInterval example
- No parameters
- Runs forever until stopped manually
====================================================================
*/

setInterval(function () {
  console.log("Message Every Second");
}, 1000);

/*
RESULT:
- Console logs the message every 1 second
*/


/*
====================================================================
EXAMPLE 2 — USING A NAMED FUNCTION
====================================================================
- Better readability
- Function can be reused
====================================================================
*/

function simpleMessage() {
  console.log("I Am Repeating");
}

setInterval(simpleMessage, 2000);

/*
RESULT:
- Message appears every 2 seconds
*/


/*
====================================================================
EXAMPLE 3 — PASSING PARAMETERS TO setInterval()
====================================================================
- Extra parameters are passed after the delay
- Parameters are injected into the function
====================================================================
*/

function userInfo(name, age) {
  console.log(`User Name: ${name}`);
  console.log(`User Age: ${age}`);
}

setInterval(
  userInfo,
  3000,
  "Osama",
  38
);

/*
RESULT:
- User data is printed every 3 seconds
*/


/*
====================================================================
EXAMPLE 4 — STORING INTERVAL IDENTIFIER
====================================================================
- setInterval() returns an identifier
- This identifier is required to stop the interval
====================================================================
*/

function repeatedMsg() {
  console.log("This Message Can Be Stopped");
}

let intervalId = setInterval(repeatedMsg, 1000);

/*
intervalId:
- Represents the running interval task
*/


/*
====================================================================
INTRODUCTION TO clearInterval()
====================================================================
- clearInterval() stops repeated execution
- Requires the interval identifier
- Without it, the interval cannot be stopped
====================================================================
*/

clearInterval(intervalId);

/*
RESULT:
- The interval stops immediately
*/


/*
====================================================================
EXAMPLE 5 — PRACTICAL COUNTDOWN (REAL USE CASE)
====================================================================
- Uses DOM element
- Updates content every second
- Stops automatically at zero
====================================================================
*/

let div = document.querySelector("div");

/*
Countdown function
- Decreases number every second
- Stops at zero
*/

function countdown() {
  div.innerHTML -= 1;

  if (div.innerHTML === "0") {
    clearInterval(counter);
  }
}

/*
Start the interval
*/

let counter = setInterval(countdown, 1000);

/*
RESULT:
- Number decreases every second
- Stops automatically when it reaches 0
*/


/*
====================================================================
PROPERTIES & BEHAVIOR SUMMARY
====================================================================
setInterval():
- Repeats execution
- Runs until stopped
- Accepts parameters
- Returns an identifier

clearInterval():
- Stops repeated execution
- Requires the interval identifier

BEST PRACTICES:
- Always store interval IDs
- Always clear intervals when no longer needed
====================================================================
*/


/*
====================================================================
FINAL COMPARISON
====================================================================
setTimeout():
- Executes ONCE after delay

setInterval():
- Executes repeatedly every delay
====================================================================
*/
