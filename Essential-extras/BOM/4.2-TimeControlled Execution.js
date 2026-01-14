/*
========================================================
TIME-CONTROLLED EXECUTION OF FUNCTIONS (WINDOW METHODS)
========================================================

1) TOPICS THAT WILL BE STUDIED
-----------------------------
This topic explains how JavaScript can execute functions:
- After a delay (one-time execution)
- Repeatedly at fixed time intervals

The window object provides helper methods for this purpose.
The methods covered are:
1. setTimeout()
2. clearTimeout()
3. setInterval()
4. clearInterval()

--------------------------------------------------------


2) FEATURES EXPLANATION
----------------------

• FEATURE 1: setTimeout()
------------------------
What it does:
Executes a function once after a specified delay.

Function:
Allows delayed execution of code.

Explanation:
The first argument is the function to execute.
The second argument is the delay time in milliseconds.
After the delay expires, the function runs one time only.
The method returns an ID that can be used to cancel the execution.

Syntax: */
setTimeout(function, delay);

// Examples:
window.setTimeout(function () {
  console.log('Hello World');
}, 5000);

window.setTimeout(() => {
  console.log('Hello World');
}, 5000);

function printMessage() {
  console.log('Hello World');
}
window.setTimeout(printMessage, 5000);

/* Meaning:
After 5,000 milliseconds (5 seconds), "Hello World" is printed once.

--------------------------------------------------------

• FEATURE 2: clearTimeout()
--------------------------
What it does:
Cancels a scheduled setTimeout() execution.

Function:
Prevents the delayed function from running.

Explanation:
The ID returned by setTimeout() must be passed to clearTimeout().

Syntax: */
const timeoutId = setTimeout(function, delay);
clearTimeout(timeoutId);

// Example:
const timeoutId = window.setTimeout(() => {
  console.log('This will not run');
}, 5000);

window.clearTimeout(timeoutId);

/* Meaning:
The scheduled function is canceled before execution.

--------------------------------------------------------

• FEATURE 3: setInterval()
-------------------------
What it does:
Executes a function repeatedly at fixed time intervals.

Function:
Used for continuous or periodic execution.

Explanation:
The first argument is the function to execute.
The second argument is the interval time in milliseconds.
The function keeps executing until stopped.

Syntax: */
setInterval(function, interval);

// Examples:
window.setInterval(function () {
  console.log('Hello World');
}, 5000);

window.setInterval(() => {
  console.log('Hello World');
}, 5000);

function printMessage() {
  console.log('Hello World');
}
window.setInterval(printMessage, 5000);

/* Meaning:
"Hello World" is printed every 5 seconds continuously.

--------------------------------------------------------

• FEATURE 4: clearInterval()
---------------------------
What it does:
Stops a function that is running repeatedly via setInterval().

Function:
Cancels ongoing interval execution.

Explanation:
The ID returned by setInterval() is required to stop the execution.

Syntax: */
const intervalId = setInterval(function, interval);
clearInterval(intervalId);

// Example:
const intervalId = window.setInterval(() => {
  console.log('Running...');
}, 5000);

window.clearInterval(intervalId);

/* Meaning:
The repeated execution stops.

--------------------------------------------------------


3) DIFFERENCE BETWEEN setTimeout() AND setInterval()
--------------------------------------------------- */
setTimeout()  → runs once after a delay  
setInterval() → runs repeatedly at fixed intervals  

/* --------------------------------------------------------


4) SUMMARY
---------
setTimeout()   → executes a function once after a delay  
clearTimeout() → cancels delayed execution  
setInterval()  → executes a function repeatedly  
clearInterval()→ cancels repeated execution  

These methods are commonly used for:
- Animations
- Timers and clocks
- Delayed actions
- Repeating tasks

========================================================
END OF FILE
======================================================== */
