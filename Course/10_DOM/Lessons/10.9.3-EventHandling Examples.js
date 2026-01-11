/*
==========================================================
JavaScript Event Handling Guide – Advanced Techniques
==========================================================
This file covers three key topics:

1. Passing Arguments to Event Listeners
2. Arrow Functions as Event Listeners
3. Removing Event Listeners

All examples use console.log for output instead of alerts.
==========================================================
*/


/* =========================================================
1. Passing Arguments to Event Listeners
---------------------------------------------------------
Purpose:
- Pass custom data to event handler functions.

How it works:
- Wrap your function call inside another function.
- Keeps logic decoupled from DOM elements.
==========================================================
*/

// Example 1: Button with custom message
function showMessage(message) {
  console.log(message);
}

const button = document.getElementById('myButton');

// Pass argument using wrapper function
button.addEventListener('click', function() {
  showMessage('Button was clicked!');
});

// Example 2: Math operation with parameter
function calculateSquare(number) {
  console.log('Square:', number * number);
}

const btn = document.getElementById('calcBtn');

btn.addEventListener('click', function() {
  const inputValue = parseInt(document.getElementById('numInput').value);
  calculateSquare(inputValue);
});


/* =========================================================
2. Arrow Functions as Event Listeners
---------------------------------------------------------
Purpose:
- Concise syntax
- Lexical this binding
==========================================================
*/

// Example 1: Simple input validation
document.getElementById('email').addEventListener('blur', () => {
  const email = document.getElementById('email').value;
  console.log(`Email entered: ${email}`);
});

// Example 2: Counter using arrow function
let count = 0;
const counterBtn = document.getElementById('counter');

counterBtn.addEventListener('click', () => {
  count++;
  console.log(`Clicked ${count} times`);
});


/* =========================================================
3. Removing Event Listeners
---------------------------------------------------------
Purpose:
- Dynamically stop event handling
- Must reference the same function used when adding
==========================================================
*/

// Example 1: Toggle click handler
const toggleButton = document.getElementById('toggleBtn');

function handleClick() {
  console.log('Button clicked');
}

// Add listener
toggleButton.addEventListener('click', handleClick);

// Remove listener later
toggleButton.removeEventListener('click', handleClick);

// Example 2: Conditional removal based on user action
const inputField = document.getElementById('textInput');

function validateInput() {
  console.log('Validating...');
}

// Add validation on focus
inputField.addEventListener('focus', validateInput);

// Toggle validation with checkbox
document.getElementById('disableValidation').addEventListener('change', (e) => {
  if (e.target.checked) {
    inputField.removeEventListener('focus', validateInput);
    console.log('Validation disabled');
  } else {
    inputField.addEventListener('focus', validateInput);
    console.log('Validation enabled');
  }
});


/* =========================================================
Combined Example: All Three Concepts
---------------------------------------------------------
- Passing arguments
- Arrow function wrapper
- Removing event listener dynamically
==========================================================
*/

function logEvent(eventType, customMessage) {
  console.log(`${eventType}: ${customMessage}`);
}

const actionButton = document.getElementById('actionBtn');

// Arrow function as wrapper to pass arguments
const handler = () => logEvent('click', 'User action');

// Add event listener
actionButton.addEventListener('click', handler);

// Remove listener when needed
document.getElementById('removeHandler').addEventListener('click', () => {
  actionButton.removeEventListener('click', handler);
  console.log('Handler removed');
});


/* =========================================================
Key Takeaways:
1. Passing Arguments: Use wrapper functions or bind()
2. Arrow Functions: Shorter syntax, lexical this
3. Removing Listeners: Keep function references for removal
4. Best Practice: Named functions are easier to remove than anonymous ones
==========================================================
*/
