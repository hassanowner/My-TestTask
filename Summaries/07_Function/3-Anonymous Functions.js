/*
====================================================================
JAVASCRIPT FUNCTIONS — ADVANCED MASTER FILE
Anonymous Functions • Callbacks • Nested Functions • Module Pattern
====================================================================

This file is meant to be read top → bottom.
Each section builds conceptually on the previous one.
====================================================================
*/


/* ==================================================================
SECTION 1 — ANONYMOUS FUNCTIONS (FOUNDATION)
================================================================== */

/*
An anonymous function:
- Has NO name
- Is stored in a variable or passed as an argument
- Is commonly used for callbacks, events, and timers
*/

// Basic anonymous function
let addNumbers = function (a, b) {
  return a + b;
};

console.log(addNumbers(5, 7)); // 12


// Simple example
let greet = function () {
  console.log("Hello World");
};

greet();


// Passing anonymous function as argument (callback)
function executeOperation(operation) {
  operation();
}

executeOperation(function () {
  console.log("Operation Executed Successfully");
});


// setTimeout with anonymous function
setTimeout(function () {
  console.log("This message appears after 2 seconds");
}, 2000);


/* ==================================================================
SECTION 2 — NAMED vs ANONYMOUS FUNCTIONS
================================================================== */

// Named function
function multiply(a, b) {
  return a * b;
}

console.log(multiply(4, 5)); // 20


// Anonymous function
let multiplyAnon = function (a, b) {
  return a * b;
};

console.log(multiplyAnon(4, 5)); // 20


/* ==================================================================
SECTION 3 — CALLBACK EXECUTION FLOW (CORE CONCEPT)
================================================================== */

/*
Functions in JavaScript are OBJECTS.
They are passed by REFERENCE, not copied.
*/

function executeOperation(operation) {
  operation();
}

executeOperation(function () {
  console.log("Callback executed");
});

/*
Key idea:
- The parameter receives a REFERENCE to a function
- Calling operation() executes the function in heap memory
*/


/* ==================================================================
SECTION 4 — NESTED FUNCTIONS & CLOSURE
================================================================== */

// Example 1: Nested function modifies outer variable
function buildGreeting(firstName, lastName) {
  let message = "Hello";

  function appendName() {
    message = `${message} ${firstName} ${lastName}`;
  }

  appendName();
  return message;
}

console.log(buildGreeting("Ali", "Mohamed"));


// Example 2: Nested function returns a value
function buildGreetingSafe(firstName, lastName) {
  let message = "Hello";

  function createMessage() {
    return `${message} ${firstName} ${lastName}`;
  }

  return createMessage();
}

console.log(buildGreetingSafe("Ali", "Mohamed"));


// Example 3: Multiple nested levels
function buildGreetingAdvanced(firstName, lastName) {
  let message = "Hello";

  function createMessage() {
    function getFullName() {
      return `${firstName} ${lastName}`;
    }
    return `${message} ${getFullName()}`;
  }

  return createMessage();
}

console.log(buildGreetingAdvanced("Ali", "Mohamed"));

/*
Concepts demonstrated:
- Scope chain
- Closure
- Inner functions accessing outer variables
*/


/* ==================================================================
SECTION 5 — MODULE PATTERN (ENCAPSULATION)
================================================================== */

/*
Module Pattern:
- Uses function scope to create PRIVATE data
- Returns an object exposing PUBLIC methods
- Prevents global namespace pollution
*/

// Simple module
function SimpleModule() {
  var message = "Hello World";

  function showMessage() {
    console.log(message);
  }

  return {
    showMessage: showMessage
  };
}

var simple = SimpleModule();
simple.showMessage();


// Counter module
function CounterModule() {
  var count = 0;

  function increment() {
    count++;
    console.log(count);
  }

  function decrement() {
    count--;
    console.log(count);
  }

  return {
    increment: increment,
    decrement: decrement
  };
}

var counter = CounterModule();
counter.increment();
counter.increment();
counter.decrement();


// Advanced module
function FunModule() {
  var hobby = "coding";
  var numbers = [10, 20, 30];

  function showHobby() {
    console.log(hobby);
  }

  function showNumbers() {
    console.log(numbers.join(" | "));
  }

  return {
    showHobby: showHobby,
    showNumbers: showNumbers
  };
}

var myModule = FunModule();
myModule.showHobby();
myModule.showNumbers();


/* ==================================================================
FINAL SUMMARY
================================================================== */

/*
1) Anonymous Functions
- Functions without names
- Used as callbacks, events, timers

2) Callbacks
- Functions passed as arguments
- Executed later via reference

3) Nested Functions
- Functions inside functions
- Enable closure and encapsulation

4) Closure
- Inner functions remember outer variables

5) Module Pattern
- Encapsulates private state
- Exposes controlled public API
- Prevents global scope pollution

These concepts are CORE to:
- Modern JavaScript
- Frameworks (React, Vue)
- Node.js
- Clean architecture design
====================================================================
END OF MASTER FILE
====================================================================
*/
