/*
========================================================
String Methods
========================================================
Covered Topics:
- substring(Start [Mand], End [Opt] Not Including End)
  --- Start > End Will Swap
  --- Start < 0 It Start From 0
  --- Use Length To Get Last Character
- substr(Start [Mand], Characters To Extract)
  --- Start >= Length = ""
  --- Negative Start From End
- includes(Value [Mand], Start [Opt] Default 0) [ES6]
- startsWith(Value [Mand], Start [Opt] Default 0) [ES6]
- endsWith(Value [Mand], Length [Opt] Default Full Length) [ES6]
========================================================
*/

let courseTitle = "JavaScript Web Development";


// ======================================================
// String Length
// ======================================================

console.log(courseTitle.length);
/*
Result:
25
*/


// ======================================================
// substring()
// ======================================================

console.log(courseTitle.substring(0, 10));
/*
Result:
"JavaScript"
*/

console.log(courseTitle.substring(10, 0));
/*
Result:
"JavaScript"
*/

console.log(courseTitle.substring(-5, 10));
/*
Result:
"JavaScript"
*/

console.log(courseTitle.substring(courseTitle.length - 11, courseTitle.length - 3));
/*
Result:
"Develop"
*/


// ======================================================
// substr()
// ======================================================

console.log(courseTitle.substr(0, 10));
/*
Result:
"JavaScript"
*/

console.log(courseTitle.substr(25));
/*
Result:
""
*/

console.log(courseTitle.substr(-11));
/*
Result:
"Development"
*/

console.log(courseTitle.substr(-11, 7));
/*
Result:
"Develop"
*/


// ======================================================
// includes() [ES6]
// ======================================================

console.log(courseTitle.includes("Web"));
/*
Result:
true
*/

console.log(courseTitle.includes("Web", 15));
/*
Result:
false
*/


// ======================================================
// startsWith() [ES6]
// ======================================================

console.log(courseTitle.startsWith("Java"));
/*
Result:
true
*/

console.log(courseTitle.startsWith("Java", 1));
/*
Result:
false
*/

console.log(courseTitle.startsWith("Script", 4));
/*
Result:
true
*/


// ======================================================
// endsWith() [ES6]
// ======================================================

console.log(courseTitle.endsWith("ment"));
/*
Result:
true
*/
