/*
====================================================================================
FULL DETAILED GUIDE: Call Stack, Web APIs & Event Loop, Callback Queue & Microtasks
====================================================================================
** Summary in Line -470- **


/*
1) JavaScript Execution Context
-------------------------------
What is an Execution Context?
Every JavaScript code executes in an Execution Context - it's like a "workspace" where code runs.

Two Types:
1. Global Execution Context (GEC): Default starting context when script begins
2. Function Execution Context (FEC): Created each time a function is called

What's Inside an Execution Context?
*/

let name = "Hassan"; // Stored in GEC
const age = 25;      // Also in GEC

function greet(person) {  // Creates FEC when called
    let message = "Hello " + person;  // Stored in FEC
    console.log(message);
}

greet(name);  // Creates FEC for greet()
greet("Ali"); // Creates ANOTHER FEC for greet()

/*
Each FEC has its own:
- Variable Environment (local variables)
- Scope Chain (access to outer variables)
- 'this' reference
*/



/*
2) Call Stack
-------------
The Call Stack is a stack data structure that manages all execution contexts.
LIFO Principle: Last In, First Out - like stacking plates
Synchronous Execution: Code runs line by line; each function must finish before next starts
*/

function makeCoffee() {
    console.log("Coffee ready!");
}

function eatBreakfast() {
    console.log("Eating croissant...");
    makeCoffee();  // This must finish before continuing
    console.log("Breakfast done!");
}

function morningRoutine() {
    console.log("Morning started");
    eatBreakfast();
    console.log("Off to work!");
}

morningRoutine();

/*
Key Insight: Everything in Call Stack is blocking. Heavy computation freezes everything!

// Result: 
Morning started
Eating croissant...
Coffee ready!
Breakfast done!
Off to work!

┌─────────────────────────────────┐
│ Call Stack (Top = Last Called)  │
├─────────────────────────────────┤
│ 1) morningRoutine()             │ ← Start
│    └─ console.log("Morning started")
│    └─ call eatBreakfast()
│
│ 2) eatBreakfast()               │ ← Pushed on top
│    └─ console.log("Eating croissant...")
│    └─ call makeCoffee()
│
│ 3) makeCoffee()                 │ ← Last function called
│    └─ console.log("Coffee ready!")
│
│ After executing makeCoffee() → popped from the top
│ Continue eatBreakfast():
│    └─ console.log("Breakfast done!")
│
│ After finishing eatBreakfast() → popped from the top
│ Continue morningRoutine():
│    └─ console.log("Off to work!")
│
│ After finishing morningRoutine() → Call Stack is empty
└─────────────────────────────────┘

// #OR an another way :

┌───────────────────────────────────────────────────────────┐
│                     Call Stack (Top = Last Called)       │
├───────────────────────────────────────────────────────────┤
│ Step 1: morningRoutine() called → pushed onto stack       │
│    Stack:                                                 │
│    ┌─────────────────────────────┐                        │
│    │ morningRoutine()              │                        │
│    └─────────────────────────────┘                        │
│    console.log("Morning started") executed → prints:      │
│    "Morning started"                                       
│    Next → call eatBreakfast()                              
├───────────────────────────────────────────────────────────┤
│ Step 2: eatBreakfast() called → pushed on top             │
│    Stack:                                                 │
│    ┌─────────────────────────────┐                        │
│    │ eatBreakfast()                │ ← top                │
│    │ morningRoutine()              │                        │
│    └─────────────────────────────┘                        │
│    console.log("Eating croissant...") executed → prints: │
│    "Eating croissant..."                                   
│    Next → call makeCoffee()                                 
├───────────────────────────────────────────────────────────┤
│ Step 3: makeCoffee() called → pushed on top               │
│    Stack:                                                 │
│    ┌─────────────────────────────┐                        │
│    │ makeCoffee()                 │ ← top                │
│    │ eatBreakfast()               │                        │
│    │ morningRoutine()             │                        │
│    └─────────────────────────────┘                        │
│    console.log("Coffee ready!") executed → prints:       │
│    "Coffee ready!"                                         
│    makeCoffee() finishes → popped from top               │
├───────────────────────────────────────────────────────────┤
│ Step 4: Resume eatBreakfast()                              │
│    Stack:                                                 │
│    ┌─────────────────────────────┐                        │
│    │ eatBreakfast()               │ ← top                │
│    │ morningRoutine()             │                        │
│    └─────────────────────────────┘                        │
│    console.log("Breakfast done!") executed → prints:     │
│    "Breakfast done!"                                      
│    eatBreakfast() finishes → popped from top            │
├───────────────────────────────────────────────────────────┤
│ Step 5: Resume morningRoutine()                            │
│    Stack:                                                 │
│    ┌─────────────────────────────┐                        │
│    │ morningRoutine()             │ ← top                │
│    └─────────────────────────────┘                        │
│    console.log("Off to work!") executed → prints:        │
│    "Off to work!"                                          
│    morningRoutine() finishes → popped from top           │
├───────────────────────────────────────────────────────────┤
│ Step 6: Call Stack empty → all code finished             │
└───────────────────────────────────────────────────────────┘
*/





