/*
============================================================
ASYNCHRONOUS JAVASCRIPT — ADVANCED TEST CHALLENGES
============================================================

INSTRUCTIONS:
- Each challenge is a QUESTION first
- Then the ANSWER is written below it
- The FINAL OUTPUT must appear as a COMMENT
- Do NOT use topics outside:
  Call Stack, Web APIs, Event Loop, setTimeout, Promises
============================================================
*/


/*
--------------------------------------------------
CHALLENGE 1 — Execution Order (Call Stack + Web API)
--------------------------------------------------
You are given the following code.
Without running it, determine the EXACT output order.
Explain it using Call Stack and Event Loop logic.
--------------------------------------------------
*/

console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");

/*
ANSWER:
Synchronous code runs first.
setTimeout callback goes to Web API, then Callback Queue.

OUTPUT:
A
C
B
*/


/*
--------------------------------------------------
CHALLENGE 2 — Variable Mutation Before Callback
--------------------------------------------------
Analyze the following code and determine the output.
Focus on variable value at callback execution time.
--------------------------------------------------
*/

let count = 10;

setTimeout(() => {
  console.log(count);
}, 0);

count += 5;
count *= 2;

/*
ANSWER:
count is modified BEFORE callback runs.

Final count value = 30

OUTPUT:
30
*/


/*
--------------------------------------------------
CHALLENGE 3 — Multiple setTimeout & FIFO Queue
--------------------------------------------------
Determine the correct output order.
Pay attention to timer delays and queue order.
--------------------------------------------------
*/

console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");
}, 100);

setTimeout(() => {
  console.log("Timeout 2");
}, 0);

console.log("End");

/*
ANSWER:
Synchronous first → shorter timer executes earlier.

OUTPUT:
Start
End
Timeout 2
Timeout 1
*/


/*
--------------------------------------------------
CHALLENGE 4 — Promise vs setTimeout (Microtasks)
--------------------------------------------------
Determine the output order.
Focus on microtask vs macrotask priority.
--------------------------------------------------
*/

console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

Promise.resolve().then(() => {
  console.log("3");
});

console.log("4");

/*
ANSWER:
Order:
1) Synchronous code
2) Microtasks (Promise)
3) Macrotasks (setTimeout)

OUTPUT:
1
4
3
2
*/


/*
--------------------------------------------------
CHALLENGE 5 — Nested Async Calls (Event Loop Depth)
--------------------------------------------------
Determine the final output order.
Explain how nested callbacks enter the queue.
--------------------------------------------------
*/

console.log("Begin");

setTimeout(() => {
  console.log("Outer");

  setTimeout(() => {
    console.log("Inner");
  }, 0);

}, 0);

console.log("Finish");

/*
ANSWER:
1) Synchronous first
2) Outer callback
3) Inner callback scheduled AFTER outer finishes

OUTPUT:
Begin
Finish
Outer
Inner
*/


/*
============================================================
END OF ASYNC TEST
============================================================
*/
