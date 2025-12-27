/*
============================================================
Asynchronous vs Synchronous Programming
============================================================

1) Meaning
----------
There are two ways programs execute tasks:

SYNCHRONOUS (Blocking):
- Operations run in sequence (one after another)
- Each operation waits for the previous one
- Code execution STOPS until the task finishes

ASYNCHRONOUS (Non-blocking):
- Operations can run in parallel
- Tasks don’t wait for each other
- Code continues while tasks run in background

============================================================


2) Synchronous Programming
--------------------------
Operations Run in Sequence

Example:               */
console.log("1 - Start preparing breakfast");
console.log("2 - Pour cereal in bowl");
console.log("3 - Add milk");
console.log("4 - Eat breakfast");
console.log("5 - Clean dishes");    

/* Output order is EXACTLY the same as written.
Each step waits for the previous one.

Real Life Story (Coffee Shop – Synchronous):
1. You order coffee 
2. Barista focuses ONLY on you
3. You wait doing nothing
4. Coffee is finished
5. Next customer can order

Problem:
- Long waiting line
- Everyone is blocked

============================================================


3) Asynchronous Programming
---------------------------
Operations Run in Parallel

Example: */
console.log("1 - Start morning routine");

setTimeout(() => {
  console.log("2 - Coffee brewing (5 minutes)");
}, 5000);

console.log("3 - Check emails");
console.log("4 - Make toast"); /*

Execution order:
1
3
4
(wait 5 seconds)
2

Coffee is prepared while other tasks continue.

Real Life Story (Coffee Shop – Asynchronous):
1. You order coffee 
2. You get a ticket number
3. You sit, work, relax
4. Coffee is prepared in background
5. Your number is called when ready
6. Other customers are served meanwhile

Benefit:
- Faster system
- Better experience

============================================================


4) Facebook Example
-------------------

Synchronous Facebook (Bad UX – Imaginary):
- Load posts → wait
- Load notifications → wait
- Load messages → wait
User stares at loading screen 

Asynchronous Facebook (Real):
- Page structure appears instantly
- Posts, notifications, messages load separately
- User can interact immediately 

Result:
- Smooth experience
- No blocking

============================================================


5) Simulation Examples
----------------------

Synchronous File Read:
- Program waits until file finishes reading
- Nothing else runs during that time

Asynchronous File Read:
- File reads in background
- Program continues immediately
- Result appears when ready

Browser Simulation:
1. Parse HTML (sync)
2. Apply CSS (sync)
3. Page becomes interactive
4. Images load asynchronously
5. API data loads asynchronously

============================================================


6) JavaScript Is Single-Threaded
--------------------------------
Meaning:
- One main execution thread
- One task at a time

Example:
A heavy loop blocks:
- UI freezes
- Clicks don’t respond
- Everything stops 

Why this is dangerous:
- Bad user experience

============================================================

How JavaScript Handles Async
----------------------------
JavaScript uses:
- Web APIs
- Callback Queue
- Event Loop

Event Loop Steps:
1. Run synchronous code
2. Send async tasks to Web APIs
3. When finished, callbacks go to queue
4. Event Loop checks if stack is empty
5. Executes callbacks when possible

============================================================



7) Multi-Threaded Languages
---------------------------
Languages like:
- Java
- C#
- C++
- Python (with threads)

They can:
- Run multiple threads truly in parallel
- Use more CPU cores
- Handle heavy calculations better

JavaScript:
- Not truly parallel
- Simulates async behavior using Event Loop

============================================================


8) Practical Web App Example
----------------------------

Synchronous Web App:
- User waits 6 seconds
- Page appears only after everything finishes
- Terrible UX 

Asynchronous Web App:
- Page skeleton appears immediately
- Requests run in parallel
- Content fills gradually
- Excellent UX 

============================================================


9) Key Takeaways
----------------

Use Synchronous When:
- Simple scripts
- Fast operations
- Setup/configuration code

Use Asynchronous When:
- API requests
- File operations
- Database queries
- User interfaces
- Timers and delays

JavaScript Async Patterns:
1. Callbacks
2. Promises
3. Async / Await (best & cleanest)

============================================================

FINAL SUMMARY
-------------
Synchronous:
- Sequential
- Blocking
- Like waiting in one long line

Asynchronous:
- Parallel behavior
- Non-blocking
- Like ticket system in a shop

JavaScript:
- Single-threaded
- Uses Event Loop for async
- Async is ESSENTIAL for modern web apps

============================================================
*/