/*
3) Web APIs
-----------
- Demonstrates Web APIs in JavaScript with asynchronous timers */

console.log("1. Wake up");

setTimeout(() => {
    console.log("4. Coffee is ready!");
}, 3000);

console.log("2. Brush teeth");
console.log("3. Get dressed");

setTimeout(() => {
    console.log("5. Leave for work");
}, 1000);  /*

// Expected Output:
// 1. Wake up
// 2. Brush teeth
// 3. Get dressed
// 5. Leave for work (after 1 second)
// 4. Coffee is ready! (after 3 seconds)
/*





4) Event Loop
-------------
Coordinator: constantly checks and coordinates between Call Stack and queues.
*/

// -Demonstrates Web APIs and Event Loop with asynchronous timers

console.log("1. Wake up"); // Synchronous

setTimeout(() => {
    console.log("4. Coffee is ready!"); // Async via Web API
}, 3000);

console.log("2. Brush teeth"); // Synchronous
console.log("3. Get dressed"); // Synchronous

setTimeout(() => {
    console.log("5. Leave for work"); // Async via Web API
}, 1000);
/*
┌──────────────────────────────────────────────────────────────┐
│                 Web APIs & Event Loop Flow                   │
├──────────────────────────────────────────────────────────────┤
│ Step 1: console.log("1. Wake up")                            │
│   - Runs synchronously on Call Stack                         │
│   → Output: 1. Wake up                                       │
│                                                              │
│ Step 2: setTimeout(..., 3000)                                │
│   - Callback (console.log("4. Coffee is ready!")) sent       │
│     to Web API (Timer)                                       │
│   - Call Stack is free                                        │
│                                                              │
│ Step 3: console.log("2. Brush teeth")                        │
│   - Runs synchronously on Call Stack                         │
│   → Output: 2. Brush teeth                                   │
│                                                              │
│ Step 4: console.log("3. Get dressed")                        │
│   - Runs synchronously on Call Stack                         │
│   → Output: 3. Get dressed                                   │
│                                                              │
│ Step 5: setTimeout(..., 1000)                                │
│   - Callback (console.log("5. Leave for work")) sent          │
│     to Web API (Timer)                                       │
│   - Call Stack is free                                        │
│                                                              │
│ --- After 1 second ---                                       │
│ Event Loop moves first ready callback from Callback Queue     │
│ (console.log("5. Leave for work")) to Call Stack             │
│   → Output: 5. Leave for work                                 │
│                                                              │
│ --- After 3 seconds ---                                       │
│ Event Loop moves next ready callback to Call Stack           │
│ (console.log("4. Coffee is ready!"))                         │
│   → Output: 4. Coffee is ready!                               │
│                                                              │
│ Key Points:                                                   │
│ - Synchronous code blocks Call Stack until done              │
│ - setTimeout handled by Web API, then queued via Event Loop  │
│ - Call Stack executes callbacks in order when ready          │
└──────────────────────────────────────────────────────────────┘

// Expected Output:
// 1. Wake up
// 2. Brush teeth
// 3. Get dressed
// 5. Leave for work (after ~1 second)
// 4. Coffee is ready! (after ~3 seconds)
/*





5) Callback Queue & Microtasks
-------------------------------
*/

