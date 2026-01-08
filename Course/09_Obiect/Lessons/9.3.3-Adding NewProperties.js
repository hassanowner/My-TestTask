/*
====================================================================
ADDING NEW PROPERTIES AND METHODS IN JAVASCRIPT OBJECTS
====================================================================

1) TOPICS THAT WILL BE STUDIED
--------------------------------------------------------------------
1) JavaScript Objects Review
2) Object Properties vs Methods
3) Adding Properties Using Dot Notation
4) Adding Properties Using Bracket Notation
5) Adding Methods to Objects
6) Using `this` Inside Methods
7) Dynamic Property and Method Creation



2) BASIC STRUCTURE — HOW IT WORKS, WHAT IT DOES, BENEFITS
--------------------------------------------------------------------
• JavaScript objects are dynamic.
• You can add new properties and methods at ANY time.
• No class or constructor is required. */

// SYNTAX:
object.newProperty = value;
object["new-property"] = value;

object.newMethod = function() { ... };

/*
WHAT IT DOES:
• Extends an existing object with new data or behavior.
• Methods are just properties that store functions.

BENEFITS:
✔ Flexible and dynamic data structures
✔ Objects can evolve during runtime
✔ Enables behavior-based programming
✔ Essential for real-world applications


3) SIMPLE EXAMPLE — BASIC RULE
-------------------------------------------------------------------- */
const person = {};

person.name = "John";
person.age = 30;

console.log(person.name); // John
console.log(person.age);  // 30

// RULE:
// → Objects can receive new properties after creation.



/*
4) THREE EXAMPLES (SIMPLE → INTERMEDIATE → ADVANCED)
-------------------------------------------------------------------- */

// [ SIMPLE EXAMPLE ]

const car = {};

car.brand = "Toyota";
car.year = 2022;

console.log(car); 
// { brand: "Toyota", year: 2022 }


// [ INTERMEDIATE EXAMPLE ]

const user = {
  username: "admin"
};

user.isLoggedIn = true;
user.login = function () {
  return "User logged in";
};

console.log(user.isLoggedIn); // true
console.log(user.login());   // User logged in

// IDEA:
// → Methods are functions stored inside object properties.


// [ ADVANCED EXAMPLE ]

const person = {
  firstName: "John",
  lastName: "Doe"
};

const prop = "age";
person[prop] = 30;

person.getFullName = function () {
  return this.firstName + " " + this.lastName;
};

console.log(person.age);          // 30
console.log(person.getFullName()); // John Doe

// IDEA:
// → Properties and methods can be added dynamically.
// → `this` refers to the object itself.

/*
5) COMPLETE SUMMARY
--------------------------------------------------------------------
• JavaScript objects are mutable and dynamic.
• Properties can be added using dot or bracket notation.
• Methods are object properties holding functions.
• `this` allows access to the object’s own properties.
• Bracket notation enables dynamic property creation.

FINAL RULE:
→ JavaScript objects can grow and change at runtime,
  making them extremely powerful and flexible.
====================================================================
*/
