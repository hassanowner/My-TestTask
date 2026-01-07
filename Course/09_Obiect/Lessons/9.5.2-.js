/******************************************************************************************
 TOPICS COVERED 

 1) Object Literals
 2) Object Properties
 3) Methods inside Objects
 4) this Keyword
 5) Property Descriptors (internal rules of properties)
 6) Object.getOwnPropertyDescriptor()
 7) Object.getOwnPropertyDescriptors()  ← MAIN FOCUS
 8) Descriptor attributes:
    - value
    - writable
    - enumerable
    - configurable

******************************************************************************************
 BASIC IDEA

 In JavaScript, every object property has HIDDEN METADATA called a "Property Descriptor".
 These descriptors define HOW the property behaves, not just what value it holds.

 Object.getOwnPropertyDescriptors(obj)
 → returns ALL property descriptors of an object at once.

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
 FINAL SUMMARY (IN CODE FORM)

 - Every property has a descriptor
 - Descriptors control behavior, not just value
 - Object.getOwnPropertyDescriptor()  → ONE property
 - Object.getOwnPropertyDescriptors() → ALL properties
 - Descriptors are essential for:
   • immutability
   • security
   • framework-level control
   • advanced JavaScript architecture

******************************************************************************************/
