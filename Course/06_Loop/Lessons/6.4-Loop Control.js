/*
====================================================
Loop Control — break / continue / label (Full Guide)
====================================================

This example demonstrates:
1) break          → stop a loop completely
2) continue       → skip current iteration
3) label          → control WHICH loop to stop or continue
====================================================
*/

// Array of products
let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

// Array of colors
let colors = ["Red", "Green", "Black"];

// -------------------------------------------------
// LABEL for the outer loop
// mainLoop allows us to break or continue THIS loop directly
// -------------------------------------------------
mainLoop: for (let i = 0; i < products.length; i++) {

  // Print current product
  console.log(products[i]);
  /*
    First iteration output:
    Keyboard
  */

  // -----------------------------------------------
  // LABEL for inner loop (used for learning purpose)
  // -----------------------------------------------
  nestedLoop: for (let j = 0; j < colors.length; j++) {

    // Print color for current product
    console.log(`- ${colors[j]}`);
    /*
      Outputs:
      - Red
      - Green   (loop will stop here)
    */

    // ---------------------------------------------
    // CONDITION
    // If color is Green → stop the OUTER loop
    // ---------------------------------------------
    if (colors[j] === "Green") {

      // break mainLoop:
      // - exits INNER loop
      // - exits OUTER loop immediately
      break mainLoop;
    }
  }
}

/*
====================================================
FINAL OUTPUT
====================================================

Keyboard
- Red
- Green
*/

/*
====================================================
DETAILED EXPLANATION
====================================================

1) break
   - Stops the loop completely.
   - No more iterations happen after it.

2) continue
   - Skips ONLY the current iteration.
   - The loop continues with the next value.
   - Useful for skipping unwanted values without stopping the loop entirely.

3) label
   - Used with break or continue.
   - Allows you to control a specific loop.
   - VERY useful in nested loops.

4) break mainLoop;
   - Breaks out from the INNER loop
   - AND jumps out of the OUTER loop immediately

5) Why the loop stops early?
   - Because the condition:
     colors[j] === "Green"
     becomes true.
   - JavaScript exits both loops instantly


====================================================
EXAMPLES — continue
====================================================
*/

// Example 1: skip odd numbers
console.log("Example 1 — skip odd numbers");
for (let i = 0; i < 10; i++) {
  if (i % 2 !== 0) continue; // skip odd numbers
  console.log(i); // prints only even numbers
}
// Output: 0 2 4 6 8

// Example 2: skip a specific value in nested loop
console.log("Example 2 — skip 'Mouse' in products");
for (let i = 0; i < products.length; i++) {
  if (products[i] === "Mouse") continue; // skip "Mouse"
  console.log(products[i]);
}
// Output: Keyboard Pen Pad Monitor



/*
====================================================
ADDITIONAL EXAMPLES — label
====================================================
*/

// Example 1: break outer loop when a condition in inner loop is met
console.log("Example 1 — labeled break in nested loop");
outerLoop1: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(i, j);
    if (i === 1 && j === 1) {
      console.log("Breaking outerLoop1");
      break outerLoop1; // breaks outer loop directly
    }
  }
}
// Output: 0 0 0 1 0 2 1 0 1 1 Breaking outerLoop1

// Example 2: continue outer loop from inner loop
console.log("Example 2 — labeled continue in nested loop");
outerLoop2: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 1) {
      console.log(`Skipping to next iteration of outerLoop2 at i=${i}`);
      continue outerLoop2; // skips to next iteration of outer loop
    }
    console.log(i, j);
  }
}
// Output:
// 0 0
// Skipping to next iteration of outerLoop2 at i=0
// 1 0
// Skipping to next iteration of outerLoop2 at i=1
// 2 0
// Skipping to next iteration of outerLoop2 at i=2

/*
====================================================
SUMMARY / TIPS
====================================================

- break → completely stops a loop
- continue → skips current iteration only
- label → allows break or continue to affect a specific loop, very useful in nested loops

- Use labels carefully; overuse makes code harder to read
- continue with a label lets you skip iterations of outer loops from inner loops
- break with a label lets you exit outer loops from inner loops immediately
*/
