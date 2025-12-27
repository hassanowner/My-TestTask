/*
====================================================
Scope — Global Scope vs Local Scope
====================================================

This lesson explains:
- What Scope means in JavaScript
- Global Scope
- Local (Function) Scope
- Difference between var and let inside scope
- How JavaScript decides which variable to use
====================================================
*/


// ==================================================
// 1) Global Scope
// ==================================================

// These variables are declared OUTSIDE any function
// They belong to the GLOBAL SCOPE
var a = 1;
let b = 2;

console.log(`From Global a: ${a}`);
/*
Result:
From Global a: 1
*/

console.log(`From Global b: ${b}`);
/*
Result:
From Global b: 2
*/

/*
Explanation:
- Global scope variables are accessible EVERYWHERE
- Can be used inside or outside functions
*/



// ==================================================
// 2) Function (Local) Scope
// ==================================================

function showText() {

  // These variables are declared INSIDE the function
  // They belong to LOCAL (Function) SCOPE
  var a = 10;
  let b = 20;

  console.log(`Function - From Local a: ${a}`);
  /*
  Result:
  Function - From Local a: 10
  */

  console.log(`Function - From Local b: ${b}`);
  /*
  Result:
  Function - From Local b: 20
  */
}

showText();

/*
Explanation:
- Variables inside a function are LOCAL
- They are NOT accessible outside the function
- Local variables with the same name
  DO NOT affect global variables
*/



// ==================================================
// 3) Global vs Local Priority
// ==================================================

console.log(`From Global a After Function: ${a}`);
/*
Result:
From Global a After Function: 1
*/

console.log(`From Global b After Function: ${b}`);
/*
Result:
From Global b After Function: 2
*/

/*
Explanation:
- JavaScript ALWAYS checks LOCAL scope first
- If variable exists locally, it uses it
- If not found, it moves to the global scope
*/



/*
====================================================
Important Notes
====================================================

- var:
  - Function scoped
  - Can be redeclared
- let:
  - Block scoped
  - Cannot be redeclared in same scope

- Global variables:
  - Stay in memory
  - Must be used carefully

- Local variables:
  - Safer
  - Cleaner code
  - Preferred in real applications

====================================================
Summary
====================================================
Global Scope:
- Declared outside functions
- Accessible everywhere

Local Scope:
- Declared inside functions
- Accessible only inside them

====================================================
End of Lesson
====================================================
*/
