/*
========================================================
ARRAY METHODS — SIMPLE CHALLENGES
========================================================
*/

// ======================================================
// CHALLENGE 1: Search Using indexOf & includes
// ======================================================

/*
QUESTION:
1. Check if "Omar" exists
2. Get index of "Hassan"
*/

let users = ["Ali", "Omar", "Hassan", "Salem"];

console.log(users.includes("Omar"));
/*
Result:
true
*/

console.log(users.indexOf("Hassan"));
/*
Result:
2
*/


// ======================================================
// CHALLENGE 2: Search Missing Element
// ======================================================

/*
QUESTION:
Check if "Yousef" exists, if not print "Not Found"
*/

if (users.indexOf("Yousef") === -1) {
  console.log("Not Found");
}

/*
Result:
Not Found
*/


// ======================================================
// CHALLENGE 3: Sorting And Reversing
// ======================================================

/*
QUESTION:
1. Sort the array
2. Reverse the sorted result
*/

let numbers = [30, 5, 100, 20];

console.log(numbers.sort());
/*
Result:
[100, 20, 30, 5]
*/

console.log(numbers.sort().reverse());
/*
Result:
[5, 30, 20, 100]
*/


// ======================================================
// CHALLENGE 4: slice vs splice
// ======================================================

/*
QUESTION:
1. Use slice to get middle elements
2. Use splice to remove one element
*/

let names = ["Ali", "Omar", "Hassan", "Salem", "Yousef"];

// slice (does NOT change original)
let middleNames = names.slice(1, 4);
console.log(middleNames);
/*
Result:
["Omar", "Hassan", "Salem"]
*/

console.log(names);
/*
Result:
["Ali", "Omar", "Hassan", "Salem", "Yousef"]
*/

// splice (changes original)
names.splice(2, 1);
console.log(names);
/*
Result:
["Ali", "Omar", "Salem", "Yousef"]
*/


// ======================================================
// CHALLENGE 5: join Method
// ======================================================

/*
QUESTION:
Join array elements with different separators
*/

let letters = ["A", "B", "C", "D"];

console.log(letters.join());
/*
Result:
A,B,C,D
*/

console.log(letters.join(" - "));
/*
Result:
A - B - C - D
*/

console.log(letters.join("").toLowerCase());
/*
Result:
abcd
*/
