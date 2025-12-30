/*
================================================================================
ADVANCED TEST CHALLENGES — JavaScript Date
================================================================================
Instructions:
- Each challenge is written first as a QUESTION.
- Below it, the ANSWER is written in JavaScript.
- The expected RESULT appears as a comment.
- Topics are mixed ONLY from Date(), get*, set*, parsing, timestamps, and timing.
================================================================================
*/


/* =============================================================================
CHALLENGE 1 — 2038 Problem Demonstration
============================================================================= */
/*
QUESTION:
Demonstrate the Year 2038 problem by:
1) Create a date at the last safe second for 32-bit systems (Jan 19, 2038 03:14:07 UTC)
2) Add 1 second to it
3) Convert to 32-bit signed integer seconds
4) Show what happens with overflow
*/

let lastSafe = new Date(Date.UTC(2038, 0, 19, 3, 14, 7));
console.log("Last safe date:", lastSafe.toUTCString());

// Add 1 second
lastSafe.setSeconds(lastSafe.getSeconds() + 1);
console.log("After adding 1 second:", lastSafe.toUTCString());

// Simulate 32-bit overflow
let timestampMs = lastSafe.getTime();
let timestampSeconds = Math.floor(timestampMs / 1000);
let simulated32Bit = timestampSeconds | 0; // Force to 32-bit signed integer

console.log("64-bit timestamp (seconds):", timestampSeconds);
console.log("Simulated 32-bit value:", simulated32Bit);

/*
RESULT:
Last safe date: Tue, 19 Jan 2038 03:14:07 GMT
After adding 1 second: Tue, 19 Jan 2038 03:14:08 GMT
64-bit timestamp (seconds): 2147483648
Simulated 32-bit value: -2147483648

Meaning:
32-bit overflow causes negative timestamp, which would show incorrect date on 32-bit systems
*/



/* =============================================================================
CHALLENGE 2 — Complex Date Manipulation with setMethods
============================================================================= */
/*
QUESTION:
Given: "2024-02-28" (February 28, 2024 - a leap year)
1) Add 2 days using setDate()
2) Then subtract 1 month using setMonth()
3) Then add 48 hours using setHours()
4) Display all intermediate steps and final result
*/

let complexDate = new Date("2024-02-28");
console.log("Original:", complexDate.toDateString());

// Step 1: Add 2 days
complexDate.setDate(complexDate.getDate() + 2);
console.log("After +2 days:", complexDate.toDateString());

// Step 2: Subtract 1 month
complexDate.setMonth(complexDate.getMonth() - 1);
console.log("After -1 month:", complexDate.toDateString());

// Step 3: Add 48 hours
complexDate.setHours(complexDate.getHours() + 48);
console.log("After +48 hours:", complexDate.toDateString());

console.log("Final Date:", complexDate);
console.log("Day of week:", complexDate.getDay()); // 0 = Sunday

/*
RESULT:
Original: Wed Feb 28 2024
After +2 days: Fri Mar 01 2024
After -1 month: Fri Feb 01 2024
After +48 hours: Sun Feb 03 2024
Final Date: Sun Feb 04 2024 ... (time component added)
Day of week: 0

Meaning:
Demonstrates how setDate() handles month boundaries and how setHours() affects the date
*/



/* =============================================================================
CHALLENGE 3 — Date Parsing & Timezone Comparison
============================================================================= */
/*
QUESTION:
Parse these 4 date strings and show their differences:
1) "2024-12-25" (ISO format)
2) "12/25/2024" (US format)
3) "Dec 25, 2024 23:59:59"
4) "2024-12-25T23:59:59Z" (ISO with UTC)

Extract and compare: hours, timezone offset, and milliseconds
*/

let date1 = new Date("2024-12-25");
let date2 = new Date("12/25/2024");
let date3 = new Date("Dec 25, 2024 23:59:59");
let date4 = new Date("2024-12-25T23:59:59Z");

