/*
================================================================================
ADVANCED TEST CHALLENGES — JavaScript Generators
================================================================================
Instructions:
- Each challenge is written first as a QUESTION.
- Below it, the ANSWER is written in JavaScript.
- The expected RESULT appears as a comment.
- Topics used ONLY:
  generators, yield, yield*, next(), for...of, return(), infinite generators
================================================================================
*/


/* =============================================================================
CHALLENGE 1 — Generator State + next() Order
============================================================================= */
/*
QUESTION:
You have a generator that logs text between yields.

1) Call next() three times.
2) Understand exactly WHEN console.log runs.
3) Write the output order.
*/

function* testGenerator() {
  yield "First";
  console.log("After First");
  yield "Second";
  console.log("After Second");
  yield "Third";
}

let gen1 = testGenerator();

console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());

/*
RESULT:
{ value: 'First', done: false }
After First
{ value: 'Second', done: false }
After Second
{ value: 'Third', done: false }

Meaning:
- Code runs ONLY when generator resumes
- console.log executes between yields
*/


/* =============================================================================
CHALLENGE 2 — Delegation + return() Interaction
============================================================================= */
/*
QUESTION:
You delegate to another generator that ends with return().

1) What values are yielded?
2) Does the return value appear in for...of?
*/

function* innerGen() {
  yield 1;
  yield 2;
  return 999;
}

function* outerGen() {
  yield "Start";
  yield* innerGen();
  yield "End";
}

for (let value of outerGen()) {
  console.log(value);
}

/*
RESULT:
Start
1
2
End

Meaning:
- return value (999) is NOT yielded in for...of
- yield* stops when inner generator finishes
*/


/* =============================================================================
CHALLENGE 3 — Infinite Generator with Manual Stop
============================================================================= */
/*
QUESTION:
You have an infinite generator.

1) Get values until number reaches 3.
2) Stop the generator using return().
3) Observe final next() result.
*/

function* infiniteCounter() {
  let n = 0;
  while (true) {
    yield n++;
  }
}

let counterGen = infiniteCounter();

console.log(counterGen.next());
console.log(counterGen.next());
console.log(counterGen.next());

console.log(counterGen.return("Stopped"));
console.log(counterGen.next());

/*
RESULT:
{ value: 0, done: false }
{ value: 1, done: false }
{ value: 2, done: false }
{ value: 'Stopped', done: true }
{ value: undefined, done: true }

Meaning:
- Infinite generators must be stopped manually
- return() immediately terminates the generator
- Further next() calls do nothing
*/


/*
================================================================================
END OF GENERATOR CHALLENGES
================================================================================
*/
