/*
========================================================
String Methods
========================================================
Covered Topics:
- indexOf(Value [Mand], Start [Opt] 0)
- lastIndexOf(Value [Mand], Start [Opt] Length)
- slice(Start [Mand], End [Opt] Not Include End)
- repeat(Times) [ES6]
- split(Separator [Opt], Limit [Opt])
========================================================
*/

let projectName = "JavaScript Course Platform";


// ======================================================
// indexOf()
// - Finds first occurrence of value
// ======================================================

console.log(projectName.indexOf("Course"));
/*
Result:
11
*/

console.log(projectName.indexOf("Course", 15));
/*
Result:
-1
*/

console.log(projectName.indexOf("a"));
/*
Result:
1
*/


// ======================================================
// lastIndexOf()
// - Finds last occurrence of value
// ======================================================

console.log(projectName.lastIndexOf("a"));
/*
Result:
22
*/


// ======================================================
// slice()
// - Extracts part of string (End not included)
// ======================================================

console.log(projectName.slice(0, 10));
/*
Result:
"JavaScript"
*/

console.log(projectName.slice(-8, -1));
/*
Result:
"Platfor"
*/


// ======================================================
// repeat() [ES6]
// - Repeats string
// ======================================================

console.log("Loading ".repeat(3));
/*
Result:
"Loading Loading Loading "
*/


// ======================================================
// split()
// - Converts string to array
// ======================================================

console.log(projectName.split(" ", 2));
/*
Result:
["JavaScript", "Course"]
*/
