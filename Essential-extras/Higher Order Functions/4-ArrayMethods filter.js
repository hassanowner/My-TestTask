/*
FUNCTIONAL PROGRAMMING IN JAVASCRIPT
FILTERING VALUES WITH THE filter() METHOD

INTRODUCTION
The filter() method is a powerful functional programming tool in JavaScript used to select elements from an array that meet a specific condition. Unlike methods like indexOf() or lastIndexOf(), which only check for the presence of a specific element, filter() allows flexible, condition-based filtering of arrays. It is commonly used to produce a new array containing only the elements that satisfy a given predicate function.

----------------------------------------------------------------

MAIN TOPIC
Filtering Values with the filter() Method

----------------------------------------------------------------

WHAT IT IS
The filter() method creates a new array containing only those elements from an existing array for which a provided callback function returns true. Elements for which the function returns false are excluded from the new array.

----------------------------------------------------------------

WHAT ITS FUNCTION IS
The main function of filter() is to **select specific elements** from an array based on a condition or criteria. Typical use cases include:
- Filtering objects by property values (e.g., albums before a certain year)
- Removing unwanted values
- Creating subsets of data without modifying the original array

Unlike forEach(), filter() returns a **new array**, leaving the original array unchanged.

----------------------------------------------------------------

FEATURES
- Returns a new array
- Does not modify the original array
- Uses a callback function
- Callback receives current element, index, and array
- Supports complex filtering conditions
- Improves readability and declarative style

----------------------------------------------------------------

HOW IT WORKS
The filter() method takes a callback function that is called for each element in the array. The callback function should return:
- true → the element is included in the new array
- false → the element is excluded from the new array

BASIC CODE STRUCTURE */
const newArray = array.filter((element, index, array) => {
  return condition; // boolean: true or false
});

/* ----------------------------------------------------------------

IMPERATIVE APPROACH (FOR LOOP FILTERING)

DESCRIPTION
In imperative programming, filtering requires manually looping through the array, checking the condition for each element, and pushing qualifying elements into a new array. This adds boilerplate and reduces readability.

CODE EXAMPLE */
const albums = [
  { title: 'Push the Sky Away', artist: 'Nick Cave', year: 2013 },
  { title: 'No More Shall We Part', artist: 'Nick Cave', year: 2001 },
  { title: 'Live from Mars', artist: 'Ben Harper', year: 2003 },
  { title: 'The Will to Live', artist: 'Ben Harper', year: 1997 }
];

const albumsBefore2000 = [];

for (let i = 0; i < albums.length; i++) {
  if (albums[i].year < 2000) {
    albumsBefore2000.push(albums[i]);
  }
}

console.log(albumsBefore2000.length); // 1

PROBLEMS WITH THIS APPROACH
- Manual loop management
- Explicit condition checks
- Index-based array access
- Extra code unrelated to the filtering intent
- Focuses on "how" rather than "what"

/* ----------------------------------------------------------------

FUNCTIONAL APPROACH USING filter()

DESCRIPTION
With the filter() method, the intent of filtering becomes explicit. The developer only specifies **which elements should be included**, and the method handles the iteration internally.

CODE EXAMPLE WITH CALLBACK FUNCTION */
const albumsBefore2000 = albums.filter((album, index, albums) => {
  return album.year < 2000;
});

console.log(albumsBefore2000.length); // 1

/* ----------------------------------------------------------------

SIMPLIFIED AND CLEAN VERSION
const albumsBefore2000 = albums.filter(album => album.year < 2000);

This concise version is highly readable and clearly expresses the intent: “Select albums published before the year 2000.”

----------------------------------------------------------------

WHY filter() IS BETTER THAN A FOR LOOP
- No manual loop counters
- No explicit push operations
- No indexing required
- Declarative focus: "what to include" rather than "how to iterate"
- Maintains immutability
- Easier to maintain, especially with complex conditions or larger datasets

----------------------------------------------------------------

IMPORTANT NOTE
The filter() method is ideal whenever you need to **select or remove elements from an array based on conditions**. 
The returned array contains all elements for which the callback function returns true, 
leaving the original array untouched.

----------------------------------------------------------------

BRIEF SUMMARY
The filter() method allows functional, declarative selection of array elements based on conditions.
By focusing on the **what** rather than the **how**, it reduces boilerplate code,
improves readability, and supports immutability, making code easier to understand and maintain. */
