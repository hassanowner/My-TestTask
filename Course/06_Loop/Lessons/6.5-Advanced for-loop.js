/*
====================================================
1-) Advanced for-loop — Practical Alternative Example
====================================================

Goal:
Loop through a list of products WITHOUT putting
the condition inside the for parentheses.

The stopping condition is controlled manually
from inside the loop.
====================================================
*/

let items = ["Laptop", "Tablet", "Printer", "Scanner", "Camera"];

let index = 0;

// for-loop without condition or increment section
for (;;) {

  // Safety check to avoid infinite loop
  if (index >= items.length) {
    break; // Stop the loop once we reach the last item
  }

  console.log(items[index]);
  /*
    Output per iteration:
    Laptop
    Tablet
    Printer
    Scanner
    Camera
  */

  // Manual increment
  index++;
}

/*
====================================================
KEY POINTS — SIMPLE
====================================================

1) for (;;)
   - Creates an infinite loop by default
   - It MUST include break to stop execution

2) break
   - Controls when the loop should end

3) Manual counter update
   - index++ replaces the third part of the for-loop

4) This style is useful when:
   - Loop condition depends on complex logic
   - Exit condition is inside the loop body

====================================================
*/



/*
==================================================
2-) Nested Loops — Training Courses Example
====================================================

Scenario:
- We have a list of training courses
- Each course has multiple available levels
- We want to display each course with its levels

This example demonstrates:
- for loop
- nested for loop
- practical data organization
====================================================
*/

// Courses list
let courses = ["JavaScript", "Python", "HTML & CSS"];

// Levels for each course (same index logic)
let levels = [
  ["Beginner", "Intermediate", "Advanced"], // JavaScript levels
  ["Beginner", "Advanced"],                  // Python levels
  ["Beginner"]                               // HTML & CSS levels
];

// Loop through courses (Outer Loop)
for (let i = 0; i < courses.length; i++) {

  console.log(`Course: ${courses[i]}`);
  // Result example:
  // Course: JavaScript

  console.log("Available Levels:");

  // Loop through levels of each course (Inner Loop)
  for (let j = 0; j < levels[i].length; j++) {
    console.log(`- ${levels[i][j]}`);
    // Result example:
    // - Beginner
    // - Intermediate
    // - Advanced
  }

  console.log("----------------------");
  // Separator between courses
}

/*
====================================================
Explanation (Simple & Clear)
====================================================

1) The OUTER loop (i):
   - Moves through each course
   - Runs once per course

2) The INNER loop (j):
   - Runs for each level inside the current course
   - Uses the same index (i) to access related data

3) Nested loops are useful when:
   - Data is grouped inside other data
   - One list depends on another list

4) This structure is common in:
   - Courses & lessons
   - Categories & products
   - Departments & employees

====================================================
*/
