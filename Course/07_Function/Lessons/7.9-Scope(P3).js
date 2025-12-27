/*
====================================================
Scope — Lexical Scope (Deep Explanation)
====================================================

This lesson explains:
- What Lexical Scope means
- How JavaScript searches for variables
- Parent / Child / Grandchild scopes
- Execution Context & Lexical Environment
====================================================
*/


// ==================================================
// Example Code (Lexical Scope)
// ==================================================

function parent() {
  // Variable declared in parent scope
  let a = 10;

  function child() {

    // JavaScript looks for "a" in the current scope
    // Not found → goes to parent scope
    console.log(a);
    /*
    Result:
    10
    */

    // Variable "b" is NOT found in child
    // JavaScript will search upward (parent → global)
    console.log(`From Child ${b}`);
    /*
    Result:
    ReferenceError (temporarily, until explained below)
    */

    function grand() {

      // Variable declared in grandchild scope
      let b = 100;

      console.log(`From Grand a: ${a}`);
      /*
      Result:
      From Grand a: 10
      */

      console.log(`From Grand b: ${b}`);
      /*
      Result:
      From Grand b: 100
      */
    }

    grand();
  }

  child();
}

parent();



/*
====================================================
Important Clarification (Variable Lookup Order)
====================================================

JavaScript searches for variables in this order:

1) Current scope
2) Parent scope
3) Parent's parent scope
4) Global scope

This is called:
LEXICAL SCOPING
(based on code structure, not execution order)
*/


/*
====================================================
Why "b" Is Not Available in child()
====================================================

- child() is defined BEFORE grand()
- child() CANNOT access variables declared inside grand()
- Scope search goes UP, NOT DOWN

This is VERY important:
Parent can access child? ❌
Child can access parent? ✅
Sibling scopes cannot see each other ✅
*/


/*
====================================================
Execution Context (Simple Explanation)
====================================================

Every function call creates an Execution Context:
- Variables
- Functions
- Scope chain

When you call:
parent()

JavaScript creates:
- parent execution context
- then child execution context
- then grand execution context
*/


/*
====================================================
Lexical Environment
====================================================

Lexical Environment means:
- Where variables are written in the code
- NOT where functions are called

Because:
grand() is written INSIDE child()
child() is written INSIDE parent()

They automatically remember their outer scopes
(This is the foundation of Closures)
*/


/*
====================================================
Summary
====================================================

- Lexical Scope = scope based on code placement
- JavaScript searches variables from inner to outer
- Inner functions remember parent variables
- Variables are NOT accessible from children upward
- This concept is core to:
  - Closures
  - Callbacks
  - Functional programming

====================================================
End of Lesson
====================================================
*/
