/*
FUNCTIONAL PROGRAMMING IN JAVASCRIPT
FUNCTIONAL ARRAY METHODS AND THEIR ADVANTAGES

INTRODUCTION
In this section, we examine the advantages of functional programming compared to imperative programming by working with arrays in JavaScript. Instead of manually controlling loops and counters, functional programming uses higher-order array methods that clearly express what should happen to the data. We focus on four important array methods that are central to functional programming in JavaScript: forEach(), map(), filter(), and reduce().

MAIN TOPICS (IN ORDER)
1. Iterating with the forEach() Method
2. Transforming Data with the map() Method
3. Selecting Data with the filter() Method
4. Aggregating Data with the reduce() Method

----------------------------------------------------------------

1. ITERATING WITH THE forEach() METHOD

WHAT IT IS
The forEach() method is a functional array method used to iterate over each element of an array. It executes a callback function once for every array element.

WHAT ITS FUNCTION IS
The purpose of forEach() is to perform an action for each element in an array without manually controlling the iteration process. It replaces traditional imperative loops such as for, while, and do-while loops.

FEATURES
- Eliminates manual loop control
- Improves readability
- Focuses on logic rather than mechanics
- Uses a callback function
- Does not return a new array

HOW IT WORKS
The forEach() method takes a callback function as an argument. This function is automatically called once for each element in the array and receives three parameters:
1. The current element
2. The index of the current element
3. The entire array

BASIC CODE STRUCTURE */
array.forEach((element, index, array) => {
  // logic to execute
});

----------------------------------------------------------------

// IMPERATIVE APPROACH (FOR LOOP EXAMPLE)

DESCRIPTION
In imperative programming, iteration requires explicit control over the loop process. The developer must manage initialization, conditions, indexing, and incrementing manually, which leads to boilerplate code and reduced readability.

// CODE EXAMPLE
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

for (let i = 0; i < artists.length; i++) {
  console.log(artists[i].name);
}
/*
PROBLEM WITH THIS APPROACH
- Requires loop initialization
- Requires termination condition
- Uses index-based access
- Contains unnecessary control logic
- Reduces clarity, especially in complex or nested loops

---------------------------------------------------------------- */

// FUNCTIONAL APPROACH USING forEach()

DESCRIPTION
The functional approach focuses on what should be done with each element rather than how iteration happens. The forEach() method removes the need for loop mechanics and makes the intent explicit.

// CODE EXAMPLE WITH CALLBACK FUNCTION 
artists.forEach((artist, index, artists) => {
  console.log(artist.name);
});

/* WHY THIS IS BETTER
- No counter variable
- No termination condition
- No manual indexing
- Clear focus on program intent
- Easier to read and maintain

---------------------------------------------------------------- */

// SIMPLIFIED AND CLEAN VERSION

artists.forEach(artist => {
  console.log(artist.name);
});

/* This version is highly readable and clearly expresses the logic: “For each artist, print the name.”

----------------------------------------------------------------*/

// USING A NAMED FUNCTION (NATURAL LANGUAGE STYLE)

DESCRIPTION
Passing a named function instead of an anonymous function further improves readability. The code can almost be read like natural language.

// CODE EXAMPLE
function printName(artist, index, artists) {
  console.log(artist.name);
}

artists.forEach(printName);

/* READABILITY ADVANTAGE
The code can be read as:
“Artists for each print name”

----------------------------------------------------------------

BRIEF SUMMARY
The forEach() method demonstrates a key advantage of functional programming over imperative programming.
By eliminating manual loop control and focusing on the operation performed on each element, 
the code becomes clearer, more expressive, and easier to maintain. 
Functional iteration emphasizes the logic of the program (the what) instead of the mechanics of looping (the how), 
which is especially beneficial in real-world, complex applications. 
*/
