/*
========================================================
EXAMPLE 1 — Array.from() with Map (Extract + Transform)
========================================================
- Scenario:
  You receive a Map from an API containing product prices.
  You need a clean array of prices after applying tax.
*/

const priceMap = new Map([
  ["laptop", 1000],
  ["phone", 600],
  ["tablet", 400],
]);

// Convert Map values → array + apply 10% tax
const taxedPrices = Array.from(
  priceMap.values(),     // iterable (Map values)
  price => price * 1.1   // mapFunction
);

console.log(taxedPrices);
// RESULT:
// [1100, 660, 440]

/*
WHY THIS IS PROFESSIONAL:
- Map preserves key/value integrity
- Array.from allows clean conversion
- Transformation happens in ONE pass
*/



/*
========================================================
EXAMPLE 2 — Array.from() with Array-Like Object
========================================================
- Scenario:
  A function receives `arguments` (array-like, NOT an array).
  You want to safely convert it into a real array.
*/

function sumAll() {
  // Convert arguments → real array
  const argsArray = Array.from(arguments);

  return argsArray.reduce((sum, n) => sum + n, 0);
}

console.log(sumAll(10, 20, 30, 40));
// RESULT:
// 100

/*
IMPORTANT NOTES:
- `arguments` has length but no array methods
- Array.from() makes it usable with reduce, map, filter
- Common in legacy + low-level JS code
*/




/*
========================================================
EXAMPLE 3 — copyWithin() in Real Data Manipulation
========================================================
- Scenario:
  You manage a rolling buffer of sensor readings.
  You want to overwrite old values with newer ones
  WITHOUT changing array length.
*/

let sensorReadings = [12, 15, 18, 20, 22, 25];

// Operation:
// copyWithin(0, 3)
// Copy values starting from index 3 → [20, 22, 25]
// Paste them at index 0
sensorReadings.copyWithin(0, 3);

// Step-by-step result:
// index 0 ← 20
// index 1 ← 22
// index 2 ← 25
// remaining values stay until overwritten

console.log(sensorReadings);
// RESULT:
// [20, 22, 25, 20, 22, 25]

/*
WHY copyWithin IS USED HERE:
- Fast (no new array created)
- Fixed-size buffers
- Memory-efficient
- Common in performance-critical systems
*/
