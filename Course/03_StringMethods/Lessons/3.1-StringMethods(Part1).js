/*
========================================================
String Methods
========================================================
Covered Topics:
- Access With Index
- Access With charAt()
- length
- trim()
- toUpperCase()
- toLowerCase()
- Chain Methods
========================================================
*/

let userName = "  Hassan  ";

// ======================================================
// Original String
// ======================================================

console.log(userName);
/*
Result:
"  Hassan  "
*/


// ======================================================
// Access With Index
// - Access character by position (0-based)
// ======================================================

console.log(userName[1]);
/*
Result:
" "
*/

console.log(userName[4]);
/*
Result:
"s"
*/


// ======================================================
// Access With charAt()
// - Same as index but safer
// ======================================================

console.log(userName.charAt(1));
/*
Result:
" "
*/

console.log(userName.charAt(4));
/*
Result:
"s"
*/


// ======================================================
// length
// - Counts all characters including spaces
// ======================================================

console.log(userName.length);
/*
Result:
10
*/


// ======================================================
// trim()
// - Removes spaces from start and end
// ======================================================

console.log(userName.trim());
/*
Result:
"Hassan"
*/


// ======================================================
// toUpperCase()
// - Converts string to uppercase
// ======================================================

console.log(userName.toUpperCase());
/*
Result:
"  HASSAN  "
*/


// ======================================================
// toLowerCase()
// - Converts string to lowercase
// ======================================================

console.log(userName.toLowerCase());
/*
Result:
"  hassan  "
*/


// ======================================================
// Chain Methods
// - Using multiple methods together
// ======================================================

console.log(userName.trim().charAt(2).toUpperCase());
/*
Result:
"S"
*/
