/*
================================================================================
FORMAL EXPLANATION OF ASYNCHRONOUS FUNCTIONS, PROMISES, AND ASYNC/AWAIT
================================================================================

────────────────────────────────────────────────────────────────────────────────
1) ORDERED LIST OF TOPICS TO BE EXPLAINED
────────────────────────────────────────────────────────────────────────────────
1. Natural (regular) JavaScript functions and their synchronous behavior
2. Functions that explicitly return a Promise using then()
3. Using Promise.resolve() and Promise.reject() inside a function
4. Async functions as a formal abstraction over Promises
5. Practical usage of async/await with:
   a) A basic structural rule example
   b) A real illustrative example with detailed comments and results


  
────────────────────────────────────────────────────────────────────────────────
2) EXAMPLE OF A COMPLETE NATURAL FUNCTION (SYNCHRONOUS)
────────────────────────────────────────────────────────────────────────────────
Explanation:
A natural function executes immediately and returns a value directly.
It does not manage asynchronous behavior.

Code:
-------------------------------------------------------------------- */
function calculateTotal(price, quantity) {
  return price * quantity;
}

let result = calculateTotal(10, 3);
console.log(result);

// Result:
// 30
/*--------------------------------------------------------------------


────────────────────────────────────────────────────────────────────────────────
3) SAME EXAMPLE USING A FUNCTION THAT RETURNS A NEW PROMISE WITH then()
────────────────────────────────────────────────────────────────────────────────
Explanation:
Here, the function wraps the calculation inside a Promise.
The result is handled using then().

Code:
-------------------------------------------------------------------- */
function calculateTotalAsync(price, quantity) {
  return new Promise((resolve, reject) => {
    if (price > 0 && quantity > 0) {
      resolve(price * quantity);
    } else {
      reject("Invalid input values");
    }
  });
}

calculateTotalAsync(10, 3).then(
  (value) => console.log(value), // this function for resolve 
  (error) => console.log(error)  // this function for reject
);

// Result:
// 30
/* --------------------------------------------------------------------


────────────────────────────────────────────────────────────────────────────────
4) USING Promise.resolve() AND Promise.reject() INSIDE A FUNCTION
────────────────────────────────────────────────────────────────────────────────
Explanation:
Promise.resolve() and Promise.reject() are shortcuts to return
fulfilled or rejected Promises without manually creating a new Promise.

Code:
-------------------------------------------------------------------- */
function calculateTotalWithShortcut(price, quantity) {
  if (price > 0 && quantity > 0) {
    return Promise.resolve(price * quantity);
  } else {
    return Promise.reject("Invalid input values");
  }
}

calculateTotalWithShortcut(10, 3).then(
  (value) => console.log(value),
  (error) => console.log(error)
);

// Result:
// 30
/* --------------------------------------------------------------------



────────────────────────────────────────────────────────────────────────────────
5) ASYNC FUNCTION (TWO REQUIRED EXAMPLES)
────────────────────────────────────────────────────────────────────────────────

────────────────────────────────────────────────────────────────────────────────
5.a) BASIC RULE EXAMPLE (STRUCTURAL FORM)
────────────────────────────────────────────────────────────────────────────────
Explanation:
An async function always returns a Promise.
Returning a value is equivalent to Promise.resolve(value).
Throwing an error is equivalent to Promise.reject(error).

Code:
-------------------------------------------------------------------- */
async function basicAsyncFunction() {
  return "Operation Successful";
}

basicAsyncFunction().then((value) => console.log(value));

// Result:
// Operation Successful
/* --------------------------------------------------------------------

────────────────────────────────────────────────────────────────────────────────
5.b) ILLUSTRATIVE ASYNC/AWAIT EXAMPLE WITH STEP-BY-STEP COMMENTS
────────────────────────────────────────────────────────────────────────────────
Explanation:
This example demonstrates real async logic, error handling,
and how async replaces explicit Promise construction.

Code:
-------------------------------------------------------------------- */
async function fetchUserStatus() {
  // Step 1: Define a data source
  let users = [];

  // Step 2: Check condition
  if (users.length > 0) {
    // Step 3a: Returning a value resolves the Promise
    return "Users Found";
  } else {
    // Step 3b: `Throwing` an `error` rejects the Promise
    throw new Error("No Users Found");
  }
}

// Step 4: Calling the async function (returns a Promise)
fetchUserStatus().then(
  (successMessage) => console.log(successMessage), // function for resolve 
  (errorMessage) => console.log(errorMessage.message) //function for rejected 
);

// Result:
// No Users Found
/* --------------------------------------------------------------------

================================================================================
SUMMARY
================================================================================
- Regular functions return direct values.
- Promises handle asynchronous logic using then() and catch().
- Promise.resolve() and Promise.reject() simplify Promise creation.
- Async functions are syntactic sugar over Promises.
- Returning = resolve, throwing = reject.
- Async/await produces cleaner, more readable asynchronous code.
================================================================================ 
*/
