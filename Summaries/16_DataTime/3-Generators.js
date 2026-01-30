/*
================================================================================
TOPIC: JavaScript Generators - Complete Guide
================================================================================

Covers:
1) Basic Generators
2) Iterating Generators
3) Delegate Generators (yield*)
4) Infinite Generators
5) Using return() to terminate generators
================================================================================
*/


/* =============================================================================
PART 1: Basic Generators
============================================================================= */
function* simpleGenerator() {
  yield 1;
  console.log("Hello After Yield 1");
  yield 2;
  yield 3;
  yield 4;
}

let generatorInstance = simpleGenerator();

console.log("Type of generatorInstance:", typeof generatorInstance);
console.log("Generator object itself:", generatorInstance);

console.log(generatorInstance.next()); // { value: 1, done: false }
console.log(generatorInstance.next()); // prints log, { value: 2, done: false }
console.log(generatorInstance.next()); // { value: 3, done: false }
console.log(generatorInstance.next()); // { value: 4, done: false }
console.log(generatorInstance.next()); // { value: undefined, done: true }

// Iterating using for...of
for (let value of simpleGenerator()) {
  console.log("Value from for...of:", value);
}

// Attempting to reuse exhausted generator
for (let value of generatorInstance) {
  console.log("Value from exhausted generatorInstance:", value); // will not print
}


/* =============================================================================
PART 2: Delegate Generators (yield*)
============================================================================= */
function* numbersGenerator() { yield 10; yield 20; yield 30; }
function* lettersGenerator() { yield "X"; yield "Y"; yield "Z"; }

function* combinedGenerator() {
  yield* numbersGenerator();
  yield* lettersGenerator();
}

let myGenerator = combinedGenerator();
console.log(myGenerator.next());
console.log(myGenerator.next());
console.log(myGenerator.next());
console.log(myGenerator.next());
console.log(myGenerator.next());
console.log(myGenerator.next());
console.log(myGenerator.next()); // done

// Delegating to arrays
function* colorsGenerator() { yield "Red"; yield "Green"; yield "Blue"; }
function* combinedWithArrayGenerator() {
  yield* colorsGenerator();
  yield* ["Yellow", "Pink"];
  yield "Black";
}

let colorGen = combinedWithArrayGenerator();
for (let color of colorGen) {
  console.log("Color:", color);
}


/* =============================================================================
PART 3: Using return() to terminate a generator
============================================================================= */
function* alphaGenerator() {
  yield "A";
  yield "B";
  yield "C";
  yield "D";
}

let alphaGen = alphaGenerator();
console.log(alphaGen.next()); // A
console.log(alphaGen.next()); // B
console.log(alphaGen.return("End")); // terminates generator
console.log(alphaGen.next()); // undefined
console.log(alphaGen.next()); // undefined


/* =============================================================================
PART 4: Nested Delegation
============================================================================= */
function* firstGen() { yield 1; yield 2; }
function* secondGen() { yield "X"; yield "Y"; }
function* masterGen() {
  yield* firstGen();
  yield* secondGen();
  yield* ["End1", "End2"];
}

let nestedGen = masterGen();
for (let item of nestedGen) {
  console.log("Nested item:", item);
}


/* =============================================================================
PART 5: Infinite Generators
============================================================================= */
function* infiniteNumberGenerator() {
  let number = 0;
  while (true) { yield number++; }
}

let numbersGeneratorInfinite = infiniteNumberGenerator();
console.log(numbersGeneratorInfinite.next()); // 0
console.log(numbersGeneratorInfinite.next()); // 1
console.log(numbersGeneratorInfinite.next()); // 2
console.log(numbersGeneratorInfinite.next()); // 3


/* =============================================================================
PART 6: Generator with return() and conditional stopping
============================================================================= */
function* limitedGenerator() {
  yield "Start";
  yield "Middle";
  return "End";
  yield "Never Reached";
}

let limitedGen = limitedGenerator();
console.log(limitedGen.next()); // Start
console.log(limitedGen.next()); // Middle
console.log(limitedGen.next()); // End, done=true
console.log(limitedGen.next()); // undefined

function* conditionalGenerator(limit) {
  let count = 0;
  while (true) {
    if (count >= limit) return "Reached Limit";
    yield count++;
  }
}

let conditionalGen = conditionalGenerator(5);
console.log(conditionalGen.next()); // 0
console.log(conditionalGen.next()); // 1
console.log(conditionalGen.next()); // 2
console.log(conditionalGen.next()); // 3
console.log(conditionalGen.next()); // 4
console.log(conditionalGen.next()); // Reached Limit
console.log(conditionalGen.next()); // undefined


/* =============================================================================
SUMMARY
=============================================================================

- Basic generators pause execution with yield and resume with next().
- Generators are iterable via for...of.
- Delegate generators (yield*) allow chaining other generators or iterables.
- Infinite generators keep producing values until stopped externally.
- return() ends a generator immediately; yields after return are ignored.
- Generators are ideal for lazy sequences, streams, and controlled iteration.
================================================================================
*/
