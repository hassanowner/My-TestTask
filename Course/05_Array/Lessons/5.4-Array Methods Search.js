/*
========================================================
Arrays Methods [Search]
========================================================
Covered Topics:
- indexOf(Search Element, From Index [Opt])
- lastIndexOf(Search Element, From Index [Opt])
- includes(valueToFind, fromIndex [Opt]) [ES7]
========================================================
*/

let users = ["Ali", "Omar", "Hassan", "Salem", "Ali"];


// ======================================================
// Original Array
// ======================================================

console.log(users);
/*
Result:
["Ali", "Omar", "Hassan", "Salem", "Ali"]
*/


// ======================================================
// indexOf()
// - Finds first occurrence from left to right
// ======================================================

console.log(users.indexOf("Ali"));
/*
Result:
0
*/

console.log(users.indexOf("Ali", 2));
/*
Result:
4
*/


// ======================================================
// lastIndexOf()
// - Finds last occurrence from right to left
// ======================================================

console.log(users.lastIndexOf("Ali"));
/*
Result:
4
*/

console.log(users.lastIndexOf("Ali", -2));
/*
Result:
0
*/


// ======================================================
// includes() [ES7]
// - Checks if element exists (true / false)
// ======================================================

console.log(users.includes("Ali"));
/*
Result:
true
*/

console.log(users.includes("Ali", 2));
/*
Result:
true
*/


// ======================================================
// Searching For Missing Element
// ======================================================

if (users.lastIndexOf("Khaled") === -1) {
  console.log("User Not Found");
}

/*
Result:
"User Not Found"
*/


console.log(users.indexOf("Khaled"));
/*
Result:
-1
*/

console.log(users.lastIndexOf("Khaled"));
/*
Result:
-1
*/
