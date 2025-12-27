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
   - (Not used in this code, but important to know.)

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
   - JavaScript exits both loops instantly.

====================================================
WHEN TO USE LABELS?
====================================================
- Only in advanced loop logic
- When nested loops become complex
- Avoid using labels unless really necessary
====================================================
*/
