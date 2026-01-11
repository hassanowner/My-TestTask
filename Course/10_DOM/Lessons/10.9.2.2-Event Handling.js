/* 
==========================================================
JavaScript Event Handling – Study Guide
==========================================================

Topics Covered in Order:
1. DOM Event Handlers
2. Anonymous Functions as Event Handlers
3. Event Listeners Using addEventListener()
4. DOMContentLoaded vs load Events
5. Practical Example of Multiple Event Listeners

Each topic includes:
- Definition & functionality
- Basic code structure
- Simple and moderate examples
- Notes from practical experience
==========================================================
*/


/* 
==========================================================
1. DOM Event Handlers
==========================================================
Definition:
- Properties of HTML elements (e.g., onclick, onblur) 
  that trigger a function when an event occurs.
- Only one handler per event per element.

Basic Structure:
*/
function validateAge() {
    const ageInput = document.getElementById('age');
    if (ageInput.value < 0) {
        console.log('Age cannot be negative.');
    }
}

function initDOMHandler() {
    const ageElement = document.getElementById('age');
    ageElement.onblur = validateAge; // Assign function reference
}

window.onload = initDOMHandler; // Calls init when page loads

// Example 1 – Easy: Warn if age < 0 (above code)

// Example 2 – Moderate: Warn if age < 0 or > 120
function validateAgeRange() {
    const age = document.getElementById('age').value;
    if (age < 0 || age > 120) {
        console.log('Age must be between 0 and 120.');
    }
}

function initDOMHandlerModerate() {
    const ageElement = document.getElementById('age');
    ageElement.onblur = validateAgeRange;
}


/* 
==========================================================
2. Anonymous Functions as Event Handlers
==========================================================
Definition:
- Functions without a name assigned directly to an event.
- Can call multiple functions in one event handler.

Basic Structure:
*/
function checkAgeNotNegative() {
    const age = document.getElementById('age').value;
    if (age < 0) console.log('Age cannot be negative.');
}

function checkAgeIsNumber() {
    const age = document.getElementById('age').value;
    if (isNaN(age)) console.log('Age must be a number.');
}

function initAnonymousHandler() {
    const ageElement = document.getElementById('age');
    ageElement.onblur = function() {
        checkAgeNotNegative();
        checkAgeIsNumber();
    };
}

// Example 1 – Easy: Two simple checks (above)

// Example 2 – Moderate: Add range check
function checkAgeRange() {
    const age = document.getElementById('age').value;
    if (age < 0 || age > 120) console.log('Age must be between 0 and 120.');
}

function initAnonymousHandlerModerate() {
    const ageElement = document.getElementById('age');
    ageElement.onblur = function() {
        checkAgeNotNegative();
        checkAgeIsNumber();
        checkAgeRange();
    };
}


/* 
==========================================================
3. Event Listeners Using addEventListener()
==========================================================
Definition:
- Modern standard for events
- Can attach multiple functions to the same event
- Supports event flow control (capturing & bubbling)

Basic Structure:
*/
function clearMessage() {
    document.getElementById('output').textContent = '';
}

function initEventListeners() {
    const ageElement = document.getElementById('age');
    ageElement.addEventListener('blur', clearMessage);
    ageElement.addEventListener('blur', checkAgeNotNegative);
    ageElement.addEventListener('blur', checkAgeIsNumber);
}

// Example 1 – Easy: Clear message + two checks

// Example 2 – Moderate: Add age range check
function initEventListenersModerate() {
    const ageElement = document.getElementById('age');
    ageElement.addEventListener('blur', clearMessage);
    ageElement.addEventListener('blur', checkAgeNotNegative);
    ageElement.addEventListener('blur', checkAgeIsNumber);
    ageElement.addEventListener('blur', checkAgeRange);
}


/* 
==========================================================
4. DOMContentLoaded vs load Events
==========================================================
Definition:
- DOMContentLoaded: triggers when HTML is fully parsed
- load: triggers when all resources (images, CSS) are fully loaded

Basic Usage:
*/
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and ready');
});

window.addEventListener('load', function() {
    console.log('All resources fully loaded');
});

// Practical Experience:
// Use DOMContentLoaded for initializing buttons & inputs
// Use load only for heavy resources like images, videos


/* 
==========================================================
5. Practical Example: Multiple Event Listeners on Form Input
==========================================================
Scenario:
- Validate an "age" input field:
  1. Must be a number
  2. Must not be negative
  3. Clear previous messages

Code:
*/
function practicalInit() {
    const ageInput = document.getElementById('age');
    ageInput.addEventListener('blur', clearMessage);
    ageInput.addEventListener('blur', checkAgeNotNegative);
    ageInput.addEventListener('blur', checkAgeIsNumber);
    ageInput.addEventListener('blur', checkAgeRange);
}

// Outcome:
// - Messages cleared first
// - Checks applied sequentially
// - Multiple validations coexist without conflict


/* 
==========================================================
Summary:
==========================================================
1. DOM Event Handlers – simple, limited (1 handler per event)
2. Anonymous Functions – flexible for multiple actions, but less reusable
3. Event Listeners – modern, allow multiple functions per event, modular
4. DOMContentLoaded vs load – choose based on resources needed
5. Practical Implementation – modular form validation using event listeners
==========================================================
*/

/* End of Study File */
