// ===========================
// Understanding "this" in JavaScript
// ===========================

// 1) Global function call
// When calling a global function, `this` refers to the global object
// (or undefined in strict mode).

var name = "Global Name";

function globalFunction() {
  return this.name;
}

console.log(globalFunction()); 
// Output (non-strict mode): "Global Name"
// Output (strict mode): undefined



// -------------------------------------------------------------

// 2) Object method call
// When a function is called as an object method, `this` refers to the object.

const person = {
  name: "Alice",
  getName: function() {
    return this.name;
  }
};

console.log(person.getName()); 
// Output: "Alice"

// -------------------------------------------------------------



// 3) Constructor function call
// When a function is called as a constructor (using `new`),
// `this` refers to the new object being created.

// (details to follow later)
function Person(name) {
  this.name = name;
}

const bob = new Person("Bob");
console.log(bob.name); 
// Output: "Bob"

const jimi = new Person("Jimi");
console.log(jimi.name); 
// Output: "Jimi"

// -------------------------------------------------------------


/* Summary:
1. Global function call → `this` = global object (or undefined in strict mode)
2. Object method call → `this` = the object that called the function
3. Constructor function call → `this` = the newly created object
*/
