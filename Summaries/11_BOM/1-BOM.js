/*
====================================================================
BOM (Browser Object Model)
COMPLETE • SINGLE-FILE • STRUCTURED REFERENCE
====================================================================

This file contains:
1) BOM Introduction & Window Object
2) Browser Dialogs (alert, confirm, prompt)
3) setTimeout() & clearTimeout()
4) setInterval() & clearInterval()
5) Practical + Real-world Examples

Notes:
- JavaScript-only file
- HTML structures are included as comments for reference
- Everything is written in ONE square (one file)
====================================================================
*/


/* ==================================================================
SECTION 1 — BOM INTRODUCTION & WINDOW OBJECT
================================================================== */

/*
WHAT IS BOM?
- BOM = Browser Object Model
- Represents the browser environment
- Not the HTML page itself
- Main object: window
*/

/*
WINDOW OBJECT
- Represents the browser window or tab
- Top-level object in the browser
*/

/*
WINDOW & DOCUMENT RELATIONSHIP
- document is a property of window
- document represents the DOM (HTML page)

Equivalent:
window.document
document
*/

/*
GLOBAL SCOPE
- Global variables & functions become properties of window
Examples:
window.console
window.document
window.alert
*/

/*
WINDOW CAPABILITIES
- Open / close windows
- Resize / move window
- Control URL (location)
- Timers (setTimeout, setInterval)
- Browser storage
- Dialogs (alert, confirm, prompt)
*/

/* PRACTICAL EXAMPLE — CHANGE PAGE TITLE */
window.document.title = "Hello JS";


/* ==================================================================
SECTION 2 — BROWSER DIALOGS (alert, confirm, prompt)
================================================================== */

/*
HTML STRUCTURE (REFERENCE ONLY)

<button id="start">Start Action</button>
*/

let startBtn = document.getElementById("start");

/* alert() — INFORMATION ONLY */
alert("Welcome To Our Website");

/* confirm() + prompt() WITH LOGIC */
if (startBtn) {
  startBtn.onclick = function () {

    let userChoice = confirm("Do You Want To Continue?");

    if (userChoice) {
      alert("You Chose To Continue");
    } else {
      alert("Action Was Cancelled");
    }

    let userName = prompt("Enter Your Name", "Guest");

    if (userName !== null && userName !== "") {
      console.log(`Welcome, ${userName}`);
    } else {
      console.log("No Name Provided");
    }

  };
}


/* ==================================================================
SECTION 3 — setTimeout() & clearTimeout()
================================================================== */

/*
HTML STRUCTURE (REFERENCE ONLY)

<button id="stop">Stop Timeout</button>
<button id="cancel">Cancel Message</button>
*/

/* EXAMPLE 1 — BASIC */
setTimeout(function () {
  console.log("Hello After 3 Seconds");
}, 3000);


/* EXAMPLE 2 — PARAMETERS + CANCELLATION */
function displayUser(name, age) {
  console.log(`User Name: ${name}`);
  console.log(`User Age: ${age}`);
}

let timeoutId = setTimeout(displayUser, 5000, "Hassan", 25);

let stopBtn = document.getElementById("stop");

if (stopBtn) {
  stopBtn.onclick = function () {
    clearTimeout(timeoutId);
    console.log("Timeout Stopped");
  };
}


/* EXAMPLE 3 — STRUCTURED ROLE MESSAGE */
function showMessage(name, role) {
  console.log(`Welcome ${name}`);
  console.log(`Your Role Is ${role}`);
}

let timerId = setTimeout(showMessage, 4000, "Ali", "Admin");

console.log("Timeout ID:", timerId);


/* EXAMPLE 4 — CANCEL BY USER */
let cancelBtn = document.getElementById("cancel");

if (cancelBtn) {
  cancelBtn.onclick = function () {
    clearTimeout(timerId);
    console.log("Timeout Was Cancelled By User");
  };
}


/* ==================================================================
SECTION 4 — setInterval() & clearInterval()
================================================================== */

/*
HTML STRUCTURE (REFERENCE ONLY)

<div>5</div>
*/

/* EXAMPLE 1 — BASIC INTERVAL */
setInterval(function () {
  console.log("Message Every Second");
}, 1000);


/* EXAMPLE 2 — NAMED FUNCTION */
function simpleMessage() {
  console.log("I Am Repeating");
}

setInterval(simpleMessage, 2000);


/* EXAMPLE 3 — PARAMETERS */
function userInfo(name, age) {
  console.log(`User Name: ${name}`);
  console.log(`User Age: ${age}`);
}

setInterval(userInfo, 3000, "Osama", 38);


/* EXAMPLE 4 — STORE INTERVAL ID */
function repeatedMsg() {
  console.log("This Message Can Be Stopped");
}

let intervalId = setInterval(repeatedMsg, 1000);

/* STOP INTERVAL */
clearInterval(intervalId);


/* EXAMPLE 5 — REAL COUNTDOWN */
let div = document.querySelector("div");

function countdown() {
  div.innerHTML -= 1;

  if (div.innerHTML === "0") {
    clearInterval(counter);
  }
}

let counter = setInterval(countdown, 1000);


/* ==================================================================
FINAL SUMMARY (MEMORIZE)
================================================================== */

/*
BOM:
- Controls browser environment

window:
- Top-level browser object

Dialogs:
- alert → info
- confirm → true / false
- prompt → string / null

setTimeout():
- Executes once after delay
- Can be cancelled

setInterval():
- Executes repeatedly
- Must be cleared manually or conditionally

CORE RULE:
Always store timer IDs
Always clear timers when finished
*/

/*
====================================================================
END OF SINGLE FILE
====================================================================
*/
