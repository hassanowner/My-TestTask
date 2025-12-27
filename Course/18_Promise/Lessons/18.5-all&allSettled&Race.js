/*
====================================================================================================
Promise Methods: all, allSettled,  Race
====================================================================================================

TOPICS TO STUDY:
1. What is Promise.all?
2. What is Promise.allSettled?
3. What is Promise.race?
4. How to handle resolved and rejected values
5. Examples:
   - Example 1: Simple Promises (local tasks)
   - Example 2: Medium (mock API calls)
   - Example 3: Detailed / Advanced (conditional Promises)
6. Summary
====================================================================================================




1) PROMISE.ALL
------------------------------------------
- `Promise.all([promise1, promise2, ...])` waits for **all promises to resolve**.
- If **any promise rejects**, the entire Promise.all rejects immediately.
- Use case: when you need **all results together** before continuing.

Example:
```javascript */
const task1 = new Promise((resolve, reject) => setTimeout(() => resolve("Task1 Done"), 2000));
const task2 = new Promise((resolve, reject) => setTimeout(() => resolve("Task2 Done"), 1000));
const task3 = new Promise((resolve, reject) => setTimeout(() => resolve("Task3 Done"), 1500));

Promise.all([task1, task2, task3])
  .then(results => console.log("All tasks completed:", results))
  .catch(err => console.log("Promise.all rejected:", err)); /*
  
// Output after ~2 seconds:
// All tasks completed: ["Task1 Done", "Task2 Done", "Task3 Done"]

Explanation: All tasks must succeed for .then() to execute; if any fails, .catch() is called.


/*
====================================================================================================
PROMISE.ALL: All Possible Scenarios
====================================================================================================

Base example (all succeed): */

const task1 = new Promise((resolve, reject) => setTimeout(() => resolve("Task1 Done"), 2000));
const task2 = new Promise((resolve, reject) => setTimeout(() => resolve("Task2 Done"), 1000));
const task3 = new Promise((resolve, reject) => setTimeout(() => resolve("Task3 Done"), 1500));

Promise.all([task1, task2, task3])
  .then(results => console.log("All tasks completed:", results))
  .catch(err => console.log("Promise.all rejected:", err));

/*
Output after ~2 seconds:
All tasks completed: ["Task1 Done", "Task2 Done", "Task3 Done"]
*/
Explanation: All promises succeed, `.then()` executes with all results.

   
/*
----------------------------------------------------------------------------------------------------
Scenario 1: One promise fails (task2 fails): */

const task1 = new Promise((resolve, reject) => setTimeout(() => resolve("Task1 Done"), 2000));
const task2 = new Promise((resolve, reject) => setTimeout(() => reject("Task2 Failed"), 1000));
const task3 = new Promise((resolve, reject) => setTimeout(() => resolve("Task3 Done"), 1500));

Promise.all([task1, task2, task3])
  .then(results => console.log("All tasks completed:", results))
  .catch(err => console.log("Promise.all rejected:", err));

/*
Output after ~1 second:
Promise.all rejected: Task2 Failed
*/
/* Explanation: task2 rejects first, so `.catch()` executes immediately. task1 and task3 results are ignored.

----------------------------------------------------------------------------------------------------
Scenario 2: Two promises fail (task1 and task3 fail):  */

const task1 = new Promise((resolve, reject) => setTimeout(() => reject("Task1 Failed"), 2000));
const task2 = new Promise((resolve, reject) => setTimeout(() => resolve("Task2 Done"), 1000));
const task3 = new Promise((resolve, reject) => setTimeout(() => reject("Task3 Failed"), 1500));

Promise.all([task1, task2, task3])
  .then(results => console.log("All tasks completed:", results))
  .catch(err => console.log("Promise.all rejected:", err));

/*
Output after ~1.5 seconds:
Promise.all rejected: Task3 Failed
*/
/* Explanation: The **first rejection** (`task3`) triggers `.catch()`, Promise.all stops waiting for remaining promises.

----------------------------------------------------------------------------------------------------
Scenario 3: All promises fail:  */

const task1 = new Promise((resolve, reject) => setTimeout(() => reject("Task1 Failed"), 2000));
const task2 = new Promise((resolve, reject) => setTimeout(() => reject("Task2 Failed"), 1000));
const task3 = new Promise((resolve, reject) => setTimeout(() => reject("Task3 Failed"), 1500));

Promise.all([task1, task2, task3])
  .then(results => console.log("All tasks completed:", results))
  .catch(err => console.log("Promise.all rejected:", err));

