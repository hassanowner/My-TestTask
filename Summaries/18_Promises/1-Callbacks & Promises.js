/*
============================================================
ASYNC JAVASCRIPT: CALLBACKS & PROMISES – COMPLETE SQUARE
============================================================

1) WHY ASYNC EXISTS
-------------------
- JS is single-threaded → can run only 1 task at a time.
- Modern apps do async tasks: API calls, timers, events, file reading.
- Waiting synchronously would freeze the page.
- Solution: Asynchronous programming (Callbacks → Promises → async/await).

2) CALLBACKS
------------
- Function passed into another function to execute later.
- Use cases: events, timers, AJAX.

Examples:
// Timer callback
setTimeout(() => console.log("Hello after 2s"), 2000);

// Event callback
button.addEventListener("click", event => console.log("Clicked:", event.target.id));

// Timer reference
function logTime(){ console.log(new Date().toLocaleTimeString()); }
setTimeout(logTime, 3000);

3) CALLBACK HELL (Pyramid of Doom)
----------------------------------
- Nested callbacks → deep indentation, unreadable, hard to maintain.
Example:
fetchUserData(() => {
  fetchOrders(() => {
    processOrders(() => {
      console.log("All tasks completed");
    });
  });
});

Flow: 
1s → User data fetched
+1s → User orders fetched
+1s → Orders processed
Final → All tasks completed

Problem → led to Promises.

4) PROMISES
------------
- Object representing **future success or failure** of async tasks.
- Advantages:
  - Avoids callback hell
  - Chainable with `.then()`
  - Centralized error handling via `.catch()`
  - Cleaner syntax

States:
- Pending → initial
- Fulfilled → success
- Rejected → failure

Methods:
- `.then(onFulfilled, onRejected)` → success/failure
- `.catch(onRejected)` → failure
- `.finally(callback)` → always executes

Chaining:
myPromise
  .then(val => { console.log("Step1", val); return "Step2"; })
  .then(val => console.log("Step2", val))
  .catch(err => console.log("Error:", err));

5) SIMPLE PROMISE EXAMPLE
------------------------
const simplePromise = new Promise((resolve, reject) => {
    let connected = true;
    if(connected) resolve("Connected!");
    else reject("Failed!");
});

simplePromise.then(
    val => console.log("Success:", val),
    err => console.log("Failure:", err)
);

6) PRACTICAL PROMISE EXAMPLE
----------------------------
const mainPromise = new Promise((resolve, reject) => {
    let score = 85;
    score >= 50 ? resolve("Passed") : reject("Failed");
});

mainPromise.then(
    result => { console.log("Result:", result); return "Next Level"; },
    error => console.log("Result:", error)
).then(msg => console.log(msg));

Output:
Result: Passed
Next Level

7) RESOLVE / REJECT RULES
--------------------------
- Names don’t matter (resolve/reject, ok/error, success/failure)
- **Order matters**: first = success, second = failure
- Only first call counts; subsequent calls ignored
- Can pass any JS value:
  - resolve("text"), resolve(100), resolve({name:"Ali"})
  - reject("error"), reject(new Error("Oops"))

8) .THEN RULE
-------------
- `.then(first, second)` → first = resolve handler, second = reject handler
- `.catch()` → handles rejection only
- Mapping:
  resolve(value) → then(successCallback)
  reject(reason) → then(_, errorCallback) OR catch(errorCallback)

9) MENTAL MODEL
---------------
- Callback → executes later; nested → callback hell
- Promise → cleaner, chainable, handles async flow
- resolve(value) → triggers first .then()
- reject(reason) → triggers second .then() or .catch()
- Any value can be passed
- Only first resolve/reject counts
- Chain `.then()` for multiple sequential async operations

============================================================
*/
