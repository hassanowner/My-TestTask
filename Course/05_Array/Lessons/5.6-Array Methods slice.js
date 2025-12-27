/*
========================================================
Arrays Methods [slice vs splice]
========================================================
*/

let students = ["Hassan", "Omar", "Sara", "Lina", "Yousef", "Noor"];


// ======================================================
// Original Array
// ======================================================

console.log(students);
// ["Hassan", "Omar", "Sara", "Lina", "Yousef", "Noor"]


// ======================================================
// slice() Examples
// ======================================================

// Get full copy of array
let copyAll = students.slice();
console.log(copyAll);
// ["Hassan", "Omar", "Sara", "Lina", "Yousef", "Noor"]


// Get elements starting from index 2
let fromIndexTwo = students.slice(2);
console.log(fromIndexTwo);
// ["Sara", "Lina", "Yousef", "Noor"]


// Get elements between index 1 and 4 (4 not included)
let middlePart = students.slice(1, 4);
console.log(middlePart);
// ["Omar", "Sara", "Lina"]


// Using negative indexes (count from end)
let lastTwo = students.slice(-2);
console.log(lastTwo);
// ["Yousef", "Noor"]


// Start positive, end negative
let combined = students.slice(1, -1);
console.log(combined);
// ["Omar", "Sara", "Lina", "Yousef"]


// Original array is NOT changed
console.log(students);
// ["Hassan", "Omar", "Sara", "Lina", "Yousef", "Noor"]


// ======================================================
// splice() Examples
// ======================================================

// Remove 2 elements starting from index 1 and add new ones
students.splice(1, 2, "Khaled", "Maha");

console.log(students);
// ["Hassan", "Khaled", "Maha", "Lina", "Yousef", "Noor"]
