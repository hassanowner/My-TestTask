/*
============================================================
JAVASCRIPT ASYNC VS SYNC – FULL CHEAT SHEET
============================================================

1) EXECUTION TYPES
------------------
SYNCHRONOUS (Blocking):
- Executes line by line
- Each task waits for previous
- Blocks UI
Example:
console.log("Step 1");
console.log("Step 2");

ASYNCHRONOUS (Non-blocking):
- Tasks run in parallel
- JS continues while tasks execute in background
- Uses Web APIs + Event Loop
Example:
console.log("Start");
setTimeout(()=>console.log("Async Task"), 1000);
console.log("End");

Real-life analogy:
- Sync → waiting in line
- Async → ticket system

============================================================
2) JS SINGLE-THREADED
---------------------
- One main execution thread
- Heavy loops block everything
Example:
let sum=0; for(let i=0;i<1e9;i++) sum+=i;
console.log(sum); // UI freezes

============================================================
3) EXECUTION CONTEXT
--------------------
- Global Execution Context (GEC) → default
- Function Execution Context (FEC) → per function call
- Each stores:
  • Local vars
  • Arguments
  • Scope chain
  • 'this'

============================================================
4) CALL STACK
-------------
- LIFO: Last In, First Out
- Manages execution contexts
- All synchronous code runs here
Example:
function a(){console.log("A");}
function b(){a(); console.log("B");}
b();
// Output: A → B

Heavy computation blocks stack → freezes everything

============================================================
5) WEB APIS
------------
- Browser provides async capabilities: setTimeout, fetch, DOM events
- JS calls Web API → main thread continues
- When task finishes → callback queued

Example:
setTimeout(()=>console.log("Done"),0);
console.log("Sync first");
// Output: Sync first → Done

============================================================
6) CALLBACK QUEUE & MICROTASKS
-------------------------------
- Callback Queue: macrotasks (setTimeout, setInterval) FIFO
- Microtasks: Promises, async/await → higher priority
- Event Loop:
  1. Runs sync code
  2. Runs microtasks
  3. Runs macrotasks

Example:
console.log("Start");
setTimeout(()=>console.log("Macrotask"),0);
Promise.resolve().then(()=>console.log("Microtask"));
console.log("End");
// Output: Start → End → Microtask → Macrotask

============================================================
7) ASYNC FLOW EXAMPLES
----------------------
1) Multiple setTimeouts:
setTimeout(()=>console.log("1"),100);
setTimeout(()=>console.log("2"),0);
console.log("Sync");
// Output: Sync → 2 → 1

2) Variable changes before async callback:
let val=10;
setTimeout(()=>console.log(val),0);
val+=5;
console.log(val);
// Output: 15 → 15

3) Nested callbacks:
setTimeout(()=>{
  console.log("Outer");
  setTimeout(()=>console.log("Inner"),0);
},0);
console.log("Sync");
// Output: Sync → Outer → Inner

============================================================
8) PRACTICAL WEB APP FLOW
-------------------------
- Page loads sync skeleton
- API, images, ads load async
- Promises fetch user data (microtasks)
- Event listeners handle user interaction
- Smooth UX, no blocking

Example:
console.log("Header loaded");
console.log("Content loaded");
Promise.resolve().then(()=>console.log("User profile fetched"));
setTimeout(()=>console.log("Ad loaded"),2000);
console.log("Page ready!");
// Output: Header → Content → Page ready → User profile → Ad loaded

============================================================
9) REAL-LIFE ANALOGIES
----------------------
- Call Stack → stack of plates
- Web API → coffee machine (worker)
- Event Loop → restaurant host
- Microtasks → VIP line
- Callback Queue → regular line
- Single Thread → one chef

============================================================
10) KEY TAKEAWAYS
-----------------
- Sync → blocking, simple tasks
- Async → non-blocking, essential for modern web apps
- JS is single-threaded → async simulated via Event Loop & Web APIs
- Microtasks (Promises) before macrotasks (setTimeout)
- Heavy loops block UI → avoid in main thread
- Use Callbacks, Promises, async/await for clean async
 
============================================================
*/
