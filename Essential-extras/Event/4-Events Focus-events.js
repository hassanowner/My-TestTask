/*
========================================================
Focus Events in JavaScript — Complete Systematic Guide
======================================================== */

// ## Introduction ##

- Focus events are triggered when elements on a web page gain or lose focus.
Focus usually occurs when the user navigates using the keyboard (for
example, with the Tab key), clicks inside an input field, or interacts
with form controls.

- Focus events are especially important in forms, accessibility, and
user-experience logic such as input validation and visual feedback.
All focus-related events are represented by the FocusEvent object type.

In this guide, focus events are explained in a clear sequence, starting
with basic focus and blur events and then moving to their bubbling
variants.

Main Topics List (in learning order):

1. Basic Focus Events
   - focus
   - blur

2. Bubbling Focus Events
   - focusin
   - focusout


/*
========================================================
1. Basic Focus Events
========================================================*/

These events detect when an element gains or loses focus.
They do NOT bubble.

----------------------------------------
1.1 focus
----------------------------------------

What It Is:
The focus event is triggered when an element receives focus.

Function:
Used to detect when a user starts interacting with an element.

Features:
- Does not bubble
- Commonly used with input fields
- Triggered by click or keyboard navigation (Tab)

How It Works:
When the element becomes active, the browser fires the focus event.

Basic Code Structure:
element.addEventListener("focus", function(event) {
    // action
});

Example:
Detecting focus on an input field

const input = document.getElementById("username");

input.addEventListener("focus", function () {
    console.log("Input is focused");
});


----------------------------------------
1.2 blur
----------------------------------------

What It Is:
The blur event is triggered when an element loses focus.

Function:
Often used for validation or cleanup actions.

Features:
- Does not bubble
- Triggered when user leaves the element
- Commonly used in form validation

How It Works:
When focus moves away from the element, the blur event fires.

Example:
Detecting loss of focus

input.addEventListener("blur", function () {
    console.log("Input lost focus");
});


/*
========================================================
2. Bubbling Focus Events
========================================================*/

These events are similar to focus and blur but they DO bubble,
which makes them useful for event delegation.

----------------------------------------
2.1 focusin
----------------------------------------

What It Is:
The focusin event is triggered when an element receives focus.

Function:
Used when focus events need to be captured on parent elements.

Features:
- Bubbles up through the DOM
- Useful for handling focus on multiple inputs
- Same timing as focus

How It Works:
The event fires on the focused element and bubbles to parents.

Example:
Detecting focus using bubbling

const form = document.getElementById("form");

form.addEventListener("focusin", function () {
    console.log("An element inside the form gained focus");
});


----------------------------------------
2.2 focusout
----------------------------------------

What It Is:
The focusout event is triggered when an element loses focus.

Function:
Used to track focus leaving elements with bubbling support.

Features:
- Bubbles up through the DOM
- Cleaner alternative to blur in delegation
- Works well with dynamic forms

How It Works:
The event fires when focus leaves an element and bubbles upward.

Example:
Detecting focus loss using bubbling

form.addEventListener("focusout", function () {
    console.log("An element inside the form lost focus");
});


/*
========================================================
Summary
========================================================

Focus events allow JavaScript to track when elements become active or
inactive. The focus and blur events are direct and non-bubbling, while
focusin and focusout provide bubbling behavior that is useful for event
delegation. These events play a critical role in form validation,
accessibility, and improving user interaction feedback.

======================================================== */
