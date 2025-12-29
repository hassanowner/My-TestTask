/* ======================================================
   JAVASCRIPT STRING CHALLENGES
   Topics Covered:
   - Access With Index & charAt()
   - length
   - trim()
   - toUpperCase() / toLowerCase()
   - slice(), substring(), substr()
======================================================== */

// ======================================================
// CHALLENGE 1: Access and Length
// ======================================================

/*
QUESTION:
1. Store "  Hassan  " in a variable
2. Print the 2nd character using index
3. Print the 5th character using charAt()
4. Print the total length of the string
*/

let name = "  Hassan  ";

console.log("Index 1:", name[1]);       // " "
console.log("CharAt 4:", name.charAt(4)); // "s"
console.log("Length:", name.length);    // 10

// ======================================================
// CHALLENGE 2: trim() and case
// ======================================================

/*
QUESTION:
1. Remove spaces at start and end
2. Convert to uppercase
3. Convert to lowercase
4. Chain trim() + charAt(2) + toUpperCase()
*/

console.log("Trimmed:", name.trim());                     // "Hassan"
console.log("Uppercase:", name.toUpperCase());           // "  HASSAN  "
console.log("Lowercase:", name.toLowerCase());           // "  hassan  "
console.log("Chained:", name.trim().charAt(2).toUpperCase()); // "S"

// ======================================================
// CHALLENGE 3: slice() and substring()
// ======================================================

/*
QUESTION:
1. Store "JavaScript Course" in variable
2. Extract "JavaScript" using slice()
3. Extract "Course" using substring()
*/

let project = "JavaScript Course";

console.log("Slice:", project.slice(0, 10));        // "JavaScript"
console.log("Substring:", project.substring(11));   // "Course"

// ======================================================
// CHALLENGE 4: substr() and repeat()
// ======================================================

/*
QUESTION:
1. Extract "Script" using substr()
2. Repeat "Loading " 3 times
*/

console.log("Substr:", project.substr(4, 6));       // "Script"
console.log("Repeat:", "Loading ".repeat(3));       // "Loading Loading Loading "

// ======================================================
// CHALLENGE 5: includes, startsWith, endsWith
// ======================================================

/*
QUESTION:
1. Check if string includes "Course"
2. Check if string starts with "Java"
3. Check if string ends with "se"
*/

console.log("Includes:", project.includes("Course"));    // true
console.log("StartsWith:", project.startsWith("Java"));  // true
console.log("EndsWith:", project.endsWith("se"));        // true
