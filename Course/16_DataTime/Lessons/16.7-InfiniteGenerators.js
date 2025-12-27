/*
================================================================================
TOPIC: Infinite Generators and Using Return in Generators
================================================================================

- Generators can produce sequences of values on demand.
- Infinite generators keep producing values until explicitly stopped.
- The `return()` statement inside a generator immediately finishes the generator.
- `yield` pauses the generator and produces a value, `return` ends it.
================================================================================
*/


/* =============================================================================
Example 1: Simple Infinite Number Generator
============================================================================= */
function* infiniteNumberGenerator() {
  let number = 0;
  while (true) {
    yield number++; // pause and return number, then increment
  }
}

let numbersGenerator = infiniteNumberGenerator();

console.log(numbersGenerator.next()); // { value: 0, done: false }
console.log(numbersGenerator.next()); // { value: 1, done: false }
console.log(numbersGenerator.next()); // { value: 2, done: false }
console.log(numbersGenerator.next()); // { value: 3, done: false }
/*
What will appear:
- Each next() call returns the next integer starting from 0
- Generator never ends unless manually stopped
*/


/* =============================================================================
Example 2: Using return() inside a generator
============================================================================= */
function* limitedGenerator() {
  yield "Start";
  yield "Middle";
  return "End"; // generator ends here
  yield "Never Reached"; // this line is ignored
}

let limitedGen = limitedGenerator();

console.log(limitedGen.next()); // { value: 'Start', done: false }
console.log(limitedGen.next()); // { value: 'Middle', done: false }
console.log(limitedGen.next()); // { value: 'End', done: true }
console.log(limitedGen.next()); // { value: undefined, done: true }
/*
What will appear:
- "Start" → first yield
- "Middle" → second yield
- "End" → from return, generator finishes
- undefined → generator is exhausted
- Any yields after return are ignored
*/


/* =============================================================================
Example 3: Infinite Generator with condition to stop
============================================================================= */
function* conditionalGenerator(limit) {
  let count = 0;
  while (true) {
    if (count >= limit) {
      return "Reached Limit"; // stop generator after limit
    }
    yield count++;
  }
}

let conditionalGen = conditionalGenerator(5);

console.log(conditionalGen.next()); // { value: 0, done: false }
console.log(conditionalGen.next()); // { value: 1, done: false }
console.log(conditionalGen.next()); // { value: 2, done: false }
console.log(conditionalGen.next()); // { value: 3, done: false }
console.log(conditionalGen.next()); // { value: 4, done: false }
console.log(conditionalGen.next()); // { value: 'Reached Limit', done: true }
console.log(conditionalGen.next()); // { value: undefined, done: true }
/*
What will appear:
- Numbers 0 to 4 yielded
- Generator stops after reaching limit
- return value indicates why generator finished
*/


/*
================================================================================
SUMMARY
================================================================================

- Infinite generators use while(true) to keep yielding values
- Use generator.next() to get the next value on demand
- return inside generator ends it immediately
- yield after return is ignored
- Useful for generating sequences, streams, or controlled iteration
================================================================================
*/
