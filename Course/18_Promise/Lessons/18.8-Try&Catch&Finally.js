/*
================================================================================
ASYNC & AWAIT WITH TRY, CATCH, FINALLY — STRUCTURED EXPLANATION
================================================================================

────────────────────────────────────────────────────────────────────────────────
1) TOPICS TO BE STUDIED AND EXPLAINED (IN ORDER)
────────────────────────────────────────────────────────────────────────────────
1. Promises and asynchronous behavior in JavaScript
2. Promise states: resolve and reject
3. Error handling using try, catch, and finally
4. Using try/catch/finally with async and await
5. Practical comparison between synchronous and asynchronous error handling



────────────────────────────────────────────────────────────────────────────────
2) EXAMPLE OF A NORMAL new Promise (resolve & reject CASES)
────────────────────────────────────────────────────────────────────────────────
Explanation:
A Promise represents a value that will be available in the future.
It can either succeed (resolve) or fail (reject).

Code:
-------------------------------------------------------------------- */
const examplePromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Operation completed successfully");
  } else {
    reject("Operation failed");
  }
});

examplePromise.then(
  result => console.log(result),
  error => console.log(error)
);

// Possible Results:
// Operation completed successfully
// OR
// Operation failed
/* --------------------------------------------------------------------

  
────────────────────────────────────────────────────────────────────────────────
3) BASIC RULE OF try / catch / finally (STRUCTURE ONLY)
────────────────────────────────────────────────────────────────────────────────
Explanation:
This is the general rule for error handling.
It works with both synchronous code and async/await.

Code:
-------------------------------------------------------------------- */
try {
  // Code that may cause an error
} catch (error) {
  // Executes if an error occurs
} finally {
  // Executes in all cases (success or error)
}
/* --------------------------------------------------------------------



────────────────────────────────────────────────────────────────────────────────
4) EXPLANATION OF THE BASIC RULE (TWO EXAMPLES)
────────────────────────────────────────────────────────────────────────────────

────────────────────────────────────────────────────────────────────────────────
4.a) SIMPLE (SYNCHRONOUS) EXAMPLE
────────────────────────────────────────────────────────────────────────────────
Explanation:
Errors are caught immediately during execution.

Code:
-------------------------------------------------------------------- */
function divideNumbers(a, b) {
  try {
    if (b === 0) {
      throw "Division by zero is not allowed";
    }
    console.log(a / b);
  } catch (error) {
    console.log("Error:", error);
  } finally {
    console.log("Calculation finished");
  }
}

divideNumbers(10, 0);

// Result:
// Error: Division by zero is not allowed
// Calculation finished
/* --------------------------------------------------------------------

────────────────────────────────────────────────────────────────────────────────
4.b) ASYNC FUNCTION EXAMPLE WITH await
────────────────────────────────────────────────────────────────────────────────
Explanation:
try/catch is used to handle rejected Promises when using await.

Code:
-------------------------------------------------------------------- */
const asyncPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data loaded successfully");
  }, 2000);
});

async function readAsyncData() {
  console.log("Before Promise");

  try {
    let result = await asyncPromise;
    console.log(result);
  } catch (error) {
    console.log("Error:", error);
  } finally {
    console.log("After Promise");
  }
}

readAsyncData();

// Result (after 2 seconds):
// Before Promise
// Data loaded successfully
// After Promise
/* --------------------------------------------------------------------

────────────────────────────────────────────────────────────────────────────────
SUMMARY
────────────────────────────────────────────────────────────────────────────────
- Promises handle asynchronous operations using resolve and reject
- try/catch/finally provides structured error handling
- finally always executes regardless of success or failure
- When using async/await, rejected Promises are caught by catch
- This pattern produces clean, readable, and safe asynchronous code
================================================================================
*/
