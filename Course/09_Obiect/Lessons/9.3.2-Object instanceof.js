/*
========================================================
             JAVASCRIPT instanceof      
    Objects with Different Types – Full Guide   
========================================================

1) TOPICS THAT WILL BE STUDIED
─────────────────────────────
1. What instanceof is
2. Syntax of instanceof
3. How instanceof works (Prototype Chain)
4. instanceof vs typeof
5. Using instanceof with:
   - Object literals
   - Constructor functions
   - ES6 Classes
   - Built-in objects (Array, Date, Function, Object)
6. Common mistakes
7. Advanced behavior and edge cases
──────────────────────────────────────────────────────────────────────────────


2) BASIC STRUCTURE, HOW IT WORKS, WHAT IT DOES, BENEFITS
────────────────────────────────────────────────────────

SYNTAX:
object instanceof Constructor

HOW IT WORKS:
- JavaScript checks whether Constructor.prototype exists
  anywhere in the object's prototype chain.

INTERNAL LOGIC (SIMPLIFIED):
object.__proto__ === Constructor.prototype
OR
object.__proto__.__proto__ === Constructor.prototype
... until null

WHAT IT DOES:
- Returns true if the object was created from that constructor
- Otherwise returns false

BENEFITS:
- Reliable object type checking
- Works with custom objects
- Better than typeof for complex types
- Essential for OOP and class-based logic
──────────────────────────────────────────────────────────────────────────────


3) BASIC RULE EXAMPLE
─────────────────────────── */

let arr = [];
console.log(arr instanceof Array);
/* true

RULE:
If an object was created using a constructor,
instanceof that constructor is true.
──────────────────────────────────────────────────────────────────────────────



!! NOTE:
If you don’t understand why a result is true or false,
inspect the value in the console. Checking its type and 
internal structure helps you understand how the data works.

4) EXAMPLES :
───────────────────────── */

// [1] SIMPLE EXAMPLE

let x = [];
x instanceof Array;
// true

// [2] SIMPLE

let y = {};
y instanceof Object;
// true

// [3] SIMPLE

let z = new Date();
z instanceof Date;
// true

// [4] INTERMEDIATE (Constructor Function)

function Person(name) {
  this.name = name;
}
let p = new Person("Ali");
p instanceof Person;
// true

// [5] INTERMEDIATE

p instanceof Object;
// true (because all objects inherit from Object)

// [6] INTERMEDIATE (Class)

class Animal {}
let cat = new Animal();
cat instanceof Animal;
// true

// [7] INTERMEDIATE (Array vs Object)

let nums = [1, 2, 3];
nums instanceof Array;
// true
nums instanceof Object;
// true

// [8] BUILT-IN FUNCTION

function test() {}
test instanceof Function;
// true

// [9] BUILT-IN FUNCTION

test instanceof Object;
// true

// [10] ADVANCED (Prototype Chain)

class A {}
class B extends A {}
let obj = new B();
obj instanceof B;
// true
obj instanceof A;
// true

// [11] ADVANCED (Literal Object)

let literal = {};
literal instanceof Object;
// true
literal instanceof Array;
// false

// [12] EDGE CASE

let n = 5;
n instanceof Number;
// false (primitive, not object)

// [13] FIX FOR PRIMITIVES

let n2 = new Number(5);
n2 instanceof Number;
// true

// [14] instanceof vs typeof

typeof [] === "object";
// true (confusing)
[] instanceof Array;
// true (correct)
/*
──────────────────────────────────────────────────────────────────────────────


5) COMPLETE SUMMARY
───────────────────
- instanceof checks the prototype chain
- It is used to verify object types accurately
- Works with custom constructors and classes
- Better than typeof for arrays and objects
- All objects inherit from Object
- Primitives do NOT work with instanceof
- Essential for advanced JavaScript OOP

KEY RULE TO REMEMBER:
instanceof checks WHO CREATED the object, not WHAT IT LOOKS LIKE
──────────────────────────────────────────────────────────────────────────────
*/