// -Callback Queue with common Web API :

console.log("1. Page loaded");

setTimeout(() => {
    console.log("4. Show notification");
}, 0);

setTimeout(() => {
    console.log("5. Auto save data");
}, 2000);

console.log("2. User is reading content");

setTimeout(() => {
    console.log("6. Refresh ads");
}, 1000);

console.log("3. User scrolling");

/*
┌────────────────────────────────────────────────────────────────────────┐
│                         JAVASCRIPT RUNTIME MAP                          │
├────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│  ┌───────────────────────┐                                                     │
│  │      Call Stack         │                                                        │
│  │  (Synchronous Code)     │                                                        │
│  ├───────────────────────┤                                                     │
│  │ console.log("1. Page loaded")     → executes immediately                        │
│  │ console.log("2. User is reading") → executes immediately                        │
│  │ console.log("3. User scrolling")  → executes immediately                        │
│  └───────────────────────┘                                                     │
│            ▲                                                                       │
│            │ (Event Loop pushes callbacks when stack is empty)                      │
│            │                                                                       │
│  ┌───────────────────────┐                                                     │
│  │     Event Loop         │                                                        │
│  │    (Coordinator)       │                                                        │
│  │ - Checks Call Stack    │                                                        │
│  │ - Checks Callback Queue│                                                        │
│  └───────────────────────┘                                                     │
│            ▲                                                                       │
│            │                                                                       │
│  ┌───────────────────────┐        ┌──────────────────────────────┐    │
│  │    Callback Queue      │           │      Web APIs                 │         │
│  │     (Macrotasks)       │           │  (Browser Features)           │         │
│  ├───────────────────────┤        ├──────────────────────────────┤    │
│  │ setTimeout(0)          │◀───────│ Timer (0ms)                     │         │
│  │ setTimeout(1000)       │◀───────│ Timer (2000ms)                  │         │
│  │ setTimeout(2000)       │◀───────│ Timer (1000ms)                  │         │
│  └───────────────────────┘        └──────────────────────────────┘    │
│  *Note2 in Line 357*                    *Note1 in Line 351*
│                                                                                 │
│                                                                                 │
│  Execution Order:                                                               │
│  1) Call Stack runs all sync code first                                         │
│  2) setTimeout callbacks wait inside Web APIs                                   │
│  3) Finished timers move to Callback Queue                                      │
│  4) Event Loop pushes them back to Call Stack                                   │
│                                                                                 │
│                                                                                 │
│  Final Console Output Order:                                                    │
│  1. Page loaded                                                                 │
│  2. User is reading content                                                     │
│  3. User scrolling                                                              │
│  4. Show notification // 0s                                                          │
│  6. Refresh ads // 1s                                                           │
│  5. Auto save data  // 2s                                                       │
│                                                                                  │
└────────────────────────────────────────────────────────────────────────┘


Note 1 – Browser Web API
- setTimeout is registered in Web API (Timers)
- Each timer runs independently and starts counting immediately
- No ordering based on code position or delay
- Timer moves to Callback Queue only after its delay finishes

Note 2 – Callback Queue
- Only receives ready callbacks
- Callback is pushed into queue after timer finishes
- Callbacks ordered by finish time (FIFO)
- After 0s: only setTimeout(0) callback is in the queue
/*






6) Synchronous vs Asynchronous
------------------------------
*/

