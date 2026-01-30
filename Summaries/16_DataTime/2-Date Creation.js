/*
================================================================================
TOPIC: JavaScript Date Creation, Parsing, and Performance Timing
================================================================================

This file demonstrates:

PART 1:
- Creating Date objects using:
  1) Timestamps
  2) Date strings
  3) Numeric arguments
- Understanding ISO formats and defaults

PART 2:
- Measuring execution time using Date objects
- Comparing simple loops, DOM operations, and heavy computations

NOTE:
- DOM timing example runs only in browser environments
================================================================================
*/


/* =============================================================================
PART 1: DATE CREATION AND PARSING
============================================================================= */

// Example 1: Using Date.parse()
let msParsed = Date.parse("Jan 01 2000");
console.log(msParsed);
/*
Expected:
946684800000
Meaning:
Milliseconds since Jan 1, 1970 (Unix Epoch)
*/


// Example 2: Creating Date using timestamps
let dateEpoch = new Date(0);
console.log(dateEpoch);
/*
Thu Jan 01 1970 00:00:00 UTC
*/

let dateFromMS = new Date(946684800000);
console.log(dateFromMS);
/*
Sat Jan 01 2000 00:00:00 (local timezone)
*/


// Example 3: Creating Date from strings
let dateStr1 = new Date("01/01/2000");
console.log(dateStr1);

let dateStr2 = new Date("2000-01-01");
console.log(dateStr2);

let dateStr3 = new Date("2000-01");
console.log(dateStr3);

let dateStr4 = new Date("2000");
console.log(dateStr4);
/*
Notes:
- Missing month/day default to January 1
- ISO formats are safest across browsers
*/


// Example 4: Creating Date using numeric values
let dateNumericFull = new Date(2000, 0, 1, 12, 30, 0);
console.log(dateNumericFull);

let dateNumericPartial = new Date(2000, 0, 1);
console.log(dateNumericPartial);
/*
Note:
- Month is zero-based (0 = January)
*/


// Example 5: ISO string with UTC time
let dateISO = new Date("2000-01-01T12:30:00Z");
console.log(dateISO);
/*
UTC time converted to local timezone
*/


/* =============================================================================
PART 1 SUMMARY
=============================================================================

- new Date(timestamp)
- new Date(dateString)
- new Date(year, month, day, hour, min, sec)
- Date.parse(string) returns milliseconds
- Month index starts from 0
- ISO format recommended for consistency
*/


/* =============================================================================
PART 2: PERFORMANCE TIMING USING DATE
============================================================================= */


/* -----------------------------------------------------------------------------
Example 1: Simple Loop Timing
----------------------------------------------------------------------------- */
let startTimeLoop = new Date();

for (let i = 0; i < 100000; i++) {
  let x = i * 2;
}

let endTimeLoop = new Date();
let durationLoop = endTimeLoop - startTimeLoop;

console.log("Simple loop duration (ms):", durationLoop);


/* -----------------------------------------------------------------------------
Example 2: DOM Manipulation Timing (Browser Only)
----------------------------------------------------------------------------- */
if (typeof document !== "undefined") {
  let startTimeDOM = new Date();

  for (let counter = 0; counter < 5000; counter++) {
    let divElement = document.createElement("div");
    divElement.textContent = "Item " + counter;
    document.body.appendChild(divElement);
  }

  let endTimeDOM = new Date();
  let durationDOM = endTimeDOM - startTimeDOM;

  console.log("DOM manipulation duration (ms):", durationDOM);
} else {
  console.log("DOM example skipped (not running in browser)");
}


/* -----------------------------------------------------------------------------
Example 3: Large Array Processing Timing
----------------------------------------------------------------------------- */
let largeArray = [];
for (let i = 0; i < 1000000; i++) {
  largeArray.push(i);
}

let startTimeArrayProcessing = new Date();

let squaredArray = largeArray.map(function (num) {
  return num * num;
});

let endTimeArrayProcessing = new Date();
let durationArrayProcessing = endTimeArrayProcessing - startTimeArrayProcessing;

console.log("Large array processing duration (ms):", durationArrayProcessing);


/* =============================================================================
PART 2 SUMMARY
=============================================================================

- Date objects can measure execution time using subtraction
- Loops are fast
- DOM operations are slow
- Heavy computations scale with data size
- For high precision timing, prefer performance.now()
=============================================================================
*/
