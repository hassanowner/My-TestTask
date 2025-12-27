/*
====================================================
Scope — Block Scope (if / switch / for)
====================================================

This lesson explains:
- What Block Scope is
- Difference between var and let in blocks
- How variables behave inside { }
- Why block scope is important
====================================================
*/


// ==================================================
// 1) Global Scope
// ==================================================

// This variable is declared in the GLOBAL SCOPE
// Using var makes it available outside blocks
var x = 10;

console.log(`From Global Before Block: ${x}`);
/*
Result:
From Global Before Block: 10
*/



// ==================================================
// 2) Block Scope Using if
// ==================================================

if (10 === 10) {

  // This variable is declared using let
  // It belongs ONLY to this block { }
  let x = 50;

  console.log(`From If Block: ${x}`);
  /*
  Result:
  From If Block: 50
  */

}

/*
Explanation:
- The x declared with let exists ONLY inside the if block
- It does NOT overwrite the global x
*/



// ==================================================
// 3) Accessing Global Variable After Block
// ==================================================

console.log(`From Global After Block: ${x}`);
/*
Result:
From Global After Block: 10
*/

/*
Explanation:
- The block-scoped x is destroyed after the block ends
- The global x remains unchanged
*/



/*
====================================================
Important Comparison: var vs let
====================================================

var:
- NOT block scoped
- Function scoped
- Can leak outside blocks

let:
- Block scoped
- Safer and predictable
- Preferred in modern JavaScript

====================================================
Why Block Scope Matters
====================================================

- Prevents accidental variable overwriting
- Makes code easier to understand
- Avoids bugs in loops and conditions
- Encourages clean and safe code

====================================================
Summary
====================================================
- Block scope applies to:
  - if
  - switch
  - for
- Use let or const for block scope
- Avoid var when possible

====================================================
End of Lesson
====================================================
*/
