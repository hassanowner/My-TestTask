/*
FUNCTIONAL PROGRAMMING IN JAVASCRIPT
REDUCING MULTIPLE VALUES TO ONE VALUE WITH THE reduce() METHOD

INTRODUCTION
The reduce() method is a powerful functional programming tool in JavaScript used to **combine or aggregate all elements of an array into a single value**. This is useful for tasks like computing sums, totals, or any representative value derived from an array. Unlike forEach(), map(), or filter(), reduce() produces a single result instead of a new array of the same size.

----------------------------------------------------------------

MAIN TOPIC
Reducing Multiple Values to One Value with reduce()

----------------------------------------------------------------

WHAT IT IS
The reduce() method takes a callback function that is executed for each element of the array. The function receives an **accumulated value** (from previous iterations) and the current element, allowing you to compute a single representative result over all elements.

----------------------------------------------------------------

WHAT ITS FUNCTION IS
The main purpose of reduce() is to aggregate data from an array:
- Summing numbers
- Counting items
- Combining values into a single object or string
- Any operation that reduces multiple elements into one

Unlike map() or filter(), reduce() does not return an array of the same size; it returns a **single accumulated value**.

----------------------------------------------------------------

FEATURES
- Returns a single value
- Uses a callback function
- Callback receives:
  1. Accumulated value (result of previous iteration)
  2. Current element
  3. Current index
  4. The original array
- Can specify an initial value for the accumulator
- Supports complex aggregation and transformation operations
- Declarative and readable

----------------------------------------------------------------

HOW IT WORKS
The reduce() method works by repeatedly applying the callback function to each element and updating the accumulator. Optionally, an initial value for the accumulator can be provided; otherwise, the first element of the array is used.

BASIC CODE STRUCTURE */
const result = array.reduce((accumulator, element, index, array) => {
  return updatedAccumulator;
}, initialValue);

/* ----------------------------------------------------------------

IMPERATIVE APPROACH (FOR LOOP REDUCING)

DESCRIPTION
In imperative programming, aggregating values often requires a loop with manual control, creating an accumulator variable and updating it for each element. This introduces extra boilerplate code.

CODE EXAMPLE */
const artists = [
  {
    name: 'Kyuss',
    albums: [
      { title: 'Wretch', year: 1991 },
      { title: 'Blues for the Red Sun', year: 1992 },
      { title: 'Welcome to Sky Valley', year: 1994 },
      { title: '...And the Circus Leaves Town', year: 1995 }
    ]
  },
  {
    name: 'Ben Harper',
    albums: [
      { title: 'The Will to Live', year: 1997 },
      { title: 'Burn to Shine', year: 1999 },
      { title: 'Live from Mars', year: 2001 },
      { title: 'Diamonds on the Inside', year: 2003 }
    ]
  }
];

let totalAlbumCount = 0;

for (let i = 0; i < artists.length; i++) {
  const albumCount = artists[i].albums.length;
  totalAlbumCount += albumCount;
}

console.log(totalAlbumCount); // 8

PROBLEMS WITH THIS APPROACH
- Manual loop control
- Extra accumulator management
- Index-based array access
- Focus on mechanics rather than intent

/* ----------------------------------------------------------------

FUNCTIONAL APPROACH USING reduce()

DESCRIPTION
The reduce() method expresses the aggregation logic declaratively. The callback function takes the accumulated value and the current element, and returns the updated accumulator for the next iteration. The loop and accumulation are handled internally by reduce().

CODE EXAMPLE */
const totalAlbumCount = artists.reduce((result, artist) => {
  const albumCount = artist.albums.length;
  return result + albumCount;
}, 0);

console.log(totalAlbumCount); // 8

/* ----------------------------------------------------------------

SIMPLIFIED AND CLEAN VERSION */
const totalAlbumCount = artists.reduce((total, artist) => total + artist.albums.length, 0);

This concise version clearly expresses the intent:
“Sum the number of albums of all artists.”

/* ----------------------------------------------------------------

WHY reduce() IS BETTER THAN A FOR LOOP
- No manual loop counter
- No explicit accumulator updates
- Declarative and readable
- Supports complex reductions in a single expression
- Keeps code concise, expressive, and maintainable

----------------------------------------------------------------

OTHER USEFUL FUNCTIONAL ARRAY METHODS
- every(): Checks if **all elements** satisfy a condition.
- some(): Checks if **at least one element** satisfies a condition.
- find(): Returns the **first element** that satisfies a condition.
- reduceRight(): Works like reduce(), but iterates from **right to left**.
- Note: These methods also support functional, declarative programming patterns.

----------------------------------------------------------------

BRIEF SUMMARY
The reduce() method is a versatile tool for aggregating array elements into a single value. 
It emphasizes **what to compute** rather than **how to iterate**,
reducing boilerplate code and improving readability.
Along with forEach(), map(), and filter(), reduce() is an essential part of functional programming 
in JavaScript, allowing developers to write concise, declarative, and maintainable array operations.*/
