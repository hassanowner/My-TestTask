/*
================================================================================
JavaScript Date — Complete Reference
================================================================================

PURPOSE:
- Understand what Date() is and how it works internally
- Prove the millisecond (Epoch) concept
- Explain the Year 2038 problem
- Learn Date getter methods
- Learn Date setter methods
- Perform date calculations safely

NOTE:
- This is ONE complete square file
- All explanations are inside comments
================================================================================
*/


/* =============================================================================
SECTION 1: WHAT IS Date()
=============================================================================

• Date is a built-in JavaScript object.
• It represents a single point in time.
• Internally, it stores time as milliseconds since:
  January 1, 1970 (Unix Epoch).
• Year, month, day, hours, minutes, seconds are all derived
  from this millisecond value.
*/


/* Create a Date object for the current moment */
let currentDate = new Date();
console.log(currentDate);

/*
Example output:
Sun Dec 21 2025 16:00:00 GMT+0300

Explanation:
- Date does NOT store year or month directly.
- Everything is calculated from milliseconds since 1970.
*/


/* =============================================================================
SECTION 2: PROVING THE MILLISECOND CONCEPT
============================================================================= */

/* Get milliseconds since Jan 1, 1970 */
let epochMilliseconds = Date.now();
console.log(epochMilliseconds);

/*
Example:
1766313600000

Meaning:
- Total milliseconds elapsed since 1970.
- This is the foundation of all Date calculations.
*/

/* Convert milliseconds to years (approximation) */
let yearsFromEpoch =
  epochMilliseconds / 1000 / 60 / 60 / 24 / 365;

console.log(yearsFromEpoch);

/*
Meaning:
- Shows how JavaScript calculates the current year
  using only milliseconds.
*/


/* =============================================================================
SECTION 3: THE YEAR 2038 PROBLEM
=============================================================================

• 32-bit systems store time as seconds since 1970.
• Maximum value: 2,147,483,647 seconds.
• Overflow occurs on Jan 19, 2038.
• JavaScript uses 64-bit numbers, so it is safe.
*/

/* Max 32-bit signed seconds */
let max32BitSeconds = 2147483647;

/* Convert to Date */
let last32BitDate = new Date(max32BitSeconds * 1000);
console.log(last32BitDate);

/*
Result:
Tue Jan 19 2038 03:14:07 UTC
*/


/* =============================================================================
SECTION 4: DATE GET METHODS (READING DATE VALUES)
=============================================================================

- getTime()      → milliseconds since 1970
- getDate()      → day of month (1–31)
- getFullYear()  → 4-digit year
- getMonth()     → month index (0–11)
- getDay()       → weekday (0–6, Sunday = 0)
- getHours()     → hours (0–23)
- getMinutes()   → minutes (0–59)
- getSeconds()   → seconds (0–59)
*/

let nowDate = new Date();

console.log(nowDate.getTime());
console.log(nowDate.getDate());
console.log(nowDate.getFullYear());
console.log(nowDate.getMonth());
console.log(nowDate.getDay());
console.log(nowDate.getHours());
console.log(nowDate.getMinutes());
console.log(nowDate.getSeconds());


/* =============================================================================
SECTION 5: DATE DIFFERENCE CALCULATION
============================================================================= */

let today = new Date();
let birthday = new Date("Mar 14, 1995");

let diffMilliseconds = today - birthday;
console.log(diffMilliseconds);

/* Convert to years (approximate) */
let ageYears =
  diffMilliseconds / 1000 / 60 / 60 / 24 / 365;

console.log(ageYears);


/* =============================================================================
SECTION 6: DATE SET METHODS (MODIFYING DATE VALUES)
=============================================================================

- setTime(ms)
- setDate(day)
- setFullYear(year, month?, day?)
- setMonth(month, day?)
- setHours(hour, min?, sec?, ms?)
- setMinutes(min, sec?, ms?)
- setSeconds(sec, ms?)
*/


/* --- setTime() --- */
let d1 = new Date();
d1.setTime(0);
console.log(d1);

let d2 = new Date();
d2.setTime(10000);
console.log(d2);


/* --- setDate() --- */
let d3 = new Date("Dec 5, 2025");
d3.setDate(15);
console.log(d3);

let d4 = new Date("Dec 25, 2025");
d4.setDate(35);
console.log(d4);


/* --- setFullYear() --- */
let d5 = new Date("Dec 21, 2025");
d5.setFullYear(2020);
console.log(d5);

let d6 = new Date("Dec 21, 2025");
d6.setFullYear(2023, 5);
console.log(d6);

let d7 = new Date("Dec 21, 2025");
d7.setFullYear(2022, 0, 10);
console.log(d7);


/* --- setMonth() --- */
let d8 = new Date("Dec 21, 2025");
d8.setMonth(0);
console.log(d8);

let d9 = new Date("Dec 21, 2025");
d9.setMonth(15);
console.log(d9);

let d10 = new Date("Dec 21, 2025");
d10.setMonth(-1);
console.log(d10);


/* --- setHours() --- */
let d11 = new Date("Dec 21, 2025 10:30:00");
d11.setHours(15);
console.log(d11);

let d12 = new Date("Dec 21, 2025 10:30:00");
d12.setHours(20, 45);
console.log(d12);


/* --- setMinutes() --- */
let d13 = new Date("Dec 21, 2025 10:30:00");
d13.setMinutes(50);
console.log(d13);

let d14 = new Date("Dec 21, 2025 10:30:00");
d14.setMinutes(45, 30);
console.log(d14);


/* --- setSeconds() --- */
let d15 = new Date("Dec 21, 2025 10:30:20");
d15.setSeconds(45);
console.log(d15);

let d16 = new Date("Dec 21, 2025 10:30:20");
d16.setSeconds(50, 500);
console.log(d16);


/* =============================================================================
FINAL SUMMARY
=============================================================================

• Date stores time as milliseconds since 1970.
• All date components are calculated from milliseconds.
• JavaScript avoids the Year 2038 problem.
• get methods read date values.
• set methods modify date values.
• Overflow and negative values auto-adjust date fields.
• Date math is based entirely on millisecond arithmetic.

================================================================================
END OF FILE
================================================================================
*/
