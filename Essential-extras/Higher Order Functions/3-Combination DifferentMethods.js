/*
FUNCTIONAL PROGRAMMING IN JAVASCRIPT
COMBINATION OF DIFFERENT FUNCTIONAL ARRAY METHODS

INTRODUCTION
One of the greatest strengths of functional programming in JavaScript is the ability to **combine array methods** like forEach(), map(), filter(), and reduce() in a readable, declarative, and concise manner. By chaining these methods, you can solve complex problems with minimal code and maintain clarity in your program’s logic. This section illustrates how combining these methods makes code elegant and expressive.

----------------------------------------------------------------

MAIN TOPIC
Combining Functional Array Methods

----------------------------------------------------------------

WHAT IT IS
Combining methods means linking multiple array operations together in a single expression. Each method processes the output of the previous method, allowing complex transformations and filtering to be expressed cleanly.

For example:
1. Filter elements based on a condition
2. Map elements to a new value
3. Perform an action on each resulting element

----------------------------------------------------------------

WHAT ITS FUNCTION IS
The purpose of combining methods is to:
- Solve problems in a declarative style
- Avoid verbose loops and conditionals
- Focus on the **what** instead of the **how**
- Keep each step of processing small, focused, and reusable

----------------------------------------------------------------

FEATURES
- Method chaining
- Clear, readable code
- Supports modular, reusable callback functions
- No intermediate variables needed
- Declarative expression of complex logic

----------------------------------------------------------------

HOW IT WORKS
You define small, reusable functions for each logical step and then chain them using dot notation. Each array method passes its result to the next method in the chain.

BASIC CODE STRUCTURE */
array
  .filter(conditionFunction)
  .map(transformationFunction)
  .forEach(actionFunction);

/* ----------------------------------------------------------------

EXAMPLE: FILTER, MAP, AND FOREACH COMBINED
Suppose we have an array of artists and want to:
1. Find all artists with at least one album released after 2000
2. Extract the names of these artists
3. Print each name */

// Define reusable callback functions:

function after2000(album) {
  return album.year > 2000;
}

function hasAlbumAfter2000(artist) {
  return artist.albums.filter(after2000).length > 0;
}

function getArtistName(artist) {
  return artist.name;
}

function printName(name) {
  console.log(name);
}

// CHAIN THE METHODS
artists
  .filter(hasAlbumAfter2000)
  .map(getArtistName)
  .forEach(printName);

// OUTPUT
// Ben Harper

/* ----------------------------------------------------------------

WHY THIS IS BETTER THAN IMPERATIVE CODE
- Eliminates nested loops and multiple if statements
- Separates each logical step into a small function
- The code reads like natural language:  
  “Filter artists with albums after 2000, map to their names, print each name”
- Easy to maintain, extend, or reuse parts of the chain
- Encourages functional and declarative thinking

----------------------------------------------------------------

BRIEF SUMMARY
Combining functional array methods is one of the **most powerful techniques in JavaScript**.
By chaining methods like filter(), map(), and forEach():
- Complex operations are expressed clearly and concisely
- Code becomes more readable and maintainable
- Intermediate steps are minimized
- Each function focuses on a single task
- Declarative style replaces verbose imperative loops

This approach illustrates the true advantage of functional programming: elegant, expressive,
and modular code that focuses on **what to do** rather than **how to do it**. */
