/*
┌──────────────────────────────────────────────────────────────────────────────────────────────┐
│        JAVASCRIPT OBJECT.CREATE – PROTOTYPES & PROPERTY DESCRIPTORS (FULL GUIDE)               │
└──────────────────────────────────────────────────────────────────────────────────────────────┘

1) TOPICS THAT WILL BE STUDIED
─────────────────────────────
1. Object.create()
2. Object.prototype
3. Property Descriptors (value and default attributes)
4. Defining properties and methods in objects
5. The `this` keyword inside object methods
6. Accessing object properties
7. Benefits of Object.create over object literals
8. Prototype-based inheritance
9. Object behavior without constructors or classes

──────────────────────────────────────────────────────────────────────────────────────────────


2) BASIC STRUCTURE – HOW IT WORKS, WHAT IT DOES, BENEFITS
──────────────────────────────────────────────────────── */

// BASIC STRUCTURE:
Object.create(prototype, propertyDescriptors)

// EXAMPLE STRUCTURE:
Object.create(Object.prototype, { ... })

/* HOW IT WORKS:
- JavaScript creates a new empty object
- Links it directly to the given prototype
- Adds properties using property descriptors
- No constructor function is called
- No `class` or `new` keyword is used

WHAT IT DOES:
- Creates objects with full control over their properties
- Defines values and behavior at a low-level
- Uses JavaScript’s real prototype system

BENEFITS:
- Full control over object design
- Properties are read-only and hidden by default
- Safer and more predictable objects
- Ideal for advanced systems and libraries
- Helps understand JavaScript internals deeply

──────────────────────────────────────────────────────────────────────────────────────────────


3) SIMPLE BASIC RULE EXAMPLE
─────────────────────────── */

const obj = Object.create(Object.prototype, {
  x: { value: 10 }
});

console.log(obj.x);
// 10

/* BASIC RULE:
Properties defined with descriptors exist directly on the object
and are NOT writable, enumerable, or configurable by default.

──────────────────────────────────────────────────────────────────────────────────────────────


4) THREE EXAMPLES (SIMPLE → INTERMEDIATE → ADVANCED)
──────────────────────────────────────────────────── */

// [1] SIMPLE EXAMPLE

const user = Object.create(Object.prototype, {
  name: { value: "Ali" }
});

console.log(user.name);
// Ali

/* EXPLANATION:
- Creates an object
- Adds a fixed property
- Property cannot be changed

────────────────────────────────────────────────────────────────────────────────*/

// [2] INTERMEDIATE EXAMPLE

const book = Object.create(Object.prototype, {
  title: { value: "JavaScript Guide" },
  price: { value: 40 }
});

console.log(book.title, book.price);
// JavaScript Guide 40

/* EXPLANATION:
- Multiple properties
- All are own properties
- All are protected by default

───────────────────────────────────────────────────────────────────────────────── */

// [3] ADVANCED EXAMPLE

const product = Object.create(Object.prototype, {
  name: { value: "Laptop" },
  price: { value: 1200 },
  printInfo: {
    value: function () {
      console.log(`${this.name}: $${this.price}`);
    }
  }
});

product.printInfo();
// Laptop: $1200

/* EXPLANATION:
- Combines data + behavior
- Uses `this` to access object properties
- Mimics class-like objects without classes

──────────────────────────────────────────────────────────────────────────────────────────────


5) IMPORTANT NOTE
─────────────────
If you do not understand why a result is `true` or `false`,
inspect the value in the console.
Checking the data type and internal structure helps you
understand how JavaScript represents and handles the data.

──────────────────────────────────────────────────────────────────────────────────────────────


6) COMPLETE SUMMARY
───────────────────
- Object.create creates objects without constructors
- Prototype is explicitly defined
- Properties are created using descriptors
- Default descriptor behavior:
  • writable: false
  • enumerable: false
  • configurable: false
- Methods can be safely added to objects
- `this` refers to the object itself
- This approach reveals JavaScript’s true prototype-based model
- Best suited for advanced, controlled, and scalable code

KEY CONCEPT:
JavaScript objects are prototype-based, not class-based.
Object.create exposes this reality clearly and directly.

──────────────────────────────────────────────────────────────────────────────────────────────
*/
