/*
====================================================================
OUTPUTTING OBJECT PROPERTIES & METHODS USING THE for-in LOOP
====================================================================

1) TOPICS THAT WILL BE STUDIED
--------------------------------------------------------------------
1) JavaScript Objects Review
2) Enumerable Properties
3) The for-in Loop
4) Iterating Over Object Properties
5) Accessing Values with Bracket Notation
6) Looping Over Methods
7) Practical Use Cases of for-in


2) BASIC STRUCTURE — HOW IT WORKS, WHAT IT DOES, BENEFITS
--------------------------------------------------------------------
• Objects contain properties and methods (key–value pairs).
• Some properties are enumerable (enumerable: true).
• The for-in loop iterates over ALL enumerable keys of an object.

SYNTAX: */
for (let key in object) {
  // key → property name (string)
  // object[key] → property value
}
/*
HOW IT WORKS:
• Each loop iteration assigns a property name to the loop variable.
• The property name is a string.
• Bracket notation is required to access the value dynamically.

WHY DOT NOTATION DOESN’T WORK:
• Dot notation requires a literal property name.
• for-in provides property names dynamically.

BENEFITS:
✔ Easily inspect object contents
✔ Works with both properties and methods
✔ Ideal for debugging and logging
✔ Supports dynamic access patterns



3) SIMPLE EXAMPLE — BASIC RULE
-------------------------------------------------------------------- */
const user = {
  name: "Alice",
  age: 25
};

for (let key in user) {
  console.log(key);        // property name
  console.log(user[key]); // property value
}
/*
OUTPUT:
name
Alice
age
25

RULE:
→ for-in loops over enumerable property names, not values.



4) THREE EXAMPLES (SIMPLE → INTERMEDIATE → ADVANCED)
-------------------------------------------------------------------- */

// [ SIMPLE EXAMPLE ]

const car = {
  brand: "Toyota",
  year: 2022
};

for (let prop in car) {
  console.log(`${prop}: ${car[prop]}`);
}
// brand: Toyota
// year: 2022


// [ INTERMEDIATE EXAMPLE ]

const item = {
  name: "JavaScript: The Comprehensive Guide",
  price: 59.95,
  author: "Philip Ackermann"
};

for (let property in item) {
  console.log(`Name: ${property}`);
  console.log(`Value: ${item[property]}`);
}

// IDEA:
// → Both property names and values are accessible.


// [ ADVANCED EXAMPLE ]

const item = {
  name: "JavaScript: The Comprehensive Guide",
  price: 59.95,
  author: "Philip Ackermann",
  isbn: "978-1-4932-2286-5",
  printDescription: function () {
    console.log(`${this.author}: ${this.name}`);
  }
};

for (let property in item) {
  if (typeof item[property] === "function") {
    console.log(`Method: ${property}`);
  } else {
    console.log(`Property: ${property} → ${item[property]}`);
  }
}

// IDEA:
// → for-in can iterate over both data and behavior.



/*
5) COMPLETE SUMMARY
--------------------------------------------------------------------
• for-in iterates over enumerable object keys.
• Each iteration provides a property name as a string.
• Bracket notation is required for dynamic access.
• for-in includes methods if they are enumerable.
• Best used for:
  - Logging object contents
  - Debugging
  - Simple object inspection

FINAL RULE:
→ Use for-in when you need property NAMES.
→ Use bracket notation to access their VALUES.
====================================================================
*/
