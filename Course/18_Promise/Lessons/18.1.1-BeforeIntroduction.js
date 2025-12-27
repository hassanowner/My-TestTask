/*

====================================================
1) WHY THESE TOPICS EXIST (BIG PICTURE)
====================================================

JavaScript is a single-threaded language, meaning it can only execute one task at a time.

Modern web applications need to:
- Fetch data from APIs
- Read files
- Wait for timers
- Handle user interactions

If JavaScript waited for these operations to finish, the webpage would freeze.

To solve this, JavaScript uses ASYNCHRONOUS PROGRAMMING.

Callbacks were the first solution.
Later, Promises, Fetch, and async/await were introduced
to improve code readability and maintainability.


====================================================
2) WHAT IS A CALLBACK?
====================================================

Definition:
A callback is a function passed into another function
to be executed later, after a certain task completes.

In simple words:
"Do this task, and when you're done, call this function."


====================================================
3) SIMPLE CALLBACK EXAMPLE
====================================================
*/

function greetUser(name) {
  console.log(`Hello, ${name}!`);
}

// Simulate fetching a username after 2 seconds
setTimeout(() => greetUser("Alice"), 2000);

/*
Explanation:
- setTimeout starts a timer
- JavaScript does NOT wait
- After 2 seconds, greetUser is executed
- greetUser is a CALLBACK FUNCTION



====================================================
4) CALLBACK WITH EVENTS
====================================================
*/

const button = document.querySelector("#submitBtn");

function handleClick(event) {
  console.log("Button clicked:", event.target.id);
}

button.addEventListener("click", handleClick);

/*
Explanation:
- handleClick is NOT executed immediately
- addEventListener waits for a click
- When the click happens, handleClick is called
- handleClick is a CALLBACK

In words:
"When the user clicks the button, execute this function"




====================================================
5) CALLBACK WITH TIMERS
====================================================
*/

function logTime() {
  console.log("Current time:", new Date().toLocaleTimeString());
}

// Run logTime after 3 seconds
setTimeout(logTime, 3000);

/*
Explanation:
- logTime is passed as a reference
- It runs AFTER 3 seconds
- This is a classic callback use case




====================================================
6) WHAT IS CALLBACK HELL (PYRAMID OF DOOM)?
====================================================

Callback Hell occurs when multiple callbacks are nested inside each other.
This leads to:
- Deep indentation
- Hard-to-read code
- Hard-to-maintain logic

It’s called the "Pyramid of Doom"
because the code grows to the right like a pyramid.




====================================================
7) CALLBACK HELL EXAMPLE
====================================================
*/

function fetchUserData(callback) {
  setTimeout(() => {
    console.log("User data fetched");
    callback();
  }, 1000);
}

function fetchOrders(callback) {
  setTimeout(() => {
    console.log("User orders fetched");
    callback();
  }, 1000);
}

function processOrders(callback) {
  setTimeout(() => {
    console.log("Orders processed");
    callback();
  }, 1000);
}

fetchUserData(() => {
  fetchOrders(() => {
    processOrders(() => {
      console.log("All tasks completed");
    });
  });
});

/*
====================================================
8) STEP-BY-STEP EXECUTION
====================================================

After 1 second:
"User data fetched"

After another 1 second:
"User orders fetched"

After another 1 second:
"Orders processed"

After another instant:
"All tasks completed"

Total execution time: about 3-4 seconds



====================================================
9) REAL-LIFE MEANING OF THIS CODE
====================================================

Simulates a user data processing pipeline:

1) Fetch user information
2) Fetch their orders
3) Process the orders
4) Log that all tasks are completed

Each step depends on the previous one,
which causes nested callbacks.


====================================================
10) WHY CALLBACK HELL IS A PROBLEM
====================================================

Problems:
- Code becomes hard to read
- Debugging is difficult
- Error handling is complex
- Maintenance is painful

Callbacks solve asynchrony,
but they do NOT scale well for complex logic.


====================================================
11) FINAL SUMMARY
====================================================

- Callback: a function executed later
- Used in events, timers, async operations
- Callback Hell: nested callbacks creating a pyramid shape
- Makes code unreadable
- This problem led to Promises, Fetch, and async/await

*/
