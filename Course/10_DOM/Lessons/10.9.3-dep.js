JavaScript Event Handling Guide

1. Passing Arguments to Event Listeners

Purpose: To pass custom data to event handler functions.

How it works: Wrap your function call in another function.

Example 1: Button with custom message

```javascript
function showMessage(message) {
  alert(message);
}

const button = document.getElementById('myButton');

// Passing argument using wrapper function
button.addEventListener('click', function() {
  showMessage('Button was clicked!');
});
```

Example 2: Math operation with parameter

```javascript
function calculateSquare(number) {
  console.log(number * number);
}

const btn = document.getElementById('calcBtn');

// Passing dynamic value
btn.addEventListener('click', function() {
  const inputValue = parseInt(document.getElementById('numInput').value);
  calculateSquare(inputValue);
});
```

2. Arrow Functions as Event Listeners

Purpose: Concise syntax and lexical this binding.

Example 1: Simple validation

```javascript
// Arrow function syntax
document.getElementById('email').addEventListener('blur', () => {
  const email = document.getElementById('email').value;
  console.log(`Email entered: ${email}`);
});
```

Example 2: Counter with arrow function

```javascript
let count = 0;
const counterBtn = document.getElementById('counter');

counterBtn.addEventListener('click', () => {
  count++;
  console.log(`Clicked ${count} times`);
});
```

3. Removing Event Listeners

Purpose: Dynamically stop event handling.

Key requirement: Must reference the exact same function.

Example 1: Toggle click handler

```javascript
const button = document.getElementById('toggleBtn');

function handleClick() {
  console.log('Button clicked');
}

// Add listener
button.addEventListener('click', handleClick);

// Remove listener (same function reference)
button.removeEventListener('click', handleClick);
```

Example 2: Conditional removal based on user action

```javascript
const inputField = document.getElementById('textInput');

function validateInput() {
  console.log('Validating...');
}

// Add validation on focus
inputField.addEventListener('focus', validateInput);

// Remove validation when checkbox is unchecked
document.getElementById('disableValidation').addEventListener('change', (e) => {
  if (e.target.checked) {
    inputField.removeEventListener('focus', validateInput);
  } else {
    inputField.addEventListener('focus', validateInput);
  }
});
```

Combined Example: All Three Concepts

```javascript
// Function that needs arguments
function logEvent(eventType, customMessage) {
  console.log(`${eventType}: ${customMessage}`);
}

// Arrow function as wrapper to pass arguments
const button = document.getElementById('actionBtn');
const handler = () => logEvent('click', 'User action');

// Add event listener
button.addEventListener('click', handler);

// Remove when needed
document.getElementById('removeHandler').addEventListener('click', () => {
  button.removeEventListener('click', handler);
  console.log('Handler removed');
});
```

Key Takeaways

1. Passing Arguments: Use wrapper functions or bind()
2. Arrow Functions: Shorter syntax, but be mindful of this
3. Removing Listeners: Keep function references to remove them later
4. Best Practice: Named functions are easier to remove than anonymous ones

These techniques give you precise control over when and how events are handled in your applications.
