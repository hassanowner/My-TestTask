/*

===================================================
Comprehensive Promise Guide with Examples 
===================================================

Overview: What You Will Learn
-----------------------------
In this guide, we will cover everything about **JavaScript Promises**, step by step:

1) **What is a Promise?**
   - A Promise represents a value that may become available in the future.
   - It handles asynchronous operations such as API requests, timers, file operations, or user input.
   - Promises prevent "Callback Hell" and improve code readability.

2) **Promise States**
   - **Pending:** Initial state; neither fulfilled nor rejected.
   - **Fulfilled (Resolved):** The operation completed successfully.
   - **Rejected:** The operation failed.

3) **Creating a Promise**
   - How to use `new Promise(executor)`.
   - The executor takes two functions: `resolve` for success and `reject` for failure.
   - Only the first call to resolve or reject matters; subsequent calls are ignored.

4) **Handling Promises**
   - **then():** Handle success.
   - **catch():** Handle errors.
   - **finally():** Execute code regardless of success or failure.

5) **Promise Chaining**
   - Each `then()` returns a new Promise.
   - You can pass the result from one `then()` to the next.
   - Avoids nested callbacks and makes asynchronous sequences clear.

6) **Real-life Analogy**
   - Think of a Promise as a task you promised to complete:
     - If done → success → then()
     - If failed → error → catch()
     - Always do something at the end → finally()

7) **Formal Example**
   - Stock management system with multiple steps:
     - Check warehouse stock.
     - Select some items.
     - Choose final item to ship.

8) **Step-by-Step Execution**
   - Observe how data flows through the chain.
   - See how errors are handled.
   - Learn how finally() always executes.

9) **Key Concepts Recap**
   - Promises allow structured asynchronous programming.
   - resolve() passes success data.
   - reject() passes error.
   - then() chains transformations.
   - catch() handles errors centrally.
   - finally() executes regardless.

10) **Mental Model**
   Promise
    ├─ resolve → then → then → then → finally
    ├─ reject  → catch → finally
    └─ finally → always executes

11) **Best Practices**
   - Use descriptive names for then() parameters.
   - Always return values in then() to maintain chaining.
   - Use catch() for centralized error handling.
   - Use finally() for cleanup or logging.
*/

// !! Note: You can read about `Promise Handling Flow (Detailed Map)` In Line 192

// Formal Example with Explanation
// ---------------------------------------------------------------------------------
  

// ================= Example 1: Simple Promise with One then =================

const simplePromise = new Promise((resolve, reject) => {
    let stockItems = ['Laptop', 'Monitor', 'Keyboard', 'Mouse'];
    if(stockItems.length >= 4){
        resolve(stockItems);
    } else {
        reject(Error("Not enough stock items"));
    }
});

simplePromise.then(items => {
    console.log("Example 1 - Items available:", items);
});


// ================= Example 2: Promise with Two then() =================

const twoStepPromise = new Promise((resolve, reject) => {
    let stockItems = ['Laptop', 'Monitor', 'Keyboard', 'Mouse'];
    if(stockItems.length >= 4){
        resolve(stockItems);
    } else {
        reject(Error("Not enough stock items"));
    }
});

twoStepPromise
    .then(items => {
        console.log("Example 2 - Step 1: All items:", items);
        return items.slice(0, 3); // select 3 items
    })
    .then(selectedItems => {
        console.log("Example 2 - Step 2: Selected 3 items:", selectedItems);
      // without use `return` ;because it's the final result
    });


// ================= Example 3: Promise with Three then() (Full Flow) =================

const fullPromise = new Promise((resolve, reject) => {
    let stockItems = ['Laptop', 'Monitor', 'Keyboard', 'Mouse'];
    if(stockItems.length >= 4){
        resolve(stockItems);
    } else {
        reject(Error("Not enough stock items"));
    }
});

fullPromise
    .then(items => {
        console.log("Example 3 - Step 1: Available items:", items);
        return items.slice(0, 3); // select 3 items
    })
    .then(items => {
        console.log("Example 3 - Step 2: Selected 3 items:", items);
        return items.slice(0, 1); // choose 1 item
    })
    .then(finalItem => {
        console.log(`Example 3 - Step 3: Final item to ship: ${finalItem}`);
    })
    .catch(error => console.log("Example 3 - Error:", error))
    .finally(() => console.log("Example 3 - Operation Completed"));


/*
Explanation of the Code
-----------------------
1) Promise Creation
- Executor runs immediately.
- Checks if stockItems.length >= 4.
- resolveFunction(stockItems) → Promise fulfilled → passes data to first then().
- rejectFunction(Error(...)) → Promise rejected → passes error to catch().

2) First then()
- Receives resolved data (all items).
- Logs "Step 1".
- Returns first 3 items → new Promise for next then().

3) Second then()
- Receives 3 items.
- Logs "Step 2".
- Returns 1 final item → next then().

4) Third then()
- Receives final item.
- Logs "Step 3".
- End of success chain.

5) catch()
- Executes if the Promise was rejected.
- Logs error.

6) finally()
- Executes in all cases.
- Logs operation completed.

Expected Output
----------------
If stockItems.length >= 4:
Step 1 - Available items: Laptop,Monitor,Keyboard,Mouse
Step 2 - Selected items: Laptop,Monitor,Keyboard
Step 3 - Final item to ship: Laptop
Operation Completed

If stockItems.length < 4:
Error: Not enough stock items
Operation Completed



===================================== 
Promise Handling Flow (Detailed Map)
=====================================

Promise Created
    │
    ▼
Is the Promise Resolved or Rejected?
    │
    ├─ Resolved → Then() Chain
    │      │
    │      ▼
    │   First then() executes
    │      │ - Receives value passed from resolve()
    │      │ - Can return new value (passed to next then())
    │      ▼
    │   Second then() executes (if exists)
    │      │ - Receives value from previous then()
    │      │ - Can return new value
    │      ▼
    │   Third then() executes (if exists)
    │      │ - Receives value from previous then()
    │      ▼
    │   End of success chain → next is finally()
    │
    └─ Rejected → Catch()
           │
           ▼
      catch() executes
           │ - Receives error/rejection reason from reject()
           │ - Can handle or log the error
           ▼
      After catch → next is finally()
  
  Finally()
     │
     ▼
  finally() executes
       │ - Always runs regardless of resolve/reject
       │ - Does not receive resolved value or error
       │ - Used for cleanup, logging, or final operations
       ▼
End of Promise Flow

Summary Table:
---------------
||| Resolved Value ───> then() executes in order
||| Rejected Value ───> catch() executes
||| finally() ─────────> always executes at the end

*/
