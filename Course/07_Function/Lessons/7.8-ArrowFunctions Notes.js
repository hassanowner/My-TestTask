/*
====================================================
JavaScript Arrow Functions — Returning Objects
Complete Explanation
====================================================

1) TOPIC OVERVIEW
----------------------------------------------------
Arrow Functions are a modern syntax for writing functions in JavaScript.
They are shorter than traditional functions and can make code more readable.

A special case is **returning objects**. 
When returning an object directly, parentheses are often required to avoid ambiguity.

----------------------------------------------------
*/



// ==================================================
// 2) BASIC RULES OF ARROW FUNCTIONS
// ==================================================

/*
General Syntax:
----------------------------------------------------
() => { function body }        // No parameters
 x => { function body }        // One parameter
(x, y) => { function body }   // Multiple parameters

- If the body is a single statement, curly braces can be omitted:
x => x * x

- If returning an object directly, wrap it in parentheses:
() => ({ key: "value" })
*/



// ==================================================
// 3) EXAMPLES — HOW THEY WORK
// ==================================================


// Example 1 — Function without parameters
let greet = () => {
  console.log("Hello World");
};
greet();
// Result:
// Hello World


// Example 2 — Function with one parameter
let square = x => {
  return x * x;
};
console.log(square(5));
// Result:
// 25


// Example 3 — Function with multiple parameters
let sum = (a, b) => {
  return a + b;
};
console.log(sum(3, 7));
// Result:
// 10


// Example 4 — Single-statement function (implicit return)
let cube = x => x * x * x;
console.log(cube(3));
// Result:
// 27


// Example 5 — Returning an object directly
let createUser = (name, age) => ({ name: name, age: age });
console.log(createUser("Alice", 30));
// Result:
// { name: "Alice", age: 30 }



// ==================================================
// 4) TABLE OF ARROW FUNCTION TYPES
// ==================================================

/*

| Syntax                     | Meaning / Description                            | Example / Output                       |
|----------------------------|--------------------------------------------------|----------------------------------------|
| () => { body }             | Function without parameters, block body          | () => { console.log("Hi"); }           |
| x => { body }              | Function with one parameter, block body          | x => { return x*x; }                   |
| (x, y) => { body }         | Function with multiple parameters, block body    | (x, y) => { return x+y; }              |
| x => expression            | Single-statement function, implicit return       | x => x*x                               |
| () => ({ key: value })     | Returning an object directly                     | () => ({name:"Alice"})                 |

*/



/*
====================================================
SUMMARY
====================================================

- Arrow functions are concise function expressions.
- Curly braces {} define a block. If used, 'return' is required.
- Single-expression arrow functions return the value implicitly.
- Returning objects directly requires parentheses around the object.
- Works with zero, one, or multiple parameters.

====================================================
END OF ARROW FUNCTION EXAMPLES
====================================================
*/
