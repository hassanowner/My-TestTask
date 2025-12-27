/*
================================================================================
TOPIC: JavaScript Date Set Methods Overview
================================================================================

These methods allow modifying a Date object after it has been created.
- setTime(milliseconds): Sets the date/time by milliseconds since Jan 1, 1970.
- setDate(day): Sets the day of the month. Supports negative and overflow values.
- setFullYear(year, month, day): Sets year, optional month (0-11), optional day.
- setMonth(month, day): Sets the month (0-11), optional day. Supports overflow/negative.
- setHours(hour, min, sec, ms): Sets hours, optional minutes, seconds, milliseconds.
- setMinutes(min, sec, ms): Sets minutes, optional seconds, milliseconds.
- setSeconds(sec, ms): Sets seconds, optional milliseconds.

================================================================================
*/

let dateNow = new Date();
console.log("Original Date:");
console.log(dateNow);




/* =============================================================================
1) setTime(milliseconds)
============================================================================= */

// Example 1: Reset to Epoch
let date1 = new Date();
date1.setTime(0); // set to Jan 1, 1970
console.log(date1);
/*
What will appear:
- Thu Jan 01 1970 00:00:00 UTC
What this means:
- Date is now at epoch (start of Unix time)
*/

// Example 2: 10 seconds after epoch
let date2 = new Date();
date2.setTime(10000); // 10,000 ms = 10 seconds
console.log(date2);
/*
What will appear:
- Thu Jan 01 1970 00:00:10 UTC
What this means:
- Date object updated using milliseconds
*/


/* =============================================================================
2) setDate(day)
============================================================================= */

// Example 1: Set day to 15
let date3 = new Date("Dec 5, 2025");
date3.setDate(15);
console.log(date3);
/*
What will appear:
- Mon Dec 15 2025 ...    // Dec 5 --> Dec 15
What this means:
- Day of month is updated to 15
*/

// Example 2: Set day beyond month length (overflow)
let date4 = new Date("Dec 25, 2025");
date4.setDate(35);
console.log(date4);
/*
What will appear:
- Tue Jan 04 2026 ... // 35 = 31 + 4
What this means:
- Overflowed to next month
*/



/* =============================================================================
3) setFullYear(year, month, day)
============================================================================= */

// Example 1: Change year only
let date5 = new Date("Dec 21, 2025");
date5.setFullYear(2020);
console.log(date5);
/*
What will appear:
- Sun Dec 21 2020 ...
What this means:
- Year updated, month/day remain the same
*/

// Example 2: Change year + month
let date6 = new Date("Dec 21, 2025");
date6.setFullYear(2023, 5); // June (0-based)
console.log(date6);
/*
What will appear:
- Thu Jun 21 2023 ...
What this means:
- Year and month updated, day remains
*/

// Example 3: Change year + month + day
let date7 = new Date("Dec 21, 2025");
date7.setFullYear(2022, 0, 10); // Jan 10, 2022
console.log(date7);
/*
What will appear:
- Mon Jan 10 2022 ...
What this means:
- Year, month, and day all updated
*/


/* =============================================================================
4) setMonth(month, day)
============================================================================= */

// Example 1: Change month only
let date8 = new Date("Dec 21, 2025");
date8.setMonth(0); // January
console.log(date8);
/*
What will appear:
- Tue Jan 21 2025 ...
What this means:
- Month updated, day/year remain
** if date8.setMonth(11); // Dec
*/

// Example 2: Month overflow
let date9 = new Date("Dec 21, 2025");
date9.setMonth(15); // 11 + 4 months = April 2026
console.log(date9);
/*
What will appear:
- Tue April 21 2026 ...
What this means:
- Month overflow adjusts the year automatically
*/

// Example 3: Negative month
let date10 = new Date("Dec 21, 2025");
date10.setMonth(-1); // November previous year
console.log(date10);
/*
What will appear:
- Sat Nov 21 2024 ...
What this means:
- Negative month adjusts to previous year
*/


/* =============================================================================
5) setHours(hours, min, sec, ms)
============================================================================= */

// Example 1: Change hour only
let date11 = new Date("Dec 21, 2025 10:30:00");
date11.setHours(15); // not index 
console.log(date11);
/*
What will appear:
- Sun Dec 21 2025 15:30:00 ...
What this means:
- Hour updated, minutes/seconds remain
*/

// Example 2: Change hour + minutes
let date12 = new Date("Dec 21, 2025 10:30:00");
date12.setHours(20, 45);
console.log(date12);
/*
What will appear:
- Sun Dec 21 2025 20:45:00 ...
What this means:
- Hour and minutes updated
*/


/* =============================================================================
6) setMinutes(min, sec, ms)
============================================================================= */

// Example 1: Change minutes only
let date13 = new Date("Dec 21, 2025 10:30:00");
date13.setMinutes(50);
console.log(date13);
/*
What will appear:
- Sun Dec 21 2025 10:50:00 ...
What this means:
- Minutes updated, hours/seconds remain
*/

// Example 2: Change minutes + seconds
let date14 = new Date("Dec 21, 2025 10:30:00");
date14.setMinutes(45, 30);
console.log(date14);
/*
What will appear:
- Sun Dec 21 2025 10:45:30 ...
What this means:
- Minutes and seconds updated
*/


/* =============================================================================
7) setSeconds(sec, ms)
============================================================================= */

// Example 1: Change seconds only
let date15 = new Date("Dec 21, 2025 10:30:20");
date15.setSeconds(45);
console.log(date15);
/*
What will appear:
- Sun Dec 21 2025 10:30:45 ...
What this means:
- Seconds updated
*/

// Example 2: Change seconds + milliseconds
let date16 = new Date("Dec 21, 2025 10:30:20");
date16.setSeconds(50, 500);
console.log(date16);
/*
What will appear:
- Sun Dec 21 2025 10:30:50.500 ...
What this means:
- Seconds and milliseconds updated
*/


/*
================================================================================
SUMMARY
================================================================================

- setTime: Directly sets the date using milliseconds since 1970.
- setDate: Sets day of month; overflow/negative adjusts month/year automatically.
- setFullYear: Sets year, optional month/day.
- setMonth: Sets month, optional day; handles overflow/negative months.
- setHours / setMinutes / setSeconds: Sets respective components; optional finer units.

These methods allow precise manipulation of date/time for calculations,
scheduling, or generating custom timestamps.
================================================================================
*/
