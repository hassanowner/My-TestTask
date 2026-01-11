/*
==========================================================
JavaScript Event Handling & Form Validation 
==========================================================

This guide covers key concepts in client-side form validation using JavaScript.
It includes HTML event handlers, validation concepts, HTML5 native validation, 
JavaScript event handlers, and event trigger adaptation.

Each section has explanations and practical code examples.
==========================================================
*/


/* =========================================================
1. HTML Event Handlers

What Are HTML Event Handlers?

HTML event handlers are JavaScript functions that respond to user interactions or browser events on HTML elements.
They are defined directly in HTML element attributes using the on[event] pattern.

Function and Purpose

They make web pages interactive by connecting static HTML elements with dynamic JavaScript functionality.
Common uses include input validation, button clicks, and updating UI elements.

// Example: Name validation

<input type="text" onblur="validateName()">
<div id="nameError"></div>
*/
function validateName() {
  const name = event.target.value;
  const error = document.getElementById('nameError');
  error.textContent = name.length < 2 ? "Name too short" : "";
  console.log("Name:", name);
}

/*
Example: Button click counter
*/
let count = 0;
function incrementCounter() {
  count++;
  document.getElementById('counter').textContent = count;
  console.log("Clicked:", count);
}



/* =========================================================
2. Form Validation Concepts

What Is Form Validation?

Form validation ensures that user input meets specific criteria before processing or storing data.
It improves data integrity, user experience, and security.

Client-Side vs Server-Side

Client-side validation runs in the browser using JavaScript for immediate feedback and reduced server load.
Server-side validation occurs on the server to enforce security and business rules. 
Both are necessary: client-side for UX, server-side for security.

Example: Email validation
*/
function validateEmail(email) {
  return email.includes('@') && email.includes('.');
}



/* =========================================================
3. HTML5 Native Validation

What Is HTML5 Native Validation?

HTML5 provides built-in validation through input attributes like required, type, min, max, pattern, and maxlength.
It allows basic validation without custom JavaScript.

Function and Purpose

It simplifies simple validations like ensuring a number falls within a range, or an email is properly formatted.
However, it is limited and cannot handle complex rules or custom messages consistently across browsers.

// Example:

<input type="number" id="age" min="0" max="120" required>
<input type="email" id="email" required>
<input type="text" id="zipcode" pattern="[0-9]{5}" required>
*/



/* =========================================================
4. JavaScript Event Handler Implementation

What Is JS Event Handler Implementation?

This refers to creating, attaching, and executing JavaScript functions that respond to events for custom validation.

Function and Purpose

It allows flexible, dynamic validation logic beyond HTML5 capabilities.
You can provide immediate feedback, update the DOM, and handle complex rules.

Example: Age validation
*/
function checkAgeNotNegative() {
  const age = document.getElementById('age').value;
  const output = document.getElementById('output');
  output.textContent = age < 0 ? 'Age cannot be negative.' : '';
  console.log("Age:", age);
}

/*
- Trigger: blur, click, or other events
- Dynamic feedback shown in output element
*/




/* =========================================================
5. Event Trigger Adaptation

What Is Event Trigger Adaptation?

It is the process of changing which events trigger validation to improve UX or performance.

Function and Purpose

You can choose between events like blur, change, input, click, or submit depending on how immediate or intrusive validation should be.

Example: Blur vs Click

<input id="age" type="number" onblur="checkAgeNotNegative()">
<input type="submit" onclick="checkAgeNotNegative()">

Considerations:
- blur: immediate feedback after leaving the field
- click/submit: delayed feedback when user initiates
- input: real-time, may impact performance
- UX: Avoid too frequent validation that annoys users
==========================================================
*/


/* =========================================================
Key Takeaways

1. HTML Event Handlers: Quick, simple, limited scalability
2. Form Validation: Client-side for UX, Server-side for security
3. HTML5 Native Validation: Easy for basics, limited for complex rules
4. JS Event Handlers: Full control, dynamic feedback
5. Event Trigger Adaptation: Choose appropriate events for best UX
==========================================================
*/
