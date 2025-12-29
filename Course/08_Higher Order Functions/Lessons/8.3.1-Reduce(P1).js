/*
====================================================
Reduce — Practical Programming Explanation
====================================================

reduce() is used to transform a collection (array)
into ONE single value.

This value can be:
- a number (sum, total, average)
- a string
- a boolean
- even a new structure (later topics)

====================================================
*/


// ==================================================
// Example: Calculate Total API Response Time
// ==================================================

let responseTimes = [120, 80, 200, 150]; // milliseconds


let totalTime = responseTimes.reduce(
  function (accumulator, currentValue, index, sourceArray) {

    // Log each step for learning purposes
    console.log(`Accumulator => ${accumulator}`);
    console.log(`Current Value => ${currentValue}`);
    console.log(`Index => ${index}`);
    console.log(`Source Array => ${sourceArray}`);
    console.log(`New Accumulator => ${accumulator + currentValue}`);
    console.log("----------------------");

    return accumulator + currentValue;

  },
  0 // Initial Value
);

console.log(totalTime);
/*
Output:
550
*/


// ==================================================
// How reduce() Works Internally
// ==================================================

/*
Iteration breakdown:

Initial accumulator = 0

Iteration 1:
acc = 0
current = 120
result = 120

Iteration 2:
acc = 120
current = 80
result = 200

Iteration 3:
acc = 200
current = 200
result = 400

Iteration 4:
acc = 400
current = 150
result = 550
*/


// ==================================================
// Why Initial Value Is Important
// ==================================================

/*
- With initial value:
  - reduce() starts from index 0
  - accumulator is predictable

- Without initial value:
  - accumulator = first array element
  - iteration starts from index 1
*/


// ==================================================
// Example Without Initial Value
// ==================================================

let maxLoad = responseTimes.reduce(function (acc, curr) {
  return acc > curr ? acc : curr;
});

console.log(maxLoad);
/*
Output:
200
*/


// ==================================================
// When to Use reduce()
// ==================================================

/*
Use reduce() when:
- You need ONE final result
- You want to aggregate data
- You want to replace complex loops
*/


// ==================================================
// Common Real-World Use Cases
// ==================================================

/*
✔ Calculating totals (prices, time, scores)
✔ Finding max / min values
✔ Building summaries
✔ Transforming arrays into single values
*/


// ==================================================
// Key Takeaways
// ==================================================

/*
reduce() =
- loop internally
- accumulator grows step by step
- returns ONE value only

If map() transforms and filter() selects,
reduce() FINALIZES.
====================================================
End of Lesson
====================================================
*/
