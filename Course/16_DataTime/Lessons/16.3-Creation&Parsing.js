/*
================================================================================
TOPIC: JavaScript Date Creation and Parsing 
================================================================================

JavaScript allows multiple ways to create Date objects:

1) Using timestamp (milliseconds since Jan 1, 1970)
2) Using a date string
3) Using numeric values (year, month, day, hour, minute, second)

Common date formats:
- "Jan 01 2000"
- "01/01/2000"
- "2000-01-01" => ISO International Standard
- "2000-01"
- "2000"
- 2000, 0, 1, 12, 30, 0
- "2000-01-01T12:30:00Z" => ISO with time & UTC

Date.parse("String") converts a string into milliseconds.
================================================================================
*/

// Example 1: Using Date.parse to read a date from a string
let msParsed = Date.parse("Jan 01 2000");
console.log(msParsed);
/*
What will appear:
- 946684800000
What this means:
- Milliseconds since Jan 1, 1970 for Jan 1, 2000
- Can be used to create a Date object or calculate differences
*/



// Example 2: Create Date using timestamp
let dateEpoch = new Date(0); // milliseconds = 0
console.log(dateEpoch);
/*
What will appear:
- Thu Jan 01 1970 00:00:00 UTC
- Date at Unix epoch start
*/

let dateFromMS = new Date(946684800000); // matches parsed Jan 1 2000
console.log(dateFromMS);
/*
What will appear:
- Sat Jan 01 2000 00:00:00 GMT+timezone
- Creating Date using exact milliseconds
*/



// Example 3: Create Date from string
let dateStr1 = new Date("01/01/2000");
console.log(dateStr1);
/*
What will appear:
- Sat Jan 01 2000 00:00:00 GMT+timezone
- JS interprets standard date strings
*/

let dateStr2 = new Date("2000-01-01"); // ISO format
console.log(dateStr2);
/*
What will appear:
- Sat Jan 01 2000 00:00:00 GMT+timezone
- ISO string is consistent across browsers
*/

let dateStr3 = new Date("2000-01"); // year + month only
console.log(dateStr3);
/*
What will appear:
- Sat Jan 01 2000 00:00:00 GMT+timezone
- Missing day defaults to 1
*/

let dateStr4 = new Date("2000"); // year only
console.log(dateStr4);
/*
What will appear:
- Sat Jan 01 2000 00:00:00 GMT+timezone
- Missing month/day defaults to Jan 1
*/




// Example 4: Create Date using numeric values
let dateNumericFull = new Date(2000, 0, 1, 12, 30, 0); // month 0-based
console.log(dateNumericFull);
/*
What will appear:
- Sat Jan 01 2000 12:30:00 GMT+timezone
- All components set explicitly
*/

let dateNumericPartial = new Date(2000, 0, 1); // year, month, day only
console.log(dateNumericPartial);
/*
What will appear:
- Sat Jan 01 2000 00:00:00 GMT+timezone
- Hour, minute, second default to 0
*/




// Example 5: ISO string with time and UTC
let dateISO = new Date("2000-01-01T12:30:00Z");
console.log(dateISO);
/*
What will appear:
- Sat Jan 01 2000 15:30:00 GMT+0300 (or local timezone)
- UTC time converted to local timezone
*/


/*
================================================================================
SUMMARY
================================================================================

- new Date(timestamp): create from milliseconds
- new Date(dateString): create from string in multiple formats
- new Date(year, month, day, hour, min, sec): numeric values
- Date.parse(string) returns milliseconds usable with new Date()
- Month is zero-based (0 = Jan, 11 = Dec)
- Missing components default to sensible values (day=1, time=00:00:00)
- ISO format strings are recommended for cross-browser consistency

================================================================================
*/