/*
Output after ~1 second:
Promise.all rejected: Task2 Failed
*/
/* Explanation: The **first rejection** (`task2`) triggers `.catch()`, other failures are ignored.

====================================================================================================
Notes:
- `Promise.all` **waits for all to resolve**, but rejects **immediately on the first failure**.  
- The **order of results in `.then()`** always follows the order of promises in the array.  
- If any promise rejects, `.catch()` executes, and remaining promise results are ignored.  
- Timing affects which rejection triggers `.catch()` first.
====================================================================================================




 



2) PROMISE.ALLSETTLED

Promise.allSettled([promise1, promise2, ...]) waits for all promises to finish, regardless of resolved or rejected.

Returns an array of objects: {status: "fulfilled", value: ...} or {status: "rejected", reason: ...}.

Use case: when you want all results and their status, even if some fail.


Example: */

const api1 = new Promise((res, rej) => setTimeout(() => res("API1 Success"), 1000));
const api2 = new Promise((res, rej) => setTimeout(() => rej("API2 Failed"), 2000));
const api3 = new Promise((res, rej) => setTimeout(() => res("API3 Success"), 1500));

Promise.allSettled([api1, api2, api3])
  .then(results => console.log("All Settled Results:", results));   /*

// Output:
// All Settled Results: [
//   { status: "fulfilled", value: "API1 Success" },
//   { status: "rejected", reason: "API2 Failed" },
//   { status: "fulfilled", value: "API3 Success" }
// ]
Explanation: Even though api2 fails, you still get results for all promises.






3) PROMISE.RACE

Promise.race([promise1, promise2, ...]) resolves or rejects as soon as the first promise resolves or rejects.

Only the first outcome is considered.

Use case: when you want the fastest result, regardless of others.


Example:   */

const fastTask = new Promise((res, rej) => setTimeout(() => res("Fast Task Done"), 1000));
const slowTask = new Promise((res, rej) => setTimeout(() => res("Slow Task Done"), 3000));
const errorTask = new Promise((res, rej) => setTimeout(() => rej("Error Task Failed"), 2000));

Promise.race([fastTask, slowTask, errorTask])
  .then(result => console.log("Race resolved with:", result))
  .catch(err => console.log("Race rejected with:", err));     /*

// Output after ~1 second:
// Race resolved with: Fast Task Done

Explanation: fastTask finishes first, so race resolves with that result; other promises are ignored.





4) HANDLING RESOLVED AND REJECTED VALUES

.then() handles resolved values.
.catch() handles rejected values.

Both Promise.all and Promise.race can be chained with .then().catch().

Promise.allSettled never rejects; status is always returned for each promise.






5) EXAMPLES SUMMARIZED

----- Example 1: Simple Local Tasks ----- */

const job1 = new Promise(res => setTimeout(() => res("Job1 Complete"), 500));
const job2 = new Promise(res => setTimeout(() => res("Job2 Complete"), 1000));

Promise.all([job1, job2])
  .then(results => console.log("All jobs finished:", results));

// Output:
// All jobs finished: ["Job1 Complete", "Job2 Complete"]
/*



----- Example 2: Mock API Calls ----- */

const fetchUser = new Promise(res => setTimeout(() => res("User Fetched"), 1500));
const fetchPosts = new Promise((res, rej) => setTimeout(() => rej("Posts Fetch Failed"), 2000));

Promise.allSettled([fetchUser, fetchPosts])
  .then(results => console.log("All API calls settled:", results));

// Output:
// All API calls settled: [
//   { status: "fulfilled", value: "User Fetched" },
//   { status: "rejected", reason: "Posts Fetch Failed" }
// ]



/*
----- Example 3: Conditional Promises ----- */

const fast = new Promise(res => setTimeout(() => res("Fast Result"), 1000));
const slow = new Promise(res => setTimeout(() => res("Slow Result"), 3000));
const fail = new Promise((res, rej) => setTimeout(() => rej("Failed Result"), 2000));

Promise.race([fast, slow, fail])
  .then(result => console.log("First finished promise:", result))
  .catch(err => console.log("First rejected promise:", err));

// Output:
// First finished promise: Fast Result


/*
6) SUMMARY

Promise.all → waits for all to resolve, rejects if any fails.

Promise.allSettled → waits for all to finish, returns status for each.

Promise.race → resolves or rejects as soon as first promise settles.

Use .then() for resolved values, .catch() for rejected.

Useful for coordinating multiple asynchronous operations in JavaScript. ====================================================================================================


** This version:  
- Fully explains **all Promise methods (all, allSettled, race)**.  
- Includes **new, original examples** for each method.  
- Everything is **inside one single organized block**.  

*/
