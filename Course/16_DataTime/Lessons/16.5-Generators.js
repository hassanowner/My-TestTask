/*
================================================================================
TOPIC: JavaScript Generators
================================================================================

- Generators are special functions that can pause execution and resume later.
- Defined using function* syntax.
- They return a special object called a Generator Object.
- Generator Objects are iterable using next() or for...of loops.
- yield keyword is used to pause and return values one at a time.
================================================================================
*/


/* =============================================================================
Example 1: Basic Generator
============================================================================= */
function* simpleGenerator() {
  yield 1; // Pause and return 1
  console.log("Hello After Yield 1");
  yield 2; // Pause and return 2
  yield 3; // Pause and return 3
  yield 4; // Pause and return 4
}

// Create generator object
let generatorInstance = simpleGenerator();

console.log("Type of generatorInstance:", typeof generatorInstance);
/*
What will appear:
- "object"
What this means:
- Generators return an object, not the final value
*/

console.log("Generator object itself:", generatorInstance);
/*
What will appear:
- Generator { }
- Shows it is a Generator Object
*/


/* Using next() to get values one by one */
console.log(generatorInstance.next());
/*
What will appear:
- { value: 1, done: false }
What this means:
- First yield returned 1, generator paused after yield
*/

console.log(generatorInstance.next());
/*
What will appear:
- "Hello After Yield 1"  (from console.log)
- { value: 2, done: false }
What this means:
- Generator resumed, printed log, returned next yield value
*/

console.log(generatorInstance.next());
/*
What will appear:
- { value: 3, done: false }
- Generator continues to next yield
*/

console.log(generatorInstance.next());
/*
What will appear:
- { value: 4, done: false }
*/

console.log(generatorInstance.next());
/*
What will appear:
- { value: undefined, done: true }
- No more yields; generator is finished
*/


/* =============================================================================
Example 2: Iterating Using for...of
============================================================================= */

// Each call to generateNumbers() creates a NEW generator
for (let value of simpleGenerator()) {
  console.log("Value from for...of:", value);
}
/*
What will appear:
- 1
- 2
- 3
- 4
What this means:
- Generator values can be iterated easily using for...of
- Execution pauses at each yield, resumes automatically
*/


/* =============================================================================
Example 3: Using the same generator object after iteration
============================================================================= */

// Attempting to iterate remaining values of previous generatorInstance
for (let value of generatorInstance) {
  console.log("Value from remaining generatorInstance:", value);
}
/*
What will appear:
- Nothing
What this means:
- The generatorInstance is already exhausted (done=true)  // Line 46 -76 => (generatorInstance)
- A new generator object must be created for a fresh iteration
*/


/*
================================================================================
SUMMARY
================================================================================

- Generators allow pausing and resuming execution.
- Use yield to return values one by one.
- Generator Objects are iterable with next() or for...of.
- Each generator object can only be consumed once.
- Ideal for creating lazy sequences, streams, or custom iterators.

================================================================================
*/
