/*
====================================================================
PREVENTING CHANGES TO OBJECTS
(Object.preventExtensions • Object.seal • Object.freeze)
====================================================================

1) TOPICS THAT WILL BE STUDIED
--------------------------------------------------------------------
1) Object Mutability in JavaScript
2) Object.preventExtensions()
3) Object.seal()
4) Object.freeze()
5) Object.isExtensible()
6) Object.isSealed()
7) Object.isFrozen()
8) Differences Between preventExtensions, seal, and freeze
9) Property Values vs Property Attributes


2) BASIC STRUCTURE — HOW IT WORKS, WHAT IT DOES, BENEFITS
--------------------------------------------------------------------
JavaScript objects are mutable by default:
• You can add properties
• You can delete properties
• You can modify values
• You can reconfigure attributes

JavaScript provides THREE levels of protection:

1. Object.preventExtensions()
2. Object.seal()
3. Object.freeze()

Each level increases restriction.

--------------------------------------------------------
1) Object.preventExtensions(object)
--------------------------------------------------------
WHAT IT DOES:
• Prevents adding NEW properties or methods
• Existing properties:
  ✔ Values can change
  ✔ Attributes can change
  ✔ Properties can be deleted

CHECK:*/
Object.isExtensible(object)
/*
BENEFIT:
✔ Stops uncontrolled object growth
✔ Keeps object structure stable
*/

const john = { firstName: 'John', lastName: 'Doe' }
  console.log(Object.isExtensible(john)); //true
john.age = 44; // define new property
console.log(john.age); // 44 
Object.preventExtensions(john); // prevent extensions 
console.log(Object.isExtensible(john)); // false

/*
--------------------------------------------------------
2) Object.seal(object)
--------------------------------------------------------
WHAT IT DOES:
• Prevents adding new properties
• Prevents deleting properties
• Prevents reconfiguring property attributes
• Existing values CAN still change

CHECK:*/
Object.isSealed(object)
/*
BENEFIT:
✔ Locks object structure
✔ Allows controlled value updates

SEALING OBJECTS EXAMPLE : */
const john = { firstName: 'John', lastName: 'Doe' };

console.log(Object.isExtensible(john)); // true
console.log(Object.isSealed(john));     // false

john.age = 44; // define new property
console.log(john.age); // 44

Object.seal(john); // seal the object

console.log(Object.isExtensible(john)); // false
console.log(Object.isSealed(john));     // true

john.firstName = 'James'; // permitted: change existing property
console.log(john.firstName); // "James"

console.log(Object.getOwnPropertyDescriptor(john, 'firstName').enumerable); // true


/*
--------------------------------------------------------
3) Object.freeze(object)
--------------------------------------------------------
WHAT IT DOES:
• Prevents adding new properties
• Prevents deleting properties
• Prevents reconfiguring attributes
• Prevents changing property values

CHECK:*/
Object.isFrozen(object)
/*
BENEFIT:
✔ Full immutability
✔ Ideal for constants and configuration objects

FREEZING OBJECTS EXAMPLE: */

const john = { firstName: 'John', lastName: 'Doe' };

console.log(Object.isExtensible(john)); // true
console.log(Object.isSealed(john));     // false
console.log(Object.isFrozen(john));     // false

john.age = 44; // new property
console.log(john.age); // 44

Object.freeze(john); // freeze the object

console.log(Object.isExtensible(john)); // false
console.log(Object.isSealed(john));     // true
console.log(Object.isFrozen(john));     // true

john.firstName = 'James'; 
// TypeError: Cannot assign to read-only property 'firstName' of #<Object>



/*
3) SIMPLE EXAMPLE — BASIC RULE
-------------------------------------------------------------------- */
const user = { name: "John" };

Object.freeze(user);

user.name = "James"; //  Error
user.age = 30;       //  Error

console.log(user.name); // John

// RULE:
// → freeze = NO changes at all.



/*
4) THREE EXAMPLES (SIMPLE → INTERMEDIATE → ADVANCED)
--------------------------------------------------------------------*/

// [ SIMPLE EXAMPLE — preventExtensions ]

const john = {
  firstName: "John",
  lastName: "Doe"
};

console.log(Object.isExtensible(john)); // true

Object.preventExtensions(john);

john.age = 44; //  Error
john.firstName = "James"; // ✔ Allowed

console.log(john.firstName); // James
console.log(Object.isExtensible(john)); // false

// IDEA:
// → Structure locked, values editable.


// [ INTERMEDIATE EXAMPLE — seal ]

const john = {
  firstName: "John",
  lastName: "Doe"
};

Object.seal(john);

john.firstName = "James"; // ✔ Allowed
delete john.lastName;     //  Error

Object.defineProperty(john, "firstName", {
  enumerable: false
}); //  Error

console.log(Object.isSealed(john)); // true

// IDEA:
// → Properties exist forever, values may change.


// [ ADVANCED EXAMPLE — freeze ]

const john = {
  firstName: "John",
  lastName: "Doe"
};

Object.freeze(john);

john.firstName = "James"; //  Error
john.age = 44;            //  Error
delete john.lastName;     //  Error

console.log(Object.isExtensible(john)); // false
console.log(Object.isSealed(john));     // true
console.log(Object.isFrozen(john));     // true

// IDEA:
// → Object is fully immutable.


/*
5) COMPLETE SUMMARY
--------------------------------------------------------------------
LEVEL COMPARISON TABLE:

--------------------------------------------------------------------
Method               | Add | Delete | Change Value | Change Attributes
--------------------------------------------------------------------
preventExtensions()  | Yes | Yes    | Yes          | Yes
seal()               | No  | No     | Yes          | No
freeze()             | No  | No     | No           | No
--------------------------------------------------------------------

KEY FACTS:
• All frozen objects are sealed
• All sealed objects are non-extensible
• preventExtensions is the weakest protection
• freeze is the strongest protection

FINAL RULE:
→ Use preventExtensions to lock structure
→ Use seal to lock structure + configuration
→ Use freeze to make objects completely immutable
====================================================================
  */
