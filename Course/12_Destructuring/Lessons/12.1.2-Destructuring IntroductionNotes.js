/*
─────────────────────────────────────────────
TOPIC: Defining Default Values for Variables in Array Destructuring
─────────────────────────────────────────────

/*
1) Topics to be studied:
- Array destructuring: extracting elements from an array directly into variables.
- Default values in array destructuring: assigning a fallback value if the array element is missing or undefined.
- Behavior when array elements exist vs. missing: understanding when default values are applied.
- Benefits of using default values: avoid undefined, cleaner and safer code.
*/


─────────────────────────────────────────────
/*
2) Basic Structure & How It Works:

- Array destructuring allows concise assignment of array elements to variables.
- Default values provide a fallback if the array element is missing or explicitly undefined.
- Syntax:
    const [var1 = default1, var2 = default2, var3 = default3] = array;

- How it works step by step:
  1. JS takes the first element of the array and assigns it to var1.
     - If the element exists and is not undefined, var1 gets that value.
     - If the element is missing or undefined, var1 gets default1.
  2. JS repeats the same for var2, var3, etc.
  
- Benefits:
  • Prevents variables from being undefined
  • Cleaner, more readable code
  • Reduces need for conditional checks
*/


// ─────────────────────────────────────────────
/*
3) Simple Example:

const bestOfStonerrock = ['Spiritual Beggars', 'Spice and the RJ Band'];

// Array destructuring with default values
const [one = 'Kyuss', two = 'Kyuss', three = 'Kyuss', four = 'Kyuss'] = bestOfStonerrock;

console.log(one);   // "Spiritual Beggars"  → first element exists
console.log(two);   // "Spice and the RJ Band" → second element exists
console.log(three); // "Kyuss" → third element missing, default applied
console.log(four);  // "Kyuss" → fourth element missing, default applied
*/

// ─────────────────────────────────────────────
/*
4) Three Examples:

- Simple Example:
- Demonstrates default applied when a second element is missing
*/

const arr = [10]; // only one element
const [a = 1, b = 2] = arr; // destructuring with defaults

console.log(a); // 10 → exists
console.log(b); // 2  → default applied

/*
- Intermediate Example:
- Mix of existing, undefined, and missing elements
- Shows default applied to undefined and missing
*/

const fruits = ['Apple', undefined, 'Cherry']; // second element is undefined
const [first = 'Banana', second = 'Mango', third = 'Orange', fourth = 'Grapes'] = fruits;

console.log(first);  // "Apple"  → exists
console.log(second); // "Mango"  → undefined replaced by default
console.log(third);  // "Cherry" → exists
console.log(fourth); // "Grapes" → missing element gets default

/*
- Advanced Example:
- Default values in function returns
- Handles missing elements gracefully
*/

function getScores() {
    return [85, , 92]; // second element is missing
}

const [math = 0, physics = 0, chemistry = 0, biology = 0] = getScores();

console.log(math);     // 85 → exists
console.log(physics);  // 0  → missing, default applied
console.log(chemistry);// 92 → exists
console.log(biology);  // 0  → missing, default applied

/*
Key Notes:
- Missing elements and undefined both trigger default values.
- Default values do NOT override existing elements.
- Works in arrays returned from functions, arrays with undefined, or partially filled arrays.
*/


// ─────────────────────────────────────────────
/*
5) Complete Summary:

- Array destructuring allows concise variable assignment from array elements.
- Default values provide a fallback for missing or undefined elements.
- Syntax: const [var1 = default1, var2 = default2, ...] = array;
- Benefits:
  • Prevents undefined values
  • Cleaner and safer code
  • Reduces conditional checks
- Practical use cases:
  • Function returns with optional elements
  • Partially filled arrays
  • Arrays with undefined elements
- Always remember:
  • Defaults are applied only if the element is undefined or missing.
  • Existing elements are never replaced by defaults.
*/
