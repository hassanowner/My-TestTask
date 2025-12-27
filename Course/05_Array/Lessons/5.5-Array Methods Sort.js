/*
========================================================
Arrays Methods [Sort]
========================================================
Covered Topics:
- sort(Function [Opt])
- reverse()
========================================================
*/

let mixedData = [10, "50", 200, "Ali", 3, "100", -5, "Ziad"];


// ======================================================
// Original Array
// ======================================================

console.log(mixedData);
/*
Result:
[10, "50", 200, "Ali", 3, "100", -5, "Ziad"]
*/


// ======================================================
// sort()
// - Sorts elements as strings by default
// ======================================================

console.log(mixedData.sort());

/*
Result:
[-5, 10, 200, 3, "100", "50", "Ali", "Ziad"]

Explanation:
- Numbers and strings are converted to strings
- Sorting is done alphabetically
*/


// ======================================================
// reverse()
// - Reverses the array order
// ======================================================

console.log(mixedData.sort().reverse());

/*
Result:
["Ziad", "Ali", "50", "100", 3, 200, 10, -5]
*/


// ======================================================
// Notes
// - sort() modifies the original array
// - Use a function inside sort() for numeric sorting
// ======================================================
