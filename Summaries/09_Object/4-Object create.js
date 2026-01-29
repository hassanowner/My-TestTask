/*
====================================================================
Object.create() & Property Descriptors — COMPLETE
====================================================================

This file is:
- Fully ordered
- Cleaned and corrected
- Conceptually progressive (Basics → Advanced)
- One single, self-contained reference file

Environment assumption:
- JavaScript (browser or Node.js, unless DOM is mentioned)

====================================================================
*/


/* =====================================================
1) WHAT IS Object.create() ?
===================================================== */
/*
Object.create(proto, descriptors?)

- Creates a NEW object
- Explicitly sets its [[Prototype]]
- Does NOT copy properties
- No constructor is called
- Pure prototype-based inheritance
*/




/* =====================================================
2) BASIC PROTOTYPE OBJECT
===================================================== */
const baseUser = {
  age: 20,
  doubleAge() {
    return this.age * 2;
  }
};

console.log(baseUser.age);        // 20
console.log(baseUser.doubleAge()); // 40




/* =====================================================
3) CREATING AN EMPTY OBJECT
===================================================== */
/*
Prototype is an empty object {}
*/
const emptyObj = Object.create({});

emptyObj.x = 100;
console.log(emptyObj.x); // 100




/* =====================================================
4) INHERITING FROM ANOTHER OBJECT
===================================================== */
const childUser = Object.create(baseUser);

/*
childUser has:
- NO own properties
- Inherits from baseUser
*/

console.log(childUser.age);        // 20 (from prototype)
console.log(childUser.doubleAge()); // 40




/* =====================================================
5) PROPERTY LOOKUP ORDER (CRITICAL)
===================================================== */
/*
JavaScript searches properties in this order:

1) Object itself
2) Its prototype
3) Prototype of prototype
4) null → stop
*/




/* =====================================================
6) OVERRIDING (SHADOWING) PROPERTIES
===================================================== */
childUser.age = 50;

console.log(childUser.age);        // 50 (own property)
console.log(childUser.doubleAge()); // 100

/*
Method is inherited
Data is overridden
`this` always refers to the CALLING object
*/




/* =====================================================
7) PROTOTYPE RELATIONSHIP CHECK
===================================================== */
console.log(baseUser.isPrototypeOf(childUser)); // true




/* =====================================================
8) MODIFYING THE PROTOTYPE
===================================================== */
/*
All inheritors see prototype changes
*/
baseUser.tripleAge = function () {
  return this.age * 3;
};

console.log(childUser.tripleAge()); // 150




/* =====================================================
9) WHY Object.create() IS POWERFUL
===================================================== */
/*
- Explicit inheritance
- No constructors
- No duplication of methods
- Memory-efficient
- Reveals JavaScript’s true object model
*/




/* =====================================================
10) Object.create() VS OBJECT LITERAL
===================================================== */
/*
Object Literal:
const obj = { a: 1 };

- No explicit prototype control

Object.create(proto):
- Full prototype linkage
*/




/* =====================================================
11) INTRO TO PROPERTY DESCRIPTORS
===================================================== */
/*
Every property has hidden metadata:

- value
- writable
- enumerable
- configurable
*/




/* =====================================================
12) DEFINING PROPERTIES WITH DESCRIPTORS
===================================================== */
const descriptorObj = Object.create(Object.prototype, {
  x: { value: 10 }
});

console.log(descriptorObj.x); // 10

/*
Default descriptor values:
- writable: false
- enumerable: false
- configurable: false
*/




/* =====================================================
13) SIMPLE DESCRIPTOR EXAMPLE
===================================================== */
const userA = Object.create(Object.prototype, {
  name: { value: "Ali" }
});

console.log(userA.name); // Ali
userA.name = "Omar";
console.log(userA.name); // Ali (not writable)




/* =====================================================
14) INTERMEDIATE DESCRIPTOR EXAMPLE
===================================================== */
const book = Object.create(Object.prototype, {
  title: { value: "JavaScript Guide" },
  price: { value: 40 }
});

console.log(book.title, book.price); // JavaScript Guide 40




/* =====================================================
15) ADVANCED: DATA + BEHAVIOR
===================================================== */
const product = Object.create(Object.prototype, {
  name: { value: "Laptop" },
  price: { value: 1200 },
  printInfo: {
    value: function () {
      console.log(this.name + ": $" + this.price);
    }
  }
});

product.printInfo(); // Laptop: $1200




/* =====================================================
16) Object.getOwnPropertyDescriptor()
===================================================== */
/*
Reads ONE property descriptor
*/
const item = {
  name: "JavaScript: The Comprehensive Guide",
  price: 59.95
};

const nameDesc = Object.getOwnPropertyDescriptor(item, "name");

console.log(nameDesc.value);        // string
console.log(nameDesc.writable);     // true
console.log(nameDesc.enumerable);   // true
console.log(nameDesc.configurable); // true




/* =====================================================
17) Object.getOwnPropertyDescriptors()
===================================================== */
/*
Reads ALL OWN property descriptors
*/
const allDescs = Object.getOwnPropertyDescriptors(item);

console.log(allDescs.price.value);     // 59.95
console.log(allDescs.price.writable);  // true




/* =====================================================
18) READ-ONLY PROPERTY EXAMPLE
===================================================== */
const car = {};

Object.defineProperty(car, "brand", {
  value: "Toyota",
  writable: false,
  enumerable: true,
  configurable: true
});

car.brand = "BMW";
console.log(car.brand); // Toyota




/* =====================================================
19) HIDDEN + LOCKED PROPERTY
===================================================== */
const account = {};

Object.defineProperty(account, "balance", {
  value: 1000,
  writable: false,
  enumerable: false,
  configurable: false
});

console.log(account.balance); // 1000
console.log(Object.keys(account)); // []




/* =====================================================
20) WHEN TO USE EACH API
===================================================== */
/*
Object.create():
- Prototype-based inheritance
- No constructors or classes

getOwnPropertyDescriptor():
- Inspect ONE property

getOwnPropertyDescriptors():
- Clone objects safely
- Frameworks & libraries
*/




/* =====================================================
FINAL SUMMARY — MEMORIZE THIS
===================================================== */
/*
- JavaScript objects are prototype-based
- Object.create() exposes this model directly
- Prototypes are shared, not copied
- Property descriptors control behavior
- Default descriptor values are restrictive
- `this` always refers to the calling object
- These tools are CORE to advanced JavaScript
*/




/* =====================================================
END OF SINGLE FILE
===================================================== */
