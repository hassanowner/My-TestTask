/*
Introduction

In this guide, we will study and discuss the .addEventListener() method in JavaScript in detail. This method is a core part of modern JavaScript event handling and allows developers to attach multiple event handlers to HTML elements in a flexible and organized way. We will cover the following main topics in order and sequence:

Main Topics:

1. What is .addEventListener() – Definition, purpose, and basic usage.
2. Key Features of .addEventListener() – Characteristics, benefits, and comparison with older event handling methods.
3. Basic Structure and Syntax – How to write .addEventListener() code with the correct parameters and structure.
4. Practical Examples of .addEventListener() – Three examples illustrating common use cases.
5. Event Object and Handling Multiple Events – How the event object works and attaching multiple events to a single element.

1. What is .addEventListener()

Definition:
The .addEventListener() method is a JavaScript function used to attach an event handler to an HTML element.
It allows you to specify the type of event to listen for (like a click, mouseover, or keypress) and the function to execute when that event occurs.

Function / Purpose:

Respond to user interactions dynamically.

Separate JavaScript logic from HTML markup for cleaner code.

Allow multiple event listeners on a single element without overwriting previous ones.


Features:

Can attach multiple handlers for the same event on one element.
Offers options like capture, once, and passive for advanced control.
Works for almost all standard DOM events.


How it works (basic idea): */

element.addEventListener(event, function, options);

element → The target HTML element.
event → A string representing the event type ("click", "mouseover", etc.).
function → The callback function executed when the event occurs.
options → Optional object to control event behavior (capture, once, passive).



  
/*
2. Key Features of .addEventListener()


1. Multiple Event Handlers: Unlike older methods (like onclick), .addEventListener() allows multiple functions to respond to the same event without overwriting each other.
2. Flexibility: Supports nearly all DOM events, including custom events.
3. Control Options:
*/
capture: true/false → Determines whether the event is captured during the capturing phase (true) or bubbling phase (false).
once: true → Executes the listener only once.
passive: true → Optimizes performance for events like scrolling.  /*

4. Standardization: Works consistently across modern browsers.

Basic Code Example: */

const button = document.querySelector("#myButton");

button.addEventListener("click", () => {
  console.log("Button clicked!");
}, { once: true });




/*
3. Basic Structure and Syntax

The structure of .addEventListener() always follows this pattern:

element.addEventListener(eventType, callbackFunction, options);

Breakdown: */

element → The target DOM element selected via getElementById, querySelector, etc.
eventType → The type of event as a string ("click", "keydown", "mouseenter", etc.).
callbackFunction → The function executed when the event occurs. This can be named or anonymous.
options → Optional parameters:
capture → Boolean, default is false.
once → Boolean, default is false.
passive → Boolean, default is false.



// Three Examples : 

// 1. Click Event

const btn = document.querySelector("#btn1");
btn.addEventListener("click", () => alert("Button clicked!"));

// 2. Mouseover Event

const box = document.querySelector("#box");
box.addEventListener("mouseover", () => box.style.backgroundColor = "yellow");

// 3. Keyboard Event

document.addEventListener("keydown", (e) => console.log(`Key pressed: ${e.key}`));


//4. Practical Examples of .addEventListener()

// Example 1: Changing Text on Click

const heading = document.querySelector("h1");
heading.addEventListener("click", () => {
  heading.textContent = "You clicked the heading!";
});

// Example 2: Hover Effect

const div = document.querySelector(".hoverDiv");
div.addEventListener("mouseenter", () => div.style.border = "2px solid red");
div.addEventListener("mouseleave", () => div.style.border = "none");

// Example 3: Form Input Logging

const input = document.querySelector("#nameInput");
input.addEventListener("input", (event) => console.log(`Input value: ${event.target.value}`));




/*
5. Event Object and Handling Multiple Events

Event Object:

Passed automatically to the callback function.

Provides detailed information about the event (like type, target, key, clientX, clientY).


Example of Using Event Object: */

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", (event) => {
  console.log(`Event type: ${event.type}, Target: ${event.target.id}`);
});

// Multiple Events on One Element:

const box2 = document.querySelector("#box2");
box2.addEventListener("mouseenter", () => console.log("Mouse entered"));
box2.addEventListener("mouseleave", () => console.log("Mouse left"));



/*
Summary

.addEventListener() is a powerful and flexible method for handling events in JavaScript. It allows developers to:

Attach multiple event handlers to a single element.

Use advanced options like once, capture, and passive.

Access the event object for detailed event information.


By separating JavaScript from HTML, .addEventListener() promotes cleaner,
more maintainable code and is the preferred modern approach for event handling in web development.
The examples above illustrate common use cases, from clicks and hovers to keyboard inputs.
*/