// Synchronous Example:
console.log("Turn on oven (200°C)");
console.log("Prepare dough (5 minutes)");
console.log("Bake pizza (15 minutes)");
console.log("Eat pizza!");

// Asynchronous Example:
console.log("Turn on oven (200°C)");

setTimeout(() => {
    console.log("Pizza baked!");
}, 15000);

console.log("Prepare dough (immediate)");
console.log("Listen to music while waiting...");
console.log("Check phone while waiting...");

/*



7) Single-Threaded Nature of JavaScript
---------------------------------------
*/

console.log("Start rendering animation...");

function blockForThreeSeconds() {
    const start = Date.now();
    while (Date.now() - start < 3000) {}
}

blockForThreeSeconds();

console.log("Animation frame 1");
console.log("Animation frame 2");
console.log("Animation frame 3");

// Solution using async
console.log("Start rendering animation...");

setTimeout(() => {
    console.log("Heavy calculation done!");
}, 3000);

console.log("Animation frame 1");
console.log("Animation frame 2");
console.log("Animation frame 3");

/*



8) Practical Example: Complete Flow
-----------------------------------
*/

console.log("Website loading...");

function loadHeader() {
    console.log("Header loaded");
}

function loadContent() {
    console.log("Main content loaded");
    loadComments();
}

function loadComments() {
    console.log("Comments loaded");
}

setTimeout(() => {
    console.log("Ad banner loaded (took 2s)");
}, 2000);

Promise.resolve()
    .then(() => console.log("User profile fetched"));

document.addEventListener('click', () => {
    console.log("User interaction handled");
});

loadHeader();
loadContent();

console.log("Website ready!");




/*

## Real-Life Analogies
-----------------------
Call Stack → Stack of plates
Web API → Coffee machine
Event Loop → Restaurant host
Microtask Queue → VIP line at club
Callback Queue → Regular line at club
Single Thread → One chef in kitchen



------------------------
####### Summary #######
------------------------

1) JavaScript Execution Context
- Every code runs in an Execution Context (workspace).
- Global Execution Context (GEC) → default context.
- Function Execution Context (FEC) → created for each function call.
- Each context has its own variables, scope chain, and 'this'.

2) Call Stack
- LIFO structure managing execution contexts.
- Synchronous code executes line by line.
- Functions are pushed when called and popped when finished.
- Heavy computation blocks everything else.

3) Web APIs
- Browser-provided features (setTimeout, DOM events, fetch).
- Handle async tasks outside Call Stack.
- After completion, callbacks go to Callback Queue.

4) Event Loop
- Continuously checks Call Stack and Callback Queue.
- Moves callbacks to Call Stack when stack is empty.
- Ensures async operations execute after synchronous code.

5) Callback Queue & Microtasks
- Callback Queue: FIFO queue for macrotasks (setTimeout, setInterval).
- Microtasks Queue: higher priority, used by Promises.
- Event Loop executes microtasks first, then macrotasks.

6) Synchronous vs Asynchronous
- Synchronous → blocking, line by line.
- Asynchronous → non-blocking, uses Web APIs and queues.

7) Single-Threaded Nature of JavaScript
- Only one thread executes code at a time.
- Blocking code freezes the main thread.
- Async patterns (setTimeout, Promises) avoid blocking.

8) Practical Example: Complete Flow
- Shows combined use of synchronous code, Web APIs, Promises, and event listeners.
- Illustrates how Call Stack, Callback Queue, and Microtasks interact.

9) Real-Life Analogies
- Call Stack → stack of plates.
- Web API → coffee machine (async worker).
- Event Loop → coordinator (host).
- Microtask Queue → VIP line.
- Callback Queue → regular line.
- Single Thread → one chef executing tasks.

10) Key Takeaways
- JS is single-threaded but appears async via Web APIs.
- Call Stack = synchronous, blocking.
- Web APIs = async operations handled by browser.
- Event Loop = coordinator between stack and queues.
- Microtasks (Promises) execute before macrotasks (setTimeout).

*/