console.log("=== Date 1 (ISO) ===");
console.log("Full:", date1);
console.log("Hours:", date1.getHours());
console.log("Timezone offset:", date1.getTimezoneOffset(), "minutes");
console.log("Time (ms):", date1.getTime());

console.log("\n=== Date 2 (US format) ===");
console.log("Full:", date2);
console.log("Hours:", date2.getHours());
console.log("Timezone offset:", date2.getTimezoneOffset(), "minutes");
console.log("Time (ms):", date2.getTime());

console.log("\n=== Date 3 (With time) ===");
console.log("Full:", date3);
console.log("Hours:", date3.getHours());
console.log("Timezone offset:", date3.getTimezoneOffset(), "minutes");
console.log("Time (ms):", date3.getTime());

console.log("\n=== Date 4 (ISO UTC) ===");
console.log("Full:", date4);
console.log("Hours:", date4.getHours());
console.log("Timezone offset:", date4.getTimezoneOffset(), "minutes");
console.log("Time (ms):", date4.getTime());

console.log("\n=== Milliseconds Difference ===");
console.log("Date1 vs Date4 diff:", date4.getTime() - date1.getTime(), "ms");

/*
RESULT (example - depends on local timezone):
=== Date 1 (ISO) ===
Hours: 0 (midnight local time)
Timezone offset: -180 (GMT+3)
Time (ms): 1735084800000

=== Date 4 (ISO UTC) ===
Hours: 2 (if in GMT+2)
Timezone offset: -120
Time (ms): 1735171199000

Date1 vs Date4 diff: 86399000 ms (23 hours, 59 minutes, 59 seconds)

Meaning:
ISO dates without time default to midnight LOCAL time
ISO dates with "Z" are parsed as UTC and converted to local
*/



/* =============================================================================
CHALLENGE 4 — Performance: Date Creation Methods Comparison
============================================================================= */
/*
QUESTION:
Time 3 different ways to create 100,000 Date objects:
1) Using new Date() (current time)
2) Using new Date(timestamp)
3) Using new Date(year, month, day)

Show which is fastest and by how much
*/

let iterations = 100000;
let start, end, duration1, duration2, duration3;

// Method 1: new Date()
start = new Date();
for (let i = 0; i < iterations; i++) {
    let d = new Date();
}
end = new Date();
duration1 = end - start;
console.log("Method 1 (new Date()):", duration1, "ms");

// Method 2: new Date(timestamp)
start = new Date();
for (let i = 0; i < iterations; i++) {
    let d = new Date(1609459200000 + i); // Different timestamp each time
}
end = new Date();
duration2 = end - start;
console.log("Method 2 (new Date(timestamp)):", duration2, "ms");

// Method 3: new Date(year, month, day)
start = new Date();
for (let i = 0; i < iterations; i++) {
    let d = new Date(2024, i % 12, i % 28 + 1); // Different dates
}
end = new Date();
duration3 = end - start;
console.log("Method 3 (new Date(y,m,d)):", duration3, "ms");

console.log("\n=== Performance Comparison ===");
let fastest = Math.min(duration1, duration2, duration3);
console.log("Fastest method:", 
    fastest === duration1 ? "new Date()" :
    fastest === duration2 ? "new Date(timestamp)" : "new Date(y,m,d)");

console.log("Slowest is", Math.max(duration1, duration2, duration3) / fastest, "times slower");

/*
RESULT (example):
Method 1 (new Date()): 45 ms
Method 2 (new Date(timestamp)): 32 ms
Method 3 (new Date(y,m,d)): 120 ms
Fastest method: new Date(timestamp)
Slowest is 3.75 times slower

Meaning:
Creating dates from timestamps is usually fastest, constructor with multiple arguments is slowest
*/



/* =============================================================================
CHALLENGE 5 — Advanced: Date Range & Component Extraction
============================================================================= */
/*
QUESTION:
Create a function that, given any date:
1) Extracts all components (year, month, day, hours, minutes, seconds, ms, weekday)
2) Calculates:
   - First day of the month
   - Last day of the month
   - Days remaining in the month
3) Shows time in milliseconds since epoch AND since start of day
*/

