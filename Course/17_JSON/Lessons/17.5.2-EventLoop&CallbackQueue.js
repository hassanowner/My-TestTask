/*
Topics to be studied:
1) Call Stack in JavaScript
2) Callback Queue & Event Loop
3) Asynchronous Behavior with setTimeout, fetch, and Promises
4) Execution Order and Variable Scope in Async Code

Explanation of Topics:
- Call Stack: Tracks all function calls; JavaScript executes one function at a time (single-threaded). Functions are pushed to the stack and popped when finished.
- Callback Queue: Completed async tasks (setTimeout, fetch, or event callbacks) wait here (FIFO: first-in, first-out).
- Event Loop: Monitors the call stack; moves callbacks from queue to stack when empty.
- Execution Order: Synchronous code → microtasks (Promises) → macrotasks (setTimeout, setInterval).
- Variable Scope: Variable changes before callback execution affect the output.

--------------------------------------------------
1) JavaScript Asynchronous Behavior & Event Loop
--------------------------------------------------
*/

console.log("Start");

setTimeout(() => {
  console.log("Async 1");
}, 0);

console.log("End");

/*
Output:
Start
End
Async 1
Explanation:
Synchronous "Start" and "End" execute first. 
Async callback goes to callback queue and runs after call stack is empty.
*/

console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

setTimeout(() => {
  console.log(value);
}, 0);

let value = 50;
value += 25;

console.log("C");

/*
┌───────────────────────────────────────────────┐
│ Call Stack (Top = Last Called)                │
├───────────────────────────────────────────────┤
│ 1) console.log("A")                           │ ← Start
│    └─ prints "A"                              │
│ After executing → popped from stack          │
│
│ Schedule setTimeout(() => console.log("B"))  │ → added to Callback Queue
│ Schedule setTimeout(() => console.log(value))│ → added to Callback Queue
│
│ 2) let value = 50                             │ ← executes synchronously
│ 3) value += 25                                │ ← updates value to 75
│ 4) console.log("C")                           │
│    └─ prints "C"                              │
│ After executing → popped from stack          │
│
│ Event Loop checks Callback Queue             │
│ Callback Queue: [B callback, value callback] │
│
│ 5) B callback()                               │ ← Pushed from Callback Queue
│    └─ console.log("B")                        │
│ After executing → popped from stack          │
│ Callback Queue: [value callback]             │
│
│ 6) value callback()                           │ ← Pushed from Callback Queue
│    └─ console.log(value)                      │
│ After executing → popped from stack          │
│
│ Call Stack is now empty, Callback Queue empty│
└───────────────────────────────────────────────┘

Output order:
A
C
B
75
Explanation:
Callbacks enter callback queue in order. 
Event loop executes them after synchronous code.





--------------------------------------------------
2) Handling Multiple Async Calls (Event Loop in Depth)
--------------------------------------------------
*/

console.log("Start");

setTimeout(() => {
  console.log("Timer 1");
}, 100);

setTimeout(() => {
  console.log("Timer 2");
}, 0);

console.log("End");

/*
Output:
Start
End
Timer 2
Timer 1
Explanation:
setTimeout with 0ms added to callback queue first, runs before Timer 1 (100ms)
*/

let counter = 10;

console.log("Initial:", counter);

setTimeout(() => {
  console.log("After Timeout 1:", counter);
}, 0);

counter += 5;

setTimeout(() => {
  console.log("After Timeout 2:", counter);
}, 0);

counter *= 2;

console.log("Final:", counter);

/*
Output:
Initial: 10
Final: 30
After Timeout 1: 30
After Timeout 2: 30
Explanation:
Event loop executes queued callbacks in order after synchronous code.




--------------------------------------------------
3) Examples: Callback Queue
--------------------------------------------------
*/

/* Example 1: Multiple setTimeout to demonstrate FIFO */
console.log("Queue Example 1");

setTimeout(() => {
  console.log("First callback");
}, 0);

setTimeout(() => {
  console.log("Second callback");
}, 0);

console.log("Synchronous code");

/*
Output:
Queue Example 1
Synchronous code
First callback
Second callback
Explanation:
Callbacks enter callback queue in order → executed FIFO after call stack is empty.
*/

/* Example 2: Mixing Promises (microtasks) and setTimeout (macrotasks) */
console.log("Queue Example 2");

setTimeout(() => {
  console.log("Macrotask 1 (setTimeout)");
}, 0);

Promise.resolve().then(() => {
  console.log("Microtask 1 (Promise)");
});

console.log("Synchronous code 2");

/*
Output:
Queue Example 2
Synchronous code 2
Microtask 1 (Promise)
Macrotask 1 (setTimeout)
Explanation:
Promises go to microtask queue → executed before macrotasks (callback queue).
*/

/* Example 3: Nested setTimeout to show queue order */
console.log("Queue Example 3");

setTimeout(() => {
  console.log("Outer callback");
  setTimeout(() => {
    console.log("Inner callback");
  }, 0);
}, 0);

console.log("Synchronous code 3");

/*

┌───────────────────────────────────────────────┐
│ Call Stack (Top = Last Called)                │
├───────────────────────────────────────────────┤
│ 1) console.log("Queue Example 3")            │ ← Start
│    └─ prints "Queue Example 3"               │
│ After executing → popped from stack          │
│
│ 2) console.log("Synchronous code 3")         │ ← Pushed after scheduling Outer callback
│    └─ prints "Synchronous code 3"           │
│ After executing → popped from stack          │
│
│ Event Loop checks Callback Queue             │
│ Callback Queue: [Outer callback]            │
│
│ 3) Outer callback()                          │ ← Pushed from callback queue
│    └─ console.log("Outer callback")         │
│    └─ schedules Inner callback → added to Callback Queue
│ After executing → popped from stack          │
│ Callback Queue: [Inner callback]            │
│
│ 4) Inner callback()                          │ ← Pushed from callback queue
│    └─ console.log("Inner callback")         │
│ After executing → popped from stack          │
│
│ Call Stack is now empty, Callback Queue empty│
└───────────────────────────────────────────────┘

Output order:
Queue Example 3
Synchronous code 3
Outer callback
Inner callback
Explanation:
Outer callback executes first, then pushes Inner callback into callback queue.
Event loop executes Inner callback after call stack is empty again.

/*
--------------------------------------------------
Summary:
--------------------------------------------------
- Call Stack executes synchronous code one at a time.
- Callback Queue holds completed async tasks in FIFO order.
- Event Loop moves callbacks from queue to call stack when empty.
- Microtasks (Promises) have higher priority than macrotasks (setTimeout).
- Variables updated before callback execution affect the output.
- setTimeout with 0ms still executes after synchronous code.
- Understanding Call Stack and Callback Queue is essential for asynchronous JavaScript, AJAX, fetch, and Promises.
*/
