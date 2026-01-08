/*
====================================================================
THE delete OPERATOR & THE in OPERATOR IN JAVASCRIPT OBJECTS
====================================================================

1) TOPICS THAT WILL BE STUDIED
--------------------------------------------------------------------
1) JavaScript Object Properties
2) The delete Operator
3) The in Operator
4) Difference Between delete, null, and undefined
5) Checking Property Existence
6) Runtime Object Modification



2) BASIC STRUCTURE — HOW IT WORKS, WHAT IT DOES, BENEFITS
--------------------------------------------------------------------
• JavaScript objects are mutable (can be changed at runtime).
• Properties can be:
  - Deleted
  - Set to null
  - Set to undefined

THE delete OPERATOR:
--------------------
delete object.property;
delete object["property"];

WHAT IT DOES:
• Completely removes the property from the object.
• After deletion:
  - The property no longer exists
  - `in` operator returns false

THE in OPERATOR:
----------------
"property" in object

WHAT IT DOES:
• Checks whether a property EXISTS in the object
• Returns true even if the value is:
  - null
  - undefined

BENEFITS:
✔ Clear distinction between "missing" and "empty"
✔ Proper object cleanup
✔ Safer property checks
✔ Essential for debugging and validation logic



3) SIMPLE EXAMPLE — BASIC RULE
--------------------------------------------------------------------*/
const obj = { x: 10 };

console.log("x" in obj); // true
delete obj.x;
console.log("x" in obj); // false
console.log(obj.x); // undefined

// RULE:
// → delete removes the property itself, not just its value.


/*
4) THREE EXAMPLES (SIMPLE → INTERMEDIATE → ADVANCED)
-------------------------------------------------------------------- */

// [ SIMPLE EXAMPLE — delete ]

const car = { brand: "Toyota", year: 2022 };

delete car.year;

console.log("year" in car); // false
console.log(car.year); // undefined


// [ INTERMEDIATE EXAMPLE — null vs delete ]

const item = {
  name: "Book",
  price: 59.95
};

item.price = null;

console.log("price" in item); // true
console.log(item.price); // null

// IDEA:
// → Property EXISTS, but its value is intentionally empty.


// [ ADVANCED EXAMPLE — delete vs undefined ]

const item = {
  name: "JavaScript: The Comprehensive Guide",
  price: 59.95,
  author: "Philip Ackermann",
  isbn: "978-1-4932-2286-5",
  printDescription: function () {
    console.log(`${this.author}: ${this.name}`);
  }
};

console.log("price" in item); // true
console.log(item.price); // 59.95

delete item.price;

console.log("price" in item); // false
console.log(item.price); // undefined

item.price = undefined;

console.log("price" in item); // true
console.log(item.price); // undefined

// IDEA:
// → undefined ≠ deleted
// → delete removes the key entirely.


/*
5) COMPLETE SUMMARY
--------------------------------------------------------------------
• delete removes a property from an object completely.
• The in operator checks for property existence, NOT value.
• Setting a property to:
  - null → property exists with empty value
  - undefined → property exists but uninitialized
• Only delete makes the property truly disappear.

FINAL RULE:
→ Use delete when the property should NOT exist at all.
→ Use null or undefined when the property exists but has no value.
====================================================================
  */