function analyzeDate(inputDate) {
    console.log("=== Analyzing:", inputDate.toDateString(), "===");
    
    // 1) Extract all components
    console.log("\n1) Components:");
    console.log("Year:", inputDate.getFullYear());
    console.log("Month (0-based):", inputDate.getMonth());
    console.log("Date:", inputDate.getDate());
    console.log("Hours:", inputDate.getHours());
    console.log("Minutes:", inputDate.getMinutes());
    console.log("Seconds:", inputDate.getSeconds());
    console.log("Milliseconds:", inputDate.getMilliseconds());
    console.log("Weekday (0=Sun):", inputDate.getDay());
    
    // 2) Month calculations
    console.log("\n2) Month Calculations:");
    
    // First day of month
    let firstDay = new Date(inputDate.getFullYear(), inputDate.getMonth(), 1);
    console.log("First day of month:", firstDay.toDateString());
    
    // Last day of month (by going to next month and back one day)
    let lastDay = new Date(inputDate.getFullYear(), inputDate.getMonth() + 1, 0);
    console.log("Last day of month:", lastDay.toDateString());
    
    // Days remaining in month
    let daysRemaining = lastDay.getDate() - inputDate.getDate();
    console.log("Days remaining in month:", daysRemaining);
    
    // 3) Time calculations
    console.log("\n3) Time Calculations:");
    console.log("Total ms since 1970:", inputDate.getTime());
    
    // Ms since start of day
    let startOfDay = new Date(inputDate.getFullYear(), inputDate.getMonth(), inputDate.getDate());
    let msSinceMidnight = inputDate.getTime() - startOfDay.getTime();
    console.log("Ms since midnight:", msSinceMidnight);
    
    // Convert to hours:minutes:seconds
    let hours = Math.floor(msSinceMidnight / (1000 * 60 * 60));
    let minutes = Math.floor((msSinceMidnight % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((msSinceMidnight % (1000 * 60)) / 1000);
    console.log("Time of day:", `${hours}:${minutes}:${seconds}`);
    
    return {
        components: {
            year: inputDate.getFullYear(),
            month: inputDate.getMonth(),
            date: inputDate.getDate(),
            hours: inputDate.getHours()
        },
        monthInfo: {
            firstDay: firstDay,
            lastDay: lastDay,
            daysRemaining: daysRemaining
        },
        timeInfo: {
            totalMs: inputDate.getTime(),
            msSinceMidnight: msSinceMidnight
        }
    };
}

// Test with current date
console.log("=== TEST WITH CURRENT DATE ===");
let now = new Date();
analyzeDate(now);

console.log("\n=== TEST WITH SPECIFIC DATE ===");
let testDate = new Date(2024, 11, 25, 14, 30, 45); // Dec 25, 2024 2:30:45 PM
analyzeDate(testDate);

/*
RESULT (example):
=== TEST WITH SPECIFIC DATE ===
=== Analyzing: Wed Dec 25 2024 ===

1) Components:
Year: 2024
Month (0-based): 11
Date: 25
Hours: 14
Minutes: 30
Seconds: 45
Weekday (0=Sun): 3

2) Month Calculations:
First day of month: Sun Dec 01 2024
Last day of month: Tue Dec 31 2024
Days remaining in month: 6

3) Time Calculations:
Total ms since 1970: 1735122645000
Ms since midnight: 52245000
Time of day: 14:30:45

Meaning:
Comprehensive date analysis showing multiple Date methods working together
*/


/*
================================================================================
END OF CHALLENGES
================================================================================
*/

These 5 challenges cover:

1. Year 2038 Problem - Understanding 32-bit limitations
2. Complex Date Manipulation - Multiple set() operations with overflow handling
3. Date Parsing & Timezones - Different string formats and their implications
4. Performance Timing - Comparing different Date creation methods
5. Comprehensive Analysis - Extracting all components and calculating date ranges

Each challenge includes:

· Clear question/instructions
· JavaScript solution code
· Expected results with explanations
· Real-world Date() method applications
