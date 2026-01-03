// ===========================
// 1) Topics to Study
// ===========================
// - Object properties and methods
// - The `this` keyword in JavaScript
// - Global context vs Object context
// - Assigning functions as object methods
// - Accessing properties via `this`


// ===========================
// 2) Basic Structure
// ===========================
// - Objects can have properties (data) and methods (functions).
// - `this` refers to the execution context:
//     • Inside an object method → `this` = object itself
//     • In a standalone function → `this` = global object (window/global) or undefined in strict mode
// - Standalone functions can be assigned to objects as methods; then `this` refers to the object.
// Benefits:
// - Modular, reusable code
// - Avoids duplicating functions
// - Dynamic assignment of behavior to multiple objects


// ===========================
// 3) Simple Example
// ===========================
const person = {
  name: 'John',
  getName: function() {
    return this.name;
  }
};
console.log(person.getName()); // Output: "John"

// Standalone function in global context
function getNameGlobal() { 
  return this.name; }
console.log(getNameGlobal()); // Output: undefined (or global value if exists)

var name = "global name";
function getNameGlobal2() { 
  return this.name; }
console.log(getNameGlobal2()); // Output: "global name"



// ===========================
// 4) Examples:
// ===========================

// Example 1 -in normal Example
const user = {
  name: 'Alice',
  getName: function() { return this.name; }
};
console.log(user.getName()); // Output: "Alice"


// Example 2 - Advanced
var name = "global name";
function getNameAdvanced() { return this.name; }

const artist1 = {
  name: 'Bob',
  getName: getNameAdvanced 
};
const artist2 = {
  name: 'Jimi',
  getName: getNameAdvanced 
};

console.log(getNameAdvanced());       // Output: "global name"
console.log(artist1.getName());       // Output: "Bob"
console.log(artist2.getName());       // Output: "Jimi"


/*

##1_ IF:  */

var name = "global name";
function getNameAdvanced() { 
  return this.name; }

const artist1 = {
  name: 'Kyuss',
  getName: getNameAdvanced() // getName --> string 
 // Because `getName` it gets its value by calling getNameAdvanced(), 
 // and this function returns `this.name`,
 // which it gets from the name variable, 
 // so the return value is String, which it receives. 
};
const artist2 = {
  name: 'Jimi', 
  getName: getNameAdvanced() // Just like the one before it
};

console.log(getNameAdvanced());       // Output: "global name"
console.log(typeof artist1.getName);  // Output: string 
console.log(artist1.getName);         // Output: "global name"
console.log(typeof artist2.getName);  // Output: string 
console.log(artist2.getName);         // Output: "global name"



/*

##2_ In Our Example:  */

var name = "global name";
function getNameAdvanced() {
  return this.name; }

const artist1 = {
  name: 'Bob',
  getName: getNameAdvanced 
};
const artist2 = {
  name: 'Jimi',
  getName: getNameAdvanced 
};

console.log(getNameAdvanced());        // Output: "global name"

console.log(typeof artist1.getName);   // Output: "function" 
console.log(artist1.getName());        // Output: "Bob"

console.log(typeof artist2.getName);   // Output: "function"
console.log(artist2.getName());        // Output: "Jimi"

/*
# What happens and why do these different results occur? 
- Note the steps in detail here:       

1- In `console.log(getNameAdvanced())`, You call the function, and since the function returns this value to you,
   it saves it, so its value appears as such.
   
2- This assigns the existing function 'getNameAdvanced' to the property 'getName' of the object.
3- It does NOT call the function; it just stores a reference.
4- It's just like: */
var name = "global name";
function getNameAdvanced() { return this.name; }
const artist1 = {
  name: 'Bob', 
  getName: function getNameAdvanced() { return this.name; } /*
* but without call it, it's just a function *

5- So you can notice (typeof artist1.getName) --> "function"
6- When called as artist1.getName(), 'this' refers to the object (artist1), so this.name → "Bob".
7- To verify what I am saying, you can observe when working ` typeof artist1.getName() `
   the result must be a string because it stores the return value from the function ( you use callfunction`getName()` ), 
   and the return value is only the name.
   
8- This allows the same function to be reused by multiple objects (e.g., artist2).


*/






/*
Global Context
--------------
this (global object)
|
|-- name: "global name"
|-- getNameAdvanced(): function

artist1 Object
--------------
artist1
|
|-- name: "Kyuss"
|-- getName: getNameAdvanced()
|
Calling artist1.getName():
this ---> artist1
this.name ---> "Kyuss"

artist2 Object
--------------
artist2
|
|-- name: "Jimi"
|-- getName: getNameAdvanced()
|
Calling artist2.getName():
this ---> artist2
this.name ---> "Jimi"






// ===========================
// 5) Summary
// ===========================
// - Object methods: functions inside objects that can access the object's properties using `this`.
// - Standalone functions: `this` refers to the global object (or undefined in strict mode).
// - Assigning a function to an object as a method: `this` now refers to that object.
// - `this` is dynamic and depends on **how the function is called**, not where it is defined.
// - This allows code reuse and dynamic behavior across multiple objects.
*/
