/*
====================================================================
JAVASCRIPT OBJECT PROPERTY ACCESS — BRACKET NOTATION (FULL GUIDE)
====================================================================

1) TOPICS THAT WILL BE STUDIED
--------------------------------------------------------------------
1) JavaScript Objects
2) Object Properties
3) Dot Notation vs Bracket Notation
4) Properties with Special Characters
5) Dynamic Property Access
6) Using Variables as Object Keys
7) String Concatenation for Property Names



2) BASIC STRUCTURE — HOW IT WORKS, WHAT IT DOES, BENEFITS
--------------------------------------------------------------------
• JavaScript objects store data in key–value pairs.
• Property names are always strings internally.
• Dot notation works ONLY with valid identifiers.
• Bracket notation works with:
  - Special characters
  - Spaces
  - Dynamic values
  - Variables
  - Computed strings

SYNTAX: */
object["propertyName"]
object[variableContainingKey]
object[stringExpression]
/*
WHAT IT DOES:
• Allows flexible and dynamic access to object properties.

BENEFITS:
✔ Access properties with hyphens or spaces
✔ Compute property names at runtime
✔ Use variables instead of hard-coded keys
✔ Essential for advanced JavaScript patterns



3) SIMPLE EXAMPLE — BASIC RULE
-------------------------------------------------------------------- */
const person = {
  "first-name": "John",
  "last-name": "Doe"
};

console.log(person["first-name"]); // John
console.log(person["last-name"]);  // Doe
/*

RULE:
→ When a property name is not a valid identifier, bracket notation MUST be used.


4) THREE EXAMPLES (SIMPLE → INTERMEDIATE → ADVANCED)
-------------------------------------------------------------------- */

// [ SIMPLE EXAMPLE ]

const car = {
  brand: "Toyota"
};

console.log(car["brand"]); // Toyota


// [ INTERMEDIATE EXAMPLE ]

const person = {
  "first-name": "John",
  "last-name": "Doe"
};

const firstName = "first-name";
const lastName = "last-name";

console.log(person[firstName]); // John
console.log(person[lastName]);  // Doe

// IDEA:
// → Variables can be used as dynamic keys.


// [ ADVANCED EXAMPLE ]

const person = {
  "first-name": "John",
  "last-name": "Doe"
};

const name = "name";
const prefixFirst = "first-";
const prefixLast = "last-";

console.log(person[prefixFirst + name]); // John
console.log(person[prefixLast + name]);  // Doe

// IDEA:
// → Property names can be constructed dynamically at runtime.


/*
5) COMPLETE SUMMARY
--------------------------------------------------------------------
• Objects store data as key–value pairs.
• Dot notation is limited and static.
• Bracket notation is flexible and dynamic.
• Bracket notation allows:
  - Special characters
  - Variables
  - Expressions
  - Computed keys
• Dynamic property access is essential for:
  - Real-world applications
  - Configuration objects
  - Data-driven programming
  - Advanced JavaScript logic

FINAL RULE:
→ If the property name is dynamic or invalid as an identifier,
  ALWAYS use bracket notation.
====================================================================
*/
