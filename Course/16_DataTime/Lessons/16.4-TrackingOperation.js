/*
================================================================================
TOPIC: Tracking Operation Time in JavaScript (Three Examples)
================================================================================

- Example 1: Simple loop timing using Date objects
- Example 2: DOM manipulation timing
- Example 3: Large array processing timing
================================================================================
*/


/* =============================================================================
Example 1: Simple Loop Timing 
============================================================================= */
let startTimeLoop = new Date();

for (let i = 0; i < 100000; i++) {
  // simple arithmetic operation
  let x = i * 2;
}

let endTimeLoop = new Date();
let durationLoop = endTimeLoop - startTimeLoop;

console.log("Simple loop duration (ms):", durationLoop);
/*
What will appear:
- A number like: 5
What this means:
- Loop ran very fast; measured in milliseconds
- Shows basic use of Date objects for timing
*/




/* =============================================================================
Example 2: DOM Manipulation Timing 
============================================================================= */
let startTimeDOM = new Date();

for (let counter = 0; counter < 5000; counter++) {
  let divElement = document.createElement("div");
  divElement.textContent = `Item ${counter}`;
  document.body.appendChild(divElement);
}

let endTimeDOM = new Date();
let durationDOM = endTimeDOM - startTimeDOM;

console.log("DOM manipulation duration (ms):", durationDOM);
/*
What will appear:
- A number like: 800
What this means:
- Creating and appending DOM elements takes more time than simple loops
- Useful to measure frontend performance
*/





/* =============================================================================
Example 3: Large Array Processing Timing (Hard)
============================================================================= */
let largeArray = [];
for (let i = 0; i < 1000000; i++) {
  largeArray.push(i);
}

let startTimeArrayProcessing = new Date();

// Perform heavy operation: map each element
let squaredArray = largeArray.map(num => num * num);

let endTimeArrayProcessing = new Date();
let durationArrayProcessing = endTimeArrayProcessing - startTimeArrayProcessing;

console.log("Large array processing duration (ms):", durationArrayProcessing);
/*
What will appear:
- A number like: 200-500 depending on machine
What this means:
- Heavy computation on large data takes longer
- Shows how to measure performance for calculations or data processing
*/


/*
================================================================================
SUMMARY
================================================================================

- Use Date objects to track start and end time: simple and effective
- Simple loops are fast, DOM operations are slower, heavy computations are slower still
- This method is useful for basic benchmarking
- For higher precision or sub-millisecond timing, use performance.now()

================================================================================
*/
