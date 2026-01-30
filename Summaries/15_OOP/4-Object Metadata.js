/*
================================================================================
JavaScript — Object Metadata, Property Descriptors & for-in Loop
Complete Reference
================================================================================

PURPOSE:
- Explain Object Property Descriptors and metadata
- Control object property behavior (writable, enumerable, configurable)
- Demonstrate looping with for-in
- Define multiple properties at once
- Inspect property descriptors for debugging and security

NOTE:
- This is ONE complete square file
- All explanations are inside comments
================================================================================
*/


/*
================================================================================
SECTION 1: OBJECT PROPERTY DESCRIPTORS — CORE IDEA
================================================================================

• Every object property in JavaScript has hidden metadata.
• This metadata defines how the property behaves.
• It is called a Property Descriptor.

WHY IT MATTERS:
- Prevent unwanted changes
- Hide properties from loops
- Lock object structure
- Build safer and predictable systems
*/


/*
------------------------------------------------------------
DESCRIPTOR ATTRIBUTES
------------------------------------------------------------

• writable
  - true  → value can be changed
  - false → value cannot be changed

• enumerable
  - true  → appears in loops (for-in, Object.keys)
  - false → hidden from enumeration

• configurable
  - true  → can delete or redefine
  - false → locked forever
*/


/*
================================================================================
SECTION 2: SIMPLE PROPERTY DESCRIPTOR
================================================================================
*/

const product = {};

Object.defineProperty(product, "price", {
  value: 100,
  writable: false,
  enumerable: true,
  configurable: true,
});

/*
Behavior:
product.price        => 100
product.price = 200  => ignored
*/


/*
================================================================================
SECTION 3: ENUMERATION CONTROL
================================================================================
*/

const user = {
  name: "Ali",
};

Object.defineProperty(user, "secret", {
  value: "12345",
  writable: false,
  enumerable: false,
  configurable: true,
});

/*
Behavior:
- for-in loop shows only "name"
- secret exists but is hidden
*/


/*
================================================================================
SECTION 4: ADVANCED LOCKED PROPERTY
================================================================================
*/

const settings = {
  theme: "dark",
  version: 1,
};

Object.defineProperty(settings, "maxUsers", {
  value: 3,
  writable: false,
  enumerable: true,
  configurable: false,
});

/*
Behavior:
settings.maxUsers = 10     => ignored
delete settings.maxUsers  => false
Redefining throws error in strict mode
*/


/*
================================================================================
SECTION 5: for-in LOOP & PROTOTYPE PROPERTIES
================================================================================
*/

let proto = { inherited: 42 };
let obj = Object.create(proto);

obj.a = 1;
obj.b = 2;

for (let key in obj) {
  console.log(`${key} => ${obj[key]}`);
}

/*
Result:
a => 1
b => 2
inherited => 42

Explanation:
- for-in iterates over enumerable own + inherited properties
*/


/*
================================================================================
SECTION 6: for-in LOOP — COMPLETE GUIDE
================================================================================

RULES:
• Iterates over enumerable property NAMES
• Keys are strings
• Bracket notation is required
• Includes methods if enumerable
*/

const car = {
  brand: "Toyota",
  year: 2022
};

for (let prop in car) {
  console.log(`${prop}: ${car[prop]}`);
}


/*
ADVANCED for-in WITH METHODS
*/

const book = {
  name: "JavaScript Guide",
  price: 59.95,
  author: "Philip Ackermann",
  printInfo: function () {
    console.log(`${this.author}: ${this.name}`);
  }
};

for (let key in book) {
  if (typeof book[key] === "function") {
    console.log(`Method: ${key}`);
  } else {
    console.log(`Property: ${key} => ${book[key]}`);
  }
}


/*
================================================================================
SECTION 7: DEFINING MULTIPLE PROPERTIES
================================================================================
*/

const config = {};

Object.defineProperties(config, {
  mode: {
    value: "dark",
    writable: true,
  },
  debug: {
    value: true,
    writable: false,
  },
});

/*
Result:
config.mode  => "dark"
config.debug => true
*/


/*
================================================================================
SECTION 8: CONTROLLED OBJECT (MULTIPLE DESCRIPTORS)
================================================================================
*/

const productInfo = {
  name: "Laptop",
};

Object.defineProperties(productInfo, {
  price: {
    value: 1500,
    writable: false,
    enumerable: true,
  },
  currency: {
    value: "USD",
    enumerable: true,
  },
});


/*
================================================================================
SECTION 9: CHECKING PROPERTY DESCRIPTORS
================================================================================
*/

const sample = { a: 1, b: 2 };

Object.defineProperties(sample, {
  c: { value: 3, configurable: true },
  d: { value: 4, configurable: true },
  e: { value: 5, configurable: true },
});

/*
Check single descriptor
*/
Object.getOwnPropertyDescriptor(sample, "d");

/*
Expected:
{
  value: 4,
  writable: false,
  enumerable: false,
  configurable: true
}
*/

/*
Check all descriptors
*/
Object.getOwnPropertyDescriptors(sample);


/*
================================================================================
IMPORTANT WARNINGS
================================================================================

• configurable: false is permanent
• defineProperty defaults:
  writable: false
  enumerable: false
  configurable: false
• for-in includes inherited properties
• Use Object.defineProperty carefully
*/


/*
================================================================================
FINAL SUMMARY
================================================================================

• Property descriptors control property behavior
• writable → change value
• enumerable → visibility in loops
• configurable → delete or redefine
• for-in iterates over enumerable keys
• defineProperties creates structured, secure objects
• Descriptor inspection is vital for advanced JavaScript

================================================================================
END OF FILE
================================================================================
*/
