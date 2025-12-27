/*
  FULL DETAILED GUIDE: Call Stack & Web APIs
  
---------------------------------
1) Call Stack
---------------------------------

- Call Stack is a data structure used by the JavaScript engine to keep track of function calls.
- Think of it as a stack of plates: last plate added = first plate removed (LIFO: Last In, First Out)
- JavaScript is single-threaded; only one task runs at a time.
- Execution Context: Each function has its own workspace storing:
    • Local variables
    • Function arguments
    • Scope chain (access to outer variables)
    • 'this' reference

  Examples:

  // Simple Example: One function call
*/
function simpleOne() { console.log("Simple One"); }
simpleOne();
/*
  Output:
  Simple One
  Explanation: Only one function, executes and exits.

  // Medium Example: Nested function calls
*/
function mediumOne() { console.log("Medium One"); }
function mediumTwo() { mediumOne(); console.log("Medium Two"); }
mediumTwo();
/*
  Output:
  Medium One
  Medium Two
  Explanation:
  1. mediumTwo() pushed
  2. mediumOne() pushed → executes → popped
  3. mediumTwo() continues → popped

  // Complex Example: Three nested functions + Web API
*/
function one() { console.log("One"); }
function two() { one(); console.log("Two"); }
function three() { two(); console.log("Three"); }

three();

setTimeout(() => { console.log("Web API callback executed"); }, 0);
console.log("Synchronous code runs first");
/*

Time Flow Diagram:
┌─────────────────────────────────────┐
│ Call Stack (Top = Last Called)      │
├─────────────────────────────────────┤
│ 1) three()                          │ ← Start
│    └─ call two()
│
│ 2) two()                            │ ← Pushed on top
│    └─ call one()
│
│ 3) one()                            │ ← Last function called
│    └─ console.log("One")
│
│ After executing one() → popped from the top
│ Continue two():
│    └─ console.log("Two")
│
│ After finishing two() → popped from the top
│ Continue three():
│    └─ console.log("Three")
│
│ After finishing three() → Call Stack is empty
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ Web API / Event Loop                │
├─────────────────────────────────────┤
│ setTimeout(() => console.log(...),0)│
│    └─ Sent to Web API (timer)       │
│ Synchronous code continues:         │
│    └─ console.log("Synchronous code runs first") │
│ Timer expires → callback enters     │
│ Callback Queue → Event Loop moves   │
│ → Call Stack → executes:            │
│    └─ console.log("Web API callback executed") │
└─────────────────────────────────────┘

Output Order:
One
Two
Three
Synchronous code runs first
Web API callback executed                                                                    
                                                                                                                                          Web API callback executed

Explanation:
- three() calls two() → calls one()
- Call Stack executes all synchronous code first
- setTimeout is handled by Web API → callback queued → executed last

Notes:
- Everything in the Call Stack executes synchronously.
- Heavy computations block everything else.




  Example of blocking:
*/
console.log("Start heavy task");
let sum = 0;
for (let i = 0; i < 1e9; i++) sum += i;
console.log("End heavy task");
/*
  User cannot interact while loop runs. Blocks UI.




----------------------------------
2) Web API
----------------------------------
  - Web APIs are features provided by the browser to handle asynchronous operations outside the main thread.
  - Examples:
      • setTimeout, setInterval
      • fetch
      • DOM events
      • localStorage
      • geolocation
  - When JS encounters a Web API call:
      1. It sends the task to the browser environment.
      2. Main thread continues without waiting.
      3. Once task completes, callback goes to Callback Queue.
      4. Event Loop moves it to Call Stack when empty.

  Example:
*/
setTimeout(() => { console.log("Web API callback executed"); }, 0);
console.log("Synchronous code runs first");
/*
  Output:
  Synchronous code runs first
  Web API callback executed

  Explanation:
  1. setTimeout goes to Web API.
  2. JS continues main thread → logs synchronous code.
  3. Web API timer finishes → callback enters Callback Queue.
  4. Event Loop moves callback to Call Stack → executes.

  Key Points:
  - Web APIs are part of the browser, not JavaScript itself.
  - JS engine interacts with Web APIs via callbacks, Promises, or async/await.
*/
