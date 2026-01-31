/*
================================================================================
ASYNC JAVASCRIPT: PROMISES, ASYNC/AWAIT, AWAIT, AND TRY/CATCH/FINALLY
================================================================================

1) REGULAR SYNCHRONOUS FUNCTIONS
--------------------------------
- Execute immediately, return value directly
- No asynchronous behavior

Example:
function calculateTotal(price, quantity) {
  return price * quantity;
}
console.log(calculateTotal(10, 3)); 
// Output: 30

------------------------------------------------------------
2) PROMISES (EXPLICIT THEN)
----------------------------
- Wrap async operations in new Promise
- resolve(value) → triggers then()
- reject(reason) → triggers catch() or second then argument

Example:
function calculateTotalAsync(price, quantity) {
  return new Promise((resolve, reject) => {
    if(price>0 && quantity>0) resolve(price*quantity);
    else reject("Invalid input");
  });
}

calculateTotalAsync(10,3).then(
  value => console.log(value),
  error => console.log(error)
);
// Output: 30

------------------------------------------------------------
3) PROMISE.RESOLVE / PROMISE.REJECT SHORTCUTS
----------------------------------------------
- Promise.resolve(value) → returns already fulfilled Promise
- Promise.reject(reason) → returns already rejected Promise

Example:
function calculateTotalWithShortcut(price, quantity) {
  return (price>0 && quantity>0) 
    ? Promise.resolve(price*quantity)
    : Promise.reject("Invalid input");
}

calculateTotalWithShortcut(10,3).then(console.log, console.log);
// Output: 30

------------------------------------------------------------
4) ASYNC FUNCTIONS
------------------
- Syntactic sugar over Promises
- Always return a Promise
- return value → resolve(value)
- throw error → reject(error)

Basic Example:
async function basicAsyncFunction() {
  return "Operation Successful";
}
basicAsyncFunction().then(console.log);
// Output: Operation Successful

------------------------------------------------------------
4.b) ILLUSTRATIVE ASYNC/AWAIT EXAMPLE
-------------------------------------
async function fetchUserStatus() {
  let users = [];
  if(users.length>0) return "Users Found";
  else throw new Error("No Users Found");
}

fetchUserStatus().then(
  msg => console.log(msg),
  err => console.log(err.message)
);
// Output: No Users Found

------------------------------------------------------------
5) AWAIT KEYWORD
----------------
- Pauses async function execution until Promise settles
- Works only inside async functions
- Returns resolved value
- Rejected Promises must be handled with catch or try/catch

Basic Syntax:
async function basicAwaitRule() {
  let result = await Promise.resolve("Success");
  console.log(result);
}
basicAwaitRule();
// Output: Success

------------------------------------------------------------
5.a) SIMPLE PRACTICAL EXAMPLE
-----------------------------
function simplePromise() {
  return new Promise(resolve => setTimeout(() => resolve("Data Loaded"), 2000));
}

async function readSimpleData() {
  console.log("Before Await");
  let value = await simplePromise();
  console.log(value);
  console.log("After Await");
}

readSimpleData();
// Output after 2s:
// Before Await
// Data Loaded
// After Await

------------------------------------------------------------
5.b) DETAILED EXAMPLE WITH THEN AND CATCH
-----------------------------------------
function detailedPromise(status) {
  return new Promise((resolve, reject) => {
    setTimeout(() => status ? resolve("Operation Successful") : reject("Operation Failed"), 2000);
  });
}

async function processDetailedData() {
  console.log("Before Promise");
  let result = await detailedPromise(false).then(v => v).catch(e => e);
  console.log(result);
  console.log("After Promise");
}

processDetailedData();
// Output after 2s:
// Before Promise
// Operation Failed
// After Promise

------------------------------------------------------------
5.c) HANDLING REJECTED PROMISES
--------------------------------
- Without catch → unhandled rejection
async function unhandledRejectionExample() {
  let result = await Promise.reject("Critical Error");
  console.log(result);
}
// Output:
// Uncaught (in Promise) Critical Error

- With inline catch → safe continuation
async function handledRejectionExample() {
  console.log("Start");
  let result = await Promise.reject("Critical Error").catch(e => e);
  console.log(result);
  console.log("End");
}
// Output:
// Start
// Critical Error
// End

------------------------------------------------------------
6) TRY / CATCH / FINALLY WITH ASYNC/AWAIT
------------------------------------------
- Structured error handling for async operations

Synchronous Example:
function divideNumbers(a,b){
  try {
    if(b===0) throw "Division by zero";
    console.log(a/b);
  } catch(e) { console.log("Error:", e); }
  finally { console.log("Calculation finished"); }
}
divideNumbers(10,0);
// Output:
// Error: Division by zero
// Calculation finished

Async Example:
const asyncPromise = new Promise(resolve => setTimeout(()=>resolve("Data loaded"), 2000));

async function readAsyncData() {
  console.log("Before Promise");
  try {
    let result = await asyncPromise;
    console.log(result);
  } catch(e) {
    console.log("Error:", e);
  } finally {
    console.log("After Promise");
  }
}
readAsyncData();
// Output after 2s:
// Before Promise
// Data loaded
// After Promise

------------------------------------------------------------
SUMMARY
--------
- Regular functions → immediate return values
- Promises → manage async with then/catch
- Promise.resolve / reject → shortcut for creating Promises
- Async functions → syntactic sugar over Promises
- await → pause execution until Promise settles
- Rejections → handle with catch or try/catch
- try/catch/finally → structured and readable async error handling
- Async/await + try/catch/finally → clean, maintainable, and linear code flow
================================================================================
*/
