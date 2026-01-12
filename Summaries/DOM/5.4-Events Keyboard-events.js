/*
========================================================
Form Events in JavaScript — Complete Systematic Guide
======================================================== */

// ## Introduction ##

- Form events are triggered when users interact with form elements such as
input fields, textareas, dropdown lists, checkboxes, radio buttons, and
forms themselves. These events allow JavaScript to react to user input,
validate data, control form submission, and manage form state.

- Unlike mouse and keyboard events, form events do not have their own
special event object type. Instead, they all use the generic Event
object type.

- In this guide, form events are explained in a logical order, starting
with value changes inside form fields and ending with form submission
and reset actions.

Main Topics List (in learning order):

1. Value Change Events
   - input
   - change

2. Form Action Events
   - submit
   - reset


/*
========================================================
1. Value Change Events
======================================================== */

These events are triggered when the value of form elements changes.

----------------------------------------
1.1 input
----------------------------------------

What It Is:
The input event is triggered whenever the value of an <input>,
<textarea>, or contenteditable element changes.

Function:
Used to react instantly to user input while typing.

Features:
- Fires on every change (each keystroke)
- Works with text inputs and textareas
- Ideal for live validation and previews

How It Works:
Each time the user types, deletes, or pastes text, the event is fired.

Basic Code Structure:
element.addEventListener("input", function(event) {
    // action
});

Example:
Live text detection

const textInput = document.getElementById("text");

textInput.addEventListener("input", function () {
    console.log("Input value changed");
});


----------------------------------------
1.2 change
----------------------------------------

What It Is:
The change event is triggered when the value of a form element
is changed and then confirmed.

Function:
Used to detect finalized changes in form controls.

Features:
- Fires after losing focus (for text fields)
- Fires immediately for checkboxes, radios, and selects
- Less frequent than input

How It Works:
The browser waits until the user finishes the change and confirms it.

Example:
Detecting dropdown change

const selectBox = document.getElementById("select");

selectBox.addEventListener("change", function () {
    console.log("Selection changed");
});


/*
========================================================
2. Form Action Events
======================================================== */

These events are related to the form itself rather than individual
form controls.

----------------------------------------
2.1 submit
----------------------------------------

What It Is:
The submit event is triggered when a form is submitted.

Function:
Used to validate form data or prevent submission.

Features:
- Triggered by submit button or Enter key
- Can be prevented using preventDefault()
- Commonly used in form validation

How It Works:
Before the form is sent to the server, the submit event is fired.

Basic Code Structure:
form.addEventListener("submit", function(event) {
    event.preventDefault();
});

Example:
Preventing form submission

const form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Form submitted");
});


----------------------------------------
2.2 reset
----------------------------------------

What It Is:
The reset event is triggered when a form is reset.

Function:
Used to detect when form values are cleared.

Features:
- Triggered by reset button
- Returns fields to default values
- Can also be prevented

How It Works:
When the reset button is clicked, the browser fires the reset event.

Example:
Detecting form reset

form.addEventListener("reset", function () {
    console.log("Form reset");
});


/*
========================================================
Summary
========================================================

Form events allow JavaScript to track user interaction with form elements
and control how data is processed. The input and change events handle
value modifications, while submit and reset manage form-level actions.
Understanding these events is essential for creating reliable,
interactive, and user-friendly forms.

======================================================== */
