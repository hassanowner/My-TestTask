/*
===========================================================
WHILE LOOP — Simple & Practical Guide (Single text block)
===========================================================

What is a while loop?
- A "while" loop repeats a block of code as long as a condition is true.
- Syntax:
    while (condition) {
      // code to run while condition is true
    }

Key ideas (simple):
- Condition is checked BEFORE each iteration.
- If condition is false at the start, the loop body never runs.
- You must change state inside the loop (e.g., increment an index) so the condition eventually becomes false,
  otherwise you create an infinite loop.

This file contains:
  1) Basic example: iterate an array with index
  2) Guarded loop: break out when found an item
  3) While used to collect / build values (accumulation pattern)
  4) Safety note: infinite loop and how to avoid it

Each example includes short inline explanations and the expected console output as comments.
*/

/* =========================
   1) Basic while — iterate an array
   ========================= */

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];

let index = 0;               // start index at 0
while (index < products.length) { // condition: keep looping while index within bounds
  console.log(products[index]);   // print current product
  index += 1;                     // move to next item (important to avoid infinite loop)
}

/*
Expected console output:
Keyboard
Mouse
Pen
Pad
Monitor
iPhone
*/

/* Explanation:
 - Before first iteration: index = 0, condition 0 < 6 => true, loop runs and logs products[0].
 - After each iteration we increment index by 1, so eventually index becomes 6.
 - When index === products.length (6) condition becomes false and loop stops.
 - Use while when you don't know number of iterations up-front or prefer manual control of index.
*/

/* =========================
   2) Guarded search — stop early using break
   ========================= */

let wanted = "Pad";
let i = 0;
let found = false;

while (i < products.length) {
  console.log(`Checking: ${products[i]}`);
  if (products[i] === wanted) {
    found = true;
    console.log(`Found "${wanted}" at index ${i}. Stopping loop.`);
    break; // exit the loop immediately
  }
  i++;
}

if (!found) console.log(`${wanted} was not found.`);

/*
Possible console output (until found):
Checking: Keyboard
Checking: Mouse
Checking: Pen
Checking: Pad
Found "Pad" at index 3. Stopping loop.

If wanted is not in the array, loop prints all checks then prints "was not found."
*/

/* Explanation:
 - Use break to stop the loop early when a condition is met (efficient for searches).
 - The loop still must advance i; otherwise you'd risk an infinite loop.
*/

/* =========================
   3) Accumulation pattern — build a string / collect items
   ========================= */

let count = 0;
let max = 3;
let html = ""; // we'll build a small HTML list as a string

while (count < max) {
  html += `<li>Product ${count + 1}: ${products[count]}</li>\n`;
  count++; // increment to progress toward termination
}

console.log("Generated HTML:");
console.log(`<ul>\n${html}</ul>`);

/*
Expected console output:
Generated HTML:
<ul>
<li>Product 1: Keyboard</li>
<li>Product 2: Mouse</li>
<li>Product 3: Pen</li>
</ul>
*/

/* Explanation:
 - While loops are handy when you want to build or accumulate a value while a condition holds.
 - Here we used a separate counter "count" and a "max" to limit how many items we add.
*/

/* =========================
   4) Safety: infinite loop example and prevention
   ========================= */

/*
 BAD: This would cause an infinite loop because index never changes:
 let x = 0;
 while (x < 3) {
   console.log("This repeats forever"); // x is not updated => condition never becomes false
 }
 To avoid that, always ensure:
  - You update loop state (index, counter, flag) inside the loop
  - Or include a safe break with a max-iteration guard
*/

// Safe pattern with a guard:
let guardIndex = 0;
let guardMax = 1000; // reasonable safety limit to avoid runaway loops
while (guardIndex < products.length) {
  console.log(`Guarded item: ${products[guardIndex]}`);
  guardIndex++;
  if (guardIndex > guardMax) {
    console.warn("Breaking to avoid infinite loop (guard triggered).");
    break;
  }
}

/*
Expected console output (similar to basic example):
Guarded item: Keyboard
Guarded item: Mouse
Guarded item: Pen
Guarded item: Pad
Guarded item: Monitor
Guarded item: iPhone
*/

/* =========================
   Quick Cheatsheet / Tips
   =========================
 - Use while when:
   * You need to loop while a condition is true and you manage the loop variable manually,
   * Or when waiting for an external condition to change (e.g., reading lines until EOF).
 - Don't forget to update the condition state inside the loop (index++, counter++).
 - Use break to exit early; use continue to skip remaining loop body and continue to next iteration.
 - If you need to run the loop body at least once regardless of the condition, use do...while instead.
 - For most array iteration tasks, for-loop or for...of is often clearer; while is great when manual control is needed.
*/

/* =========================
   END
   ========================= */
