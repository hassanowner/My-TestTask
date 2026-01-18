/*
FUNCTIONAL PROGRAMMING IN JAVASCRIPT
MAPPING VALUES WITH THE map() METHOD

INTRODUCTION
In functional programming, it is very common not only to iterate over an array, but also to transform its elements into new values and store those values in a new array. JavaScript provides the map() method exactly for this purpose. The map() method allows us to take an existing array, apply a transformation to each element, and produce a new array containing the transformed values, all in a clear and declarative way.

----------------------------------------------------------------

MAIN TOPIC
Mapping Values with the map() Method

----------------------------------------------------------------

WHAT IT IS
The map() method is a functional array method that creates a new array by applying a transformation function to each element of an existing array. Each element in the new array corresponds to the return value of the callback function applied to the element at the same position in the original array.

----------------------------------------------------------------

WHAT ITS FUNCTION IS
The main function of map() is to transform data. It is used when:
- You want to calculate new values from existing ones
- You want to extract a specific property from objects
- You want to convert data from one format to another

Unlike forEach(), map() always returns a new array.

----------------------------------------------------------------

FEATURES
- Returns a new array
- Does not modify the original array
- Uses a callback function
- One-to-one mapping between source and result arrays
- Improves readability and expressiveness
- Encourages immutability

----------------------------------------------------------------

HOW IT WORKS
The map() method takes a callback function as an argument. This function is automatically called once for each element in the array and receives three parameters:
1. The current element
2. The index of the current element
3. The entire array

The return value of the callback function determines the value stored in the new array at the corresponding position.

---------------------------------------------------------------- */

// BASIC CODE STRUCTURE
const newArray = array.map((element, index, array) => {
  return transformedValue;
});

/* ----------------------------------------------------------------

IMPERATIVE APPROACH (FOR LOOP MAPPING)

DESCRIPTION
In imperative programming, mapping values requires manually managing a loop, creating a target array, and pushing transformed values into it. This introduces unnecessary control logic and boilerplate code.

CODE EXAMPLE */
const artistNames = [];

for (let i = 0; i < artists.length; i++) {
  artistNames.push(artists[i].name);
}

console.log(artistNames); // ['Kyuss', 'Ben Harper']

/* PROBLEMS WITH THIS APPROACH
- Manual loop control
- Explicit indexing
- Extra code unrelated to the actual goal
- Focuses on how the task is done instead of what is done

---------------------------------------------------------------- */

// FUNCTIONAL APPROACH USING map()

DESCRIPTION
The functional approach expresses the intent clearly: transform each artist object into its name. The loop logic is handled internally by map(), allowing the developer to focus only on the transformation itself.

// CODE EXAMPLE WITH CALLBACK FUNCTION
const artistNames = artists.map((artist, index, artists) => {
  return artist.name;
});

console.log(artistNames); // ['Kyuss', 'Ben Harper']

/* ----------------------------------------------------------------

SIMPLIFIED AND CLEAN VERSION */

const artistNames = artists.map(artist => artist.name);

This version is concise and highly readable. It clearly expresses the intent:
“Map each artist to its name.”

/* ----------------------------------------------------------------

WHY map() IS BETTER THAN A FOR LOOP
- No manual loop management
- No counter variables
- No push operations
- Clear data transformation intent
- More declarative and expressive
- Easier to maintain and extend

----------------------------------------------------------------

IMPORTANT NOTE
Using the map() method, you can create a new array based on an existing array by calling a specified mapping function for each element in the source array and storing the function’s return value in the destination array.
The original array remains unchanged.

----------------------------------------------------------------

BRIEF SUMMARY
The map() method is a core functional programming tool in JavaScript used to transform arrays in a clean,
readable, and declarative way. By focusing on what transformation should happen rather than how to perform the iteration,
map() eliminates boilerplate code, supports immutability, and leads to clearer and more maintainable programs. 
