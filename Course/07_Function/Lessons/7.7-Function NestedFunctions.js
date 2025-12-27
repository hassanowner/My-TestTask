/*
====================================================
Function — Function Inside Function (Nested Functions)
====================================================

This file explains in detail:
- What a function inside another function means
- How nested functions access outer variables (Scope)
- Returning values from nested functions
- Returning a function result
- Why this pattern is important in real JavaScript
====================================================
*/


// ==================================================
// Example 1: Nested Function Modifies Outer Variable
// ==================================================

function buildGreeting(firstName, lastName) {
  let message = "Hello";

  // Nested function
  function appendName() {
    // Accesses and modifies the outer variable "message"
    message = `${message} ${firstName} ${lastName}`;
  }

  appendName(); // Call the inner function
  return message; // Return final value
}

console.log(buildGreeting("Osama", "Mohamed"));
/*
Result:
Hello Osama Mohamed
*/

/*
Explanation:
- appendName() is INSIDE buildGreeting()
- It can access:
  - firstName
  - lastName
  - message
- This behavior is called "Closure"
- The inner function changes the outer variable directly
*/



// ==================================================
// Example 2: Nested Function Returns a Value
// ==================================================

function buildGreeting(firstName, lastName) {
  let message = "Hello";

  // Nested function
  function createMessage() {
    return `${message} ${firstName} ${lastName}`;
  }

  // Return the RESULT of the nested function
  return createMessage();
}

console.log(buildGreeting("Osama", "Mohamed"));
/*
Result:
Hello Osama Mohamed
*/

/*
Explanation:
- The inner function does NOT modify outer variables
- It simply RETURNS a new string
- The outer function returns the inner function’s result
- This approach is cleaner and safer
*/



// ==================================================
// Example 3: Multiple Levels of Nested Functions
// ==================================================

function buildGreeting(firstName, lastName) {
  let message = "Hello";

  // First nested function
  function createMessage() {

    // Second nested function
    function getFullName() {
      return `${firstName} ${lastName}`;
    }

    // Using result of another inner function
    return `${message} ${getFullName()}`;
  }

  return createMessage();
}

console.log(buildGreeting("Osama", "Mohamed"));
/*
Result:
Hello Osama Mohamed
*/

/*
Explanation:
- We now have THREE scopes:
  1) Global scope
  2) buildGreeting scope
  3) createMessage scope
  4) getFullName scope
- Each inner function can access parent variables
- This allows:
  - Better organization
  - Separation of responsibilities
  - Cleaner logic
*/



/*
====================================================
Key Concepts Summary
====================================================

1) Nested Function:
- A function defined inside another function
- Can only be used inside its parent

2) Scope:
- Inner functions can access outer variables
- Outer functions CANNOT access inner variables

3) Closure:
- Inner function "remembers" variables from outer scope

4) Why Use This Pattern?
- Encapsulation (hide logic)
- Readable code
- Reusability inside a limited context
- Foundation for advanced concepts (closures, currying)

====================================================
Real-World Usage
====================================================
- Validation logic
- Data formatting
- Helper functions
- API response handling
- Framework internals

====================================================
This is a CORE JavaScript concept
====================================================
*/
