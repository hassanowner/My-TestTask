/*
====================================================================
USING SYMBOLS TO DEFINE UNIQUE OBJECT PROPERTIES (JavaScript)
====================================================================

1) TOPICS THAT WILL BE STUDIED
--------------------------------------------------------------------
1) JavaScript Symbols (ES6)
2) Symbols as Object Property Keys
3) Uniqueness of Symbol Properties
4) Accessing Symbol-Based Properties
5) Symbols vs String Property Names
6) Property Name Collisions
7) Practical Use Cases for Symbols



2) BASIC STRUCTURE — HOW IT WORKS, WHAT IT DOES, BENEFITS
--------------------------------------------------------------------
• A Symbol is a primitive data type introduced in ES6.
• Every Symbol value is guaranteed to be unique.
• Symbols can be used as object property keys.
• Symbol-based properties are NOT accessible via:
  - Dot notation
  - String keys
  - Index access

SYNTAX: */
const mySymbol = Symbol("description");
object[mySymbol] = value;
/*
HOW IT WORKS:
• The symbol itself is the ONLY reference to the property.
• Even symbols with the same description are different.
• Property name collisions are impossible.

BENEFITS:
✔ Guaranteed unique property keys
✔ Avoids naming conflicts
✔ Safe object extension
✔ Ideal for internal / private-like data
✔ Prevents accidental overwrites



3) SIMPLE EXAMPLE — BASIC RULE
-------------------------------------------------------------------- */
const id = Symbol("id");
const user = {};

user[id] = 123;

console.log(user[id]);      // 123
console.log(user.id);       // undefined
console.log(user["id"]);    // undefined
/*
RULE:
→ Symbol-based properties can ONLY be accessed using the symbol itself.



4) THREE EXAMPLES (SIMPLE → INTERMEDIATE → ADVANCED)
--------------------------------------------------------------------*/

// [ SIMPLE EXAMPLE ]

const token = Symbol("token");
const obj = {};

obj[token] = "abc";

console.log(obj[token]);   // abc
console.log(obj.token);    // undefined


// [ INTERMEDIATE EXAMPLE ]

const firstName = Symbol("firstName");
const lastName = Symbol("lastName");

const person = {};

person[firstName] = "John";
person[lastName] = "Doe";

console.log(person[firstName]); // John
console.log(person[lastName]);  // Doe

console.log(person.firstName);  // undefined
console.log(person["firstName"]); // undefined

// IDEA:
// → Property names are hidden from string-based access.


// [ ADVANCED EXAMPLE — SYMBOLS vs STRINGS ]

/* SYMBOL VERSION */
const symFirst = Symbol("firstName");
const symLast = Symbol("lastName");

const personA = {};
personA[symFirst] = "John";
personA[symLast] = "Doe";

console.log(personA[symFirst]); // John
console.log(personA[symLast]);  // Doe
console.log(personA.firstName); // undefined

/* STRING VERSION */
const strFirst = "firstName";
const strLast = "lastName";

const personB = {};
personB[strFirst] = "John";
personB[strLast] = "Doe";

console.log(personB[strFirst]); // John
console.log(personB[strLast]);  // Doe
console.log(personB.firstName); // John

// IDEA:
// → Strings allow access by name.
// → Symbols require the exact symbol reference.


/*  
5) COMPLETE SUMMARY
--------------------------------------------------------------------
• Symbols create unique, collision-free property keys.
• Symbol properties cannot be accessed accidentally.
• Symbol keys are invisible to normal string-based access.
• Symbols are ideal for:
  - Internal metadata
  - Library-safe extensions
  - Avoiding name conflicts
• Strings are readable and accessible by name.
• Symbols prioritize safety and uniqueness over convenience.

FINAL RULE:
→ Use SYMBOLS when property uniqueness and safety matter.
→ Use STRINGS when readability and external access are required.
====================================================================
  */
