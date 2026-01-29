/* =========================================================================
TOPIC: JavaScript — Array.from() & copyWithin()
============================================================================
OVERVIEW:

1 Array.from()
- Converts any iterable or array-like object into a real Array.
- Preserves insertion order.
- Can transform elements using an optional mapping function.
- Supports binding "this" inside map function via thisArg.
- Common use cases:
  • Strings → arrays of characters
  • Sets / Maps → arrays of keys or values
  • NodeLists or arguments → true Arrays
  • Shallow copy of arrays
============================================================================
*/

/* =========================================================================
SYNTAX:

Array.from(iterable [, mapFunction [, thisArg]])

Parameters:
1) iterable: any iterable or array-like object (string, Set, Map, NodeList, arguments, typed arrays, etc.)
2) mapFunction (optional): function applied to each element during conversion
3) thisArg (optional): value used as "this" inside mapFunction
============================================================================
*/

/* =========================================================================
EXAMPLES: Array.from()
============================================================================
1) Basic array copy (no mapFunction)
*/
const numbers = [1, 2, 3, 4];
const copiedArray = Array.from(numbers);

console.log(copiedArray); // [1, 2, 3, 4]

/*
2) Using mapFunction — transform elements
*/
const doubled = Array.from(numbers, n => n * 2);
console.log(doubled); // [2, 4, 6, 8]

/*
3) Converting a Set → array + transform
*/
const numbersSet = new Set([1, 2, 2, 3, 3, 3, 4]);
const setResult = Array.from(numbersSet, n => n * 10);
console.log(setResult); // [10, 20, 30, 40]

/*
4) Using thisArg — binding "this" in mapFunction
*/
const multiplier = 2;
const numbers3 = [1, 2, 3];
const withThis = Array.from(numbers3, function(n) {
  return n * this;
}, multiplier);

console.log(withThis); // [2, 4, 6]



/* =========================================================================
2 copyWithin() — In-place Array Copy
============================================================================
OVERVIEW:
- copyWithin(target [, start [, end]])
- Copies elements within the same array to a new position.
- Mutates the original array.
- Negative indices count from the end.
- end is NOT included (like slice).

SYNTAX:
array.copyWithin(target, start=0, end=array.length)
============================================================================
*/

/* =========================================================================
EXAMPLES: copyWithin()
============================================================================
1) Basic usage — only target
*/
let ex1 = [5, 6, 7, 8, 9];
ex1.copyWithin(3); 
// Copy from start=0 to end=length, paste starting at index 3
console.log(ex1); // [5, 6, 7, 5, 6]

/*
2) Specifying start
*/
let ex2 = [100, 200, 300, 400, 500];
ex2.copyWithin(0, 2); // copy from index 2 to end, paste at 0
console.log(ex2); // [300, 400, 500, 400, 500]

/*
3) Negative start index
*/
let ex3 = ["A", "B", "C", "D", "E"];
ex3.copyWithin(1, -3); // start=-3 → index 2
console.log(ex3); // ["A", "C", "D", "E", "E"]

/*
4) Specifying end
*/
let ex4 = [11, 22, 33, 44, 55];
ex4.copyWithin(3, 1, 3); // copy indices 1 → 3 (end excluded) to target=3
console.log(ex4); // [11, 22, 33, 22, 33]

/*
5) Full example with target, negative start & end
*/
let ex5 = [9, 8, 7, 6, 5, 4, 3];
ex5.copyWithin(2, -4, -2); 
// start=-4 → 3, end=-2 → 5 (exclusive), copy indices 3,4 → [6,5] to target 2
console.log(ex5); // [9, 8, 6, 5, 5, 4, 3]



/* =========================================================================
NOTES & BEST PRACTICES
============================================================================
- Array.from():
  • Always returns a real array, even from iterable or array-like objects.
  • mapFunction allows on-the-fly transformation.
  • thisArg can be used for context binding in mapFunction.
- copyWithin():
  • Modifies array in place, does NOT change length.
  • Negative indices are relative to array length.
  • end parameter is exclusive.
  • Useful for shifting or duplicating array segments efficiently.
============================================================================
*/
