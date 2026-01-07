/******************************************************************************************
 TOPICS COVERED (EXTENDED)

 1) Object Literals
 2) Object Properties
 3) Methods inside Objects
 4) this Keyword
 5) Property Descriptors (internal rules of properties)
 6) Object.getOwnPropertyDescriptor(obj, prop)   ← SINGLE PROPERTY
 7) Object.getOwnPropertyDescriptors(obj)         ← ALL PROPERTIES (MAIN FOCUS)
 8) Descriptor attributes:
    - value
    - writable
    - enumerable
    - configurable

******************************************************************************************
 BASIC IDEA

 In JavaScript, every object property has HIDDEN METADATA called a "Property Descriptor".
 These descriptors define HOW the property behaves, not just what value it holds.

 There are TWO ways to read descriptors:
 1) get descriptor of ONE property
 2) get descriptors of ALL properties

******************************************************************************************
 OBJECT DEFINITION
******************************************************************************************/

const item = {
  name: "JavaScript: The Comprehensive Guide",
  price: 59.95,
  author: "Philip Ackermann",
  isbn: "978-1-4932-2286-5",

  // method (function inside an object)
  printDescription: function () {
    console.log(this.author + ": " + this.name);
  }
};

/******************************************************************************************
 Object.getOwnPropertyDescriptor(obj, prop)
 SINGLE PROPERTY EXPLANATION
******************************************************************************************/

/*
 SYNTAX:
 Object.getOwnPropertyDescriptor(object, propertyName)

 - object       → the target object
 - propertyName → the specific property (string)

 RETURNS:
 - a descriptor object for ONLY that property
*/

const nameDescriptor = Object.getOwnPropertyDescriptor(item, "name");

/******************************************************************************************
 HOW TO ACCESS & PRINT THE DESCRIPTOR
******************************************************************************************/

console.log(nameDescriptor);

/*
 RESULT:
 {
   value: "JavaScript: The Comprehensive Guide",
   writable: true,
   enumerable: true,
   configurable: true
 }
*/

console.log(nameDescriptor.value);        // "JavaScript: The Comprehensive Guide"
console.log(nameDescriptor.writable);     // true
console.log(nameDescriptor.enumerable);   // true
console.log(nameDescriptor.configurable); // true

/******************************************************************************************
 BASIC RULE FOR getOwnPropertyDescriptor
******************************************************************************************/

/*
 - Works on ONE property only
 - Property name MUST exist on the object
 - Returns undefined if the property does not exist
*/

console.log(
  Object.getOwnPropertyDescriptor(item, "notExist")
); // undefined

/******************************************************************************************
 Object.getOwnPropertyDescriptors(obj)
 ALL PROPERTIES EXPLANATION
******************************************************************************************/

/*
 SYNTAX:
 Object.getOwnPropertyDescriptors(object)

 RETURNS:
 - an object containing DESCRIPTORS of ALL OWN properties
*/

const allDescriptors = Object.getOwnPropertyDescriptors(item);

/******************************************************************************************
 HOW TO ACCESS A SINGLE PROPERTY FROM getOwnPropertyDescriptors
******************************************************************************************/

console.log(allDescriptors.name.value);        // "JavaScript: The Comprehensive Guide"
console.log(allDescriptors.price.writable);    // true
console.log(allDescriptors.printDescription.enumerable); // true



/******************************************************************************************
- For Example:
******************************************************************************************/

const item = {
  name: "JavaScript: The Comprehensive Guide",
  price: 59.95,
  author: "Philip Ackermann",
  isbn: "978-1-4932-2286-5",

  // method (function inside an object)
  printDescription: function () {
    console.log(this.author + ": " + this.name);
  }
};

/******************************************************************************************
 Object.getOwnPropertyDescriptors EXPLANATION
******************************************************************************************/

/*
 Object.getOwnPropertyDescriptors(item)

 - Reads ALL OWN properties of the object
 - Returns an object
 - Each key = property name
 - Each value = descriptor object of that property

 This is different from:
 Object.getOwnPropertyDescriptor(obj, prop)

 Which returns the descriptor of ONLY ONE property
*/

const descriptors = Object.getOwnPropertyDescriptors(item);

/******************************************************************************************
 DESCRIPTORS STRUCTURE (WHAT IT RETURNS)
******************************************************************************************/

