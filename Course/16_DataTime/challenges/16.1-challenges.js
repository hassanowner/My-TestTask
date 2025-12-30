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
CHALLENGE 1 — Age Calculation + Component Extraction
============================================================================= */
/*
QUESTION:
You are given a birthdate "1998-06-25".
1) Calculate the age in full years.
2) Extract the weekday (0–6) of the birthdate.
*/

let birth = new Date("1998-06-25");
let now = new Date();

let ageMs = now - birth;
let ageYears = Math.floor(ageMs / 1000 / 60 / 60 / 24 / 365);

let birthWeekday = birth.getDay();

console.log(ageYears, birthWeekday);

/*
RESULT (example):
27 4

Meaning:
Age ≈ 27 years
4 → Thursday
*/


/* =============================================================================
CHALLENGE 2 — Overflow Logic with setDate()
============================================================================= */
/*
QUESTION:
You start with this date:
"2025-01-28"

1) Add 10 days using setDate().
2) Output the final date.
*/

let dateA = new Date("2025-01-28");
dateA.setDate(dateA.getDate() + 10);

console.log(dateA);

/*
RESULT:
Fri Feb 07 2025 ...

Meaning:
JavaScript handled month overflow automatically
*/


/* =============================================================================
CHALLENGE 3 — Timestamp Conversion + Verification
============================================================================= */
/*
QUESTION:
You are given this timestamp (milliseconds):
1609459200000

1) Convert it to a readable date.
2) Extract year, month, and day.
*/

let timestamp = 1609459200000;
let dateFromTimestamp = new Date(timestamp);

let year = dateFromTimestamp.getFullYear();
let month = dateFromTimestamp.getMonth(); // 0-based
let day = dateFromTimestamp.getDate();

console.log(dateFromTimestamp);
console.log(year, month, day);

/*
RESULT:
Fri Jan 01 2021 ...
2021 0 1

Meaning:
Timestamp represents January 1, 2021
*/


/* =============================================================================
CHALLENGE 4 — setFullYear + Month Index Trap
============================================================================= */
/*
QUESTION:
You have this date:
"2010-12-15"

1) Change it to March 10, 2022 using ONE method.
2) Output the final date.
*/

let dateB = new Date("2010-12-15");
dateB.setFullYear(2022, 2, 10); // March = 2

console.log(dateB);

/*
RESULT:
Thu Mar 10 2022 ...

Meaning:
Month is zero-based (2 = March)
*/


/* =============================================================================
CHALLENGE 5 — Measuring Execution Time
============================================================================= */
/*
QUESTION:
Measure how long it takes to:
1) Create an array of 500,000 numbers
2) Square each value using map()
*/

let startTime = new Date();

let arr = [];
for (let i = 0; i < 500000; i++) {
  arr.push(i);
}

let squared = arr.map(n => n * n);

let endTime = new Date();
let duration = endTime - startTime;

console.log("Duration (ms):", duration);

/*
RESULT (example):
Duration (ms): 120

Meaning:
Total time for array creation + processing in milliseconds
*/


/*
================================================================================
END OF CHALLENGES
================================================================================
*/
