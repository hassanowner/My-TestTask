/*
====================================================================
JavaScript – Object Metadata & Property Descriptors
Define Multiple Properties & Check Descriptors
====================================================================

------------------------------------------------------------
** TOPICS OVERVIEW (What & Why) **
------------------------------------------------------------

• Defining Multiple Properties
  - JavaScript allows defining many properties at once.
  - This is done using Object.defineProperties().
  - It improves readability and organization.
  - Useful when initializing objects with controlled behavior.

• Checking Property Descriptors
  - JavaScript provides methods to inspect property metadata.
  - Helps debug and understand how properties behave.
  - Useful for security and advanced object design.

------------------------------------------------------------
1) IMPORTANT METHODS
------------------------------------------------------------

• Object.defineProperties(object, descriptors)
  - Defines multiple properties in one call.
  - Each property can have its own descriptor.

• Object.getOwnPropertyDescriptor(object, propertyName)
  - Returns the descriptor of a single property.
  - Shows writable, enumerable, configurable, and value.

• Object.getOwnPropertyDescriptors(object)
  - Returns descriptors of all properties.
  - Useful for deep inspection or cloning.

------------------------------------------------------------
2) SIMPLE EXAMPLE
------------------------------------------------------------ */

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
config.mode => "dark"
config.debug => true
Explanation:
- Two properties defined at once.
*/

/*
------------------------------------------------------------
3) MEDIUM EXAMPLE – CONTROLLED OBJECT
------------------------------------------------------------ */

const product = {
  name: "Laptop",
};

Object.defineProperties(product, {
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
Result:
product.price => 1500
product.currency => "USD"

Explanation:
- price is read-only.
- currency is visible in loops.
*/

/*
------------------------------------------------------------
4) ADVANCED EXAMPLE – YOUR TOPIC (FORMAL VERSION)
------------------------------------------------------------ */

const settings = {
  a: 1,
  b: 2,
};

Object.defineProperties(settings, {
  c: {
    configurable: true,
    value: 3,
  },
  d: {
    configurable: true,
    value: 4,
  },
  e: {
    configurable: true,
    value: 5,
  },
});

/*
Result:
settings => { a: 1, b: 2, c: 3, d: 4, e: 5 }

Explanation:
- Multiple properties are defined in one step.
- All new properties are configurable.
*/

/*
------------------------------------------------------------
5) CHECKING A SINGLE PROPERTY DESCRIPTOR
------------------------------------------------------------ */

Object.getOwnPropertyDescriptor(settings, "d");

/*
Result:
{
  value: 4,
  writable: false,
  enumerable: false,
  configurable: true
}

Explanation:
- Shows default values when not explicitly defined.
*/

/*
------------------------------------------------------------
6) CHECKING ALL PROPERTY DESCRIPTORS
------------------------------------------------------------ */

Object.getOwnPropertyDescriptors(settings);

/*
Result:
- Returns an object containing descriptors for:
  a, b, c, d, e
- Useful for cloning objects with exact behavior.
*/

/*
------------------------------------------------------------
7) IMPORTANT NOTES
------------------------------------------------------------ 

• Properties default to:
  writable: false
  enumerable: false
  configurable: false
  (when using defineProperties)

• Always explicitly define what you need.
• Descriptor inspection helps debugging and security.

------------------------------------------------------------
FINAL SUMMARY
------------------------------------------------------------

• Object.defineProperties defines multiple properties at once.
• Descriptors control how properties behave.
• getOwnPropertyDescriptor inspects one property.
• getOwnPropertyDescriptors inspects all properties.
• Essential tools for advanced JavaScript object control.

====================================================================
*/
