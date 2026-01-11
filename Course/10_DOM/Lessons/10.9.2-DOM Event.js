/*
==========================================================
Introduction to JavaScript Event Handling
==========================================================

This file is a complete educational guide that explains how
JavaScript handles events in the browser.

The explanation progresses from simple to advanced techniques,
with clear concepts and easy examples.

Main Topics:
1. DOM Event Handlers
2. Anonymous Functions in Event Handling
3. Event Listeners using addEventListener()

==========================================================
*/



/* =========================================================
1. DOM EVENT HANDLERS
=========================================================

Core Idea:
DOM Event Handlers are element properties that allow you to
assign ONE function to respond to a specific event.

The function is executed automatically when the event occurs.

Example properties:
- onclick
- onblur
- oninput
- onchange
*/

/*
What Are DOM Event Handlers?

They are built-in properties of HTML elements.
You assign a function to these properties using JavaScript.
*/




/* -------------------------
Basic Example: Button Click
-------------------------- */

// Select the element
const button = document.getElementById("myButton");

// Define the function
function showMessage() {
    console.log("Button clicked");
    document.getElementById("message").textContent = "Clicked!";
}

// Assign the function (NO parentheses)
button.onclick = showMessage;



/*
HTML structure used with this example:

<button id="myButton">Click</button>
<div id="message"></div>
*/



/* -------------------------
Example: Input Validation
-------------------------- */

const emailInput = document.getElementById("email");

function checkEmail() {
    const value = emailInput.value;

    if (!value.includes("@")) {
        emailInput.style.borderColor = "red";
        console.log("Invalid email");
    } else {
        emailInput.style.borderColor = "green";
    }
}

// Trigger when input loses focus
emailInput.onblur = checkEmail;



/*
Important Rule:
Always assign the function name WITHOUT ().

Correct:
element.onclick = myFunction;

Wrong:
element.onclick = myFunction();
*/



/* =========================================================
2. ANONYMOUS FUNCTIONS
=========================================================

Core Idea:
Anonymous functions are functions WITHOUT names.
They are written directly where they are used.

They allow multiple actions inside a single event handler.
*/



/*
Why Use Anonymous Functions?

- No need to define a separate function
- Useful for small or one-time logic
- Can call multiple functions in one event
*/



/* -------------------------
Simple Anonymous Function
-------------------------- */

button.onclick = function () {
    console.log("Anonymous function executed");
};



/* -------------------------
Calling Multiple Functions
-------------------------- */

const ageInput = document.getElementById("age");

ageInput.onblur = function () {
    checkAge();
    checkNumber();
};

function checkAge() {
    console.log("Checking age");
}

function checkNumber() {
    console.log("Checking number");
}



/* -------------------------
Accessing Event Information
-------------------------- */

const link = document.getElementById("myLink");

link.onclick = function (event) {
    event.preventDefault(); // Stop default behavior
    console.log("Clicked element:", this);
    console.log("Event type:", event.type);
};



/* -------------------------
Multiple Validations Example
-------------------------- */

const usernameInput = document.getElementById("username");

usernameInput.onblur = function () {
    const value = this.value;

    if (value.length < 3) {
        showError("Too short");
    } else {
        clearError();
    }
};

function showError(msg) {
    console.log("Error:", msg);
}

function clearError() {
    console.log("No errors");
}




/* =========================================================
3. EVENT LISTENERS (addEventListener)
=========================================================

Core Idea:
addEventListener() allows you to attach MULTIPLE functions
to the SAME event on the SAME element.

This is the modern and recommended approach.
*/

/*
Why addEventListener?

- Multiple listeners allowed
- Better control over event flow
- Can remove listeners
- Cleaner and scalable
*/


/* -------------------------
Basic Usage
-------------------------- */

function handleClick() {
    console.log("Button clicked using addEventListener");
}

button.addEventListener("click", handleClick);


/* -------------------------
Multiple Listeners
-------------------------- */

const searchInput = document.getElementById("search");

searchInput.addEventListener("focus", function () {
    console.log("Input focused");
});

searchInput.addEventListener("blur", function () {
    console.log("Input blurred");
});

searchInput.addEventListener("input", function () {
    console.log("Typing:", this.value);
});



/* -------------------------
Event Flow (Bubbling)
-------------------------- */

const container = document.getElementById("container");
const innerButton = document.getElementById("innerButton");

container.addEventListener("click", function () {
    console.log("Container clicked");
});

innerButton.addEventListener("click", function (event) {
    console.log("Button clicked");
    // event.stopPropagation(); // Stops bubbling
});



/* -------------------------
Removing Event Listeners
-------------------------- */

function onceClick() {
    console.log("Clicked once");
    button.removeEventListener("click", onceClick);
}

button.addEventListener("click", onceClick);



/* =========================================================
DOCUMENT LOADING EVENTS
========================================================= */

/*
DOMContentLoaded:
Runs when the HTML is ready (recommended)
*/

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM is ready");
});

/*
load:
Runs after ALL resources are loaded
*/

window.addEventListener("load", function () {
    console.log("Page fully loaded");
});



/* =========================================================
SUMMARY
=========================================================

1. DOM Event Handlers
- Simple
- One function per event
- Limited

2. Anonymous Functions
- Flexible
- Useful for small logic
- Hard to manage when large

3. addEventListener()
- Modern standard
- Multiple listeners
- Best for real applications

Golden Rule:
Use addEventListener() in modern JavaScript projects.

==========================================================
*/
