/*
========================================================
ARRAY METHODS — JOINING ARRAYS
========================================================

Topics Covered:
1) concat() — combining arrays
2) join() — converting array to string
3) Separator variations
4) Examples with detailed explanation
5) Notes and best practices
========================================================

--------------------------------------------------------
1) CONCAT METHOD
--------------------------------------------------------

- Syntax: array1.concat(array2, array3, ..., value)
- Purpose: Combines arrays and/or individual values into **a new array**.
- Does **not modify original arrays**.
- Can include:
  - Arrays
  - Individual values (numbers, strings, objects, etc.)


--------------------------------------------------------
2) JOIN METHOD
--------------------------------------------------------

- Syntax: array.join(separator)
- Purpose: Converts **all array elements into a string**.
- Default separator: comma `,`
- You can specify any string as separator:
  - space `" "`
  - dash `"-"`
  - custom `" | "`



--------------------------------------------------------
3) EXAMPLE 1 — FRIEND NAMES
-------------------------------------------------------- */

let friends1 = ["Alice", "Bob", "Charlie"];
let friends2 = ["Diana", "Eve"];

// Combine arrays + single value
let allFriends = friends1.concat(friends2, "Frank");

console.log(allFriends);
/*
Result:
["Alice", "Bob", "Charlie", "Diana", "Eve", "Frank"]
*/

// Convert array to string with different separators
console.log(allFriends.join());          // "Alice,Bob,Charlie,Diana,Eve,Frank"
console.log(allFriends.join(" "));       // "Alice Bob Charlie Diana Eve Frank"
console.log(allFriends.join(" | "));     // "Alice | Bob | Charlie | Diana | Eve | Frank"



/*
--------------------------------------------------------
4) EXAMPLE 2 — PROGRAMMING LANGUAGES
-------------------------------------------------------- */

let webLanguages = ["HTML", "CSS", "JavaScript"];
let otherLanguages = ["Python", "Java"];

// Combine arrays
let allLanguages = webLanguages.concat(otherLanguages, "C++");
// --> allLanguages =[webLanguages +otherLanguages +"C++"]
console.log(allLanguages);
/*
Result:
["HTML", "CSS", "JavaScript", "Python", "Java", "C++"]

*/

// Join into a string
console.log(allLanguages.join());          // "HTML,CSS,JavaScript,Python,Java,C++"
console.log(allLanguages.join(" - "));     // "HTML - CSS - JavaScript - Python - Java - C++"
console.log(allLanguages.join(" / ").toUpperCase());
// "HTML / CSS / JAVASCRIPT / PYTHON / JAVA / C++"



/*
--------------------------------------------------------
5) NOTES & BEST PRACTICES
--------------------------------------------------------

1) **concat()**
   - Returns a **new array**.
   - Can accept multiple arrays and values in a single call.
   - Original arrays remain unchanged.
   - Useful for merging lists of **names, languages, or any data**.

2) **join()**
   - Returns a **string representation** of the array.
   - Separator is optional; default is comma `,`.
   - Useful for displaying array content in UI or generating CSV-like data.

3) **Tips**
   - To flatten deeply nested arrays, use `flat()` before joining.
   - concat() and join() are chainable:
     ```js
     webLanguages.concat(otherLanguages).join(" | ");
     ```
   - Always remember **join returns a string**, not an array.

========================================================
SUMMARY
--------------------------------------------------------
- concat() → combine arrays/values → returns new array
- join() → convert array to string → specify separator if needed
- Useful together for **merging and formatting array data**
- Keep in mind **original arrays are not modified**
========================================================
*/
