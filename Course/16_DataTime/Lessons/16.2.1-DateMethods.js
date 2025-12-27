
/*
================================================================================
TOPIC: JavaScript Date Methods Overview
================================================================================

- getTime(): Returns the number of milliseconds since January 1, 1970.
- getDate(): Returns the day of the month (1-31).
- getFullYear(): Returns the 4-digit year.
- getMonth(): Returns the month (0-11, zero-based). // by index
- getDay(): Returns the day of the week (0-6, 0 = Sunday). // index 
- getHours(): Returns the hour of the day (0-23). // index
- getMinutes(): Returns the minutes (0-59). //index 
- getSeconds(): Returns the seconds (0-59). //index 

These methods are useful for:
- Calculating differences between dates (e.g., age calculation).
- Extracting specific components of a date.
- Performing time-based operations or formatting.
================================================================================
*/


/* --- Example 1: Calculate Difference Between Two Dates --- */
let dateNow = new Date();                     // Current date and time
let birthday = new Date("Mar 14, 1995");      // Changed birthday to Mar 14, 1995

let dateDiff = dateNow - birthday;           // Difference in milliseconds

console.log(dateDiff);

/*
What will appear:
- A large number like: 947788800000

What this means:
- Total milliseconds between birthday and now.
- JavaScript subtracts the two Date objects and returns milliseconds.
*/

console.log(dateDiff / 1000 / 60 / 60 / 24 / 365);

/*
What will appear:
- Approximate age in years: 30.8

What this means:
- Converting milliseconds → years gives the age of a person born on Mar 14, 1995.
*/



/* --- Example 2: Extract Components From Current Date --- */
console.log(dateNow);

/*
What will appear:
- Full current date and time:
  Example: Sun Dec 21 2025 16:35:00 GMT+0300
*/

console.log(dateNow.getTime());

/*
What will appear:
- Total milliseconds since 1970:
  Example: 1766315700000
*/

console.log(dateNow.getDate());

/*
What will appear:
- Day of the month (1-31)
  Example: 21
*/

console.log(dateNow.getFullYear());

/*
What will appear:
- 4-digit year
  Example: 2025
*/

console.log(dateNow.getMonth());

/*
What will appear:
- Zero-based month (0 = January, 11 = December)
  Example: 11 → December
*/

console.log(dateNow.getDay());

/*
What will appear:
- Day of the week (0 = Sunday, 6 = Saturday)
  Example: 0 → Sunday
*/

console.log(dateNow.getHours());

/*
What will appear:
- Hour of the day (0-23)
  Example: 16 → 4 PM
*/

console.log(dateNow.getMinutes());

/*
What will appear:
- Minute (0-59)
  Example: 35
*/

console.log(dateNow.getSeconds());

/*
What will appear:
- Second (0-59)
  Example: 10
*/


/* =============================================================================
SUMMARY
================================================================================

- JavaScript Date objects allow you to extract all components of a date/time.
- getTime() is the base for all calculations (milliseconds since 1970).
- Subtracting two Date objects automatically gives milliseconds difference.
- Converting milliseconds step-by-step can give days, months, or years.
- getMonth() is zero-based; getDay() starts from Sunday = 0.

================================================================================
*/
