/*
====================================================================
Object.assign(), instanceof, and Object Immutability
COMPLETE • CLEAN 
====================================================================

This file:
- Ordered from practical → conceptual
- Corrected for accuracy and consistency
- Suitable as a long-term study reference
====================================================================
*/


/* =====================================================
SECTION 1 — Object.assign()
===================================================== */

/*
WHAT Object.assign() DOES
- Copies OWN enumerable properties
- From one or more source objects
- Into a TARGET object
- Returns the TARGET
- Performs a SHALLOW copy
*/

const obj1 = {
  prop1: 1,
  meth1() {
    return this.prop1;
  }
};

const obj2 = {
  prop2: 2,
  meth2() {
    return this.prop2;
  }
};

const target = {
  prop1: 100,
  prop3: 3
};

const merged = Object.assign(target, obj1, obj2);

console.log(merged);
/*
{
  prop1: 1,
  prop3: 3,
  prop2: 2,
  meth1: ƒ,
  meth2: ƒ
}
*/

/*
IMPORTANT:
merged === target
Target is mutated
*/

console.log(merged === target); // true


/* SAFE COPY (NO MUTATION) */
const safeCopy = Object.assign({}, obj1, { prop5: 5 });
console.log(safeCopy);


/* COMMON USE CASE — DEFAULT SETTINGS */
const defaults = { theme: "light", debug: false };
const userSettings = { debug: true };

const settings = Object.assign({}, defaults, userSettings);
console.log(settings);


/* =====================================================
SECTION 2 — instanceof
===================================================== */

/*
WHAT instanceof DOES
- Checks the PROTOTYPE chain
- Returns true if Constructor.prototype
  exists anywhere in the object's chain

SYNTAX:
object instanceof Constructor
*/

let arr = [];
console.log(arr instanceof Array);   // true
console.log(arr instanceof Object);  // true

let obj = {};
console.log(obj instanceof Object);  // true
console.log(obj instanceof Array);   // false

function Person(name) {
  this.name = name;
}

const p = new Person("Ali");
console.log(p instanceof Person); // true
console.log(p instanceof Object); // true


/* CLASSES */
class Animal {}
class Dog extends Animal {}

const d = new Dog();
console.log(d instanceof Dog);    // true
console.log(d instanceof Animal); // true


/* PRIMITIVES */
let n = 5;
console.log(n instanceof Number); // false

let boxed = new Number(5);
console.log(boxed instanceof Number); // true


/* typeof vs instanceof */
console.log(typeof []);            // "object"
console.log([] instanceof Array);  // true


/* KEY RULE */
 /*
 instanceof checks WHO created the object,
 not what it looks like.
 */


/* =====================================================
SECTION 3 — OBJECT MUTABILITY CONTROL
===================================================== */

/*
JavaScript objects are mutable by default.
Three levels of protection exist:

1) Object.preventExtensions()
2) Object.seal()
3) Object.freeze()
*/


/* -----------------------------------------------------
1) Object.preventExtensions()
----------------------------------------------------- */
/*
- Prevents adding new properties
- Allows:
  - Changing values
  - Deleting properties
  - Reconfiguring attributes
*/

const user1 = { name: "John" };
Object.preventExtensions(user1);

user1.name = "James"; // allowed
delete user1.name;    // allowed
user1.age = 30;       // ignored / error (strict mode)

console.log(Object.isExtensible(user1)); // false


/* -----------------------------------------------------
2) Object.seal()
----------------------------------------------------- */
/*
- Prevents adding properties
- Prevents deleting properties
- Prevents attribute reconfiguration
- Allows changing values
*/

const user2 = { name: "John", age: 30 };
Object.seal(user2);

user2.name = "James"; // allowed
delete user2.age;     // error
user2.city = "NY";    // error

console.log(Object.isSealed(user2)); // true


/* -----------------------------------------------------
3) Object.freeze()
----------------------------------------------------- */
/*
- Prevents ALL changes
- Full immutability
*/

const user3 = { name: "John", age: 30 };
Object.freeze(user3);

user3.name = "James"; // error
delete user3.age;     // error
user3.city = "NY";    // error

console.log(Object.isFrozen(user3)); // true


/* =====================================================
LEVEL COMPARISON TABLE (LOGICAL SUMMARY)
===================================================== */

/*
Method               | Add | Delete | Change Value | Reconfigure
---------------------------------------------------------------
preventExtensions()  | No  | Yes    | Yes          | Yes
seal()               | No  | No     | Yes          | No
freeze()             | No  | No     | No           | No
*/

/*
KEY FACTS:
- All frozen objects are sealed
- All sealed objects are non-extensible
- freeze() is strongest protection
*/


/* =====================================================
FINAL SUMMARY — MEMORIZE THIS
===================================================== */
/*
Object.assign():
- Merges objects
- Shallow copy
- Mutates target unless {} is used

instanceof:
- Checks prototype chain
- Reliable object type checking
- Does NOT work with primitives

Object mutability:
- preventExtensions → lock structure
- seal → lock structure + attributes
- freeze → full immutability

CORE RULE:
JavaScript behavior depends on
REFERENCE, PROTOTYPE, and DESCRIPTORS
—not appearance.
*/


/* =====================================================
END OF SINGLE FILE
===================================================== */
