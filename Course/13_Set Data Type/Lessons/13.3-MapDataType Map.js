/* =========================================================================
TOPIC: JavaScript — Map Data Type (Professional Usage)
============================================================================

CORE COMPARISON — MAP vs OBJECT
(Quick Visual Overview)

| Feature                | Object                          | Map                          |
|------------------------|---------------------------------|------------------------------|
| Default Keys           | Has built-in prototype keys     | No default keys              |
| Allowed Key Types      | String, Symbol only             | Any type (Any value)         |
| Key Type Safety        | Keys auto-converted to strings  | Keys preserved as-is         |
| Order Preservation     | Not guaranteed                  | Insertion order preserved    |
| Size Retrieval         | Manual count                    | Built-in size property       |
| Iteration              | Needs Object helpers            | Directly iterable            |
| Performance            | Slower for large dynamic data   | Optimized for add/remove     |
| Real-World Suitability | Simple static structures        | Complex & dynamic data       |

============================================================================
OVERVIEW
- Map is a JavaScript collection designed for key/value pairs
  with strict key identity and predictable behavior.
- Frequently used in:
  • Data caching systems
  • Application state management
  • Configuration registries
  • Backend-like data models
============================================================================
*/


/* =========================================================================
SECTION 1 — INITIALIZING DATA STRUCTURES
============================================================================
*/

const plainObject = {};
const safeObject = Object.create(null);
const dataMap = new Map();

console.log(plainObject);
console.log(safeObject);
console.log(dataMap);

// RESULT:
// {}
// {}
// Map(0) {}


/* =========================================================================
SECTION 2 — OBJECT KEY COLLISION PROBLEM
============================================================================
- Object keys are implicitly converted to strings
*/

const permissionsObject = {
  1: "Admin",
  "1": "User",
};

console.log(permissionsObject[1]);

// RESULT:
// "User"
// (Number & string keys collide)


/* =========================================================================
SECTION 3 — MAP PRESERVES KEY IDENTITY
============================================================================
*/

const permissionsMap = new Map();

permissionsMap.set(1, "Admin");
permissionsMap.set("1", "User");
permissionsMap.set(true, "Moderator");

console.log(permissionsMap.get(1));
console.log(permissionsMap.get("1"));
console.log(permissionsMap.get(true));

// RESULT:
// "Admin"
// "User"
// "Moderator"


/* =========================================================================
SECTION 4 — SIZE PROPERTY (MAP ADVANTAGE)
============================================================================
*/

console.log(`Total Permission Entries: ${permissionsMap.size}`);

// RESULT:
// Total Permission Entries: 3


/* =========================================================================
SECTION 5 — DIRECT ITERATION SUPPORT
============================================================================
*/

/*
  forEach in JavaScript always passes arguments as (value, identifier),
  With Array it is (value, index),
  and with Map it is (value, key).

  Even though Map stores data as (key → value),
  forEach passes the value first and the key second
  by design in JavaScript.

  ** this mean :
  in Map (permissionsMap) stores data as --> (key, value),
  forEach takes the arguments in this order by design in JavaScript --> (value, id or index or key),
  So when you use forEach with (a, b), the argument order is handled automatically by JavaScript to --> (a = value, b = key)
  */

permissionsMap.forEach((value, key) => {  //value =value in permissionsMap like "Admin", key =key in permissionsMap like 1
  console.log(`Key:`, key, `=> Role:`, value);
});

// RESULT:
// Key: 1     => Role: Admin
// Key: "1"   => Role: User
// Key: true  => Role: Moderator





/* -----------------------------------------------------------------------------
SECTION 6 — Strict Type Preservation
----------------------------------------------------------------------------- */

/*
In Maps:
- Keys keep their original data type
- No automatic conversion takes place
*/

const permissionsMap = new Map();

permissionsMap.set(1, "Numeric ID");
permissionsMap.set("1", "String ID");
permissionsMap.set(false, "Boolean Flag");

const metaDataKey = { section: "Reports" };
const handlerKey = function handler() {};

permissionsMap.set(metaDataKey, "Object Reference");
permissionsMap.set(handlerKey, "Function Reference");

console.log(permissionsMap.get(1));
console.log(permissionsMap.get("1"));
console.log(permissionsMap.get(false));
console.log(permissionsMap.get(metaDataKey));
console.log(permissionsMap.get(handlerKey));

/*
Expected Output:
"Numeric ID"
"String ID"
"Boolean Flag"
"Object Reference"
"Function Reference"
*/


/* =========================================================================
SECTION 7 — REAL-WORLD EXAMPLE (REQUEST CACHE)
============================================================================
*/

const requestCache = new Map();

const apiConfig = {
  endpoint: "/users",
  method: "GET",
};

requestCache.set(apiConfig, {
  status: 200,
  payload: ["User A", "User B"],
});

console.log(requestCache.get(apiConfig));

// RESULT:
// { status: 200, payload: ["User A", "User B"] }


/* =========================================================================
WHEN TO USE MAP VS OBJECT
============================================================================

USE OBJECT WHEN:
- Data structure is simple
- Keys are known and static
- Data needs JSON serialization

USE MAP WHEN:
- Keys are dynamic
- Non-string keys are required
- Performance matters
- Data size changes frequently
- You need predictable iteration order

============================================================================
*/
