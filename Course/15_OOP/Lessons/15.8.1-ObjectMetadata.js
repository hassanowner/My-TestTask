/*
====================================================================
JavaScript – Object Metadata & Property Descriptors Explained
====================================================================

------------------------------------------------------------
** TOPICS OVERVIEW (What & Why) **
------------------------------------------------------------

• Object Property Descriptors
  - JavaScript allows full control over object properties.
  - Each property has metadata that defines how it behaves.
  - This metadata is called a "Property Descriptor".

• Why Property Descriptors Matter
  - Protect object properties from modification.
  - Control visibility during loops.
  - Prevent deletion or reconfiguration.
  - Increase safety and predictability in applications.

------------------------------------------------------------
1) PROPERTY DESCRIPTOR ATTRIBUTES
------------------------------------------------------------

• writable
  - Controls whether a property's value can be changed.
  - true  → value can be modified.
  - false → value cannot be modified.

• enumerable
  - Controls whether a property appears in loops.
  - true  → shows in for...in and Object.keys().
  - false → hidden from enumeration.

• configurable
  - Controls whether a property can be deleted or redefined.
  - true  → can delete or reconfigure.
  - false → cannot delete or reconfigure.

------------------------------------------------------------
2) SIMPLE EXAMPLE
------------------------------------------------------------ */

const product = {};

Object.defineProperty(product, "price", {
  value: 100,  // => price
  writable: false,
  enumerable: true,
  configurable: true,
});

/*
Result:
product.price => 100
product.price = 200 => ignored
Explanation:
- price cannot be changed.
*/

/*
------------------------------------------------------------
3) MEDIUM EXAMPLE – ENUMERATION CONTROL
------------------------------------------------------------*/

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
Result:
for...in loop shows only "name"
Explanation:
- secret is hidden from loops.
*/

/*
------------------------------------------------------------
4) ADVANCED EXAMPLE 
------------------------------------------------------------ */

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
- settings.maxUsers => 3
- settings.maxUsers = 100 => ignored (writable: false)
- delete settings.maxUsers => false (configurable: false)
- Redefining maxUsers throws an error
*/

/*
------------------------------------------------------------
5) LOOPING OVER PROPERTIES
------------------------------------------------------------ */

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
*/


/*
------------------------------------------------------------
6) LOOPING OVER PROPERTIES
------------------------------------------------------------ */

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
for (let key in settings) {
  console.log(key, settings[key]);
}

/*
Result:
theme "dark"
version 1
maxUsers 3

Explanation:
- maxUsers is enumerable, so it appears in loops.
** if (enumerable: false) , the result will be :
  theme "dark"
  version: 1 
 * (enumerable: false) so it doesn't appear in loops. **
  
*/

/*
------------------------------------------------------------
6) IMPORTANT WARNINGS
------------------------------------------------------------

• configurable: false is permanent.
• You cannot redefine or delete the property later.
• Attempting to do so throws an error in strict mode.
• Use Object.defineProperty carefully.

------------------------------------------------------------
FINAL SUMMARY
------------------------------------------------------------

• Property descriptors control property behavior.
• writable controls value modification.
• enumerable controls visibility in loops.
• configurable controls deletion and redefinition.
• These tools are essential for secure object design.

====================================================================
*/
