// =========================
// ADVANCED TEST TASKS COLLECTION – Array Only Version
// Nested forEach with map, filter, and reduce examples (No Objects)
// Includes: Uppercase names, Filter even numbers, Total sum of positive numbers
// Each task contains concept, objective, step-by-step explanation, and expected output
// =========================


// =========================
// Test Task 1 – Uppercase Names
// Concept: Convert each name in a nested array to uppercase
// Objective: Flatten array and get all names in uppercase
// =========================
let nameGroups = [
  ["hassan", "ali"],
  ["sara", "reem"]
];

let allNamesUpper = [];

nameGroups.forEach(function(group) {
  // Map each name to uppercase
  let upperNames = group.map(function(name) {
    return name.toUpperCase();
  });

  // Spread operator to push all names into the result array
  allNamesUpper.push(...upperNames);
});

console.log("All Names Uppercase:", allNamesUpper);
// Expected Output: ["HASSAN", "ALI", "SARA", "REEM"]
console.log("---------------------------------------------------");




// =========================
// Test Task 2 – Filter Even Numbers
// Concept: Iterate nested arrays and collect all even numbers
// Objective: Get a single array of all even numbers
// =========================
let numberGroups = [
  [1, 2, 3, 4],
  [5, 6, 7, 8]
];

let evenNumbers = [];

numberGroups.forEach(function(group) {
  // Filter even numbers
  group
    .filter(function(num) {
      return num % 2 === 0;
    })
    .forEach(function(num) {
      evenNumbers.push(num);
    });
});

console.log("Even Numbers:", evenNumbers);
// Expected Output: [2, 4, 6, 8]
console.log("---------------------------------------------------");





// =========================
// Test Task 3 – Total Sum of Positive Numbers
// Concept: Use filter, map, and reduce to calculate sum of positive numbers only
// Objective: Get total sum ignoring negative numbers
// =========================
let numberSets = [
  [10, -5, 20],
  [-2, 15, 30]
];

let totalPositiveSum = 0;

numberSets.forEach(function(set) {
  // Filter positive numbers
  let positives = set.filter(function(num) {
    return num > 0;
  });

  // Optional: Map (identity here, could do transformations)
  let mapped = positives.map(function(num) {
    return num; // no change, just for demonstration
  });

  // Reduce to sum
  let sum = mapped.reduce(function(acc, val) {
    return acc + val;
  }, 0);

  // Add this set's sum to total
  totalPositiveSum += sum;
});

console.log("Total Positive Sum:", totalPositiveSum);
// Expected Output: 75
console.log("---------------------------------------------------");

                             
