/*
========================================================
 Array Methods — copyWithin()
 Detailed comments explain each step and why the result appears
========================================================
*/

/*
Example 1 — Basic Example — Understanding ONLY "target"
- copyWithin(target)
- When only target is provided, copying starts from index 0 by default.
- Values are copied INTO the array starting at `target`.
- The method mutates the original array and returns it.
*/

let ex1 = [5, 6, 7, 8, 9];

// Operation:
// 1) copyWithin(3) means: copy from startIndex = 0 (default) until end (default),
//    and paste starting at index 3.
// 2) Source slice (from 0 to array.length): [5,6,7,8,9]
// 3) Paste begins at index 3 and overwrites elements at indices 3 and 4,
//    only as many as fit in the array length.
// 4) Written values: positions 3 <- 5, 4 <- 6 (because we started copying at 0).
ex1.copyWithin(3);

// Final array explanation:
// - index 0: still 5
// - index 1: still 6
// - index 2: still 7
// - index 3: replaced by 5 (copied from source[0])
// - index 4: replaced by 6 (copied from source[1])
// So result: [5, 6, 7, 5, 6]
console.log("Example 1:", ex1); // Example 1: [5, 6, 7, 5, 6]







/*
Example 2 — Using "start"
- copyWithin(target, start)
- Now we control the start index from which values are copied.
*/
let ex2 = [100, 200, 300, 400, 500];

// Operation:
// 1) copyWithin(0, 2)
//    - target = 0 (where to paste)
//    - start  = 2 (start copying from index 2)
// 2) Source slice from index 2 to end: [300, 400, 500]
// 3) Paste at index 0: place 300 at 0, 400 at 1, 500 at 2
// 4) If pasted values exceed array length, they stop when array end is reached.
ex2.copyWithin(0, 2);

// Final array explanation:
// - index 0: becomes 300 (from source[0] which was original index 2)
// - index 1: becomes 400
// - index 2: becomes 500
// - index 3: remains 400 (original)
// - index 4: remains 500 (original)
// So result: [300, 400, 500, 400, 500]
console.log("Example 2:", ex2); // Example 2: [300, 400, 500, 400, 500]








/*
Example 3 — Negative "start" (count from the end)
- Negative indexes count from the end: -1 => last element, -2 => second last, etc.
*/

let ex3 = ["A", "B", "C", "D", "E"];

// Operation:
// 1) ex3.copyWithin(1, -3)
//    - target = 1
//    - start = -3  -> converted to index 2 (because length=5, 5 + (-3) = 2)
// 2) Source slice from index 2 to end: ["C", "D", "E"]
// 3) Paste at index 1:
//    - index1 <- "C" (source[0])
//    - index2 <- "D" (source[1])
//    - index3 <- "E" (source[2])
// 4) Overwrites until the array end is reached.
ex3.copyWithin(1, -3);

// Final array explanation:
// - index 0: "A" (unchanged)
// - index 1: "C" (copied)
// - index 2: "D" (copied)
// - index 3: "E" (copied)
// - index 4: "E" (original index 4 remains or becomes last copied value depending on overlap)
// So result: ["A", "C", "D", "E", "E"]
console.log("Example 3:", ex3); // Example 3: ["A", "C", "D", "E", "E"]








/*
Example 4 — Using "end" (end is NOT included)
- copyWithin(target, start, end)
- `end` works like slice: the element at index `end` is NOT copied.
*/

let ex4 = [11, 22, 33, 44, 55];

// Operation:
// 1) ex4.copyWithin(3, 1, 3)
//    - target = 3
//    - start  = 1
//    - end    = 3 (not included)
// 2) Source slice: from index 1 up to (but not including) 3 → [22, 33]
// 3) Paste at index 3:
//    - index3 <- 22
//    - index4 <- 33
ex4.copyWithin(3, 1, 3);

// Final array explanation:
// - index 0: 11 (unchanged)
// - index 1: 22 (unchanged)
// - index 2: 33 (unchanged)
// - index 3: overwritten with 22
// - index 4: overwritten with 33
// So result: [11, 22, 33, 22, 33]
console.log("Example 4:", ex4); // Example 4: [11, 22, 33, 22, 33]








/*
Example 5 — Full example using target, negative start, and negative end
- Demonstrates combined behavior and how negative indices are converted
*/

let ex5 = [9, 8, 7, 6, 5, 4, 3];

// Operation:
// ex5.copyWithin(2, -4, -2)
// - array length = 7
// - target = 2
// - start = -4 -> 7 + (-4) = 3  (index 3, value 6)
// - end   = -2 -> 7 + (-2) = 5  (index 5, value 4) BUT end is excluded
// So we copy elements at indices [3, 4] => [6, 5]
// Then paste them starting at index 2:
// - index2 <- 6
// - index3 <- 5
// After paste, the rest of array remains (but overlaps can cause later values to change)
ex5.copyWithin(2, -4, -2);

// Final array explanation step-by-step:
// Original: [9, 8, 7, 6, 5, 4, 3]
// Copy segment: [6, 5] (from indices 3 and 4)
// Paste at index 2:
// - index2 becomes 6 (was 7)
// - index3 becomes 5 (was 6) — note: this overwrote the original 6 which was part of copied source,
//   but copyWithin uses the original array values for sourcing as it goes, so overlapping still behaves predictably.
// Remaining elements shift/overwrite as needed, resulting in:
// Result: [9, 8, 6, 5, 5, 4, 3]
console.log("Example 5:", ex5); // Example 5: [9, 8, 6, 5, 5, 4, 3]
