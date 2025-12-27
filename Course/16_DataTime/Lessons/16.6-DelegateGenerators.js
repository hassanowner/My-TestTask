/*
================================================================================
TOPIC: JavaScript Delegate Generators
================================================================================

- Delegate generators allow one generator to yield values from another generator or iterable.
- Achieved using the `yield*` syntax.
- Useful for combining multiple sequences or reusing existing generators.
================================================================================
*/


/* =============================================================================
Example 1: Delegating between two simple generators
============================================================================= */
function* numbersGenerator() {
  yield 10;
  yield 20;
  yield 30;
}

function* lettersGenerator() {
  yield "X";
  yield "Y";
  yield "Z";
}

function* combinedGenerator() {
  yield* numbersGenerator();  // delegate numbers
  yield* lettersGenerator();  // delegate letters
}

let myGenerator = combinedGenerator();

console.log(myGenerator.next()); // { value: 10, done: false }
console.log(myGenerator.next()); // { value: 20, done: false }
console.log(myGenerator.next()); // { value: 30, done: false }
console.log(myGenerator.next()); // { value: 'X', done: false }
console.log(myGenerator.next()); // { value: 'Y', done: false }
console.log(myGenerator.next()); // { value: 'Z', done: false }
console.log(myGenerator.next()); // { value: undefined, done: true }




/* =============================================================================
Example 2: Delegating to an array
============================================================================= */
function* colorsGenerator() {
  yield "Red";
  yield "Green";
  yield "Blue";
}

function* combinedWithArrayGenerator() {
  yield* colorsGenerator();      // delegate generator
  yield* ["Yellow", "Pink"];     // delegate array
  yield "Black";                 // additional single value
}
// *Note: if you don't use * with `yield` in `["Yellow", "Pink"]` 
// The value will appear as a ready-made array, not as the values inside the array.



let colorGen = combinedWithArrayGenerator();

for (let color of colorGen) {
  console.log("Color:", color);
}
/*
What will appear:
- Color: Red
- Color: Green
- Color: Blue
- Color: Yellow
- Color: Pink
- Color: Black
What this means:
- yield* can delegate to any iterable (generator, array, etc.)
*/


/* =============================================================================
Example 3: Using return() to terminate a generator early
============================================================================= */
function* alphaGenerator() {
  yield "A";
  yield "B";
  yield "C";
  yield "D";
}

let alphaGen = alphaGenerator();

console.log(alphaGen.next()); // { value: 'A', done: false }
console.log(alphaGen.next()); // { value: 'B', done: false }

// Terminate generator with return()
console.log(alphaGen.return("End")); 
/*
What will appear:
- { value: 'End', done: true }
What this means:
- Generator immediately finishes
- Any remaining yields are skipped
*/

console.log(alphaGen.next()); // { value: undefined, done: true }
console.log(alphaGen.next()); // { value: undefined, done: true }





/* =============================================================================
Example 4: Nested Delegation
============================================================================= */
function* firstGen() {
  yield 1;
  yield 2;
}

function* secondGen() {
  yield "X";
  yield "Y";
}

function* masterGen() {
  yield* firstGen();    // delegate first generator
  yield* secondGen();   // delegate second generator
  yield* ["End1", "End2"]; // delegate array
}

let nestedGen = masterGen();

for (let item of nestedGen) {
  console.log("Nested item:", item); // item = value of nestedGen
}
/*
What will appear:
- Nested item: 1
- Nested item: 2
- Nested item: X
- Nested item: Y
- Nested item: End1
- Nested item: End2
What this means:
- yield* allows chaining multiple generators and iterables into one sequence
*/


/*
================================================================================
SUMMARY
================================================================================

- Delegate generators using `yield*` to reuse other generators or iterables
- Can delegate to arrays, strings, or any iterable
- The generator can be terminated early using `.return(value)`
- Each generator object is iterable and preserves the sequence
- Useful for combining sequences without manual looping
================================================================================
*/
