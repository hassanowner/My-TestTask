/*
================================================================================
TOPICS OVERVIEW (FULL DESCRIPTION)
================================================================================

1) What is Date()?
   - JavaScript built-in object representing a specific point in time.
   - Internally, Date is stored as milliseconds since January 1, 1970 (Epoch time).
   - Converts these milliseconds into human-readable year, month, day, hours, minutes, and seconds.

2) Proving the Millisecond Concept
   - Date.now() returns the number of milliseconds since 1970.
   - Demonstrates how JavaScript calculates current date and time.
   - Can convert milliseconds to seconds, minutes, hours, days, and years.

3) The Year 2038 Problem
   - A limitation in 32-bit systems storing time as seconds since 1970.
   - Maximum value: 2,147,483,647 seconds.
   - After this, timestamps may overflow, become negative, or show incorrect dates.
================================================================================
*/


/* =============================================================================
TOPIC 1: What is Date()?
============================================================================= */

/* Create a Date object for the current moment */
let now = new Date();

console.log(now);

/*
What will appear:
- Example: Sun Dec 21 2025 16:00:00 GMT+0300

What this means:
- JavaScript converts the internal milliseconds into a human-readable date.
- Date object itself does not store the year, month, or day separately.
- All values are calculated based on milliseconds since January 1, 1970.
*/



/* =============================================================================
TOPIC 2: Proving the Millisecond Concept
============================================================================= */

/* Get current milliseconds since 1970 */
let milliseconds = Date.now();

console.log(milliseconds);

/*
What will appear:
- Large number like: 1766313600000

What this means:
- Represents total milliseconds elapsed since Jan 1, 1970.
- This number is the base for all date calculations in JavaScript.
*/

/* Convert milliseconds to years to demonstrate Epoch calculation */
let yearsSince1970 = milliseconds / 1000 / 60 / 60 / 24 / 365;
// 1000 ->to seconds, 60 ->to minutes, 60 ->to hours, 24 ->to days, 365 -> to years ≈
console.log(yearsSince1970);

/*
What will appear:
- Approximately: 56

What this means:
- About 56 years have passed since 1970.
- Shows that JavaScript calculates the current year from milliseconds only.
*/



/* =============================================================================
TOPIC 3: The Year 2038 Problem
============================================================================= */

/* Maximum 32-bit signed integer in seconds */
let max32BitSeconds = 2147483647;

/* Convert it to a readable date */
let lastSafeDate = new Date(max32BitSeconds * 1000);

console.log(lastSafeDate);

/*
What will appear:
- Tue Jan 19 2038 03:14:07 UTC

What this means:
- This is the last valid date for 32-bit signed time systems.
- Adding one second would cause an overflow in such systems.
- JavaScript uses 64-bit numbers, so it avoids this problem naturally.
*/

/*
================================================================================
END OF EXPLANATION
================================================================================
*/
