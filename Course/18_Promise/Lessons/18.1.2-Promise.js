/*

==============================
1) Topic Overview: JavaScript Promise
==============================

A **Promise** in JavaScript is an object representing the eventual completion or failure of an asynchronous operation.  
In simple terms, a promise is like a real-life promise: it is something that will happen in the future. You ask for something now, and it either succeeds or fails later.

**Key Advantages:**
- Handles asynchronous operations cleanly.
- Avoids "Callback Hell" (deeply nested callbacks).
- Provides clear methods for success (`then`) and failure (`catch`).
- Represents the **status** of an operation and its resulting value.

**Why We Use It:**
- Modern web applications often deal with network requests, timers, file operations, or user input.
- Without promises, code would be messy and hard to maintain when handling multiple async tasks.



==============================
2) Historical Context
==============================

**Before Promises:**
- JavaScript relied on **callbacks** to handle asynchronous tasks.
- Example: `setTimeout` or `XMLHttpRequest` used nested callbacks for sequences of async tasks.

**Problems with Callbacks:**
- Callback Hell: Nested callbacks became unreadable.
- Difficult error handling: Errors had to be managed in every nested callback.
- Hard to chain multiple async operations in a clean way.

**After Promises:**
- Promises standardize async code, making it chainable.
- Allows `.then()` and `.catch()` methods to handle success and errors centrally.
- Resolves issues of readability, error propagation, and maintainability.




==============================
3) Basic Promise Syntax
==============================

```javascript
const myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation
    let success = true; // example condition
    if(success){
        resolve("Operation Successful");
    } else {
        reject("Operation Failed");
    }
});

// Handling the promise
myPromise.then(
    (value) => console.log("Success:", value),
    (error) => console.log("Error:", error)
);


┌─────────────────────────────────────────────┐
│ JavaScript Promise Execution Flow           │
├─────────────────────────────────────────────┤
│ 1) new Promise(...)                         │ ← Promise is created
│    └─ Executor function starts immediately
│        ├─ let success = true
│        ├─ success is true → resolve("Operation Successful")
│        └─ resolve queues the .then callback in the Microtask Queue
│
│ 2) myPromise.then(...)                       │ ← .then is registered
│    └─ Success callback is not executed yet
│
│ 3) Call Stack becomes empty                  │ ← Main thread finishes synchronous code
│    └─ Event Loop checks Microtask Queue
│
│ 4) Microtask Queue contains .then callback
│    └─ Callback is popped from Microtask Queue
│        └─ console.log("Success:", value)    │ ← Executes: prints "Success: Operation Successful"
│
│ 5) After executing callback                  │ ← Microtask Queue empty
│    └─ Call Stack is empty again
│
│ Summary:
│ - Executor runs immediately (synchronous)
│ - .then callback is asynchronous (queued in Microtask Queue)
│ - Event Loop ensures it runs after the main stack is empty
│ - Output: "Success: Operation Successful"
└─────────────────────────────────────────────┘


** OR :

- new Promise creates a promise object.
- The constructor takes a function with two parameters: resolve and reject.
- resolve(value) → marks the promise as fulfilled.
- reject(reason) → marks the promise as rejected.
- .then() → handles fulfilled and optionally rejected cases.
- .catch() → handles only rejected cases.





================================
4) Promise Properties & Methods
================================

##A- Promise States: 
1. Pending --> initial state, neither fulfilled nor rejected.
2. Fulfilled --> operation completed successfully.
3. Rejected --> operation failed.

- If -
Promise States ==> Fulfilled --> value 
# or
Promise States ==> Rejected  --> value 



##B- Methods:
.then(onFulfilled, onRejected) → attach callbacks for success or failure.
.catch(onRejected) → attach callback for failure.
.finally(callback) → executes regardless of outcome.


##C- Chaining:
- Promises can be chained: the return value of one .then() becomes the input for the next.


Example of chaining: 

myPromise
    .then(value => {
        console.log("Step 1:", value);
        return "Step 2 data";
    })
    .then(value => console.log("Step 2:", value))
    .catch(error => console.log("Error caught:", error));




==============================
5) Simple Example
============================== */

const simplePromise = new Promise((resolve, reject) => {
    let connected = true;
  if(connected){
      resolve("Connected!")  // value of resolve
      reject("Failed to connect!");  // value of reject
});

simplePromise.then(
    value => console.log("Success:", value),
    error => console.log("Failure:", error)
);

/*
This demonstrates the basic pattern: create a promise, resolve or reject it, and handle it with .then().





==============================
6) Practical Example
============================== */

const mainPromise = new Promise((resolve, reject) => {
    let score = 85;

    if (score >= 50) {
        resolve("Passed");
    } else {
        reject("Failed");
    }
});

// Using then only
mainPromise.then(
    result => {           // resolve => make this function 
        console.log("Result:", result);
        return "You can continue to the next level";
    },
    error => {            // reject => make this function
        console.log("Result:", error);
    }
).then(message => {  // you can make another them
    console.log(message);
});


/*
Short and Clear Explanation of the Promise Example
=================================================

• A Promise is created and runs immediately.
• The value of `score` is 85.
• The condition `score >= 50` is true.
• `resolve("Passed")` is called.
• The Promise state becomes FULFILLED.

• The first `then()` executes the success function.
• The value "Passed" is received as `result`.
• Output:
  Result: Passed

• The first `then()` returns:
  "You can continue to the next level"

• This value is passed to the second `then()`.
• The second `then()` prints:
  You can continue to the next level

• The reject function is not executed.

Final Output:
-------------
Result: Passed
You can continue to the next level
=================================================



============================== Conclusion:

Promises are an essential feature in JavaScript for handling asynchronous operations efficiently.
They provide clean syntax, readable code, and proper error handling compared to old-style callbacks.
By mastering promises, you can manage complex async operations, chain multiple tasks, and write more maintainable applications. 
*/