/*
 descriptors = {
   name: {
     value: "...",
     writable: true,
     enumerable: true,
     configurable: true
   },
   price: {
     value: 59.95,
     writable: true,
     enumerable: true,
     configurable: true
   },
   author: { ... },
   isbn: { ... },
   printDescription: {
     value: function,
     writable: true,
     enumerable: true,
     configurable: true
   }
 }
*/

/******************************************************************************************
 BASIC RULE EXAMPLE
******************************************************************************************/

const user = { username: "Hassan" };

const allUserDescriptors = Object.getOwnPropertyDescriptors(user);

console.log(allUserDescriptors.username.value);        // "Hassan"
console.log(allUserDescriptors.username.writable);     // true
console.log(allUserDescriptors.username.enumerable);   // true
console.log(allUserDescriptors.username.configurable); // true

/******************************************************************************************
 SIMPLE EXAMPLE
******************************************************************************************/

const book = { title: "JS Basics" };

console.log(Object.getOwnPropertyDescriptors(book));

/*
 RESULT:
 {
   title: {
     value: "JS Basics",
     writable: true,
     enumerable: true,
     configurable: true
   }
 }
*/

/******************************************************************************************
 INTERMEDIATE EXAMPLE (READ-ONLY PROPERTY)
******************************************************************************************/

const car = {};

Object.defineProperty(car, "brand", {
  value: "Toyota",
  writable: false,
  enumerable: true,
  configurable: true
});

const carDescriptors = Object.getOwnPropertyDescriptors(car);

car.brand = "BMW";

console.log(car.brand);                     // "Toyota"
console.log(carDescriptors.brand.writable); // false

/******************************************************************************************
 ADVANCED EXAMPLE (HIDDEN + LOCKED PROPERTY)
******************************************************************************************/

const account = {};

Object.defineProperty(account, "balance", {
  value: 1000,
  writable: false,
  enumerable: false,
  configurable: false
});

const accountDescriptors = Object.getOwnPropertyDescriptors(account);

console.log(account.balance);                       // 1000
console.log(Object.keys(account));                  // []
console.log(accountDescriptors.balance.enumerable); // false
console.log(accountDescriptors.balance.configurable); // false



/******************************************************************************************
 DIRECT COMPARISON (IN CODE)
******************************************************************************************/

/*
 ┌───────────────────────────────────────────────────────────────┐
 │ Object.getOwnPropertyDescriptor(obj, "name")                  │
 │---------------------------------------------------------------│
 │ → ONE property descriptor                                     │
 │ → returns descriptor object                                   │
 │ → simpler & direct                                            │
 │ → used when you know the exact property                        │
 │                                                               │
 │ Object.getOwnPropertyDescriptors(obj)                          │
 │---------------------------------------------------------------│
 │ → ALL property descriptors                                    │
 │ → returns object of descriptor objects                         │
 │ → must access property manually (descriptors.name, etc.)      │
 │ → used for cloning, frameworks, deep inspection                │
 └───────────────────────────────────────────────────────────────┘
*/

/******************************************************************************************
 PRACTICAL DIFFERENCE EXAMPLE
******************************************************************************************/

// SINGLE PROPERTY CHECK
const priceDescriptor = Object.getOwnPropertyDescriptor(item, "price");
console.log(priceDescriptor.writable); // true

// ALL PROPERTIES CHECK
const itemDescriptors = Object.getOwnPropertyDescriptors(item);
console.log(itemDescriptors.price.writable); // true

/******************************************************************************************
 WHEN TO USE EACH ONE
******************************************************************************************/

/*
 Use getOwnPropertyDescriptor() when:
 - You need info about ONE property
 - You want simple, readable code
 - You are validating or protecting a single field

 Use getOwnPropertyDescriptors() when:
 - You need to clone an object with full metadata
 - You are building libraries or frameworks
 - You need full object introspection
*/

/******************************************************************************************
 FINAL SUMMARY (EXTENDED)

 - Every property has hidden descriptor rules
 - getOwnPropertyDescriptor(obj, prop):
     → reads ONE property descriptor
 - getOwnPropertyDescriptors(obj):
     → reads ALL property descriptors
 - Both return descriptor objects
 - Descriptors control:
     • mutability
     • visibility
     • configurability
 - These APIs are CORE for advanced JavaScript design

******************************************************************************************/
