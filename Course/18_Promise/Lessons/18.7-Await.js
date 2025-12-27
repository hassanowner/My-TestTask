/*
================================================================================
FORMAL EXPLANATION OF AWAIT IN JAVASCRIPT (RESTRUCTURED AS REQUESTED)
================================================================================

────────────────────────────────────────────────────────────────────────────────
1) ORDERED LIST OF TOPICS TO BE EXPLAINED
────────────────────────────────────────────────────────────────────────────────
1. Definition and purpose of the await keyword
2. The restriction of await to async functions
3. The basic structural rule of await in JavaScript
4. Practical explanation of await:
   a) Simple illustrative example (core idea only)
   b) Detailed example including resolve, reject, then, and catch
5. Behavior when the Promise result is rejected (two examples)


────────────────────────────────────────────────────────────────────────────────
2) BASIC CONCEPT OF await
────────────────────────────────────────────────────────────────────────────────
Explanation:
The await keyword is used to pause the execution of an async function
until a Promise is settled. It allows asynchronous code to be written
in a synchronous and readable style.

Key Characteristics:
- await works only inside async functions
- await waits for the Promise result
- await returns the resolved value
- rejected Promises must be handled explicitly



────────────────────────────────────────────────────────────────────────────────
3) BASIC STRUCTURAL RULE OF await (FORMAL SYNTAX)
────────────────────────────────────────────────────────────────────────────────
Explanation:
This example demonstrates the formal and minimal rule of await usage.
It shows how await retrieves a resolved value from a Promise.

Code:
-------------------------------------------------------------------- */
async function basicAwaitRule() {
  let result = await Promise.resolve("Success");
  console.log(result);
}

basicAwaitRule();

// Result:
// Success
/* --------------------------------------------------------------------



────────────────────────────────────────────────────────────────────────────────
4) PRACTICAL EXPLANATION OF await
────────────────────────────────────────────────────────────────────────────────

────────────────────────────────────────────────────────────────────────────────
4.a) SIMPLE EXAMPLE — CORE IDEA OF await
────────────────────────────────────────────────────────────────────────────────
Explanation:
This example clarifies the fundamental idea of await:
JavaScript pauses execution until the Promise completes.

Code:
-------------------------------------------------------------------- */
function simplePromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data Loaded");
    }, 2000);
  });
}

async function readSimpleData() {
  console.log("Before Await");

  let value = await simplePromise(); // await -->simplePromise() ,Look:
 // Call this function `(simplePromise)` and see what value it returns. 
 // When it see the final value, save it and return it here (in `value`).
 // After everything is done, move to the lines below it.
  console.log(value);

  console.log("After Await");
}

readSimpleData();

// Result (after 2 seconds):
// Before Await
// Data Loaded
// After Await
/*
!! Note: Without using `await`, the console output would occur in a non-blocking manner.
JavaScript would not pause execution to wait for the Promise to resolve.

Expected console output order (without `await`):

1. "Before Promise"
   → Printed immediately when the function starts execution.

2. "After Promise"
   → Printed immediately after the Promise is created, without waiting.

3. "Data Loaded"
   → Printed later, after the Promise resolves (after the delay).

Explanation:
When `await` is not used, JavaScript continues executing the next lines of code
while the Promise is still pending. The resolved value is handled asynchronously,
which causes its output to appear last. */
/* --------------------------------------------------------------------

────────────────────────────────────────────────────────────────────────────────
4.b) DETAILED EXAMPLE — resolve, reject, then, and catch WITH await
────────────────────────────────────────────────────────────────────────────────
Explanation:
This example demonstrates a complete asynchronous flow.
The Promise may resolve or reject, and await is combined with
then() and catch() for explicit control.

Code:
-------------------------------------------------------------------- */
function detailedPromise(status) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status === true) {
        resolve("Operation Successful");
      } else {
        reject("Operation Failed");
      }
    }, 2000);
  });
}

async function processDetailedData() {
  console.log("Before Promise");

  let result = await detailedPromise(false)
    .then(value => value)
    .catch(error => error);

  console.log(result);

  console.log("After Promise");
}

processDetailedData();

// Result (after 2 seconds):
// Before Promise
// Operation Failed
// After Promise
/* --------------------------------------------------------------------




────────────────────────────────────────────────────────────────────────────────
5) BEHAVIOR WHEN THE PROMISE RESULT IS REJECTED (TWO EXAMPLES)
────────────────────────────────────────────────────────────────────────────────

────────────────────────────────────────────────────────────────────────────────
5.a) REJECTED PROMISE WITHOUT catch (UNHANDLED REJECTION)
────────────────────────────────────────────────────────────────────────────────
Explanation:
If a rejected Promise is awaited without handling,
the async function returns a rejected Promise.

Code:
-------------------------------------------------------------------- */
function rejectedPromise() {
  return Promise.reject("Critical Error");
}

async function unhandledRejectionExample() {
  let result = await rejectedPromise();
  console.log(result);
}

unhandledRejectionExample();

// Result:
// Uncaught (in Promise) Critical Error
/* --------------------------------------------------------------------

────────────────────────────────────────────────────────────────────────────────
5.b) REJECTED PROMISE HANDLED WITH INLINE catch
────────────────────────────────────────────────────────────────────────────────
Explanation:
Using inline catch prevents the async function from failing
and allows controlled continuation.

Code:
------------------------------------------------------------------- */-
async function handledRejectionExample() {
  // "Start" is logged immediately when the function begins execution
  console.log("Start");

  // Call the function that returns a rejected Promise
  // await pauses execution until the Promise settles (rejects in this case)
  // .catch() intercepts the rejection and converts it into a normal value
  // Instead of throwing an error, the rejection message is assigned to `result`
  let result = await rejectedPromise().catch(error => error);

  // The rejected value (error message) is now treated as a regular result
  // and is printed to the console
  console.log(result);

  // This line executes normally because the rejection was handled
  // The async function continues without crashing
  console.log("End");
}

 // Invoking the async function
 // The execution order will remain linear because the rejection is handled
handledRejectionExample();

/*
Console Output:
Start
Critical Error
End
*/
/* --------------------------------------------------------------------

================================================================================
SUMMARY
================================================================================
- await pauses execution until a Promise settles
- await works only inside async functions
- await retrieves resolved values directly
- Rejections must be handled using catch when try/catch is not used
- Inline catch allows safe continuation of async execution
================================================================================
*/
